import { test as base, expect, Page, BrowserContext } from '@playwright/test';
import { ClubSurveyLogin } from '../pages/ClubSurveyLogin';
import { loadEnvironmentConfig } from '../../config/configLoader';

type TestFixtures = {
  loggedInPage: Page; // A page object after login
  loggedInPage2: Page; // A page object after login
  loginAsRole: (
    role: 'SUPER_ADMIN' | 'FRANCHISE_ADMIN' | 'GROUP_ADMIN' | 'VENUE_ADMIN'
  ) => Promise<Page>;
};

// Extend the base test with custom fixtures
export const test = base.extend<TestFixtures>({
  loggedInPage: async (
    { page, context }: { page: Page; context: BrowserContext },
    use
  ) => {
    const clubSurveyLogin = new ClubSurveyLogin(page, context);

    // Perform login using the ClubSurveyLogin class
    await clubSurveyLogin.ClubSurveyLogin('SUPER_ADMIN');

    // Provide the logged-in page to the test
    await use(page);
  },

  // Login as SUPER_ADMIN_2
  loggedInPage2: async (
    { page, context }: { page: Page; context: BrowserContext },
    use
  ) => {
    const clubSurveyLogin = new ClubSurveyLogin(page, context);
    await clubSurveyLogin.ClubSurveyLogin('SUPER_ADMIN_2');
    await use(page);
  },

  loginAsRole: async (
    { page, context }: { page: Page; context: BrowserContext },
    use
  ) => {
    const clubSurveyLogin = new ClubSurveyLogin(page, context);

    // Provide a function to log in as a specific role
    await use(
      async (
        role: 'SUPER_ADMIN' | 'FRANCHISE_ADMIN' | 'GROUP_ADMIN' | 'VENUE_ADMIN'
      ) => {
        await clubSurveyLogin.ClubSurveyLogin(role);
        return page;
      }
    );
  },
});

// Re-export `expect` from Playwright
export { expect };
