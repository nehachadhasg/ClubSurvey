import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import { FranchisePage } from '../../../pages/FranchisePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('FRANCHISEADMIN - Franchises Permissions Tests', () => {
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

    const franchiseAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 2
    );

    if (
      !franchiseAdminUser ||
      !franchiseAdminUser.username ||
      !franchiseAdminUser.password
    ) {
      throw new Error('Franchise Admin credentials are missing in users.json.');
    }

    franchiseAdminCredentials = {
      username: franchiseAdminUser.username,
      password: franchiseAdminUser.password,
    };
    rolePermissions = ROLE_CONFIG['FRANCHISEADMIN'];
    if (!rolePermissions) {
      throw new Error(
        'Franchise Admin permissions are missing in roleConfig.ts.'
      );
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    franchisePage = new FranchisePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
    await franchisePage.navigateToFranchise();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@franchiseadmin - Verify Franchise Admin can access all Settings tabs except "Franchises".', async () => {
    const franchisesPermissions = rolePermissions.settings;
    if (franchisesPermissions.view === 'allExceptFranchises') {
      const cards = franchisePage.page.locator(
        franchisePage.selectors.settingsCards
      );
      await expect(cards).toHaveCount(5);
      await expect(franchisePage.page.getByText('Users')).toBeVisible();
      await expect(
        franchisePage.page.getByText('Franchises')
      ).not.toBeVisible();
    } else {
      throw new Error(
        'FRANCHISEADMIN has permission to view "Franchises" in Settings.'
      );
    }
  });
});
