import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { VenuePage } from '../../../pages/VenuePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Users Permissions Tests', () => {
  let venuePage: VenuePage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load SUPERADMIN credentials and permissions before all tests
  test.beforeAll(async () => {
    
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

        const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
        users = JsonReader.readJson(usersFilePath) as UserData;
    
    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    const superAdminUser = Object.values(users).find((user: any) => user.role_id === 1);

    if (!superAdminUser || !superAdminUser.username || !superAdminUser.password) {
      throw new Error('SUPERADMIN credentials are missing in users.json.');
    }

    superAdminCredentials = { username: superAdminUser.username, password: superAdminUser.password };
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

  });

  // Initialize page objects and login before each test
  // test.beforeEach(async ({ page, context }) => {
  //   clubSurveyLogin = new ClubSurveyLogin(page, context);
  //   userPage = new UserPage(page, context);

  //   await clubSurveyLogin.ClubSurveyLogin({
  //     username: superAdminCredentials.username,
  //     password: superAdminCredentials.password,
  //   });
  // });

  // Test: Validate View Permission
  test('@superadmin - Validate Venue Permission', async () => {
    if (rolePermissions.users.view === 'all') {
      await venuePage.navigateToVenuePage();
    //   const isUserTableVisible = await userPage.isElementVisible(userPage.selectors.userTable);
    //   expect(isUserTableVisible).toBeTruthy();
    } else {
      throw new Error('SUPERADMIN does not have permission to view users.');
    }
  });

  // Test: Validate Create Permission
//   test('@superadmin - Validate Create Permission', async () => {
//     if (rolePermissions.users.create !== 'allExceptSuperAdmin') {
//       await userPage.navigateToUsersPage();
//     //   await userPage.createUser('newuser@example.com', 'Password123', 'VenueAdmin');
//     } else {
//       throw new Error('SUPERADMIN does not have permission to create users.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@superadmin - Validate Edit Permission', async () => {
//     if (rolePermissions.users.edit !== 'allExceptSuperAdmin') {
//       await userPage.navigateToUsersPage();
//     //   await userPage.editUser('newuser@example.com', 'GroupAdmin');
//     } else {
//       throw new Error('SUPERADMIN does not have permission to edit users.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@superadmin - Validate Delete Permission', async () => {
//     if (rolePermissions.users.delete !== 'allExceptSuperAdmin') {
//       await userPage.navigateToUsersPage();
//     //   await userPage.deleteUser('newuser@example.com');
//     } else {
//       throw new Error('SUPERADMIN does not have permission to delete users.');
//     }
//   });
});