import { expect, Page, BrowserContext } from '@playwright/test';
import { PlaywrightWrapper } from '../../helpers/playwright';

export class FranchisePage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
      super(page, context);
    }

    public someAbstractMethod(): void {
        console.log('Abstract method implemented in UserProfile');
      }

    async navigateToFranchise() {
        await this.page.goto('/franchise');
    }

    async validateViewAccess() {
        await expect(this.page.locator('text=Franchise Overview')).toBeVisible();
    }

    async validateEditAccess() {
        await this.page.click('button:has-text("Edit")');
        await expect(this.page.locator('text=Edit Franchise')).toBeVisible();
    }
}