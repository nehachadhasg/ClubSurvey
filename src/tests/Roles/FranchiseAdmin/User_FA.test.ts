import {
  test,
  expect,
  chromium,
  Browser,
  BrowserContext,
  Page,
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
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('FRANCHISEADMIN - Users Permissions Tests', () => {
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
    userPage = new UserPage(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
    await userPage.navigateToUsersPage();
    const cards = userPage.page.locator(userPage.selectors.settingsCards);
    await cards.nth(0).click();
    await userPage.page.waitForTimeout(2000);
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@franchiseadmin - Verify Franchise Admin can manage users of all types except Super Admin and other Franchise Admins.', async () => {
    if (
      rolePermissions.users.create === 'allExceptSuperAdminAndFranchiseAdmin' &&
      rolePermissions.users.edit === 'allExceptSuperAdminAndFranchiseAdmin' &&
      rolePermissions.users.delete === 'allExceptSuperAdminAndFranchiseAdmin'
    ) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email();
      await userPage.page.locator(userPage.selectors.addUsersButton).click();
      await userPage.page
        .locator(userPage.selectors.firstNameInput)
        .fill(firstName);
      await userPage.page
        .locator(userPage.selectors.lastNameInput)
        .fill(lastName);
      await userPage.page.locator(userPage.selectors.emailInput).fill(email);
      await page.locator(userPage.selectors.roleSelectInput).click();
      expect(
        page.getByRole('option', { name: 'Franchise Admin' })
      ).not.toBeVisible();
      expect(
        page.getByRole('option', { name: 'Super Admin' })
      ).not.toBeVisible();
      await userPage.page
        .getByRole('option', { name: 'Group Manager' })
        .click();
      await userPage.page.getByRole('button', { name: 'Cancel' }).click();
      await userPage.page.getByRole('button', { name: 'Confirm' }).click();
      await userPage.page
        .locator(userPage.selectors.searchUsers)
        .fill('john_silva@yopmail.com');
        await userPage.page
        .locator(userPage.selectors.searchUsers)
        .clear();
      await userPage.page.getByText('Franchise Manager').click();
      await expect(
        userPage.page.locator(userPage.selectors.editUserButton)
      ).not.toBeVisible();
      await userPage.page
        .locator(userPage.selectors.closeActionsPopUpButton)
        .click();
      await userPage.page.locator(userPage.selectors.searchUsers).clear();
    } else {
      throw new Error(
        'FRANCHISEADMIN does not have permission to edit or delete other Franchise Admin or Super Admin users'
      );
    }
  });

  test('@franchiseadmin - Verify Franchise Admin can view other Franchise Admins within their own franchise but cannot edit or delete them.', async () => {
    if (
      rolePermissions.users.create === 'allExceptSuperAdminAndFranchiseAdmin' &&
      rolePermissions.users.edit === 'allExceptSuperAdminAndFranchiseAdmin' &&
      rolePermissions.users.delete === 'allExceptSuperAdminAndFranchiseAdmin'
    ) {
      await userPage.page.getByText('Filters').click();
      await userPage.page
        .locator('div')
        .filter({ hasText: /^Franchise Admin$/ })
        .first()
        .click();
      await userPage.page.getByText('Apply Now').click();
      await userPage.page.getByText('Franchise Manager').first().click();
      await expect(
        userPage.page.locator(userPage.selectors.editUserButton)
      ).not.toBeVisible();
      await userPage.page
        .locator(userPage.selectors.closeActionsPopUpButton)
        .click();
      await userPage.page.getByText('Filters').click();
      await userPage.page.getByText('Reset All').click();
    } else {
      throw new Error(
        'FRANCHISEADMIN verify view-only access to other Franchise Admins'
      );
    }
  });

  test('@franchiseadmin - Ensure Franchise Admins cannot see Super Admin users in the user list.', async () => {
    if (rolePermissions.users.view === 'allExceptSuperAdmin') {
      await userPage.page.getByText('Filters').click();
      await userPage.page
        .locator('div')
        .filter({ hasText: /^Super Admin$/ })
        .first()
        .click();
      await userPage.page.getByText('Apply Now').click();
      const superAdmin = userPage.page.getByText('Super Admin').nth(0);
      await expect(superAdmin).not.toBeVisible();
      await userPage.page.getByText('Filters').click();
      await userPage.page.getByText('Reset All').click();
    } else {
      throw new Error(
        'FRANCHISEADMIN cannot see Super Admin users in the user list'
      );
    }
  });
});
