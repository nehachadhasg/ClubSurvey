import { test, expect } from '@playwright/test';
import { UserPage } from '../../../pages/UserPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let groupAdminCredentials: { username: string; password: string };
let users: UserData;

test.describe('GROUPADMIN - Users Permissions Tests', () => {
  let userPage: UserPage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Group Admin credentials and permissions before all tests
  test.beforeAll(async () => {
    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    const groupAdminUser = Object.values(users).find((user: any) => user.role_id === 3);

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
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: groupAdminCredentials.username,
      password: groupAdminCredentials.password,
    });
  });

  // Test: Validate View Permission
  test('GROUPADMIN - Validate View Permission', async () => {
    if (rolePermissions.users.view === 'groupManagersAndStaff') {
      console.log('Group Admin has permission to view group managers and staff.');
      await userPage.navigateToUsersPage();
    //   const isUserTableVisible = await userPage.isElementVisible(userPage.selectors.userTable);
    //   expect(isUserTableVisible).toBeTruthy();
    } else {
      throw new Error('Group Admin does not have permission to view users.');
    }
  });

//   // Test: Validate Create Permission
//   test('@groupadmin - Validate Create Permission', async () => {
//     if (rolePermissions.users.create === 'venueManagerAndStaff') {
//       console.log('Group Admin has permission to create venue managers and staff.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.createUser('newuser@example.com', 'Password123', 'VenueManager');
//     } else {
//       throw new Error('Group Admin does not have permission to create users.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@groupadmin - Validate Edit Permission', async () => {
//     if (rolePermissions.users.edit === 'venueManagerAndStaff') {
//       console.log('Group Admin has permission to edit venue managers and staff.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.editUser('existinguser@example.com', 'UpdatedRole');
//     } else {
//       throw new Error('Group Admin does not have permission to edit users.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@groupadmin - Validate Delete Permission', async () => {
//     if (rolePermissions.users.delete === 'venueManagerAndStaff') {
//       console.log('Group Admin has permission to delete venue managers and staff.');
//       await userPage.navigateToUsersPage();
//     //   await userPage.deleteUser('userToDelete@example.com');
//     } else {
//       throw new Error('Group Admin does not have permission to delete users.');
//     }
//   });
});