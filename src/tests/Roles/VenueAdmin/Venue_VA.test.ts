import { test, expect } from '@playwright/test';
import { VenuePage } from '../../../pages/VenuePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let venueAdminCredentials: { username: string; password: string };
let users: UserData;

test.describe('VENUEADMIN - Venues Permissions Tests', () => {
  let venuePage: VenuePage;
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
    // venuePage = new VenuePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: venueAdminCredentials.username,
      password: venueAdminCredentials.password,
    });
  });

  // Test: Validate View Permission
  test('@venueadmin - Validate View Permission', async () => {
    if (!rolePermissions.venues.view) {
      console.log('Venue Admin does NOT have permission to view venues.');
      expect(rolePermissions.venues.view).toBeFalsy();
    } else {
      throw new Error('Unexpected permission to view venues.');
    }
  });

  // Test: Validate Create Permission
//   test('@venueadmin - Validate Create Permission', async () => {
//     if (!rolePermissions.venues.create) {
//       console.log('Venue Admin does NOT have permission to create venues.');
//       expect(rolePermissions.venues.create).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to create venues.');
//     }
//   });

  // Test: Validate Edit Permission
//   test('@venueadmin - Validate Edit Permission', async () => {
//     if (!rolePermissions.venues.edit) {
//       console.log('Venue Admin does NOT have permission to edit venues.');
//       expect(rolePermissions.venues.edit).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to edit venues.');
//     }
//   });

  // Test: Validate Delete Permission
//   test('@venueadmin - Validate Delete Permission', async () => {
//     if (!rolePermissions.venues.delete) {
//       console.log('Venue Admin does NOT have permission to delete venues.');
//       expect(rolePermissions.venues.delete).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to delete venues.');
//     }
//   });
});