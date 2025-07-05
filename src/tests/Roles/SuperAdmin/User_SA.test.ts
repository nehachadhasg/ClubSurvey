import {test, expect, chromium, Browser, BrowserContext,Page} from '@playwright/test';
import { UserPage } from '../../../pages/UserPage';
import { FranchisePage } from '../../../pages/FranchisePage';
import { VenuePage } from '../../../pages/VenuePage';
import { GroupPage } from '../../../pages/GroupPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import { faker } from '@faker-js/faker/locale/en';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';
import { FranchiseData } from '../../../../data/franchise.interface';
import { GroupData } from '../../../../data/group.interface';
import { VenueData } from '../../../../data/venue.interface';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let franchiseAdminCredentials: { username: string; password: string };
let groupAdminCredentials: { username: string; password: string };
let venueAdminCredentials: { username: string; password: string };
let users: UserData;
let franchises: FranchiseData;
let groups: GroupData;
let venues: VenueData;
let browser: Browser;
let context: BrowserContext;
let page: Page;




test.describe('SUPERADMIN - Users Permissions Tests', () => {
  let userPage: UserPage;
  let franchisePage: FranchisePage;
  let venuePage: VenuePage;
  let groupPage: GroupPage;
  let clubSurveyLogin: ClubSurveyLogin;

  let superAdminCredentials: { username: string; password: string };
  let franchiseAdminCredentials: { username: string; password: string };
  let groupAdminCredentials: { username: string; password: string };
  let venueAdminCredentials: { username: string; password: string };



  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    const usersFilePath = path.resolve(
      __dirname,
      '../../../../data/users.json'
    );
        const franchiseFilePath = path.resolve(
      __dirname,
      '../../../../data/franchise.json'
    );
            const groupFilePath = path.resolve(
      __dirname,
      '../../../../data/group.json'
    );
            const venueFilePath = path.resolve(
      __dirname,
      '../../../../data/venue.json'
    );
    users = JsonReader.readJson(usersFilePath) as UserData;
    franchises = JsonReader.readJson(franchiseFilePath) as FranchiseData;
    groups = JsonReader.readJson(groupFilePath) as GroupData;
    venues = JsonReader.readJson(venueFilePath) as VenueData;


    if (!users || Object.keys(users).length === 0) {
      throw new Error(
        'users.json is empty or invalid. Please run the data generation script.'
      );
    }

    const superAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 1
    );
    const franchiseAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 2
    );
    const groupAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 4
    );
    const venueAdminUser = Object.values(users).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (user: any) => user.role_id === 5
    );

if (
  !superAdminUser || !superAdminUser.username || !superAdminUser.password 
) {
  throw new Error('One or more admin credentials are missing in users.json.');
} 

superAdminCredentials = {
  username: superAdminUser.username,
  password: superAdminUser.password,
};

franchiseAdminCredentials = {
  username: franchiseAdminUser.username,
  password: franchiseAdminUser.password,
};
groupAdminCredentials = {
  username: groupAdminUser.username,
  password: groupAdminUser.password,
};
venueAdminCredentials = {
  username: venueAdminUser.username,
  password: venueAdminUser.password,
};

    rolePermissions = ROLE_CONFIG['SUPERADMIN'];
    if (!rolePermissions) {
      throw new Error('SUPERADMIN permissions are missing in roleConfig.ts.');
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
    await userPage.navigateToUsersPage();

    if (rolePermissions.users.view === 'all') {
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await expect(cards).toHaveCount(6);
      await expect(cards.nth(0)).toHaveText(/Users/);
      await expect(cards.nth(1)).toHaveText(/Surveys/);
      await expect(cards.nth(2)).toHaveText(/Translations/);
      await expect(cards.nth(3)).toHaveText(/Franchises/);
      await expect(cards.nth(4)).toHaveText(/Groups/);
      await expect(cards.nth(5)).toHaveText(/Venues/);
    } else {
      throw new Error('SUPERADMIN does not have permission to view users.');
    }
    const cards = userPage.page.locator(userPage.selectors.settingsCards);
    await cards.nth(0).click();

  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@superadmin - Verify Super Admin can view all user types including other Super Admins.', async () => {
   // const cards = userPage.page.locator(userPage.selectors.settingsCards);
   // await cards.nth(0).click();
    await userPage.page.waitForTimeout(2000);
    if (rolePermissions.users.view === 'all') {
      const usersTableHeading = userPage.page.locator(
        userPage.selectors.usersTableHeading
      );
      console.log('Users Table Heading:', usersTableHeading);
      await expect(usersTableHeading).toBeVisible();
      const selectPerPage = userPage.page.locator(
        userPage.selectors.selectPerPage
      );



    const adminCredentialsList = [
    { credentials: superAdminCredentials, selector: userPage.selectors.superAdmin },
    { credentials: franchiseAdminCredentials, selector: userPage.selectors.franchiseAdmin },
    { credentials: groupAdminCredentials, selector: userPage.selectors.groupAdmin },
    { credentials: venueAdminCredentials, selector: userPage.selectors.venueManager },

  ]

  for (const admin of adminCredentialsList) {
  await userPage.page.locator(userPage.selectors.searchUsers).fill(admin.credentials.username);
  const adminLocator = userPage.page.locator(admin.selector);
  await expect(adminLocator).toBeVisible();
  await userPage.page.reload();
  }
        

    } else {
      throw new Error('SUPERADMIN does not have permission to view users.');
    }
  });

  test('@superadmin - Ensure Super Admin cannot edit or delete other Super Admin users.', async () => {
   // const cards = userPage.page.locator(userPage.selectors.settingsCards);
    //await cards.nth(0).click();
    await userPage.page.waitForTimeout(2000);
    if (rolePermissions.users.edit === 'allExceptSuperAdmin') {
      await userPage.page
        .locator(userPage.selectors.searchUsers)
        .fill(superAdminCredentials.username);
      const superAdmin = userPage.page.locator(userPage.selectors.superAdmin);
      const editUserButton = userPage.page
        .locator(userPage.selectors.editUserButton)
        .nth(0);
      await expect(superAdmin).toBeVisible();
      await superAdmin.click();
      await userPage.page.waitForTimeout(500);
      await expect(editUserButton).not.toBeVisible();
      await userPage.page
        .locator(userPage.selectors.closeActionsPopUpButtonSecondary)
        .click();
      await userPage.page.reload();
    } else {
      throw new Error(
        'SUPERADMIN does not have permission to edit or delete other Super Admin users.'
      );
    }
  });

  test('@superadmin - Verify Super Admin can create, edit, and delete non-Super Admin users.', async () => {
    await userPage.page.waitForTimeout(2000);
    if (
      rolePermissions.users.create === 'allExceptSuperAdmin' &&
      rolePermissions.users.edit === 'allExceptSuperAdmin' &&
      rolePermissions.users.delete === 'allExceptSuperAdmin'
    ) {
      const franchiseName = franchises.franchise.name;
      const groupName = groups.group.name;
      const venueName = venues.venue.name;
      
      const uniqueId = faker.string.uuid();
      // Generate a base name and append a unique string (e.g., UUID)
      let baseName_firstName = faker.person.firstName();
      let baseName_lastName = faker.person.lastName();      // Remove all non-letter characters (keep only a-z and A-Z)
      let firstName = baseName_firstName.replace(/[^a-zA-Z]/g, '');
      console.log(firstName); // Example: JohnSmithdfeabcfedcbaabcdabcdabcdabcdabcd
      const lastName = baseName_lastName.replace(/[^a-zA-Z]/g, '');
      const email = `user_${uniqueId}@example.com`;
      const newUniqueId = faker.string.uuid();
      const newFirstName = baseName_firstName.replace(/[^a-zA-Z]/g, '');
      const newLastName = baseName_lastName.replace(/[^a-zA-Z]/g, '');
      console.log(`Creating user with firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
      
      //create, edit and delete Franchise Admin user
      await userPage.createUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: 'Franchise Admin',
        assignTo: franchiseName
      });

      await userPage.page.waitForTimeout(2000);
      await userPage.editUser({
        firstName,
        lastName,
        email: email,
        newFirstName,
        newLastName,
      });
      await userPage.page.waitForTimeout(2000);
      await userPage.deleteUser({ newFirstName, newLastName, email });
      await expect(
        userPage.page.getByText('The user was deleted successfully.')
      ).toBeVisible();

    } else {
      throw new Error(
        'SUPERADMIN does not have permission to create, edit, or delete non-Super Admin users.'
      );
    }
  });
});

