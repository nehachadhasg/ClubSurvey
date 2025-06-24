import { test, expect } from '@playwright/test';
import { SANITY_TAG } from '../../../constants/tags';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { Navigation } from '../../pages/Navigation';
import { Page } from 'playwright';

const environment = loadEnvironmentConfig();
let navigation: Navigation;

const login = async (page: Page) => {
  const emailInput = page.locator(navigation.selectors.emailSelector);
  const passwordInput = page.locator(navigation.selectors.passwordSelector);
  const loginButton = page.locator(navigation.selectors.loginButtonSelector);
  await emailInput.fill(environment.credentials.SUPER_ADMIN.username);
  await passwordInput.fill(environment.credentials.SUPER_ADMIN.password);
  await loginButton.click();
  await page.waitForTimeout(1000);
};

test.beforeEach(async ({ page, context }) => {
  navigation = new Navigation(page, context);
  await navigation.loadApp(environment.baseURL);
});

test(`SANITY-CLUB59-NAVIGATION-01: Log in with a valid user credential ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-01' },
    {
      type: 'Test Description',
      description: 'Log in with a valid user credential',
    }
  );
  await test.step('Login to the platform', async () => {
    await login(page);
    const dashboardLogo = page.locator(navigation.selectors.clubSmallLogo);
    await expect(dashboardLogo).toBeVisible();
  });
  await test.step('Land on the dashboard', async () => {
    const dashboardLogo = page.locator(navigation.selectors.clubSmallLogo);
    await expect(dashboardLogo).toBeVisible();
  });
});

test(`SANITY-CLUB59-NAVIGATION-02: Verify navigation bar is visible and can be toggled ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-02' },
    {
      type: 'Test Description',
      description: 'Verify navigation bar is visible and can be toggled',
    }
  );
  await test.step('Login', async () => {
    await login(page);
  });
  await test.step('Button to toggle the sidebar is visible', async () => {
    const openSidebarButton = page.locator(
      navigation.selectors.openSidebarButton
    );
    await expect(openSidebarButton).toBeVisible();
  });
  await test.step('Navigation bar toggles between expanded and collapsed view', async () => {
    const smallLogo = page.locator(navigation.selectors.clubSmallLogo);
    const largeLogo = page.locator(navigation.selectors.clubLargeLogo);
    const openSidebarButton = page.locator(
      navigation.selectors.openSidebarButton
    );
    await expect(smallLogo).toBeVisible();
    await expect(largeLogo).not.toBeVisible();
    await openSidebarButton.click();
    await expect(largeLogo).toBeVisible();
    await expect(smallLogo).not.toBeVisible();
    await openSidebarButton.click();
    await expect(smallLogo).toBeVisible();
    await expect(largeLogo).not.toBeVisible();
  });
});

// TEST IS SKIPPED SINCE DEFAULT INITIAL PAGE IS NOT "OVERVIEW" BUT "DASHBOARDS" - Overview page is still in development
// TODO: UN-SKIP THIS TEST WHEN OVERVIEW PAGE IS READY
test.skip(`SANITY-CLUB59-NAVIGATION-03: Verify 'Overview' tab is highlighted when on landing dashboard ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-03' },
    {
      type: 'Test Description',
      description:
        'Verify "Overview" tab is highlighted when on landing dashboard',
    }
  );
  await test.step('Login', async () => {
    await login(page);
  });
  await test.step('"Overview" icon is highlighted', async () => {
    const overviewIcon = page
      .locator(navigation.selectors.navLinkSelected)
      .nth(0);
    await expect(overviewIcon).toHaveClass(/active/);
  });
});

test(`SANITY-CLUB59-NAVIGATION-04: Verify user can navigate to 'Surveys' dashboard via navigation icon ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-04' },
    {
      type: 'Test Description',
      description:
        'Verify user can navigate to "Surveys" dashboard via navigation icon',
    }
  );
  await test.step('Login', async () => {
    await login(page);
  });
  await test.step('Click on the "Surveys" icon in the navigation bar', async () => {
    const surveysIcon = page.locator(navigation.selectors.surveyNavLink);
    await surveysIcon.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Verify user is redirected to "Surveys" dashboard', async () => {
    await expect(page).toHaveURL(/dashboards/);
  });
});

test(`SANITY-CLUB59-NAVIGATION-05: Verify clicking the logo redirects user to 59club site in a new tab ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-05' },
    {
      type: 'Test Description',
      description:
        'Verify clicking the logo redirects user to 59club site in a new tab',
    }
  );
  await test.step('Login', async () => {
    await login(page);
  });
  await test.step('Click on the 59club logo in the navigation bar', async () => {
    const clubLogo = page.locator(navigation.selectors.clubSmallLogo);
    await clubLogo.click();
    await page.waitForTimeout(1000);
  });
  await test.step('A new tab opens with https://www.59club.com/', async () => {
    const newPage = await page.context().waitForEvent('page');
    await expect(newPage).toHaveURL(/59club/);
  });
});

test(`SANITY-CLUB59-NAVIGATION-06: Verify user can select franchise and view related dashboard ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-06' },
    {
      type: 'Test Description',
      description:
        'Verify user can select franchise and view related dashboard',
    }
  );
  await test.step('Login and navigate to "/dashboards" page', async () => {
    await login(page);
    const surveysIcon = page.locator(navigation.selectors.surveyNavLink);
    await surveysIcon.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Click on Franchise dropdown and select a franchise', async () => {
    const franchiseDropdown = page.locator(
      navigation.selectors.franchiseDropdown
    );
    await franchiseDropdown.click();
    const asiaFranchise = page.locator(
      navigation.selectors.asiaFranchiseOption
    );
    await asiaFranchise.click();
    await page.waitForTimeout(1000);
  });
  await test.step('User is navigated to the selected franchise dashboard', async () => {
    const dashboardHeading = page.locator(
      navigation.selectors.dashboardHeading
    );
    await expect(dashboardHeading).toHaveText('Elite Fairway Golf Group');
  });
});

test(`SANITY-CLUB59-NAVIGATION-07: Verify user can navigate using group and venue dropdowns ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-07' },
    {
      type: 'Test Description',
      description: 'Verify user can navigate using group and venue dropdowns',
    }
  );
  await test.step('Login and navigate to "/dashboards" page', async () => {
    await login(page);
    const surveysIcon = page.locator(navigation.selectors.surveyNavLink);
    await surveysIcon.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Select group and venue from respective dropdowns', async () => {
    const franchiseDropdown = page.locator(
      navigation.selectors.franchiseDropdown
    );
    await franchiseDropdown.click();
    const asiaFranchise = page.locator(
      navigation.selectors.asiaFranchiseOption
    );
    await asiaFranchise.click();
    const groupDropdown = page.locator(navigation.selectors.groupDropdown);
    await groupDropdown.click();
    const premiumGolfGroup = page.locator(
      navigation.selectors.premiumGolfGroupOption
    );
    await premiumGolfGroup.click();
    const venueDropdown = page.locator(navigation.selectors.venueDropdown);
    await venueDropdown.click();
    const capeTownVenue = page.locator(
      navigation.selectors.capeTownVenueOption
    );
    await capeTownVenue.click();
  });
  await test.step('User is navigated to corresponding dashboards', async () => {
    const dashboardHeading = page.locator(
      navigation.selectors.dashboardHeading
    );
    await expect(dashboardHeading).toHaveText(/Stonebridge Golf & Country Estate/);
  });
});

test(`SANITY-CLUB59-NAVIGATION-08: Verify profile icon shows initials and dropdown options ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-08' },
    {
      type: 'Test Description',
      description: 'Verify profile icon shows initials and dropdown options',
    }
  );
  await test.step('Login and navigate to "/dashboards" page', async () => {
    await login(page);
    const surveysIcon = page.locator(navigation.selectors.surveyNavLink);
    await surveysIcon.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Click on the profile icon on the top right', async () => {
    const profileIcon = page.locator(
      navigation.selectors.userProfileIconClosed
    );
    await profileIcon.click();
  });
  await test.step('Dropdown with "My Profile", "Change Password", and "Log out" appears', async () => {
    const dropdownMenu = page.locator(navigation.selectors.dropdownMenu);
    await expect(dropdownMenu).toBeVisible();
    const myProfileOption = page.locator(navigation.selectors.myProfileOption);
    await expect(myProfileOption).toBeVisible();
    const changePasswordOption = page.locator(
      navigation.selectors.changePasswordOption
    );
    await expect(changePasswordOption).toBeVisible();
    const logoutOption = page.locator(navigation.selectors.logoutOption);
    await expect(logoutOption).toBeVisible();
  });
});

test(`SANITY-CLUB59-NAVIGATION-09: Verify 'My Profile' redirects to the profile page ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-09' },
    {
      type: 'Test Description',
      description: 'Verify "My Profile" redirects to the profile page',
    }
  );
  await test.step('Login and navigate to "/dashboards" page', async () => {
    await login(page);
    const surveysIcon = page.locator(navigation.selectors.surveyNavLink);
    await surveysIcon.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Click on "My Profile"', async () => {
    const profileIcon = page.locator(
      navigation.selectors.userProfileIconClosed
    );
    await profileIcon.click();
    const myProfileOption = page.locator(navigation.selectors.myProfileOption);
    await myProfileOption.click();
  });
  await test.step('User is navigated to their profile page', async () => {
    await expect(page).toHaveURL(/my-profile/);
  });
});

test(`SANITY-CLUB59-NAVIGATION-10: Verify 'Log out' functionality from profile menu ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-NAVIGATION-10' },
    {
      type: 'Test Description',
      description: 'Verify "Log out" functionality from profile menu',
    }
  );
  await test.step('Login and navigate to "/dashboards" page', async () => {
    await login(page);
    const surveysIcon = page.locator(navigation.selectors.surveyNavLink);
    await surveysIcon.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Click on "Log out"', async () => {
    const profileIcon = page.locator(
      navigation.selectors.userProfileIconClosed
    );
    await profileIcon.click();
    const logoutOption = page.locator(navigation.selectors.logoutOption);
    await logoutOption.click();
  });
  await test.step('User is logged out and redirected to the login screen', async () => {
    await expect(page).toHaveURL(/login/);
  });
});
