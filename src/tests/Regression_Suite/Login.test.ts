import { test, expect } from '@playwright/test';
import { E2E_TAG, SANITY_TAG } from '../../../constants/tags';
import { ClubSurveyLogin } from '../../pages/ClubSurveyLogin';
import { loadEnvironmentConfig } from '../../../config/configLoader';

const environment = loadEnvironmentConfig();
let clubSurveyLogin: ClubSurveyLogin;

test.beforeEach(async ({ page, context }) => {
  clubSurveyLogin = new ClubSurveyLogin(page, context);
});

test(`SANITY-CLUB59-LOGIN-001: Load Login page ${SANITY_TAG}`, async ({
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
    const loginButton = page.getByRole('button', { name: 'Login button' });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeDisabled();
  });
});

test.skip(`E2E-CLUB59-LOGIN-001: Login field validations ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-LOGIN-001' },
    {
      type: 'Test Description',
      description: 'Login field validations',
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
    const loginButton = page.getByRole('button', { name: 'Login button' });
    await expect(loginButton).toBeDisabled();
    await emailInput.fill('validemail@gmail.com');
    await passwordInput.fill('validpassword');
    await expect(loginButton).toBeEnabled();
  });
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

test(`SANITY-CLUB59-LOGIN-002: Load Contact Us modal ${SANITY_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'SANITY-CLUB59-LOGIN-002' },
    {
      type: 'Test Description',
      description: 'Load Contact Us modal',
    }
  );
  await test.step('Contact Us modal', async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const contactUsButton = page.locator(clubSurveyLogin.selectors.contactus);
    const headingText = page.locator(
      clubSurveyLogin.selectors.contactUsModalAssert
    );
    const subtext = page.locator(
      clubSurveyLogin.selectors.contactUsModalSubtext
    );
    const closeButton = page.locator(
      clubSurveyLogin.selectors.contactUsModalCloseButton
    );
    const firstNameInputLabel = page.locator(
      clubSurveyLogin.selectors.contactUsFirstNameLabel
    );
    const lastNameInputLabel = page.locator(
      clubSurveyLogin.selectors.contactUsLastNameLabel
    );
    const emailInputLabel = page
      .locator(clubSurveyLogin.selectors.contactUsEmailLabel)
      .nth(1);
    const messageInputLabel = page.locator(
      clubSurveyLogin.selectors.contactUsMessageLabel
    );
    const firstNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsFirstNameInput
    );
    const lastNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsLastNameInput
    );
    const emailInput = page.locator(
      clubSurveyLogin.selectors.contactUsEmailInput
    );
    const messageInput = page.locator(
      clubSurveyLogin.selectors.contactUsMessageInput
    );
    const submitButton = page.locator(clubSurveyLogin.selectors.submitButton);
    const contactUsForm = page.locator(
      clubSurveyLogin.selectors.contactUsModal
    );
    const contactUsImg = page.locator(clubSurveyLogin.selectors.contactUsImg);
    await contactUsButton.click();
    await test.step('should display the Contact Us modal form', async () => {
      await expect(contactUsForm).toBeVisible();
    });
    await test.step('should display the heading text', async () => {
      await expect(headingText).toBeVisible();
    });
    await test.step('should display the close button', async () => {
      await expect(closeButton).toBeVisible();
    });
    await test.step('should display the subtext', async () => {
      await expect(subtext).toBeVisible();
    });
    await test.step('should display the first name input label', async () => {
      await expect(firstNameInputLabel).toBeVisible();
    });
    await test.step('should display the last name input label', async () => {
      await expect(lastNameInputLabel).toBeVisible();
    });
    await test.step('should display the email input label', async () => {
      await expect(emailInputLabel).toBeVisible();
    });
    await test.step('should display the message input label', async () => {
      await expect(messageInputLabel).toBeVisible();
    });
    await test.step('should display the first name input field', async () => {
      await expect(firstNameInput).toBeVisible();
    });
    await test.step('should display the last name input field', async () => {
      await expect(lastNameInput).toBeVisible();
    });
    await test.step('should display the email input field', async () => {
      await expect(emailInput).toBeVisible();
    });
    await test.step('should display the message input field', async () => {
      await expect(messageInput).toBeVisible();
    });
    await test.step('first name input should have correct placeholder', async () => {
      await expect(firstNameInput).toHaveAttribute(
        'placeholder',
        'Your first name'
      );
    });
    await test.step('last name input should have correct placeholder', async () => {
      await expect(lastNameInput).toHaveAttribute(
        'placeholder',
        'Your last name'
      );
    });
    await test.step('email input should have correct placeholder', async () => {
      await expect(emailInput).toHaveAttribute(
        'placeholder',
        'Enter your email address'
      );
    });
    await test.step('message input should have correct placeholder', async () => {
      await expect(messageInput).toHaveAttribute(
        'placeholder',
        'Type your message here'
      );
    });
    await test.step('should display the submit button', async () => {
      await expect(submitButton).toBeVisible();
    });
    await test.step('submit button should be disabled initially', async () => {
      await expect(submitButton).toBeDisabled();
    });
    await test.step('should display the image', async () => {
      await expect(contactUsImg).toBeVisible();
    });
  });
});

test.skip(`E2E-CLUB59-LOGIN-002: Contact Us field validations ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-LOGIN-002' },
    {
      type: 'Test Description',
      description: 'Contact Us field validations',
    }
  );
  const loadContactUsModal = async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const contactUsButton = page.locator(clubSurveyLogin.selectors.contactus);
    await contactUsButton.click();
  };
  await test.step('First name field is empty', async () => {
    await loadContactUsModal();
    const firstNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsFirstNameInput
    );
    const lastNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsLastNameInput
    );
    await firstNameInput.fill('');
    await lastNameInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.firstNameErrorText
    );
  });
  await test.step('Last name field is empty', async () => {
    await loadContactUsModal();
    const firstNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsFirstNameInput
    );
    const lastNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsLastNameInput
    );
    await lastNameInput.fill('');
    await firstNameInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.lastNameErrorText
    );
  });
  await test.step('Email field is empty', async () => {
    await loadContactUsModal();
    const emailInput = page.locator(
      clubSurveyLogin.selectors.contactUsEmailInput
    );
    const lastNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsLastNameInput
    );
    await emailInput.fill('');
    await lastNameInput.click();
    const errorMessage = page.locator(clubSurveyLogin.selectors.errorMessage);
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.contactUsEmptyEmailErrorText
    );
  });
  await test.step('Message field is empty', async () => {
    await loadContactUsModal();
    const messageInput = page.locator(
      clubSurveyLogin.selectors.contactUsMessageInput
    );
    const emailInput = page.locator(
      clubSurveyLogin.selectors.contactUsEmailInput
    );
    await messageInput.fill('');
    await emailInput.click();
    const errorMessage = page.locator(
      clubSurveyLogin.selectors.contactUsMessageError
    );
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.messageErrorText
    );
  });
  await test.step('Message field is less than 10 characters', async () => {
    await loadContactUsModal();
    const messageInput = page.locator(
      clubSurveyLogin.selectors.contactUsMessageInput
    );
    const emailInput = page.locator(
      clubSurveyLogin.selectors.contactUsEmailInput
    );
    await messageInput.fill('Hello');
    await emailInput.click();
    const errorMessage = page.locator(
      clubSurveyLogin.selectors.contactUsMessageError
    );
    await expect(errorMessage).toHaveText(
      clubSurveyLogin.selectors.messageErrorText
    );
  });
  await test.step('Message field is more than 10 characters', async () => {
    await loadContactUsModal();
    const messageInput = page.locator(
      clubSurveyLogin.selectors.contactUsMessageInput
    );
    const emailInput = page.locator(
      clubSurveyLogin.selectors.contactUsEmailInput
    );
    await messageInput.fill('Hello World');
    await emailInput.click();
    const errorMessage = page.locator(
      clubSurveyLogin.selectors.contactUsMessageError
    );
    await expect(errorMessage).not.toBeVisible();
  });
});

test(`E2E-CLUB59-LOGIN-003: Contact Us submit flow ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-LOGIN-003' },
    {
      type: 'Test Description',
      description: 'Contact Us submit flow',
    }
  );
  const loadContactUsModal = async () => {
    await clubSurveyLogin.loadApp(environment.baseURL);
    const contactUsButton = page.locator(clubSurveyLogin.selectors.contactus);
    await contactUsButton.click();
  };
  const fillFormFields = async () => {
    const firstNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsFirstNameInput
    );
    const lastNameInput = page.locator(
      clubSurveyLogin.selectors.contactUsLastNameInput
    );
    const emailInput = page.locator(
      clubSurveyLogin.selectors.contactUsEmailInput
    );
    const messageInput = page.locator(
      clubSurveyLogin.selectors.contactUsMessageInput
    );
    await firstNameInput.fill('John');
    await lastNameInput.fill('Doe');
    await emailInput.fill('surveytester41@gmail.com');
    await messageInput.fill('Hello World');
  };
  await test.step('Submit button is disabled when all fields are empty', async () => {
    await loadContactUsModal();
    const submitButton = page.locator(clubSurveyLogin.selectors.submitButton);
    await expect(submitButton).toBeDisabled();
  });
  await test.step('Submit button is enabled when all fields are filled', async () => {
    await loadContactUsModal();
    await fillFormFields();
    const submitButton = page.locator(clubSurveyLogin.selectors.submitButton);
    await expect(submitButton).toBeEnabled();
  });
  await test.step('Form is submitted successfully', async () => {
    await loadContactUsModal();
    await fillFormFields();
    const submitButton = page.locator(clubSurveyLogin.selectors.submitButton);
    const goBackButton = page.locator(
      clubSurveyLogin.selectors.contactUsGoBackButton
    );
    await submitButton.click();
    await expect(
      page.locator(clubSurveyLogin.selectors.contactUsSuccessTitle)
    ).toBeVisible();
    await expect(
      page.locator(clubSurveyLogin.selectors.contactUsSuccessSubtext)
    ).toBeVisible();
    await expect(goBackButton).toBeVisible();
  });
  await test.step('Go back button is clicked lands on the login page', async () => {
    await loadContactUsModal();
    await fillFormFields();
    const submitButton = page.locator(clubSurveyLogin.selectors.submitButton);
    const goBackButton = page.locator(
      clubSurveyLogin.selectors.contactUsGoBackButton
    );
    await submitButton.click();
    await goBackButton.click();
    await expect(
      page.locator(clubSurveyLogin.selectors.loginTitle)
    ).toBeVisible();
  });
});
