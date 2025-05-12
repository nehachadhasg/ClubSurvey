import { expect, Page } from '@playwright/test';

export class GroupPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
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