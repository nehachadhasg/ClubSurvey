import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { UserPage } from '../../../pages/UserPage';
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

test.describe('VENUEADMIN - Users Permissions Tests', () => {
  let userPage: UserPage;
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
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: venueAdminCredentials.username,
      password: venueAdminCredentials.password,
    });
  });

  // Initialize page objects and login before each test
  // test.beforeEach(async ({ page, context }) => {
  //   clubSurveyLogin = new ClubSurveyLogin(page, context);
  //   userPage = new UserPage(page, context);

  //   await clubSurveyLogin.ClubSurveyLogin({
  //     username: venueAdminCredentials.username,
  //     password: venueAdminCredentials.password,
  //   });
  // });

  // Test: Validate View Permission
  test('@venueadmin - Validate View Permission', async () => {
    if (rolePermissions.users.view === 'venueManagers') {
      console.log('Venue Admin has permission to view venue managers.');
      await userPage.navigateToUsersPage();
    //   const isUserTableVisible = await userPage.isElementVisible(userPage.selectors.userTable);
    //   expect(isUserTableVisible).toBeTruthy();
    } else {
      throw new Error('Venue Admin does not have permission to view users.');
    }
  });

  // Test: Validate Create Permission
//   test('@venueadmin - Validate Create Permission', async () => {
//     if (rolePermissions.users.create === 'staffMembers') {
//       console.log('Venue Admin has permission to create staff members.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.createUser('newstaff@example.com', 'Password123', 'StaffMember');
//     } else {
//       throw new Error('Venue Admin does not have permission to create users.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@venueadmin - Validate Edit Permission', async () => {
//     if (rolePermissions.users.edit === 'staffMembers') {
//       console.log('Venue Admin has permission to edit staff members.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.editUser('existingstaff@example.com', 'UpdatedRole');
//     } else {
//       throw new Error('Venue Admin does not have permission to edit users.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@venueadmin - Validate Delete Permission', async () => {
//     if (rolePermissions.users.delete === 'staffMembers') {
//       console.log('Venue Admin has permission to delete staff members.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.deleteUser('staffToDelete@example.com');
//     } else {
//       throw new Error('Venue Admin does not have permission to delete users.');
//     }
//   });
});