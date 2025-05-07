import { test, expect } from '../../fixtures/fixture';
import { SANITY_TAG } from '../../../constants/tags';
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
    const loginTitle = page.getByRole('heading', { name: 'Login' });
    await expect(loginTitle).toBeVisible();
  });
  await test.step('Subtext should be visible', async () => {
    const subtext = page.getByText('Please enter your details');
    await expect(subtext).toBeVisible();
  });
  await test.step('Email label should be visible', async () => {
    const emailLabel = page.getByText('Email address*');
    await expect(emailLabel).toBeVisible();
  });
  await test.step('Password label should be visible', async () => {
    const passwordLabel = page.getByText('Password*');
    await expect(passwordLabel).toBeVisible();
  });
  await test.step('Forgot password link should be visible', async () => {
    const forgotPasswordLink = page.getByRole('button', {
      name: 'Forgot your password?',
    });
    await expect(forgotPasswordLink).toBeVisible();
  });
  await test.step('Password input should be visible', async () => {
    const passwordInput = page.getByPlaceholder('Enter your password');
    await expect(passwordInput).toBeVisible();
  });
  await test.step('Input type checkbox should exist', async () => {
    const rememberMeCheckbox = page
      .locator('label')
      .filter({ hasText: 'Remember me' })
      .locator('div')
      .nth(1);
    await expect(rememberMeCheckbox).toBeVisible();
  });
  await test.step('Login button should be visible and disabled', async () => {
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeDisabled();
  });
});
