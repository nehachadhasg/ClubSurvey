import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';
import { GroupPage } from '../../../pages/GroupPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('FRANCHISEADMIN - Groups Permissions Tests', () => {
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

    const franchiseAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 2
    );

    if (
      !franchiseAdminUser ||
      !franchiseAdminUser.username ||
      !franchiseAdminUser.password
    ) {
      throw new Error('Franchise Admin credentials are missing in users.json.');
    }

    franchiseAdminCredentials = {
      username: franchiseAdminUser.username,
      password: franchiseAdminUser.password,
    };
    rolePermissions = ROLE_CONFIG['FRANCHISEADMIN'];
    if (!rolePermissions) {
      throw new Error(
        'Franchise Admin permissions are missing in roleConfig.ts.'
      );
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    groupPage = new GroupPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
    await groupPage.navigateToGroupsPage();
    const cards = groupPage.page.locator(groupPage.selectors.settingsCards);
    await cards.nth(3).click();
    await groupPage.page.waitForTimeout(2000);
  });

  test('@franchiseadmin - Verify Franchise Admin can only view groups under their own franchise.', async () => {
    if (rolePermissions.groups.view === 'ownFranchise') {
      await expect(groupPage.page.getByText('Channels').nth(0)).toBeVisible();
    } else {
      throw new Error(
        'FRANCHISEADMIN has permission to view groups under other franchises'
      );
    }
  });

  test('@franchiseadmin - Verify Franchise Admin can add/edit/delete groups in their franchise.', async () => {
    if (
      rolePermissions.groups.create === 'ownFranchise' &&
      rolePermissions.groups.edit === 'ownFranchise' &&
      rolePermissions.groups.delete === 'ownFranchise'
    ) {
      const groupName = faker.company
        .name()
        .slice(0, 10)
        .replace(/[^a-zA-Z\s]/g, '');
      const newGroupName = faker.company
        .name()
        .slice(0, 10)
        .replace(/[^a-zA-Z\s]/g, '');
      const franchiseOption = 'Channels';
      await groupPage.createGroup({
        groupName,
        franchiseOption,
      });
      await groupPage.page.waitForTimeout(2000);
      await groupPage.editGroup({
        groupName,
        newGroupName,
      });
      await groupPage.page.waitForTimeout(2000);
      await groupPage.deleteGroup({ newGroupName });
      await expect(
        groupPage.page.getByText('The group was deleted successfully.')
      ).toBeVisible();
    } else {
      throw new Error(
        'FRANCHISEADMIN does not have permission to add/edit/delete groups in their franchise'
      );
    }
  });
});
