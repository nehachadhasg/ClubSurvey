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
import { VenueData } from '../../../../data/venue.interface';
import { UserData } from '../../../../data/users.interface';
import { VenuePage } from 'pages/VenuePage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let venueAdminCredentials: { username: string; password: string };
let users: UserData;
let venueData: VenueData;
let venueName: string;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('VENUEADMIN - Land on Survey Dashboard tests', () => {
  let venuePage: VenuePage;
  let clubSurveyLogin: ClubSurveyLogin;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

  const venueFilePath = path.resolve(
      __dirname,
      '../../../../data/venue.json'
    );
    venueData = JsonReader.readJson(venueFilePath) as VenueData;

    if (!venueData || !venueData.venue || !venueData.venue.id) {
      throw new Error('franchise.json is empty or invalid. Please run the data generation script.');
    }
    // Get Venue Name 
     venueName = venueData.venue.name;

    if (!venueName) {
      throw new Error('Venue Name is missing in franchise.json.');
    }
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

    const venueAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 5
    );

    if (
      !venueAdminUser ||
      !venueAdminUser.username ||
      !venueAdminUser.password
    ) {
      throw new Error('Venue Admin credentials are missing in users.json.');
    }

    venueAdminCredentials = {
      username: venueAdminUser.username,
      password: venueAdminUser.password,
    };
    rolePermissions = ROLE_CONFIG['VENUEADMIN'];
    if (!rolePermissions) {
      throw new Error('Venue Admin permissions are missing in roleConfig.ts.');
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    venuePage = new VenuePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: venueAdminCredentials.username,
      password: venueAdminCredentials.password,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@venueadmin - Verify venue admin sees their dashboard after login.', async () => {
    const venueDropdown = venuePage.page.locator(
      venuePage.selectors.venueDropdown
    );
    const venueHeading = venuePage.page.getByRole('heading', {
      name: venueName,
    });
    await expect(venueHeading).toBeVisible();
  });
});
