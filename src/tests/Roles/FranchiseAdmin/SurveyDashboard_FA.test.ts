import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { FranchisePage } from '../../../pages/FranchisePage';
import { ClubSurveyLogin } from '../../../pages/ClubSurveyLogin';
import { ROLE_CONFIG } from '../../../../constants/roleConfig';
import { JsonReader } from '../../../../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../../../../data/users.interface';
import { FranchiseData } from '../../../../data/franchise.interface';
import { Navigation } from '../../../pages/Navigation';
import { GroupData } from '../../../../data/group.interface';import { fr } from '@faker-js/faker';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let franchisePage: FranchisePage;
let clubSurveyLogin: ClubSurveyLogin;
let rolePermissions: any;
let franchiseAdminCredentials: { username: string; password: string };
let users: UserData;
let franchiseData: FranchiseData;
let franchiseName: string;
let groupData: GroupData;
let groupName: string;

test.describe('FRANCHISEADMIN - Land on Survey Dashboard tests', () => {

  let navigationPage: Navigation;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    // Load users data
    const usersFilePath = path.resolve(__dirname, '../../../../data/users.json');
    const franchiseFilePath = path.resolve(__dirname, '../../../../data/franchise.json');
    const groupFilePath = path.resolve(__dirname,'../../../../data/group.json');
    users = JsonReader.readJson(usersFilePath) as UserData;
    franchiseData = JsonReader.readJson(franchiseFilePath) as FranchiseData;
    groupData = JsonReader.readJson(groupFilePath) as GroupData;
        
      if (!groupData || !groupData.group || !groupData.group.id) {
        throw new Error('group.json is empty or invalid. Please run the data generation script.');
      }
      // Get Group Name 
      groupName = groupData.group.name;
        
        if (!groupName) {
          throw new Error('Group Name is missing in franchise.json.');
      }


    if (!users || Object.keys(users).length === 0) {
      throw new Error('users.json is empty or invalid. Please run the data generation script.');
    }
    if (!franchiseData || !franchiseData.franchise || !franchiseData.franchise.id) {
      throw new Error('franchise.json is empty or invalid. Please run the data generation script.');
    }

    // Get Franchise Admin credentials
    const franchiseAdminUser = Object.values(users).find(
      (user: any) => user.role_id === 2
    );

    if (!franchiseAdminUser?.username || !franchiseAdminUser?.password) {
      throw new Error('Franchise Admin credentials are missing in users.json.');
    }

    franchiseAdminCredentials = {
      username: franchiseAdminUser.username,
      password: franchiseAdminUser.password,
    };

    // Get Franchise Name 
     franchiseName = franchiseData.franchise.name;

    if (!franchiseName) {
      throw new Error('Franchise Name is missing in franchise.json.');
    }


    // Get Franchise Admin permissions
    rolePermissions = ROLE_CONFIG['FRANCHISEADMIN'];
    if (!rolePermissions) {
      throw new Error('Franchise Admin permissions are missing in roleConfig.ts.');
    }

    // Initialize page objects
    clubSurveyLogin = new ClubSurveyLogin(page, context);
    franchisePage = new FranchisePage(page, context);
    navigationPage = new Navigation(page, context);

    // Login as Franchise Admin
    await clubSurveyLogin.ClubSurveyLogin({
      username: franchiseAdminCredentials.username,
      password: franchiseAdminCredentials.password,
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('@franchiseadmin - Verify franchise admin is redirected to the Survey Dashboard upon login.', async () => {
    const groupDropdown = franchisePage.page.locator(franchisePage.selectors.groupDropdown);
    const venueDropdown = franchisePage.page.locator(franchisePage.selectors.venueDropdown);
    const franchiseHeading = franchisePage.page.getByRole('heading', { name: franchiseName });

    await expect(groupDropdown).toBeVisible();
    await expect(venueDropdown).toBeVisible();
    await expect(franchiseHeading).toBeVisible();
  });
    test('@superadmin - Verify that the search bar and filter panel open and are usable', async () => {
      const searchBar = navigationPage.page.locator(
        navigationPage.selectors.searchBar
      );
      const filtersButton = navigationPage.page.locator(
        navigationPage.selectors.filtersButton
      );
      await searchBar.fill(groupName);
      const groupRow = navigationPage.page.getByRole('cell', {
        name: groupName,
      });
      await expect(groupRow).toBeVisible();
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

    test('@superadmin - Pagination: Show X of X groups when rows < 10', async () => {
  // Locate the table rows for groups
  const groupRows = navigationPage.page.locator('table[aria-label="groups table"] tbody tr');
  const rowCount = await groupRows.count();

  // Only run the assertion if there are less than 10 rows
  if (rowCount < 10) {
    // Locate the pagination summary text (adjust selector as needed)
    const paginationText = navigationPage.page.locator('text=Show').first();
    // Example: "Show 7 of 7 groups"
    const textContent = await paginationText.textContent();

    // Extract the numbers from the text
    const match = textContent?.match(/Show\s+(\d+)\s+of\s+(\d+)\s+groups/i);
    expect(match).not.toBeNull();

    const shownCount = Number(match![1]);
    const totalCount = Number(match![2]);

    // Assert that both numbers match the actual row count
    expect(shownCount).toBe(rowCount);
    expect(totalCount).toBe(rowCount);
  }
});
  
});