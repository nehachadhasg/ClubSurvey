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
import { FranchiseData } from '../../../../data/franchise.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rolePermissions: any;
let superAdminCredentials: { username: string; password: string };
let users: UserData;
let browser: Browser;
let context: BrowserContext;
let page: Page;
let franchiseData: FranchiseData;
let franchiseName: string;

test.describe('SUPERADMIN - Land on Survey Dashboard tests', () => {
  let navigationPage: Navigation;
  let clubSurveyLogin: ClubSurveyLogin;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    const franchiseFilePath = path.resolve(
      __dirname,
      '../../../../data/franchise.json'
    );
    franchiseData = JsonReader.readJson(franchiseFilePath) as FranchiseData;

    if (!franchiseData || !franchiseData.franchise || !franchiseData.franchise.id) {
      throw new Error('franchise.json is empty or invalid. Please run the data generation script.');
    }
    // Get Franchise Name 
     franchiseName = franchiseData.franchise.name;

    if (!franchiseName) {
      throw new Error('Franchise Name is missing in franchise.json.');
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
    await searchBar.fill(franchiseName);
    const franchiseRow = navigationPage.page.getByRole('cell', {
      name: franchiseName,
    });
    await expect(franchiseRow).toBeVisible();
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
  test.skip('@superadmin - Verify pagination controls are present and functional', async () => {
    const paginationTextShow = navigationPage.page.locator(
      navigationPage.selectors.pagination_text_show
    );
    const paginationDropdown = navigationPage.page.locator(
      navigationPage.selectors.pagination_dropdown
    );
    const paginationPrevious = navigationPage.page.locator(
      navigationPage.selectors.pagination_previous
    );
    const paginationNext = navigationPage.page.locator(
      navigationPage.selectors.pagination_next
    );
    const franchiseTable = navigationPage.page.locator(
      navigationPage.selectors.surveyDashboardFranchisesTable
    );

    await expect(paginationTextShow).toBeVisible();
    await expect(paginationDropdown).toBeVisible();
    await expect(paginationPrevious).toBeVisible();
    await expect(paginationNext).toBeVisible();

    //  Pagination dropdown values
    const options = await paginationDropdown.locator('option').all();
    expect(options.length).toBeGreaterThan(0);

    const perPageOptions = [5, 10, 20, 50, 100];
    const optionValues = await options.values();

     // Assert dropdown contains all expected options
    for (const value of perPageOptions) {
      expect(optionValues).toContain(value);
    }



    // Click on the dropdown and select an option// Example: Collect all rows from a paginated table
    const allRows: string[] = [];

    while (true) {
    // Wait for table rows to be visible
   // await page.waitForSelector(franchiseTable);

    // Get all rows on the current page
    const rows = await page.locator('table[aria-label="groups table"] tbody tr');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
      const rowText = await rows.nth(i).textContent();
      if (rowText) allRows.push(rowText.trim());
    }

    // Check if the "Next page" button is disabled
    const nextButton = page.locator('button[type="button"][aria-label="Next page"]');
    const isDisabled = await nextButton.isDisabled();

    if (isDisabled) break;

    // Go to next page
    await nextButton.click();
    // Optionally wait for table to update
    await page.waitForTimeout(500);
}

// allRows now contains the text of every row across all pages
console.log('Total rows:', allRows.length);
 });

});
