import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { Page } from 'playwright';
import { SurveyDetails } from 'pages/SurveyDetails';

const environment = loadEnvironmentConfig();
let surveyDetails: SurveyDetails;

const login = async (page: Page) => {
  const emailInput = page.locator(surveyDetails.selectors.emailSelector);
  const passwordInput = page.locator(surveyDetails.selectors.passwordSelector);
  const loginButton = page.locator(surveyDetails.selectors.loginButtonSelector);
  await emailInput.fill(environment.credentials.SUPER_ADMIN.username);
  await passwordInput.fill(environment.credentials.SUPER_ADMIN.password);
  await loginButton.click();
  await page.waitForTimeout(1000);
};

test.beforeEach(async ({ page, context }) => {
  surveyDetails = new SurveyDetails(page, context);
  await surveyDetails.loadApp(environment.baseURL);
  await login(page);
});

test(`TC_SD_001: Navigate to Survey Details`, async ({ page }) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SD_001' },
    {
      type: 'Test Description',
      description: 'Navigate to Survey Details',
    }
  );
  await test.step('Verify user is navigated to Survey Details page after selecting a template or starting from scratch', async () => {
    await surveyDetails.navigateToSurveyDetails();
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.surveyDetailsHeading)
    ).toBeVisible();
  });
});
