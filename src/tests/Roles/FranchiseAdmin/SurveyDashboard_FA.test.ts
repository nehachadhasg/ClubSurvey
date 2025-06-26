import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { FranchisePage } from '../../../pages/FranchisePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let franchisePage: FranchisePage;
let clubSurveyLogin: ClubSurveyLogin;
let rolePermissions: any;
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;

test.describe('FRANCHISEADMIN - Land on Survey Dashboard tests', () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    // Load users data
    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    // Get Franchise Admin credentials
    const franchiseAdminUser = Object.values(users).find(
      (user: any) => user.role_id === 2
    );

    if (!franchiseAdminUser?.username || !franchiseAdminUser?.password) {
      throw new Error('Franchise Admin credentials are missing in users.json.');
    }

    franchiseAdminCredentials = {
      username: franchiseAdminUser.username,
      password: franchiseAdminUser.password,
    };

    // Get Franchise Admin permissions
    rolePermissions = ROLE_CONFIG['FRANCHISEADMIN'];
    if (!rolePermissions) {
      throw new Error('Franchise Admin permissions are missing in roleConfig.ts.');
    }

    // Initialize page objects
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    franchisePage = new FranchisePage(page, context);

    // Login as Franchise Admin
    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@franchiseadmin - Verify franchise admin is redirected to the Survey Dashboard upon login.', async () => {
    const groupDropdown = franchisePage.page.locator(franchisePage.selectors.groupDropdown);
    const venueDropdown = franchisePage.page.locator(franchisePage.selectors.venueDropdown);
    const franchise = 'Paradigms';
    const franchiseHeading = franchisePage.page.getByRole('heading', { name: franchise });

    await expect(groupDropdown).toBeVisible();
    await expect(venueDropdown).toBeVisible();
    await expect(franchiseHeading).toBeVisible();
    // If you want to check the dropdown text, uncomment below:
    // const franchiseDropdown = franchisePage.page.locator(franchisePage.selectors.franchiseDropdown);
    // await expect(franchiseDropdown).toHaveText(franchise);
  });
});