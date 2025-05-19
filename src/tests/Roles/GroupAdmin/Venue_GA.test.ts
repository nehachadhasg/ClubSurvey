import { test, expect } from '@playwright/test';
import { VenuePage } from '../../../pages/VenuePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let groupAdminCredentials: { username: string; password: string };
let users: UserData;

test.describe('GROUPADMIN - Venues Permissions Tests', () => {
  let venuePage: VenuePage;
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
    // venuePage = new VenuePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: groupAdminCredentials.username,
      password: groupAdminCredentials.password,
    });
  });

  // Test: Validate View Permission
  test('GROUPADMIN - Validate View Permission', async () => {
    if (rolePermissions.venues.view === 'ownGroup') {
      console.log('Group Admin has permission to view venues in their own group.');
    //   await venuePage.navigateToVenuesPage();
    //   const isVenueTableVisible = await venuePage.isElementVisible(venuePage.selectors.venueTable);
    //   expect(isVenueTableVisible).toBeTruthy();
    } else {
      throw new Error('Group Admin does not have permission to view venues.');
    }
  });

  // Test: Validate Create Permission
//   test('@groupadmin - Validate Create Permission', async () => {
//     if (!rolePermissions.venues.create) {
//       console.log('Group Admin does NOT have permission to create venues.');
//       expect(rolePermissions.venues.create).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to create venues.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@groupadmin - Validate Edit Permission', async () => {
//     if (!rolePermissions.venues.edit) {
//       console.log('Group Admin does NOT have permission to edit venues.');
//       expect(rolePermissions.venues.edit).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to edit venues.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@groupadmin - Validate Delete Permission', async () => {
//     if (!rolePermissions.venues.delete) {
//       console.log('Group Admin does NOT have permission to delete venues.');
//       expect(rolePermissions.venues.delete).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to delete venues.');
//     }
//   });
});