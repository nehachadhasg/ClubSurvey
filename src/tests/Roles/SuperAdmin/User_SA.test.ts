import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from '@playwright/test';
import { UserPage } from '../../../pages/UserPage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import { faker } from '@faker-js/faker/locale/en';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Users Permissions Tests', () => {
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
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
    await userPage.navigateToUsersPage();
  });

  test('@superadmin - Verify Super Admin has access to all tabs in the Settings section.', async () => {
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
  });

  test('@superadmin - Verify Super Admin can view all user types including other Super Admins.', async () => {
    if (rolePermissions.users.view === 'all') {
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      await userPage.page.waitForTimeout(1000);
      const usersTableHeading = userPage.page.locator(
        userPage.selectors.usersTableHeading
      );
      await expect(usersTableHeading).toBeVisible();
      const selectPerPage = userPage.page.locator(
        userPage.selectors.selectPerPage
      );
      await selectPerPage.click();
      const twentyPerPage = userPage.page.locator(
        userPage.selectors.twentyPerPage
      );
      await twentyPerPage.click();
      const staffMember = userPage.page
        .locator(userPage.selectors.staffMember)
        .nth(0);
      const translator = userPage.page
        .locator(userPage.selectors.translator)
        .nth(0);
      const venueManager = userPage.page
        .locator(userPage.selectors.venueManager)
        .nth(0);
      const franchiseAdmin = userPage.page
        .locator(userPage.selectors.franchiseAdmin)
        .nth(0);
      const groupManager = userPage.page
        .locator(userPage.selectors.groupManager)
        .nth(0);
      const superAdmin = userPage.page
        .locator(userPage.selectors.superAdmin)
        .nth(0);
      await expect(staffMember).toBeVisible();
      await expect(translator).toBeVisible();
      await expect(venueManager).toBeVisible();
      await expect(franchiseAdmin).toBeVisible();
      await expect(groupManager).toBeVisible();
      await expect(superAdmin).toBeVisible();
    } else {
      throw new Error('SUPERADMIN does not have permission to view users.');
    }
  });

  test('@superadmin - Ensure Super Admin cannot edit or delete other Super Admin users.', async () => {
    if (rolePermissions.users.edit === 'allExceptSuperAdmin') {
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      await userPage.page.waitForTimeout(1000);
      const superAdmin = userPage.page
        .locator(userPage.selectors.superAdmin)
        .nth(0);
      const editUserButton = userPage.page
        .locator(userPage.selectors.editUserButton)
        .nth(0);
      await expect(superAdmin).toBeVisible();
      await superAdmin.click();
      await userPage.page.waitForTimeout(500);
      await expect(editUserButton).not.toBeVisible();
    } else {
      throw new Error(
        'SUPERADMIN does not have permission to edit or delete other Super Admin users.'
      );
    }
  });

  test('@superadmin - Verify Super Admin can create, edit, and delete non-Super Admin users.', async () => {
    if (
      rolePermissions.users.create === 'allExceptSuperAdmin' &&
      rolePermissions.users.edit === 'allExceptSuperAdmin' &&
      rolePermissions.users.delete === 'allExceptSuperAdmin'
    ) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email();
      const cards = userPage.page.locator(userPage.selectors.settingsCards);
      await cards.nth(0).click();
      await userPage.page.waitForTimeout(2000);
      await userPage.createUser({ firstName, lastName, email });
      await userPage.page.waitForTimeout(2000);
      await userPage.editUser({ firstName, lastName, email });
      await userPage.page.waitForTimeout(2000);
      await userPage.deleteUser({ email });
      await expect(
        userPage.page.getByText('The user was deleted successfully.')
      ).toBeVisible();
    } else {
      throw new Error(
        'SUPERADMIN does not have permission to create, edit, or delete non-Super Admin users.'
      );
    }
  });

  // Test: Validate Create Permission
  // test('@superadmin - Validate Create Permission', async () => {
  //   if (rolePermissions.users.create !== 'allExceptSuperAdmin') {
  //     await userPage.navigateToUsersPage();
  //   //  await userPage.createUser('newuser@example.com', 'Password123', 'VenueAdmin');
  //   } else {
  //     throw new Error('SUPERADMIN does not have permission to create users.');
  //   }
  // });

  // // Test: Validate Edit Permission
  // test('@superadmin - Validate Edit Permission', async () => {
  //   if (rolePermissions.users.edit !== 'allExceptSuperAdmin') {
  //     await userPage.navigateToUsersPage();
  //   //  await userPage.editUser('newuser@example.com', 'GroupAdmin');
  //   } else {
  //     throw new Error('SUPERADMIN does not have permission to edit users.');
  //   }
  // });

  // // Test: Validate Delete Permission
  // test('@superadmin - Validate Delete Permission', async () => {
  //   if (rolePermissions.users.delete !== 'allExceptSuperAdmin') {
  //     await userPage.navigateToUsersPage();
  //   //  await userPage.deleteUser('newuser@example.com');
  //   } else {
  //     throw new Error('SUPERADMIN does not have permission to delete users.');
  //   }
  // });
});
