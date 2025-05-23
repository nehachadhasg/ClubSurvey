import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { FranchisePage } from '../../../pages/FranchisePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;


test.describe('FRANCHISEADMIN - Franchises Permissions Tests', () => {
  let franchisePage: FranchisePage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Franchise Admin credentials and permissions before all tests
  test.beforeAll(async () => {
    // Manually create a browser instance
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    const franchiseAdminUser = Object.values(users).find((user: any) => user.role_id === 2);

    if (!franchiseAdminUser || !franchiseAdminUser.username || !franchiseAdminUser.password) {
      throw new Error('Franchise Admin credentials are missing in users.json.');
    }

    franchiseAdminCredentials = { username: franchiseAdminUser.username, password: franchiseAdminUser.password };
    rolePermissions = ROLE_CONFIG['FRANCHISEADMIN'];
    if (!rolePermissions) {
      throw new Error('Franchise Admin permissions are missing in roleConfig.ts.');
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    franchisePage = new FranchisePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
  });
});

  // // Initialize page objects and login before each test
  // test.beforeEach(async ({ page, context }) => {
  //   clubSurveyLogin = new ClubSurveyLogin(page, context);
  //   franchisePage = new FranchisePage(page, context);

  //   await clubSurveyLogin.ClubSurveyLogin({
  //     username: franchiseAdminCredentials.username,
  //     password: franchiseAdminCredentials.password,
  //   });
  // });

  // Test: Validate View Permission
  test('@franchiseadmin - Validate Franchise Permission', async () => {
    if (!rolePermissions.franchises.view) {
      console.log('Franchise Admin does NOT have permission to view franchises.');
      expect(rolePermissions.franchises.view).toBeFalsy();
    } else {
      throw new Error('Unexpected permission to view franchises.');
    }
  });

  // Test: Validate Create Permission
//   test('@franchiseadmin - Validate Create Permission', async () => {
//     if (!rolePermissions.franchises.create) {
//       console.log('Franchise Admin does NOT have permission to create franchises.');
//       expect(rolePermissions.franchises.create).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to create franchises.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@franchiseadmin - Validate Edit Permission', async () => {
//     if (!rolePermissions.franchises.edit) {
//       console.log('Franchise Admin does NOT have permission to edit franchises.');
//       expect(rolePermissions.franchises.edit).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to edit franchises.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@franchiseadmin - Validate Delete Permission', async () => {
//     if (!rolePermissions.franchises.delete) {
//       console.log('Franchise Admin does NOT have permission to delete franchises.');
//       expect(rolePermissions.franchises.delete).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to delete franchises.');
//     }
//   });
});