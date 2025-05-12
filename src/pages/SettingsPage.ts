import { expect, Page } from '@playwright/test';

export class SettingsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToSettings() {
        await this.page.goto('/settings');
    }

    async validateCards(expectedCards: string[]) {
        for (const card of expectedCards) {
            await expect(this.page.locator(`text=${card}`)).toBeVisible();
        }
    }
}