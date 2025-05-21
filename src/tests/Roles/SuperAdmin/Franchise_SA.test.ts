import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';
import { FranchisePage } from 'pages/FranchisePage';

let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Groups Permissions Tests', () => {
  let franchisePage: FranchisePage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load SUPERADMIN credentials and permissions before all tests
  test.beforeAll(async () => {
    // Manually create a browser instance
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    // Load users.json
    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    // Extract SUPERADMIN credentials
    const superAdminUser = Object.values(users).find((user: any) => user.role_id === 1);

    if (!superAdminUser || !superAdminUser.username || !superAdminUser.password) {
      throw new Error('SUPERADMIN credentials are missing in users.json.');
    }

    superAdminCredentials = { username: superAdminUser.username, password: superAdminUser.password };

    // Load SUPERADMIN role permissions
    rolePermissions = ROLE_CONFIG['SUPERADMIN'];
    if (!rolePermissions) {
      throw new Error('SUPERADMIN permissions are missing in roleConfig.ts.');
    }

    // Initialize page objects
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    franchisePage = new FranchisePage(page, context);

    // Perform login
    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
  });

  // Close the browser after all tests
  test.afterAll(async () => {
    await browser.close();
  });

  // Test: Validate Franchises Permissions
  test('@superadmin - Validate Franchises Permissions', async () => {
    const franchisesPermissions = rolePermissions.franchises;

    if (franchisesPermissions.view) {
      console.log('SUPERADMIN has permission to view franchises.');
      // Add logic to navigate to franchises page and validate view functionality
    }

    // if (franchisesPermissions.create) {
    //   console.log('SUPERADMIN has permission to create franchises.');
    //   // Add logic to create a franchise
    // }

    // if (franchisesPermissions.edit) {
    //   console.log('SUPERADMIN has permission to edit franchises.');
    //   // Add logic to edit a franchise
    // }

    // if (franchisesPermissions.delete) {
    //   console.log('SUPERADMIN has permission to delete franchises.');
    //   // Add logic to delete a franchise
    // }
  });

});