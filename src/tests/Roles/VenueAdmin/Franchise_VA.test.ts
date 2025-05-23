import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { FranchisePage } from '../../../pages/FranchisePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let venueAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('VENUEADMIN - Franchises Permissions Tests', () => {
  let franchisePage: FranchisePage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Venue Admin credentials and permissions before all tests
  test.beforeAll(async () => {

    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    const venueAdminUser = Object.values(users).find((user: any) => user.role_id === 4);

    if (!venueAdminUser || !venueAdminUser.username || !venueAdminUser.password) {
      throw new Error('Venue Admin credentials are missing in users.json.');
    }

    venueAdminCredentials = { username: venueAdminUser.username, password: venueAdminUser.password };
    rolePermissions = ROLE_CONFIG['VENUEADMIN'];
    if (!rolePermissions) {
      throw new Error('Venue Admin permissions are missing in roleConfig.ts.');
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    // franchisePage = new FranchisePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: venueAdminCredentials.username,
      password: venueAdminCredentials.password,
    });
  });

  // Initialize page objects and login before each test
  // test.beforeEach(async ({ page, context }) => {
  //   clubSurveyLogin = new ClubSurveyLogin(page, context);
  //   // franchisePage = new FranchisePage(page, context);

  //   await clubSurveyLogin.ClubSurveyLogin({
  //     username: venueAdminCredentials.username,
  //     password: venueAdminCredentials.password,
  //   });
  // });

  // Test: Validate View Permission
  test('@venueadmin - Validate View Permission', async () => {
    if (!rolePermissions.franchises.view) {
      console.log('Venue Admin does NOT have permission to view franchises.');
      expect(rolePermissions.franchises.view).toBeFalsy();
    } else {
      throw new Error('Unexpected permission to view franchises.');
    }
  });

  // Test: Validate Create Permission
//   test('@venueadmin - Validate Create Permission', async () => {
//     if (!rolePermissions.franchises.create) {
//       console.log('Venue Admin does NOT have permission to create franchises.');
//       expect(rolePermissions.franchises.create).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to create franchises.');
//     }
//   });

  // Test: Validate Edit Permission
//   test('@venueadmin - Validate Edit Permission', async () => {
//     if (!rolePermissions.franchises.edit) {
//       console.log('Venue Admin does NOT have permission to edit franchises.');
//       expect(rolePermissions.franchises.edit).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to edit franchises.');
//     }
//   });

  // Test: Validate Delete Permission
//   test('@venueadmin - Validate Delete Permission', async () => {
//     if (!rolePermissions.franchises.delete) {
//       console.log('Venue Admin does NOT have permission to delete franchises.');
//       expect(rolePermissions.franchises.delete).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to delete franchises.');
//     }
//   });
});