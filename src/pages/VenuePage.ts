import { expect, Page } from '@playwright/test';

export class VenuePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToVenue() {
        await this.page.goto('/venue');
    }

    async validateViewAccess() {
        await expect(this.page.locator('text=Venue Overview')).toBeVisible();
    }

    async validateEditAccess() {
        await this.page.click('button:has-text("Edit")');
        await expect(this.page.locator('text=Edit Venue')).toBeVisible();
    }
}