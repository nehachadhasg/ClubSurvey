import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { SurveyCustomise } from 'pages/SurveyCustomise';

const environment = loadEnvironmentConfig();
let surveyCustomise: SurveyCustomise;

test.beforeEach(async ({ page, context }) => {
  surveyCustomise = new SurveyCustomise(page, context);
  await surveyCustomise.loadApp(environment.baseURL);
  await surveyCustomise.login(page);
  await surveyCustomise.navigateToSurveyCustomise();
});

test(`TC-CS-001: Toggle Survey and Email Preview`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-001' },
    {
      type: 'Test Description',
      description: 'Verify user can toggle between Survey and Email previews',
    }
  );
  await test.step('Verify user can toggle between Survey and Email previews', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.emailPreviewButton)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.emailSpanPreview)
    ).toBeVisible();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.surveyPreviewButton)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.emailSpanPreview)
    ).not.toBeVisible();
  });
});

test(`TC-CS-002: Select Default Style`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-002' },
    {
      type: 'Test Description',
      description: 'Verify default style (Green) is applied initially',
    }
  );
  await test.step('Verify default style (Green) is applied initially', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.surveyStyleButtons)
      .first();
  });
});
