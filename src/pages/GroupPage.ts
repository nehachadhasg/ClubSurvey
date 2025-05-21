import { expect, Page, BrowserContext } from '@playwright/test';
import { PlaywrightWrapper } from '../../helpers/playwright';

export class GroupPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
      super(page, context);
    }

    public someAbstractMethod(): void {
        console.log('Abstract method implemented in UserProfile');
      }

    async navigateToGroup() {
        await this.page.goto('/group');
    }

    async validateViewAccess() {
        await expect(this.page.locator('text=Group Overview')).toBeVisible();
    }

    async validateEditAccess() {
        await this.page.click('button:has-text("Edit")');
        await expect(this.page.locator('text=Edit Group')).toBeVisible();
    }
}