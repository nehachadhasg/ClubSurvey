import { expect, Page } from '@playwright/test';

export class UsersPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToUsers() {
        await this.page.goto('/users');
    }

    async validateViewAccess(roles: string[]) {
        for (const role of roles) {
            await expect(this.page.locator(`text=${role}`)).toBeVisible();
        }
    }

    async validateEditAccess(roles: string[]) {
        for (const role of roles) {
            await this.page.click(`button:has-text("Edit ${role}")`);
            await expect(this.page.locator(`text=Edit ${role}`)).toBeVisible();
        }
    }
}