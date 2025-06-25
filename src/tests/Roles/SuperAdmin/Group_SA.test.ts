import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
  expect,
} from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';
import { GroupPage } from 'pages/GroupPage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Groups Permissions Tests', () => {
  let groupPage: GroupPage;
  let clubSurveyLogin: ClubSurveyLogin;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    const usersFilePath = path.resolve(
      __dirname,
      '../../../../data/users.json'
    );
    users = JsonReader.readJson(usersFilePath) as UserData;
    if (!users || Object.keys(users).length === 0) {
      throw new Error(
        'users.json is empty or invalid. Please run the data generation script.'
      );
    }
    const superAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 1
    );
    if (
      !superAdminUser ||
      !superAdminUser.username ||
      !superAdminUser.password
    ) {
      throw new Error('SUPERADMIN credentials are missing in users.json.');
    }
    superAdminCredentials = {
      username: superAdminUser.username,
      password: superAdminUser.password,
    };
    rolePermissions = ROLE_CONFIG['SUPERADMIN'];
    if (!rolePermissions) {
      throw new Error('SUPERADMIN permissions are missing in roleConfig.ts.');
    }
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    groupPage = new GroupPage(page, context);
    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
    await groupPage.navigateToGroupsPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@superadmin - Verify Super Admin can manage groups.', async () => {
    const groupsPermissions = rolePermissions.groups;
    if (
      groupsPermissions.create &&
      groupsPermissions.edit &&
      groupsPermissions.delete
    ) {
      const cards = groupPage.page.locator(groupPage.selectors.settingsCards);
      await cards.nth(4).click();
      await groupPage.page.waitForTimeout(2000);
      const groupName = faker.company
        .name()
        .slice(0, 10)
        .replace(/[^a-zA-Z\s]/g, '');
      await groupPage.createGroup({
        groupName,
        franchiseOption: '59Club Asia',
      });
      const newGroupName = faker.company
        .name()
        .slice(0, 10)
        .replace(/[^a-zA-Z\s]/g, '');

      await groupPage.page.waitForTimeout(2000);
      await groupPage.editGroup({ groupName, newGroupName });
      await groupPage.page.waitForTimeout(2000);
      await groupPage.deleteGroup({ newGroupName });
      await groupPage.page.waitForTimeout(2000);
      await expect(
        groupPage.page.getByText('The group was deleted successfully.')
      ).toBeVisible();
    } else {
      throw new Error(
        'SUPERADMIN does not have permission to create, edit, or delete groups.'
      );
    }
  });
});
