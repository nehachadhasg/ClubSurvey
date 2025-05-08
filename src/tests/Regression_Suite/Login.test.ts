import { test, expect } from '../../fixtures/fixture';
import { E2E_TAG, SANITY_TAG } from '../../../constants/tags';
import { ClubSurveyLogin } from '../../pages/ClubSurveyLogin';
import { loadEnvironmentConfig } from '../../../config/configLoader';

const environment = loadEnvironmentConfig();
let clubSurveyLogin: ClubSurveyLogin;

test.beforeEach(async ({ page, context }) => {
  clubSurveyLogin = new ClubSurveyLogin(page, context);
});

test(`SANITY-CLUB59-LOGIN-001: Load login page ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-LOGIN-001' },
    {
      type: 'Test Description',
      description: 'Load login page',
    }
  );
  await test.step('Login title is visible', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const loginTitle = page.locator(clubSurveyLogin.selectors.loginTitle);
    await expect(loginTitle).toBeVisible();
  });
  await test.step('Subtext should be visible', async () => {
    const subtext = page.locator(clubSurveyLogin.selectors.subtext);
    await expect(subtext).toBeVisible();
  });
  await test.step('Email label should be visible', async () => {
    const emailLabel = page
      .locator(clubSurveyLogin.selectors.inputLabels)
      .nth(0);
    await expect(emailLabel).toBeVisible();
  });
  await test.step('Password label should be visible', async () => {
    const passwordLabel = page
      .locator(clubSurveyLogin.selectors.inputLabels)
      .nth(1);
    await expect(passwordLabel).toBeVisible();
  });
  await test.step('Forgot password link should be visible', async () => {
    const forgotPasswordLink = page.locator(
      clubSurveyLogin.selectors.forgotpassword
    );
    await expect(forgotPasswordLink).toBeVisible();
  });
  await test.step('Password input should be visible', async () => {
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await expect(passwordInput).toBeVisible();
  });
  await test.step('Input type checkbox should exist', async () => {
    const rememberMeCheckbox = page.locator(
      clubSurveyLogin.selectors.rememberme
    );
    await expect(rememberMeCheckbox).toBeVisible();
  });
  await test.step('Login button should be visible and disabled', async () => {
    const loginButton = page.locator(clubSurveyLogin.selectors.loginButton);
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeDisabled();
  });
});

test(`E2E-CLUB59-LOGIN-001: Email field validation ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-LOGIN-001' },
    {
      type: 'Test Description',
      description: 'Email field validation',
    }
  );
  await test.step('Navigate to the login screen', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
  });
});
