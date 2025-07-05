/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';

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
    groupAdmin: 'span[class*="leading-[18px]"]:has-text("Group Manager")',
    franchiseAdmin:
      'span[class*="leading-[18px]"]:has-text("Franchise Manager")',
    groupManager: 'span[class*="leading-[18px]"]:has-text("Group Manager")',
    editUserButton: 'button[class*="font-body"]:has-text("Edit")',
    closeActionsPopUpButton:
      'div[class*="text-greycale-1000 relative z-[15] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-tr-md bg-greyscale-100"]',
    closeActionsPopUpButtonSecondary:'div[class*="flex"][class*="items-center"][class*="justify-between"][class*="bg-background"] > div[class*="cursor-pointer"][class*="h-[40px]"][class*="w-[40px]"]',
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

  async navigateToUsersPage() {
    await this.click(
      this.selectors.settingsbutton,
      'Settings Button',
      'button'
    );
  }

  async createUser({
    firstName,
    lastName,
    email,
    role,
    assignTo
  }: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    assignTo: string;
  }) {
    await this.page.locator(this.selectors.addUsersButton).click();
    await this.page.locator(this.selectors.firstNameInput).fill(firstName.trim());
    await this.page.locator(this.selectors.lastNameInput).fill(lastName.trim());
    await this.page.locator(this.selectors.emailInput).fill(email);
    await this.page.locator(this.selectors.roleSelectInput).click();
    await this.page.getByRole('option', { name: role }).click();
    await this.page.locator(this.selectors.assignToSelectInput).click();
    const userFullName = `${firstName.trim()} ${lastName.trim()}`;
    await this.page.locator('input[placeholder="Search"][type="search"].w-full.text-greyscale-1000').fill(`${assignTo}`.trim());
    await this.page.getByRole('menuitem', { name: assignTo }).click();
    //await this.page.locator(`//div[@role="menuitem"]//p[text()="${assignTo.trim()}"]/ancestor::div[@role="menuitem"]`).click();    
    // console.log(`Selected assignTo: ${assignTo}`);
    await this.page.locator(this.selectors.createUserButton).click();
  }

  async editUser({
    firstName,
    lastName,
    email,
    newFirstName,
    newLastName
  }: {
    firstName: string;
    lastName: string;
    email: string;
    newFirstName: string;
    newLastName: string;
  }) {
    const userFullName = `${firstName} ${lastName}`;
    console.log(`Editing user: ${userFullName} with email: ${email}`);
    await this.page.locator(this.selectors.searchUsers).fill(email);
   
   // await this.page.getByText(`${firstName} ${lastName}`).click();
    await this.page.getByRole('button', { name: new RegExp(`${firstName} ${lastName}`) }).click();    
    await this.page.locator(this.selectors.editUserButton).click();
    await this.page.locator(this.selectors.firstNameInput).fill(newFirstName);
    await this.page.locator(this.selectors.lastNameInput).fill(newLastName);
    await this.page.locator(this.selectors.createUserButton).click();
  }

  async deleteUser({
    newFirstName,
    newLastName,
    email,
  }: {
    newFirstName: string;
    newLastName: string;
    email: string;
  }) {
    await this.page.locator(this.selectors.searchUsers).fill(email);
    await this.page.getByText(`${newFirstName} ${newLastName}`).click();
    await this.page.locator(this.selectors.editUserButton).click();
    await this.page.locator(this.selectors.deleteUserButton).click();
    await this.page.locator(this.selectors.confirmDeleteButton).nth(2).click();
  }
}
