import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';
import { FranchisePage } from 'pages/FranchisePage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Franchises Permissions Tests', () => {
  let franchisePage: FranchisePage;
  let clubSurveyLogin: ClubSurveyLogin;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    const usersFilePath = path.resolve(
      __dirname,
      '../../../../data/users.json'
    );
    users = JsonReader.readJson(usersFilePath) as UserData;
    if (!users || Object.keys(users).length === 0) {
      throw new Error(
        'users.json is empty or invalid. Please run the data generation script.'
      );
    }
    const superAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 1
    );
    if (
      !superAdminUser ||
      !superAdminUser.username ||
      !superAdminUser.password
    ) {
      throw new Error('SUPERADMIN credentials are missing in users.json.');
    }
    superAdminCredentials = {
      username: superAdminUser.username,
      password: superAdminUser.password,
    };
    rolePermissions = ROLE_CONFIG['SUPERADMIN'];
    if (!rolePermissions) {
      throw new Error('SUPERADMIN permissions are missing in roleConfig.ts.');
    }
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    franchisePage = new FranchisePage(page, context);
    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
    await franchisePage.navigateToFranchise();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@superadmin - Verify Super Admin can manage franchises.', async () => {
    const franchisesPermissions = rolePermissions.franchises;
    if (
      franchisesPermissions.create &&
      franchisesPermissions.edit &&
      franchisesPermissions.delete
    ) {
      const cards = franchisePage.page.locator(
        franchisePage.selectors.settingsCards
      );
      await cards.nth(3).click();
      await franchisePage.page.waitForTimeout(2000);
      const franchiseName = faker.company.name().slice(0, 10);
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email();
      await franchisePage.createFranchise({
        franchiseName,
        firstName,
        lastName,
        email,
      });
      await franchisePage.page.waitForTimeout(2000);
      await franchisePage.editFranchise({ franchiseName });
      await franchisePage.page.waitForTimeout(2000);
      await franchisePage.deleteFranchise({ franchiseName });
      // await franchisePage.page.waitForTimeout(2000);
      // await expect(
      //   franchisePage.page.getByText('The franchise was deleted successfully.')
      // ).toBeVisible();
    } else {
      throw new Error(
        'SUPERADMIN does not have permission to create, edit, or delete franchises.'
      );
    }
  });
});
