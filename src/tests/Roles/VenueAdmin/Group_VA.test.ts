import { test, expect } from '@playwright/test';
import { GroupPage } from '../../../pages/GroupPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let venueAdminCredentials: { username: string; password: string };
let users: UserData;

test.describe('VENUEADMIN - Groups Permissions Tests', () => {
  let groupPage: GroupPage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Venue Admin credentials and permissions before all tests
  test.beforeAll(async () => {
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
  });

  // Initialize page objects and login before each test
  test.beforeEach(async ({ page, context }) => {
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    // groupPage = new GroupPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: venueAdminCredentials.username,
      password: venueAdminCredentials.password,
    });
  });

  // Test: Validate View Permission
  test('@venueadmin - Validate View Permission', async () => {
    if (!rolePermissions.groups.view) {
      console.log('Venue Admin does NOT have permission to view groups.');
      expect(rolePermissions.groups.view).toBeFalsy();
    } else {
      throw new Error('Unexpected permission to view groups.');
    }
  });

//   // Test: Validate Create Permission
//   test('@venueadmin - Validate Create Permission', async () => {
//     if (!rolePermissions.groups.create) {
//       console.log('Venue Admin does NOT have permission to create groups.');
//       expect(rolePermissions.groups.create).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to create groups.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@venueadmin - Validate Edit Permission', async () => {
//     if (!rolePermissions.groups.edit) {
//       console.log('Venue Admin does NOT have permission to edit groups.');
//       expect(rolePermissions.groups.edit).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to edit groups.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@venueadmin - Validate Delete Permission', async () => {
//     if (!rolePermissions.groups.delete) {
//       console.log('Venue Admin does NOT have permission to delete groups.');
//       expect(rolePermissions.groups.delete).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to delete groups.');
//     }
//   });
});