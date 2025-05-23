/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Page, BrowserContext } from '@playwright/test';
import { PlaywrightWrapper } from '../../helpers/playwright';

export class GroupPage extends PlaywrightWrapper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }
  public selectors = {
    settingsbutton:
      'li[data-sidebar="menu-item"] a[href="/en-GB/settings"] button[data-sidebar="menu-button"]',
    addGroupButton: 'button[class*="font-body"]:has-text("Add Group")',
    deleteGroupButton: 'button[class*="font-body"]:has-text("Delete Group")',
    confirmDeleteButton: 'button[class*="bg-dark-green"]:has-text("Confirm")',
    settingsCards:
      'div[class*="h-[180px]"][class*="rounded-[16px]"][class*="cursor-pointer"]',
    editGroupButton: 'button[class*="font-body"]:has-text("Edit")',
    searchGroups: 'input[type="search"]',
    groupNameInput: 'input[placeholder="Enter Group Name"]',
    franchiseSelectInput:
      'button[aria-haspopup="menu"][type="button"]:has-text("Select Franchise")',
    createGroupButton: 'button[class*="font-body"]:has-text("Save")',
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in UserPage');
  }

  async navigateToGroupsPage() {
    await this.click(
      this.selectors.settingsbutton,
      'Settings Button',
      'button'
    );
  }

  async createGroup({ groupName }: { groupName: string }) {
    await this.page.locator(this.selectors.addGroupButton).click();
    await this.page.locator(this.selectors.groupNameInput).fill(groupName);
    await this.page.locator(this.selectors.franchiseSelectInput).click();
    await this.page.getByRole('menuitem', { name: '59Club Asia' }).click();
    await this.page.locator(this.selectors.createGroupButton).click();
  }

  async editGroup({
    groupName,
    newGroupName,
  }: {
    groupName: string;
    newGroupName: string;
  }) {
    await this.page.locator(this.selectors.searchGroups).fill(groupName);
    await this.page.getByText(groupName).click();
    await this.page.locator(this.selectors.editGroupButton).click();
    await this.page.locator(this.selectors.groupNameInput).fill(newGroupName);
    await this.page.locator(this.selectors.createGroupButton).click();
  }

  async deleteGroup({ newGroupName }: { newGroupName: string }) {
    await this.page.locator(this.selectors.searchGroups).fill(newGroupName);
    await this.page.getByText(newGroupName).click();
    await this.page.locator(this.selectors.editGroupButton).click();
    await this.page.locator(this.selectors.deleteGroupButton).click();
    await this.page.locator(this.selectors.confirmDeleteButton).nth(2).click();
  }
}
