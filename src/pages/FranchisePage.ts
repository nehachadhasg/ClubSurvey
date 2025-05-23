/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Page, BrowserContext } from '@playwright/test';
import { PlaywrightWrapper } from '../../helpers/playwright';

export class FranchisePage extends PlaywrightWrapper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public selectors = {
    settingsbutton:
      'li[data-sidebar="menu-item"] a[href="/en-GB/settings"] button[data-sidebar="menu-button"]',
    addFranchiseButton: 'button[class*="font-body"]:has-text("Add Franchise")',
    deleteFranchiseButton:
      'button[class*="font-body"]:has-text("Delete Franchise")',
    confirmDeleteButton:
      'button[class*="!bg-error-400"]:has-text("Delete Franchise")',
    settingsCards:
      'div[class*="h-[180px]"][class*="rounded-[16px]"][class*="cursor-pointer"]',
    franchisesTableHeading:
      'h1[class*="typography-heading-2"]:has-text("Franchises")',
    editFranchiseButton: 'button[class*="font-body"]:has-text("Edit")',
    searchFranchise: 'input[type="search"]',
    franchiseNameInput: 'input[placeholder="Enter Franchise Name"]',
    firstNameInput: 'input[placeholder="Enter First Name"]',
    lastNameInput: 'input[placeholder="Enter Last Name"]',
    emailInput: 'input[placeholder="Enter Email Address"]',
    createFranchiseButton: 'button[class*="font-body"]:has-text("Save")',
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in FranchisePage');
  }

  async navigateToFranchise() {
    await this.click(
      this.selectors.settingsbutton,
      'Settings Button',
      'button'
    );
  }

  async createFranchise({
    franchiseName,
    firstName,
    lastName,
    email,
  }: {
    franchiseName: string;
    firstName: string;
    lastName: string;
    email: string;
  }) {
    await this.page.locator(this.selectors.addFranchiseButton).click();
    await this.page
      .locator(this.selectors.franchiseNameInput)
      .fill(franchiseName);
    await this.page.locator(this.selectors.firstNameInput).fill(firstName);
    await this.page.locator(this.selectors.lastNameInput).fill(lastName);
    await this.page.locator(this.selectors.emailInput).fill(email);
    await this.page.locator(this.selectors.createFranchiseButton).click();
  }

  async editFranchise({ franchiseName }: { franchiseName: string }) {
    await this.page.locator(this.selectors.searchFranchise).fill(franchiseName);
    await this.page.getByText(franchiseName).click();
    await this.page.locator(this.selectors.editFranchiseButton).click();
    await this.page.locator(this.selectors.firstNameInput).fill('Fiona');
    await this.page.locator(this.selectors.lastNameInput).fill('Almighty');
    await this.page.locator(this.selectors.createFranchiseButton).click();
  }

  async deleteFranchise({ franchiseName }: { franchiseName: string }) {
    await this.page.locator(this.selectors.searchFranchise).fill(franchiseName);
    await this.page.getByText(franchiseName).click();
    await this.page.locator(this.selectors.editFranchiseButton).click();
    await this.page.locator(this.selectors.deleteFranchiseButton).click();
    await this.page.locator(this.selectors.confirmDeleteButton).click();
  }
}
