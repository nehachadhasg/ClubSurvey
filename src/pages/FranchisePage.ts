import { expect, Page } from '@playwright/test';

export class FranchisePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
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