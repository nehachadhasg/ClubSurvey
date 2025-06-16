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

test.describe('FRANCHISEADMIN - Land on Survey Dashboard tests', () => {
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
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@franchiseadmin - Verify franchise admin is redirected to the Survey Dashboard upon login.', async () => {
    const groupDropdown = franchisePage.page.locator(
      franchisePage.selectors.groupDropdown
    );
    const venueDropdown = franchisePage.page.locator(
      franchisePage.selectors.venueDropdown
    );
    const franchise = 'Models';
    const franchiseDropdown = franchisePage.page.locator(
      franchisePage.selectors.franchiseDropdown
    );
    const franchiseHeading = franchisePage.page.getByRole('heading', {
      name: franchise,
    });
    await expect(groupDropdown).toBeVisible();
    await expect(venueDropdown).toBeVisible();
    await expect(franchiseDropdown).toHaveText(franchise);
    await expect(franchiseHeading).toBeVisible();
  });
});
