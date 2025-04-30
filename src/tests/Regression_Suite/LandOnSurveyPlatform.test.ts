import { test, expect } from '../../fixtures/fixture';
import { SANITY_TAG, E2E_TAG } from '../../../constants/tags';
import { ClubSurveyLogin } from '../../pages/ClubSurveyLogin';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { base } from '@faker-js/faker/.';

const environment = loadEnvironmentConfig();
let clubSurveyLogin: ClubSurveyLogin;

test.beforeEach(async ({ page, context }) => {
  // Initialize the ClubSurveyLogin object before each test
  clubSurveyLogin = new ClubSurveyLogin(page, context);
});

test(`SANITY-CLUB59-SURVEYS-PLATFORM-TC01: Navigate to Surveys Platform via 59club Logo ${SANITY_TAG}`, async ({
  page,
  context,
}) => {
  // Add test metadata
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-SURVEYS-PLATFORM-TC01' },
    {
      type: 'Test Description',
      description: 'Verify clicking the 59club logo redirects to the homepage',
    }
  );

  // Initialize the ClubSurveyLogin page object
  // Step 1: Open the login screen
  await test.step('Navigate to the login screen', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    // await page.goto();

    // Assert that the login screen is loaded
    const pageTitle = await page.title();
    expect(pageTitle).toContain('59club');
  });

  // Step 2: Verify redirection to the homepage via the 59club logo
  await test.step('Verify redirection to the homepage via the 59club logo', async () => {
    await clubSurveyLogin.verifyLogoRedirection(environment.clubURL);

    // Assert that the current URL matches the expected homepage URL
    const currentURL = await page.url();

    // Assert that the homepage contains a specific element (e.g., a header or logo)
    const homepageLogo = page.locator(clubSurveyLogin.selectors.clublogo);
    await expect(homepageLogo).toBeVisible();
  });
});

test(`SANITY-CLUB59-SURVEYS-PLATFORM-TC02: Verify Contact Us button opens the Contact Us modal ${SANITY_TAG}`, async ({
  page,
}) => {
  // Add test metadata
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-SURVEYS-PLATFORM-TC02' },
    {
      type: 'Test Description',
      description:
        'Verify clicking the Contact Us button opens the Contact Us modal',
    }
  );
  // Step 1: Open the login screen
  await test.step('Navigate to the login screen', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    // Assert that the login screen is loaded
    const pageTitle = await page.title();
    expect(pageTitle).toContain('59club');
  });

  // Step 2: verify Contact us modal is visible by clicking on contact us button.
  await test.step('Verify contactus modal via the contact us button', async () => {
    await clubSurveyLogin.verifyContactUsModal(
      clubSurveyLogin.selectors.contactUsModalAssert.toString()
    );

    // Step 2: Assert that the "Contact Us" modal is visible
    const contactUsModal = page.locator(
      clubSurveyLogin.selectors.contactUsModal
    ); // Locator for the modal heading
    await expect(
      page.locator(clubSurveyLogin.selectors.contactUsModalAssert)
    ).toContainText('Need help'); // Assert that the modal is visible
  });
});

test(`SANITY-CLUB59-SURVEYS-PLATFORM-TC03:Validate login form is accessible--${SANITY_TAG}`, async ({
  page,
}) => {
  // Add test metadata
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-SURVEYS-PLATFORM-TC03' },
    {
      type: 'Test Description',
      description: 'Validate login form is accessible',
    }
  );
  // Step 1: Open the login screen
  await test.step('Navigate to the login screen', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    // Assert that the login screen is loaded
    const pageTitle = await page.title();
    expect(pageTitle).toContain('59club');
  });

  // Step 2: Verify the username, password and Login button is accessible
  await test.step('Verify login form elements are accessible', async () => {
    const usernameField = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordField = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    const loginButton = page.locator(
      clubSurveyLogin.selectors.loginButtonSelector
    );

    // Assert that the username field is visible
    await expect(usernameField).toBeVisible();

    // Assert that the password field is visible
    await expect(passwordField).toBeVisible();

    // Assert that the login button is visible
    await expect(loginButton).toBeVisible();
  });
  // Step 3: Verify the "Remember Me" checkbox is accessible
  await test.step("Verify 'Remember Me' checkbox is accessible", async () => {
    const rememberMeCheckbox = page.locator(
      clubSurveyLogin.selectors.rememberme
    );
    await expect(rememberMeCheckbox).toBeVisible();
  });
  // Step 4: Verify the "Forgot Password" link is accessible
  await test.step("Verify 'Forgot Password' link is accessible", async () => {
    const forgotPasswordLink = page.locator(
      clubSurveyLogin.selectors.forgotpassword
    );
    await expect(forgotPasswordLink).toBeVisible();
  });
});

test(`E2E-CLUB59-SURVEYS-PLATFORM-001: Complete end-to-end flow ${E2E_TAG}`, async ({
  page,
}) => {
  // Add test metadata
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-SURVEYS-PLATFORM' },
    {
      type: 'Test Description',
      description:
        'End-to-end flow: Load page, navigate via logo and Contact Us, and verify login fields visibility',
    }
  );

  // Step 1: Load the login screen
  await test.step('Navigate to the login screen', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);

    // Assert that the login screen is loaded
    const pageTitle = await page.title();
    expect(pageTitle).toContain('59club');
  });

  // Step 2: Navigate to the homepage via the 59club logo
  await test.step('Verify redirection to the homepage via the 59club logo', async () => {
    await clubSurveyLogin.verifyLogoRedirection(environment.clubURL);


    // Assert that the homepage contains a specific element (e.g., a header or logo)
    const homepageLogo = page.locator(clubSurveyLogin.selectors.clublogo);
    await expect(homepageLogo).toBeVisible();
  });

  // Step 3: Verify the "Contact Us" modal is visible
  await test.step('Verify Contact Us modal via the Contact Us button', async () => {
    // Click on the "Contact Us" button
    const contactUsButton = page.locator(clubSurveyLogin.selectors.contactus);
    await contactUsButton.click();

    // Assert that the "Contact Us" modal is visible
    const contactUsModal = page.locator(
      clubSurveyLogin.selectors.contactUsModal
    );
    await expect(contactUsModal).toBeVisible();

    // Assert that the modal contains the expected heading
    const modalHeading = page.locator(
      clubSurveyLogin.selectors.contactUsModalAssert
    );
    await expect(modalHeading).toContainText('Need help');
  });

  // Step 4: Verify login form elements are accessible
  await test.step('Verify login form elements are accessible', async () => {
    const usernameField = page.locator(clubSurveyLogin.selectors.emailSelector);
    const passwordField = page.locator(
      clubSurveyLogin.selectors.passwordSelector
    );
    const loginButton = page.locator(clubSurveyLogin.selectors.loginButton);

    // Assert that the username field is visible
    await expect(usernameField).toBeVisible();

    // Assert that the password field is visible
    await expect(passwordField).toBeVisible();

    // Assert that the login button is visible
    //await expect(loginButton).toBeVisible();
  });

  // Step 5: Verify the "Remember Me" checkbox is accessible
  await test.step("Verify 'Remember Me' checkbox is accessible", async () => {
    const rememberMeCheckbox = page.locator(
      clubSurveyLogin.selectors.rememberme
    );
    await expect(rememberMeCheckbox).toBeVisible();
  });

  // Step 6: Verify the "Forgot Password" link is accessible
  await test.step("Verify 'Forgot Password' link is accessible", async () => {
    const forgotPasswordLink = page.locator(
      clubSurveyLogin.selectors.forgotpassword
    );
    await expect(forgotPasswordLink).toBeVisible();
  });
});

test(`SANITY-CLUB59-LOGIN-TC04: Validate login with valid credentials ${SANITY_TAG}`, async ({
  loggedInPage,
}) => {
  // Assert that the dashboard is loaded
  const dashboardLogo = loggedInPage.locator('img[alt="Small Logo"]');
  await expect(dashboardLogo).toBeVisible();
});
