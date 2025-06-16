/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';

export class VenuePage extends PlaywrightWrapper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  selectors = {
    settingsbutton:
      'li[data-sidebar="menu-item"] a[href="/en-GB/settings"] button[data-sidebar="menu-button"]',
    addVenueDropdownButton:
      'button[class*="font-body"][aria-haspopup="menu"]:has-text("Add")',
    dropdownOptionButton: 'div[role="menuitem"]',
    deleteVenueButton: 'button[class*="font-body"]:has-text("Delete Venue")',
    confirmDeleteButton:
      'button[class*="!bg-error-400"]:has-text("Delete Venue")',
    settingsCards:
      'div[class*="h-[180px]"][class*="rounded-[16px]"][class*="cursor-pointer"]',
    venuesTableHeading: 'h1[class*="typography-heading-2"]:has-text("Venues")',
    editVenueButton: 'button[class*="font-body"]:has-text("Edit")',
    searchVenue: 'input[type="search"]',
    venueNameInput: 'input[placeholder="Enter Venue Name"]',
    franchiseSelectInput:
      'button[class*="font-body"]:has-text("Select Franchise")',
    franchiseOptionButton:
      'p[class*="typography-body-1"]:has-text("59Club Asia")',
    groupSelectInput: 'button[class*="font-body"]:has-text("Select Group")',
    groupOptionButton: 'p[class*="typography-body-1"]:has-text("Premium Golf")',
    timezoneSelectInput:
      'button[class*="font-body"]:has-text("Select Timezone")',
    timezoneOptionButton:
      'p[class*="typography-body-1"]:has-text("(+09:00)  Asia/Tokyo")',
    createButton: 'button[class*="font-body"]:has-text("Save")',
    attributeNameInput: 'input[placeholder="Enter Attribute Name"]',
    attributeTypeSelectInput:
      'button[class*="font-body"]:has-text("Select Type...")',
    attributeTypeOptionButton:
      'p[class*="typography-body-1"]:has-text("Numeric")',
    attributeSectionSelectInput:
      'button[class*="font-body"]:has-text("Select Section")',
    attributeSectionOptionButton:
      'p[class*="typography-body-1"]:has-text("Details")',
    editAttributeButton: 'p[class*="typography-body-1"]:has-text("Edit")',
    deleteAttributeButton: 'p[class*="typography-body-1"]:has-text("Delete")',
    confirmDeleteAttributeButton:
      'button[class*="!bg-error-500"]:has-text("Confirm")',
    threeDots: 'svg[class*="lucide lucide-ellipsis w-full h-4 w-4 rotate-90"]',
    venueDropdown: 'button[type="button"]:has-text("Bandwidth")',
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in UserProfile');
  }

  async navigateToVenuePage() {
    await this.click(
      this.selectors.settingsbutton,
      'Settings Button',
      'button'
    );
  }

  async createVenue({
    venueName,
    franchiseOption,
    groupOption,
  }: {
    venueName: string;
    franchiseOption: string;
    groupOption: string;
  }) {
    await this.page.click(this.selectors.addVenueDropdownButton);
    await this.page.locator(this.selectors.dropdownOptionButton).nth(0).click();
    await this.page.locator(this.selectors.venueNameInput).fill(venueName);
    await this.page.locator(this.selectors.franchiseSelectInput).click();
    await this.page.getByRole('menuitem', { name: franchiseOption }).click();
    await this.page.locator(this.selectors.groupSelectInput).click();
    await this.page.getByRole('menuitem', { name: groupOption }).click();
    await this.page.locator(this.selectors.timezoneSelectInput).click();
    await this.page.locator(this.selectors.timezoneOptionButton).click();
    await this.page.locator(this.selectors.createButton).click();
  }

  async editVenue({
    venueName,
    newVenueName,
  }: {
    venueName: string;
    newVenueName: string;
  }) {
    await this.page.locator(this.selectors.searchVenue).fill(venueName);
    await this.page.getByText(venueName).click();
    await this.page.locator(this.selectors.editVenueButton).click();
    await this.page.locator(this.selectors.venueNameInput).fill(newVenueName);
    await this.page.locator(this.selectors.createButton).click();
  }

  async deleteVenue({ newVenueName }: { newVenueName: string }) {
    await this.page.locator(this.selectors.searchVenue).fill(newVenueName);
    await this.page.getByText(newVenueName).click();
    await this.page.locator(this.selectors.editVenueButton).click();
    await this.page.locator(this.selectors.deleteVenueButton).click();
    await this.page.locator(this.selectors.confirmDeleteButton).click();
  }

  async createAttribute({ attributeName }: { attributeName: string }) {
    await this.page.locator(this.selectors.addVenueDropdownButton).click();
    await this.page.locator(this.selectors.dropdownOptionButton).nth(1).click();
    await this.page
      .locator(this.selectors.attributeNameInput)
      .fill(attributeName);
    await this.page.locator(this.selectors.attributeTypeSelectInput).click();
    await this.page.locator(this.selectors.attributeTypeOptionButton).click();
    await this.page.locator(this.selectors.attributeSectionSelectInput).click();
    await this.page
      .locator(this.selectors.attributeSectionOptionButton)
      .click();
    await this.page.locator(this.selectors.createButton).click();
  }

  async editAttribute({
    attributeName,
    newAttributeName,
  }: {
    attributeName: string;
    newAttributeName: string;
  }) {
    await this.page.locator(this.selectors.searchVenue).fill(attributeName);
    await this.page.locator(this.selectors.threeDots).click();
    await this.page.locator(this.selectors.editAttributeButton).click();
    await this.page
      .locator(this.selectors.attributeNameInput)
      .fill(newAttributeName);
    await this.page.locator(this.selectors.createButton).click();
  }

  async deleteAttribute({ newAttributeName }: { newAttributeName: string }) {
    await this.page.locator(this.selectors.searchVenue).fill(newAttributeName);
    await this.page.locator(this.selectors.threeDots).click();
    await this.page.locator(this.selectors.deleteAttributeButton).click();
    await this.page
      .locator(this.selectors.confirmDeleteAttributeButton)
      .click();
  }
}
