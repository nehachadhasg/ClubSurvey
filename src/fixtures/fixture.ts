import { test as base, expect, Page, BrowserContext } from '@playwright/test';
import { ClubSurveyLogin } from '../pages/ClubSurveyLogin';
import { loadEnvironmentConfig } from '../../config/configLoader';

type TestFixtures = {
  loggedInPage: Page; // A page object after login
};

// Extend the base test with custom fixtures
export const test = base.extend<TestFixtures>({
  loggedInPage: async (
    { page, context }: { page: Page; context: BrowserContext },
    use
  ) => {
    const clubSurveyLogin = new ClubSurveyLogin(page, context);

    // Perform login using the ClubSurveyLogin class
    await clubSurveyLogin.ClubSurveyLogin();

    // Provide the logged-in page to the test
    await use(page);
  },
});

// Re-export `expect` from Playwright
export { expect };