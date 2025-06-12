import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
  expect,
} from '@playwright/test';
import { VenuePage } from '../../../pages/VenuePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let groupAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('GROUPADMIN - Venues Permissions Tests', () => {
  let venuePage: VenuePage;
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
    venuePage = new VenuePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: groupAdminCredentials.username,
      password: groupAdminCredentials.password,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@groupadmin - Verify Group Manager can only view venues that belong to their group.', async () => {
    if (rolePermissions.venues.view === 'ownGroup') {
      await venuePage.navigateToVenuePage();
      const cards = venuePage.page.locator(venuePage.selectors.settingsCards);
      await cards.nth(1).click();
      await venuePage.page.waitForTimeout(2000);
      await venuePage.page
        .locator(venuePage.selectors.searchVenue)
        .fill('Methodologies');
      await venuePage.page.waitForTimeout(2000);
      const venue = venuePage.page.getByText('Solutions').nth(0);
      await expect(venue).toBeVisible();
    } else {
      throw new Error(
        'GROUPADMIN does not have permission to view venues that belong to their group.'
      );
    }
  });

  test('@groupadmin - Ensure Group Manager cannot edit, delete, or create venues.', async () => {
    if (
      rolePermissions.venues.create === false &&
      rolePermissions.venues.edit === false &&
      rolePermissions.venues.delete === false
    ) {
      await venuePage.navigateToVenuePage();
      const cards = venuePage.page.locator(venuePage.selectors.settingsCards);
      await cards.nth(1).click();
      await venuePage.page.waitForTimeout(2000);
      await venuePage.page
        .locator(venuePage.selectors.searchVenue)
        .fill('Methodologies');
      await venuePage.page.getByText('Solutions').nth(0).click();
      await venuePage.page.waitForTimeout(2000);
      const editVenueButton = venuePage.page.locator(
        venuePage.selectors.editVenueButton
      );
      await expect(editVenueButton).not.toBeVisible();
    } else {
      throw new Error(
        'GROUPADMIN has permission to edit, delete, or create venues.'
      );
    }
  });
});
