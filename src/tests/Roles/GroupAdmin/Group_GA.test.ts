import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { GroupPage } from '../../../pages/GroupPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let groupAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('GROUPADMIN - Groups Permissions Tests', () => {
  let groupPage: GroupPage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Group Admin credentials and permissions before all tests
  test.beforeAll(async () => {

    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }

    const groupAdminUser = Object.values(users).find((user: any) => user.role_id === 4);

    if (!groupAdminUser || !groupAdminUser.username || !groupAdminUser.password) {
      throw new Error('Group Admin credentials are missing in users.json.');
    }

    groupAdminCredentials = { username: groupAdminUser.username, password: groupAdminUser.password };
    rolePermissions = ROLE_CONFIG['GROUPADMIN'];
    if (!rolePermissions) {
      throw new Error('Group Admin permissions are missing in roleConfig.ts.');
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    groupPage = new GroupPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: groupAdminCredentials.username,
      password: groupAdminCredentials.password,
    });

    
  });

  // Initialize page objects and login before each test
  // test.beforeEach(async ({ page, context }) => {
  //   clubSurveyLogin = new ClubSurveyLogin(page, context);
  //   // groupPage = new GroupPage(page, context);

  //   await clubSurveyLogin.ClubSurveyLogin({
  //     username: groupAdminCredentials.username,
  //     password: groupAdminCredentials.password,
  //   });
  });

  // Test: Validate View Permission
  test('GROUPADMIN - Validate Group Permission', async () => {
    if (!rolePermissions.groups.view) {
      console.log('Group Admin does NOT have permission to view groups.');
      expect(rolePermissions.groups.view).toBeFalsy();
    } else {
      throw new Error('Unexpected permission to view groups.');
    }
  });

  // Test: Validate Create Permission
//   test('@groupadmin - Validate Create Permission', async () => {
//     if (!rolePermissions.groups.create) {
//       console.log('Group Admin does NOT have permission to create groups.');
//       expect(rolePermissions.groups.create).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to create groups.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@groupadmin - Validate Edit Permission', async () => {
//     if (!rolePermissions.groups.edit) {
//       console.log('Group Admin does NOT have permission to edit groups.');
//       expect(rolePermissions.groups.edit).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to edit groups.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@groupadmin - Validate Delete Permission', async () => {
//     if (!rolePermissions.groups.delete) {
//       console.log('Group Admin does NOT have permission to delete groups.');
//       expect(rolePermissions.groups.delete).toBeFalsy();
//     } else {
//       throw new Error('Unexpected permission to delete groups.');
//     }
//   });