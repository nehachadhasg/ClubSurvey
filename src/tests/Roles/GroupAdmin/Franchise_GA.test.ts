import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { FranchisePage } from '../../../pages/FranchisePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let groupAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('GROUPADMIN - Franchises Permissions Tests', () => {
  let franchisePage: FranchisePage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Group Admin credentials and permissions before all tests
  test.beforeAll(async () => {

    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    const groupAdminUser = Object.values(users).find((user: any) => user.role_id === 4);

    if (!groupAdminUser || !groupAdminUser.username || !groupAdminUser.password) {
      throw new Error('Group Admin credentials are missing in users.json.');
    }

    groupAdminCredentials = { username: groupAdminUser.username, password: groupAdminUser.password };
    rolePermissions = ROLE_CONFIG['GROUPADMIN'];
    if (!rolePermissions) {
      throw new Error('Group Admin permissions are missing in roleConfig.ts.');
    }
  });

  // Initialize page objects and login before each test
  test.beforeEach(async ({ page, context }) => {
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    franchisePage = new FranchisePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: groupAdminCredentials.username,
      password: groupAdminCredentials.password,
    });
  });

  // Test: Validate View Permission
  test('@groupadmin - Validate Franchise Permission', async () => {
    if (!rolePermissions.franchises.view) {
      console.log('Group Admin does NOT have permission to view franchises.');
      expect(rolePermissions.franchises.view).toBeFalsy();
    } else {
      throw new Error('Unexpected permission to view franchises.');
    }
  });

  // Test: Validate Create Permission
//   test('@groupadmin - Validate Create Permission', async () => {
//     if (!rolePermissions.franchises.create) {
//       console.log('Group Admin does NOT have permission to create franchises.');
//       expect(rolePermissions.franchises.create).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to create franchises.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@groupadmin - Validate Edit Permission', async () => {
//     if (!rolePermissions.franchises.edit) {
//       console.log('Group Admin does NOT have permission to edit franchises.');
//       expect(rolePermissions.franchises.edit).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to edit franchises.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@groupadmin - Validate Delete Permission', async () => {
//     if (!rolePermissions.franchises.delete) {
//       console.log('Group Admin does NOT have permission to delete franchises.');
//       expect(rolePermissions.franchises.delete).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to delete franchises.');
//     }
//   });
});