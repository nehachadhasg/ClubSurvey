import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';
import { GroupPage } from 'pages/GroupPage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let groupAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('GROUPADMIN - Land on Survey Dashboard tests', () => {
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

    const groupAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 4
    );

    if (
      !groupAdminUser ||
      !groupAdminUser.username ||
      !groupAdminUser.password
    ) {
      throw new Error('Group Admin credentials are missing in users.json.');
    }

    groupAdminCredentials = {
      username: groupAdminUser.username,
      password: groupAdminUser.password,
    };
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

  test.afterAll(async () => {
    await browser.close();
  });

  test('@groupadmin - Verify group admin is redirected to the Survey Dashboard upon login.', async () => {
    const groupDropdown = groupPage.page.locator(
      groupPage.selectors.groupDropdown
    );
    const venueDropdown = groupPage.page.locator(
      groupPage.selectors.venueDropdown
    );
    const group = 'Eyeballs';
    const groupHeading = groupPage.page.getByRole('heading', {
      name: group,
    });
    await expect(groupDropdown).toBeVisible();
    await expect(venueDropdown).toBeVisible();
    await expect(groupHeading).toBeVisible();
  });
});
