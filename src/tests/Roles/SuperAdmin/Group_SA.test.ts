import { test, expect } from '@playwright/test';
import { UserPage } from '../../../pages/UserPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;

test.describe('SUPERADMIN - Franchises and Groups Permissions Tests', () => {
  let userPage: UserPage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load SUPERADMIN credentials and permissions before all tests
  test.beforeAll(async () => {
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
  });

  // Initialize page objects and login before each test
  test.beforeEach(async ({ page, context }) => {
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
  });

  // Test: Validate Groups Permissions
  test('@superadmin - Validate Groups Permissions', async () => {
    const groupsPermissions = rolePermissions.groups;

    if (groupsPermissions.view) {
      console.log('SUPERADMIN has permission to view groups.');
      // call logic to navigate to groups page and validate view functionality
    }

    // if (groupsPermissions.create) {
    //   console.log('SUPERADMIN has permission to create groups.');
    //   // call logic to create a group
    // }

    // if (groupsPermissions.edit) {
    //   console.log('SUPERADMIN has permission to edit groups.');
    //   // call logic to edit a group
    // }

    // if (groupsPermissions.delete) {
    //   console.log('SUPERADMIN has permission to delete groups.');
    //   // call logic to delete a group
    // }
  });
});