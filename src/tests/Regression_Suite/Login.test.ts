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
  await test.step('Enter invalid email', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await emailInput.fill('invalidemail');
    await passwordInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.emailErrorText
    );
  });
  await test.step('Enter valid email', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    await emailInput.fill('validemail@gmail.com');
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await passwordInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).not.toBeVisible();
  });
});

test(`E2E-CLUB59-LOGIN-002: Password field validation ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-LOGIN-002' },
    {
      type: 'Test Description',
      description: 'Password field validation',
    }
  );
  await test.step('Password field is empty', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await passwordInput.fill('');
    await emailInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.passwordErrorText
    );
  });
  await test.step('Enter valid password', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await passwordInput.fill('validpassword');
    await emailInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).not.toBeVisible();
  });
  await test.step('Clicking on the eye icon should show the password', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    const showPasswordButton = page.locator(
      clubSurveyLogin.selectors.showPasswordButton
    );
    await passwordInput.fill('validpassword');
    await expect(passwordInput).toHaveAttribute('type', 'password');
    await showPasswordButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'text');
  });
});

test(`E2E-CLUB59-LOGIN-003: Email and Password field validation ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-LOGIN-003' },
    {
      type: 'Test Description',
      description: 'Email and Password field validation',
    }
  );
  await test.step('Email field and Password field are empty', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await passwordInput.fill('');
    await emailInput.click();
    await emailInput.fill('');
    await passwordInput.click();
    const emailErrorText = page
      .locator(clubSurveyLogin.selectors.errorMessage)
      .nth(0);
    await expect(emailErrorText).toHaveText(
      clubSurveyLogin.selectors.emailEmptyErrorText
    );
    const passwordErrorText = page
      .locator(clubSurveyLogin.selectors.errorMessage)
      .nth(1);
    await expect(passwordErrorText).toHaveText(
      clubSurveyLogin.selectors.passwordErrorText
    );
  });
  await test.step('Enter invalid email and valid password', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await emailInput.fill('invalidemail');
    await passwordInput.fill('validpassword');
    await emailInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.emailErrorText
    );
  });
  await test.step('Enter valid email and valid password', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    await emailInput.fill('validemail@gmail.com');
    await passwordInput.fill('validpassword');
    await emailInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).not.toBeVisible();
  });
  await test.step('Login button should be enabled when both email and password fields are filled', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const emailInput = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordInput = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    const loginButton = page.locator(clubSurveyLogin.selectors.loginButton);
    await expect(loginButton).toBeDisabled();
    await emailInput.fill('validemail@gmail.com');
    await passwordInput.fill('validpassword');
    await expect(loginButton).toBeEnabled();
  });
});

test(`E2E-CLUB59-LOGIN-004: Remeber me checkbox ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-LOGIN-004' },
    {
      type: 'Test Description',
      description: 'Remeber me checkbox',
    }
  );
  await test.step('Remeber me checkbox is not checked', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    await expect(page.locator("//input[@type='checkbox']")).not.toBeChecked();
  });
  await test.step('Remeber me checkbox is checked', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const rememberMeCheckbox = page.locator(
      clubSurveyLogin.selectors.rememberme
    );
    await rememberMeCheckbox.click();
    await expect(page.locator("//input[@type='checkbox']")).toBeChecked();
  });
});
