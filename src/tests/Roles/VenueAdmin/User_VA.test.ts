import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
  expect,
} from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';
import { UserPage } from '../../../pages/UserPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let venueAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('VENUEADMIN - Users Permissions Tests', () => {
  let userPage: UserPage;
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
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: venueAdminCredentials.username,
      password: venueAdminCredentials.password,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@venueadmin - Verify Venue Manager has access to the Users tab in the Settings section.', async () => {
    if (rolePermissions.settings.view.includes('Users')) {
      await userPage.navigateToUsersPage();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      await userPage.page.waitForTimeout(2000);
      const usersTab = userPage.page.getByText('Users').nth(0);
      await expect(usersTab).toBeVisible();
    } else {
      throw new Error(
        'VENUEADMIN does not have permission to view the Users tab in the Settings section.'
      );
    }
  });
  test('@venueadmin - Verify Venue Manager can view other Venue Manager users assigned to the same venue.', async () => {
    if (rolePermissions.users.view === 'venueManagersAndStaff') {
      await userPage.navigateToUsersPage();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      await userPage.page.waitForTimeout(2000);
      await userPage.page
        .locator(userPage.selectors.searchUsers)
        .fill('Shrek Shrek');
      const users = userPage.page.getByText('Methodologies');
      await expect(users).toHaveCount(1);
    } else {
      throw new Error(
        'VENUEADMIN does not have permission to view the Users tab in the Settings section.'
      );
    }
  });
  test('@venueadmin - Verify Venue Manager can create, edit, and delete Staff Member users within their venue.', async () => {
    if (
      rolePermissions.users.create === 'staffMembers' &&
      rolePermissions.users.edit === 'staffMembers' &&
      rolePermissions.users.delete === 'staffMembers'
    ) {
      await userPage.navigateToUsersPage();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      await userPage.page.waitForTimeout(2000);
      const firstName = faker.person.firstName().slice(0, 4);
      const lastName = faker.person.lastName().slice(0, 4);
      const email = faker.internet.email();
      const role = 'Staff Member';
      const assignTo = 'Methodologies';
      const newFirstName = faker.person.firstName().slice(0, 4);
      const newLastName = faker.person.lastName().slice(0, 4);

      await userPage.page.locator(userPage.selectors.addUsersButton).click();
      await userPage.page
        .locator(userPage.selectors.firstNameInput)
        .fill(firstName);
      await userPage.page
        .locator(userPage.selectors.lastNameInput)
        .fill(lastName);
      await userPage.page.locator(userPage.selectors.emailInput).fill(email);
      await userPage.page.locator(userPage.selectors.roleSelectInput).click();
      await userPage.page.getByRole('option', { name: role }).click();
      await userPage.page
        .locator(userPage.selectors.assignToSelectInput)
        .click();
      await userPage.page.getByRole('menuitem', { name: assignTo }).click();
      await userPage.page.keyboard.press('Escape');
      await userPage.page.waitForTimeout(200);
      await userPage.page.locator(userPage.selectors.createUserButton).click();
      await userPage.page.waitForTimeout(2000);
      await userPage.editUser({
        firstName,
        lastName,
        email,
        newFirstName,
        newLastName,
      });

      await userPage.page.locator(userPage.selectors.searchUsers).fill(email);
      await userPage.page
        .locator('tbody')
        .getByRole('cell')
        .filter({ hasText: /^$/ })
        .getByRole('img')
        .click();
      await userPage.page.getByText('Delete').click();
      await userPage.page.getByRole('button', { name: 'Confirm' }).click();
      await expect(
        userPage.page.getByText('The user was deleted successfully.')
      ).toBeVisible();
    } else {
      throw new Error(
        'VENUEADMIN does not have permission to create, edit, or delete Staff Member users within their venue.'
      );
    }
  });
});
