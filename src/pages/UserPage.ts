/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';
import { loadEnvironmentConfig } from '../../config/configLoader';

export class UserPage extends PlaywrightWrapper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public selectors = {
    settingsbutton:
      'li[data-sidebar="menu-item"] a[href="/en-GB/settings"] button[data-sidebar="menu-button"]',
    usersButton:
      'div.flex.cursor-pointer.rounded-[16px].border.border-greyscale-200.bg-white',
    addUsersButton: 'button[class*="font-body"]:has-text("Add Users")',
    deleteUserButton:
      'button[class*="bg-error-100"]:has-text("Delete Account")',
    confirmDeleteButton: 'button[class*="bg-dark-green"]:has-text("Confirm")',
    userTable: 'table#usersTable',
    settingsCards:
      'div[class*="h-[180px]"][class*="rounded-[16px]"][class*="cursor-pointer"]',
    usersTableHeading: 'h1[class*="typography-heading-2"]:has-text("Users")',
    selectPerPage: 'button[type="button"][role="combobox"][name="page-size"]',
    twentyPerPage: 'span:has-text("20")',
    staffMember: 'span[class*="leading-[18px]"]:has-text("Staff Member")',
    translator: 'span[class*="leading-[18px]"]:has-text("Translator")',
    venueManager: 'span[class*="leading-[18px]"]:has-text("Venue Manager")',
    superAdmin: 'span[class*="leading-[18px]"]:has-text("Super Admin")',
    franchiseAdmin:
      'span[class*="leading-[18px]"]:has-text("Franchise Manager")',
    groupManager: 'span[class*="leading-[18px]"]:has-text("Group Manager")',
    editUserButton: 'button[class*="font-body"]:has-text("Edit")',
    closeActionsPopUpButton:
      'div[class*="text-greycale-1000 relative z-[15] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-tr-md bg-greyscale-100"]',
    tableRow: 'tr[class*="hover:bg-muted/50"]',
    rowActionsCell:
      'div[class*="h-8"][class*="w-8"][class*="cursor-pointer"][class*="hover:bg-greyscale-300"]',
    searchUsers: 'input[placeholder="Search..."][type="search"]',
    firstNameInput:
      'input[placeholder="Enter your first name"][name="firstName"]',
    lastNameInput: 'input[placeholder="Enter your last name"][name="lastName"]',
    emailInput: 'input[placeholder="Enter your email"][name="email"]',
    roleSelectInput: 'button[name="user-role"][data-testid="user-role-select"]',
    assignToSelectInput: 'button[type="button"]:has-text("Select")',
    createUserButton: 'button[class*="font-body"]:has-text("Save")',
    deleteUserModalHeading:
      'h2[class*="typography-heading-2"]:has-text("Are you sure you want to delete this user?")',
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in UserPage');
  }

  // Navigate to the Users page
  async navigateToUsersPage() {
    await this.click(
      this.selectors.settingsbutton,
      'Settings Button',
      'button'
    );
    // await this.click(this.selectors.usersButton, 'Users Button', 'button');
  }

  async createUser({
    firstName,
    lastName,
    email,
  }: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    await this.page.locator(this.selectors.addUsersButton).click();
    await this.page.locator(this.selectors.firstNameInput).fill(firstName);
    await this.page.locator(this.selectors.lastNameInput).fill(lastName);
    await this.page.locator(this.selectors.emailInput).fill(email);
    await this.page.locator(this.selectors.roleSelectInput).click();
    await this.page.getByRole('option', { name: 'Franchise Admin' }).click();
    await this.page.locator(this.selectors.assignToSelectInput).click();
    await this.page.getByRole('menuitem', { name: '59Club Asia' }).click();
    await this.page.locator(this.selectors.createUserButton).click();
  }

  async editUser({
    firstName,
    lastName,
    email,
  }: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    await this.page.locator(this.selectors.searchUsers).fill(email);
    await this.page.getByText(`${firstName} ${lastName}`).click();
    await this.page.locator(this.selectors.editUserButton).click();
    await this.page.locator(this.selectors.firstNameInput).fill('Fiona');
    await this.page.locator(this.selectors.lastNameInput).fill('Almighty');
    await this.page.locator(this.selectors.createUserButton).click();
  }

  async deleteUser({ email }: { email: string }) {
    await this.page.locator(this.selectors.searchUsers).fill(email);
    await this.page.getByText('Fiona Almighty').click();
    await this.page.locator(this.selectors.editUserButton).click();
    await this.page.locator(this.selectors.deleteUserButton).click();
    await this.page.locator(this.selectors.confirmDeleteButton).nth(1).click();
  }

  // Validate that the Users table is visible
  async validateUsersTableVisible() {
    // await this.validateElementVisibility(this.selectors.userTable, 'Users Table');
  }
}
