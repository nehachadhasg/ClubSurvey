import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
  expect,
} from '@playwright/test';
import { UserPage } from '../../../pages/UserPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let venueAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('VENUEADMIN - Users Permissions Tests', () => {
  let userPage: UserPage;
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

    const venueAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 5
    );

    if (
      !venueAdminUser ||
      !venueAdminUser.username ||
      !venueAdminUser.password
    ) {
      throw new Error('Venue Admin credentials are missing in users.json.');
    }

    venueAdminCredentials = {
      username: venueAdminUser.username,
      password: venueAdminUser.password,
    };
    rolePermissions = ROLE_CONFIG['VENUEADMIN'];
    if (!rolePermissions) {
      throw new Error('Venue Admin permissions are missing in roleConfig.ts.');
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: venueAdminCredentials.username,
      password: venueAdminCredentials.password,
    });
  });

  test('@venueadmin - Verify Venue Manager has access to the Users tab in the Settings section.', async () => {
    if (rolePermissions.settings.view.includes('Users')) {
      await userPage.navigateToUsersPage();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      await userPage.page.waitForTimeout(2000);
      const usersTab = userPage.page.getByText('Users').nth(0);
      await expect(usersTab).toBeVisible();
    } else {
      throw new Error(
        'VENUEADMIN does not have permission to view the Users tab in the Settings section.'
      );
    }
  });
});
