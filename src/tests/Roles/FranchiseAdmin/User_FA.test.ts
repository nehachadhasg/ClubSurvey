import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { UserPage } from '../../../pages/UserPage';
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

test.describe('FRANCHISEADMIN - Users Permissions Tests', () => {
  let userPage: UserPage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Franchise Admin credentials and permissions before all tests
  test.beforeAll(async () => {
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
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
  });

  // // Initialize page objects and login before each test
  // test.beforeEach(async ({ page, context }) => {
  //   clubSurveyLogin = new ClubSurveyLogin(page, context);
  //   userPage = new UserPage(page, context);

  //   await clubSurveyLogin.ClubSurveyLogin({
  //     username: franchiseAdminCredentials.username,
  //     password: franchiseAdminCredentials.password,
  //   });
  // });

  // Test: Validate View Permission
  test('@franchiseadmin - Validate Users Permission', async () => {
    if (rolePermissions.users.view === 'allExceptSuperAdmin') {
      console.log('Franchise Admin has permission to view all users except Super Admin.');
      await userPage.navigateToUsersPage();
    //   const isUserTableVisible = await userPage.isElementVisible(userPage.selectors.userTable);
    //   expect(isUserTableVisible).toBeTruthy();
    } else {
      throw new Error('Franchise Admin does not have permission to view users.');
    }
  });

  // Test: Validate Create Permission
//   test('@franchiseadmin - Validate Create Permission', async () => {
//     if (rolePermissions.users.create === 'allExceptSuperAdminAndFranchiseAdmin') {
//       console.log('Franchise Admin has permission to create users except Super Admin and Franchise Admin.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.createUser('newuser@example.com', 'Password123', 'VenueAdmin');
//     } else {
//       throw new Error('Franchise Admin does not have permission to create users.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@franchiseadmin - Validate Edit Permission', async () => {
//     if (rolePermissions.users.edit === 'allExceptSuperAdminAndFranchiseAdmin') {
//       console.log('Franchise Admin has permission to edit users except Super Admin and Franchise Admin.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.editUser('existinguser@example.com', 'UpdatedRole');
//     } else {
//       throw new Error('Franchise Admin does not have permission to edit users.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@franchiseadmin - Validate Delete Permission', async () => {
//     if (rolePermissions.users.delete === 'allExceptSuperAdminAndFranchiseAdmin') {
//       console.log('Franchise Admin has permission to delete users except Super Admin and Franchise Admin.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.deleteUser('userToDelete@example.com');
//     } else {
//       throw new Error('Franchise Admin does not have permission to delete users.');
//     }
//   });
});