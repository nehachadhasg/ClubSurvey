import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { SurveyDetails } from 'pages/SurveyDetails';

const environment = loadEnvironmentConfig();
let surveyDetails: SurveyDetails;

test.beforeEach(async ({ page, context }) => {
  surveyDetails = new SurveyDetails(page, context);
  await surveyDetails.loadApp(environment.baseURL);
  await surveyDetails.login(page);
  await surveyDetails.navigateToSurveyDetails();
});

test.afterEach(async () => {
  await surveyDetails.cleanUpSurvey();
});

test(`TC_SD_001: Navigate to Survey Details`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SD_001' },
    {
      type: 'Test Description',
      description: 'Navigate to Survey Details',
    }
  );
  await test.step('Verify user is navigated to Survey Details page after selecting a template or starting from scratch', async () => {
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.surveyDetailsHeading)
    ).toBeVisible();
  });
});

test(`TC_SD_002: Verify Top Nav Bar Elements`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SD_002' },
    {
      type: 'Test Description',
      description: 'Validate presence and functionality of top navbar',
    }
  );
  await test.step('Validate presence and functionality of top navbar', async () => {
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.backButton)
    ).toBeVisible();
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.surveyName)
    ).toContainText('Untitled Survey');
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.progressSteps)
    ).toHaveCount(5);
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.progressSteps).nth(0)
    ).toContainText(/Details/);
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.progressSteps).nth(1)
    ).toContainText(/Questions/);
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.progressSteps).nth(2)
    ).toContainText('3Customise');
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.progressSteps).nth(3)
    ).toContainText(/Audience/);
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.progressSteps).nth(4)
    ).toContainText(/Results/);
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.previewButton)
    ).toBeVisible();
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.translationDropdown)
    ).toBeVisible();
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.publishButton)
    ).toBeVisible();
  });
});

test(`TC_SD_003: Edit Internal and Public Survey Name`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SD_003' },
    {
      type: 'Test Description',
      description: 'User can edit public and internal survey name',
    }
  );
  await test.step('User can edit public and internal survey name', async () => {
    const switchBtn = surveyDetails.page.locator(
      surveyDetails.selectors.publicAndInternalSwitch
    );
    await surveyDetails.page
      .locator(surveyDetails.selectors.surveyNameInput)
      .clear();
    await surveyDetails.page
      .locator(surveyDetails.selectors.surveyNameInput)
      .fill('Survey Name');
    if ((await switchBtn.getAttribute('data-state')) === 'checked') {
      await switchBtn.click();
      await surveyDetails.page.waitForTimeout(1000);
    }
    await surveyDetails.page
      .locator(surveyDetails.selectors.publicNameInput)
      .clear();
    await surveyDetails.page
      .locator(surveyDetails.selectors.publicNameInput)
      .fill('Public Survey Name');
  });
});

test(`TC_SD_004: Navigate to Filters Screen`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SD_004' },
    {
      type: 'Test Description',
      description:
        'Ensure user can navigate to filters section from Survey Details',
    }
  );
  await test.step('Ensure user can navigate to filters section from Survey Details', async () => {
    await surveyDetails.page
      .locator(surveyDetails.selectors.filtersButton)
      .click();
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.filtersPageHeading)
    ).toBeVisible();
  });
});

test(`TC_SD_005: View Survey Preview`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SD_005' },
    {
      type: 'Test Description',
      description: 'Validate read-only preview section on the left',
    }
  );
  await test.step('Validate read-only preview section on the left', async () => {
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.avgTimeDiv)
    ).toBeVisible();
    await expect(
      surveyDetails.page.getByRole('button', { name: 'English' })
    ).toBeDisabled();
  });
});

test(`TC_SD_006: Continue to Next Step`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SD_005' },
    {
      type: 'Test Description',
      description: 'User can proceed to Survey Questions step',
    }
  );
  await test.step('User can proceed to Survey Questions step', async () => {
    await surveyDetails.page
      .locator(surveyDetails.selectors.continueButton)
      .click();
    await expect(
      surveyDetails.page
        .locator(surveyDetails.selectors.progressSteps)
        .nth(1)
        .locator('button')
    ).toHaveClass(/bg-lime/);
    await expect(
      surveyDetails.page.locator(surveyDetails.selectors.questionsPageHeading)
    ).toBeVisible();
  });
});
