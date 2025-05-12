import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';
import { loadEnvironmentConfig } from '../../config/configLoader';

const environment = loadEnvironmentConfig();

export class UserProfile extends PlaywrightWrapper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public selectors = {
    emailSelector: 'input[placeholder="Insert your email address"]',
    passwordSelector: 'input[placeholder="Enter your password"]',
    clubsmalllogodashboard: 'img[alt="Small Logo"]',
    loginButtonSelector:
      'button[type="submit"][class*="inline-flex"][class*="bg-dark-green"][class*="typography-body-1-bold"]',
    userProfileIconClosed:
      'div[type="button"][data-state="closed"][class*="bg-gold"][class*="text-black"]:has-text("JD")',
    userProfileIconOpen:
      'div[type="button"][data-state="open"][class*="bg-gold"][class*="text-black"]:has-text("JD")',
    dropdownMenu:
      'div[role="menu"][class*="z-50"][class*="min-w-[8rem]"][data-state="open"]',
    myProfileOption: 'div[role="menuitem"]:has-text("My Profile")',
    changePasswordOption: 'div[role="menuitem"]:has-text("Change Password")',
    logoutOption: 'div[role="menuitem"]:has-text("Logout")',
    myProfileHeader:
      'h1[class*="typography-heading-1"][class*="text-greyscale-1000"]:has-text("My Profile")',
    detailsSectionHeader:
      'h3[class*="typography-heading-3"]:has-text("Details")',
    passwordSectionHeader:
      'h3[class*="typography-heading-3"]:has-text("Password")',
    languageSectionHeader:
      'h3[class*="typography-heading-3"]:has-text("Language")',
    updateButton:
      'button[class*="inline-flex"][class*="bg-dark-green"][class*="font-body"][class*="text-greyscale-0"]:has-text("Update")',
    firstNameInput: 'input[placeholder="Enter your first name"]',
    surnameInput: 'input[placeholder="Enter your surname"]',
    emailInput: 'input[placeholder="Enter your email"]',
    roleSelectInput:
      'button[role="combobox"][name="role"][class*="h-10"][class*="rounded-sm"]',
    changePasswordButton:
      'button[class*="font-body"][type="button"]:has-text("Change Password")',
    currentPasswordInput:
      'input[placeholder="Enter your current password"][name*="currentPassword"]',
    newPasswordInput:
      'input[placeholder="Enter your password"][name*="password"]',
    confirmNewPasswordInput:
      'input[placeholder="Enter your password"][name*="confirmPassword"]',
    cancelChangePasswordButton:
      'button[class*="font-body"][type="button"]:has-text("Cancel")',
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in UserProfile');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async UserProfile(
    role: 'SUPER_ADMIN' | 'FRANCHISE_ADMIN' | 'GROUP_ADMIN' | 'VENUE_ADMIN'
  ) {
    const { username, password } = environment.credentials[role];
    await this.loadApp(environment.baseURL);

    const pageTitle = await this.page.title();
    if (pageTitle.startsWith('59club')) {
      await this.type(this.selectors.emailSelector, 'Username', username);
      await this.type(this.selectors.passwordSelector, 'Password', password);
      await this.click(this.selectors.loginButtonSelector, 'Sign In', 'Button');
      await this.wait('minWait');
      await this.validateElementVisibility(
        this.selectors.clubsmalllogodashboard,
        'Club Small Logo'
      );
    } else {
      console.log('Login page is Skipped');
    }
  }
}
