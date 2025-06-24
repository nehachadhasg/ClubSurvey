import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';
import { loadEnvironmentConfig } from '../../config/configLoader';

const environment = loadEnvironmentConfig();

export class Navigation extends PlaywrightWrapper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public selectors = {
    emailSelector: 'input[placeholder="Insert your email address"]',
    passwordSelector: 'input[placeholder="Enter your password"]',
    clubSmallLogo: 'img[alt="59club logo"][width="24"]',
    clubLargeLogo: 'img[alt="59club logo"][width="51"]',
    loginButtonSelector:
      'button[type="submit"][class*="inline-flex"][class*="bg-dark-green"][class*="typography-body-1-bold"]',
    openSidebarButton: 'button[aria-label="Toggle sidebar"]',
    overviewNavLink: 'a[href="/en-GB/overview"]',
    surveyNavLink: 'a[href="/en-GB/dashboards"]',
    misteryShoppingNavLink: 'a[href="https://app.59club.com/"]',
    mentorNavLink: 'a[href="https://app.my59mentor.com/"]',
    navLinkSelected: 'li[data-sidebar="menu-item"]',
    franchiseDropdown: 'button[type="button"]:has-text("All Franchises")',
    groupDropdown: 'button[type="button"]:has-text("All Groups")',
    venueDropdown: 'button[type="button"]:has-text("All Venues")',
    asiaFranchiseOption: 'div[data-value="Elite Fairway Golf Group"]',
    premiumGolfGroupOption: 'div[data-value="Northern Region Clubs"]',
    capeTownVenueOption: 'div[data-value="Stonebridge Golf & Country Estate"]',
    dashboardHeading: 'h1[class*="typography-heading-2"]',
    dropdownMenu:
      'div[role="menu"][class*="z-50"][data-state="open"]',
    userProfileIconClosed:
      'div[type="button"][data-state="closed"][class*="bg-gold"][class*="text-black"]:has-text("CD")',
    myProfileOption: 'div[role="menuitem"]:has-text("My Profile")',
    changePasswordOption: 'div[role="menuitem"]:has-text("Change Password")',
    logoutOption: 'div[role="menuitem"]:has-text("Logout")',
    metricsDashboard: 'div[aria-label="Dashboard Statistics"]',
    franchisesTable: 'table[aria-label="franchises table"]',
    filtersButton: 'button[aria-label="Filters - Open filter menu"]',
    searchBar: 'input[placeholder="Search..."]',
    applyFiltersButton: 'button:has-text("Apply Now")',
    metricsDashboardDiv: 'div[class*="relative flex w-1/4 flex-col pl-6"]',
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in Navigation');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async Navigation(
    role: 'SUPER_ADMIN' | 'FRANCHISE_ADMIN' | 'GROUP_ADMIN' | 'VENUE_ADMIN'
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { username, password } = environment.credentials[role];
    await this.loadApp(environment.baseURL);

    const pageTitle = await this.page.title();
    if (pageTitle.startsWith('59club')) {
      await this.type(this.selectors.emailSelector, 'Username', username);
      await this.type(this.selectors.passwordSelector, 'Password', password);
      await this.page.getByRole('button', { name: 'Login button' }).click();
      await this.page.waitForTimeout(1000);
      await this.validateElementVisibility(
        this.selectors.clubSmallLogo,
        'Club Small Logo'
      );
    } else {
      console.log('Login page is Skipped');
    }
  }
}
