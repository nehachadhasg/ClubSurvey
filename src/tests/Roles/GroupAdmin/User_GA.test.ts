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
let groupAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('GROUPADMIN - Users Permissions Tests', () => {
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
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: groupAdminCredentials.username,
      password: groupAdminCredentials.password,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@groupadmin - Verify Group Manager can access only Users and Venues tabs in Settings.', async () => {
    if (
      rolePermissions.settings.view.includes('Users') &&
      rolePermissions.settings.view.includes('Venues')
    ) {
      await userPage.navigateToUsersPage();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await expect(cards).toHaveCount(2);
      await expect(cards.nth(0)).toHaveText(/Users/);
      await expect(cards.nth(1)).toHaveText(/Venues/);
    } else {
      throw new Error(
        'GROUPADMIN does not have permission to view Users and Venues.'
      );
    }
  });

  test('@groupadmin - Verify Group Manager can create, edit, and delete users of type Venue Manager or Staff Member.', async () => {
    if (
      rolePermissions.users.create === 'venueManagerAndStaff' &&
      rolePermissions.users.edit === 'venueManagerAndStaff' &&
      rolePermissions.users.delete === 'venueManagerAndStaff'
    ) {
      await userPage.navigateToUsersPage();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email();
      const newFirstName = faker.person.firstName();
      const newLastName = faker.person.lastName();
      const role = 'Venue Manager';
      const assignTo = 'Methodologies';
      const staffFirstName = faker.person.firstName();
      const staffLastName = faker.person.lastName();
      const staffEmail = faker.internet.email();
      const newStaffFirstName = faker.person.firstName();
      const newStaffLastName = faker.person.lastName();
      const staffRole = 'Staff Member';
      const assignToStaff = 'Methodologies';

      await userPage.createUser({
        firstName,
        lastName,
        email,
        role,
        assignTo,
      });
      await userPage.page.waitForTimeout(2000);
      await userPage.editUser({
        firstName,
        lastName,
        email,
        newFirstName,
        newLastName,
      });
      await userPage.page.waitForTimeout(2000);
      await userPage.deleteUser({ newFirstName, newLastName, email });
      await expect(
        userPage.page.getByText('The user was deleted successfully.')
      ).toBeVisible();
      await userPage.page.waitForTimeout(1000);
      await userPage.createUser({
        firstName: staffFirstName,
        lastName: staffLastName,
        email: staffEmail,
        role: staffRole,
        assignTo: assignToStaff,
      });
      await userPage.page.waitForTimeout(2000);
      await userPage.editUser({
        firstName: staffFirstName,
        lastName: staffLastName,
        email: staffEmail,
        newFirstName: newStaffFirstName,
        newLastName: newStaffLastName,
      });
      await userPage.page.waitForTimeout(2000);
      await userPage.deleteUser({
        newFirstName: newStaffFirstName,
        newLastName: newStaffLastName,
        email: staffEmail,
      });
      await expect(
        userPage.page.getByText('The user was deleted successfully.')
      ).toBeVisible();
      await userPage.page.waitForTimeout(1000);
    } else {
      throw new Error(
        'GROUPADMIN does not have permission to create, edit, and delete users of type Venue Manager or Staff Member.'
      );
    }
  });

  test('@groupadmin - Verify Group Manager can view but not edit or delete other Group Managers in their group.', async () => {
    if (rolePermissions.users.view === 'groupManagersAndStaff') {
      await userPage.navigateToUsersPage();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();

      await userPage.page
        .locator(userPage.selectors.searchUsers)
        .fill('John Princess');

      const groupAdmin = userPage.page.locator(userPage.selectors.groupAdmin);
      const editUserButton = userPage.page
        .locator(userPage.selectors.editUserButton)
        .nth(0);

      await expect(groupAdmin).toBeVisible();
      await groupAdmin.click();
      await userPage.page.waitForTimeout(500);
      await expect(editUserButton).not.toBeVisible();
      await userPage.page
        .locator(userPage.selectors.closeActionsPopUpButton)
        .click();
      await userPage.page.reload();
    } else {
      throw new Error(
        'GROUPADMIN has permission to view other Group Managers in their group.'
      );
    }
  });
});
