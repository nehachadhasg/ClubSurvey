import { test, expect } from '@playwright/test';
import { GroupPage } from '../../../pages/GroupPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;

test.describe('FRANCHISEADMIN - Groups Permissions Tests', () => {
  let groupPage: GroupPage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Franchise Admin credentials and permissions before all tests
  test.beforeAll(async () => {
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
  });

  // Initialize page objects and login before each test
  test.beforeEach(async ({ page, context }) => {
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    // groupPage = new GroupPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
  });

  // Test: Validate View Permission
  test('@franchiseadmin - Validate View Permission', async () => {
    if (rolePermissions.groups.view === 'ownFranchise') {
      console.log('Franchise Admin has permission to view groups in their own franchise.');
    //   await groupPage.navigateToGroupsPage();
    //   const isGroupTableVisible = await groupPage.isElementVisible(groupPage.selectors.groupTable);
    //   expect(isGroupTableVisible).toBeTruthy();
    } else {
      throw new Error('Franchise Admin does not have permission to view groups.');
    }
  });

  // Test: Validate Create Permission
  // test('@franchiseadmin - Validate Create Permission', async () => {
  //   if (rolePermissions.groups.create === 'ownFranchise') {
  //     console.log('Franchise Admin has permission to create groups in their own franchise.');
  //   //   await groupPage.navigateToGroupsPage();
  //   //   await groupPage.createGroup('New Group', 'Description for new group');
  //   } else {
  //     throw new Error('Franchise Admin does not have permission to create groups.');
  //   }
  // });

  // // Test: Validate Edit Permission
  // test('@franchiseadmin - Validate Edit Permission', async () => {
  //   if (rolePermissions.groups.edit === 'ownFranchise') {
  //     console.log('Franchise Admin has permission to edit groups in their own franchise.');
  //   //   await groupPage.navigateToGroupsPage();
  //   //   await groupPage.editGroup('Existing Group', 'Updated Description');
  //   } else {
  //     throw new Error('Franchise Admin does not have permission to edit groups.');
  //   }
  // });

  // // Test: Validate Delete Permission
  // test('@franchiseadmin - Validate Delete Permission', async () => {
  //   if (rolePermissions.groups.delete === 'ownFranchise') {
  //     console.log('Franchise Admin has permission to delete groups in their own franchise.');
  //   //   await groupPage.navigateToGroupsPage();
  //   //   await groupPage.deleteGroup('Group to Delete');
  //   } else {
  //     throw new Error('Franchise Admin does not have permission to delete groups.');
  //   }
  // });
});