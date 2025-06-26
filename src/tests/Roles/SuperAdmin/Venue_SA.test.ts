import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';
import { VenuePage } from '../../../pages/VenuePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Venue Permissions Tests', () => {
  let venuePage: VenuePage;
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
    venuePage = new VenuePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
    await venuePage.navigateToVenuePage();
    const cards = venuePage.page.locator(venuePage.selectors.settingsCards);
    await cards.nth(5).click();
    await venuePage.page.waitForTimeout(1000);
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@superadmin - Verify Super Admin can add,edit,delete venues.', async () => {
    const venuesPermissions = rolePermissions.venues;
    if (
      venuesPermissions.create &&
      venuesPermissions.edit &&
      venuesPermissions.delete
    ) {
      const venueName = faker.company.name().slice(0, 10);
      const newVenueName = faker.company.name().slice(0, 10);
      const attributeName = faker.company.name().slice(0, 5);
      const newAttributeName = faker.company.name().slice(0, 5);
      await venuePage.createVenue({
        venueName,
        franchiseOption: '59Club Asia',
        groupOption: 'Premium Golf',
      });
      await venuePage.page.waitForTimeout(2000);
      await venuePage.editVenue({ venueName, newVenueName });
      await venuePage.page.waitForTimeout(2000);
      await venuePage.deleteVenue({ newVenueName });
      await venuePage.page.waitForTimeout(2000);
      await venuePage.page.keyboard.press('Escape');
      await venuePage.page.waitForTimeout(1000);
      await venuePage.createAttribute({ attributeName });
      await venuePage.page.waitForTimeout(2000);
   /*   await venuePage.editAttribute({ attributeName, newAttributeName });
      await venuePage.page.waitForTimeout(2000);
      await venuePage.deleteAttribute({ newAttributeName });
      await venuePage.page.waitForTimeout(2000);
      await expect(
        venuePage.page.getByText('The attribute has been deleted successfully.')
      ).toBeVisible();*/
    } else {
      throw new Error(
        'SUPERADMIN does not have permission to create, edit, or delete venues.'
      );
    }
  });
});
