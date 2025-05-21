import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { VenuePage } from '../../../pages/VenuePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

let rolePermissions: any;
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;


test.describe('FRANCHISEADMIN - Venues Permissions Tests', () => {
  let venuePage: VenuePage;
  let clubSurveyLogin: ClubSurveyLogin;

  // Load Franchise Admin credentials and permissions before all tests
  test.beforeAll(async () => {

    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

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
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    venuePage = new VenuePage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,

  });

  // // Initialize page objects and login before each test
  // test.beforeEach(async ({ page, context }) => {
  //   clubSurveyLogin = new ClubSurveyLogin(page, context);
  //   // venuePage = new VenuePage(page, context);

  //   await clubSurveyLogin.ClubSurveyLogin({
  //     username: franchiseAdminCredentials.username,
  //     password: franchiseAdminCredentials.password,
  //   });
  });

  // Test: Validate View Permission
  test('@franchiseadmin - Validate Venue Permission', async () => {
    if (rolePermissions.venues.view === 'ownFranchise') {
      console.log('Franchise Admin has permission to view venues in their own franchise.');
    //   await venuePage.navigateToVenuesPage();
    //   const isVenueTableVisible = await venuePage.isElementVisible(venuePage.selectors.venueTable);
    //   expect(isVenueTableVisible).toBeTruthy();
    } else {
      throw new Error('Franchise Admin does not have permission to view venues.');
    }
  });

  // Test: Validate Create Permission
//   test('@franchiseadmin - Validate Create Permission', async () => {
//     if (rolePermissions.venues.create === 'ownFranchise') {
//       console.log('Franchise Admin has permission to create venues in their own franchise.');
//     //   await venuePage.navigateToVenuesPage();
//     //   await venuePage.createVenue('New Venue', 'Description for new venue');
//     } else {
//       throw new Error('Franchise Admin does not have permission to create venues.');
//     }
//   });

//   // Test: Validate Edit Permission
//   test('@franchiseadmin - Validate Edit Permission', async () => {
//     if (rolePermissions.venues.edit === 'ownFranchise') {
//       console.log('Franchise Admin has permission to edit venues in their own franchise.');
//     //   await venuePage.navigateToVenuesPage();
//     //   await venuePage.editVenue('Existing Venue', 'Updated Description');
//     } else {
//       throw new Error('Franchise Admin does not have permission to edit venues.');
//     }
//   });

//   // Test: Validate Delete Permission
//   test('@franchiseadmin - Validate Delete Permission', async () => {
//     if (rolePermissions.venues.delete === 'ownFranchise') {
//       console.log('Franchise Admin has permission to delete venues in their own franchise.');
//     //   await venuePage.navigateToVenuesPage();
//     //   await venuePage.deleteVenue('Venue to Delete');
//     } else {
//       throw new Error('Franchise Admin does not have permission to delete venues.');
//     }
//   });
});