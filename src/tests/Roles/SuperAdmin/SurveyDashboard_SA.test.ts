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
import { Navigation } from '../../../pages/Navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe('SUPERADMIN - Land on Survey Dashboard tests', () => {
  let navigationPage: Navigation;
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
      throw new Error('Super Admin credentials are missing in users.json.');
    }

    superAdminCredentials = {
      username: superAdminUser.username,
      password: superAdminUser.password,
    };
    rolePermissions = ROLE_CONFIG['SUPERADMIN'];
    if (!rolePermissions) {
      throw new Error('Super Admin permissions are missing in roleConfig.ts.');
    }

    clubSurveyLogin = new ClubSurveyLogin(page, context);
    navigationPage = new Navigation(page, context);

    await clubSurveyLogin.ClubSurveyLogin({
      username: superAdminCredentials.username,
      password: superAdminCredentials.password,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@superadmin - Verify the survey dashboard loads correctly for a Super Admin after login.', async () => {
    const metricsDashboard = navigationPage.page.locator(
      navigationPage.selectors.metricsDashboard
    );
    const franchisesTable = navigationPage.page.locator(
      navigationPage.selectors.franchisesTable
    );
    const filtersButton = navigationPage.page.locator(
      navigationPage.selectors.filtersButton
    );
    await expect(metricsDashboard).toBeVisible();
    await expect(franchisesTable).toBeVisible();
    await expect(filtersButton).toBeVisible();
  });

  test('@superadmin - Verify that the search bar and filter panel open and are usable', async () => {
    const searchBar = navigationPage.page.locator(
      navigationPage.selectors.searchBar
    );
    const filtersButton = navigationPage.page.locator(
      navigationPage.selectors.filtersButton
    );
    await searchBar.fill('Solutions');
    const solutionsRow = navigationPage.page.getByRole('cell', {
      name: 'Solutions',
    });
    await expect(solutionsRow).toBeVisible();
    await filtersButton.click();
    await expect(
      navigationPage.page.locator(navigationPage.selectors.applyFiltersButton)
    ).toBeVisible();
  });

  test('@superadmin - Ensure metrics (venues, surveys, active, participation, completion) appear properly', async () => {
    const metricsDashboardDiv = navigationPage.page.locator(
      navigationPage.selectors.metricsDashboardDiv
    );
    const metrics = await metricsDashboardDiv.all();
    expect(metrics.length).toBe(5);
    for (const metric of metrics) {
      await expect(metric).toBeVisible();
    }
    const venuesMetric = metricsDashboardDiv.nth(0);
    const surveysMetric = metricsDashboardDiv.nth(1);
    const activeMetric = metricsDashboardDiv.nth(2);
    const participationMetric = metricsDashboardDiv.nth(3);
    const completionMetric = metricsDashboardDiv.nth(4);
    await expect(venuesMetric).toContainText('Venues');
    await expect(surveysMetric).toContainText('Surveys');
    await expect(activeMetric).toContainText('Active Surveys');
    await expect(participationMetric).toContainText('Avg. Participation');
    await expect(completionMetric).toContainText('Avg. Completion');
  });
});
