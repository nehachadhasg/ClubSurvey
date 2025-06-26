import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';
import { VenuePage } from '../../../pages/VenuePage';
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

test.describe('FRANCHISEADMIN - Venues Permissions Tests', () => {
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
    venuePage = new VenuePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
    await venuePage.navigateToVenuePage();
    const cards = venuePage.page.locator(venuePage.selectors.settingsCards);
    await cards.nth(4).click();
    await venuePage.page.waitForTimeout(2000);
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@franchiseadmin - Verify Franchise Admin can manage venues and attributes under their own franchise.', async () => {
    if (
      rolePermissions.venues.create === 'ownFranchise' &&
      rolePermissions.venues.edit === 'ownFranchise' &&
      rolePermissions.venues.delete === 'ownFranchise'
    ) {
      const venueName = faker.company.name().slice(0, 10);
      const newVenueName = faker.company.name().slice(0, 10);
      const franchiseOption = 'Paradigm';
      const groupOption = 'Blockchains';
      await venuePage.createVenue({
        venueName,
        franchiseOption,
        groupOption,
      });
      await venuePage.page.waitForTimeout(2000);
      await venuePage.editVenue({ venueName, newVenueName });
      await venuePage.page.waitForTimeout(2000);
      await venuePage.deleteVenue({ newVenueName });
    } else {
      throw new Error(
        'FRANCHISEADMIN does not have permission to create, edit, or delete venues.'
      );
    }
  });
});
