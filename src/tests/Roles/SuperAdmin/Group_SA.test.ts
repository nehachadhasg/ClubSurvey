import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';
import { GroupPage } from 'pages/GroupPage';
import { UserPage } from 'pages/UserPage';

let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Groups Permissions Tests', () => {
  let groupPage: GroupPage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load SUPERADMIN credentials and permissions before all tests
  test.beforeAll(async () => {
    // Manually create a browser instance
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    // Load users.json
   // const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
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

    // Initialize page objects
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    groupPage = new GroupPage(page, context);

    // Perform login
    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
    await UserPage.navigateToUsersPage();
  });

  // Close the browser after all tests
  test.afterAll(async () => {
    await browser.close();
  });

  // Close the browser after all tests
  test.afterAll(async () => {
    await browser.close();
  });

  // Test: Validate Groups Permissions
  test('@superadmin - Validate Groups Permissions', async () => {
    const groupsPermissions = rolePermissions.groups;

    if (groupsPermissions.view) {
      console.log('SUPERADMIN has permission to view groups.');
      // Call logic to navigate to groups page and validate view functionality
    }

    if (groupsPermissions.create) {
      console.log('SUPERADMIN has permission to create groups.');
      // Call logic to create a group
    }

    if (groupsPermissions.edit) {
      console.log('SUPERADMIN has permission to edit groups.');
      // Call logic to edit a group
    }

    if (groupsPermissions.delete) {
      console.log('SUPERADMIN has permission to delete groups.');
      // Call logic to delete a group
    }
  });
});
