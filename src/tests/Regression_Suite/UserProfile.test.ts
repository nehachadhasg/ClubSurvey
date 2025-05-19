import { test, expect } from '@playwright/test';
import { SANITY_TAG, E2E_TAG } from '../../../constants/tags';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { UserProfile } from '../../pages/UserProfile';
import { Page } from 'playwright';

const environment = loadEnvironmentConfig();
let userProfile: UserProfile;

const navigateToProfilePage = async (page: Page) => {
  await page.locator(userProfile.selectors.userProfileIconClosed).click();
  await expect(
    page.locator(userProfile.selectors.userProfileIconOpen)
  ).toBeVisible();
  const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
  await myProfileOption.click();
};

const login = async (page: Page) => {
  const emailInput = page.locator(userProfile.selectors.emailSelector);
  const passwordInput = page.locator(userProfile.selectors.passwordSelector);
  const loginButton = page.locator(userProfile.selectors.loginButtonSelector);
  await emailInput.fill(environment.credentials.SUPER_ADMIN_2.username);
  await passwordInput.fill(environment.credentials.SUPER_ADMIN_2.password);
  await loginButton.click();
  await page.waitForTimeout(1000);
};

test.beforeEach(async ({ page, context }) => {
  userProfile = new UserProfile(page, context);
  await userProfile.loadApp(environment.baseURL);
});

test(`E2E-CLUB59-USER-PROFILE-01: Login to the platform and verify user profile page ${E2E_TAG}`, async ({
  page,
}) => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'E2E-CLUB59-USER-PROFILE-01' },
    {
      type: 'Test Description',
      description: 'Login to the platform and verify user profile page',
    }
  );
  await test.step('Load login screen', async () => {
    const pageTitle = await page.title();
    expect(pageTitle).toContain('59club');
  });
  await test.step('Login to the platform', async () => {
    await login(page);
    const dashboardLogo = page.locator(
      userProfile.selectors.clubsmalllogodashboard
    );
    await expect(dashboardLogo).toBeVisible();
  });
  await test.step('Click on the user profile icon', async () => {
    await page.locator(userProfile.selectors.userProfileIconClosed).click();
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
  });
  await test.step('Dropdown options should be visible', async () => {
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    const changePasswordOption = page.locator(
      userProfile.selectors.changePasswordOption
    );
    const logoutOption = page.locator(userProfile.selectors.logoutOption);
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
    await expect(myProfileOption).toBeVisible();
    await expect(changePasswordOption).toBeVisible();
    await expect(logoutOption).toBeVisible();
  });
  await test.step('Navigate to My Profile page', async () => {
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    const myProfileHeader = page.locator(userProfile.selectors.myProfileHeader);
    await myProfileOption.click();
    await expect(myProfileHeader).toBeVisible();
  });
  await test.step('Validate profile screen sections', async () => {
    const detailsSectionHeader = page.locator(
      userProfile.selectors.detailsSectionHeader
    );
    const passwordSectionHeader = page.locator(
      userProfile.selectors.passwordSectionHeader
    );
    const languageSectionHeader = page.locator(
      userProfile.selectors.languageSectionHeader
    );
    await expect(detailsSectionHeader).toBeVisible();
    await expect(passwordSectionHeader).toBeVisible();
    await expect(languageSectionHeader).toBeVisible();
  });
  await test.step('Verify Update Button Initial State', async () => {
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await expect(updateButton).toBeVisible();
    await expect(updateButton).toBeDisabled();
  });
  await test.step('Enable Update Button on Edit - Details', async () => {
    const firstNameInput = page.locator(userProfile.selectors.firstNameInput);
    await firstNameInput.fill('Jane');
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await expect(updateButton).toBeEnabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-01: Verify First Name is Editable ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Verify First Name is Editable', async () => {
    const firstNameInput = page.locator(userProfile.selectors.firstNameInput);
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await firstNameInput.click();
    await firstNameInput.fill('Jane');
    expect(firstNameInput).toHaveValue('Jane');
    expect(updateButton).toBeEnabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-02: Verify Surname is Editable ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Verify Surname is Editable', async () => {
    const surnameInput = page.locator(userProfile.selectors.surnameInput);
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await surnameInput.click();
    await surnameInput.fill('Doeness');
    expect(surnameInput).toHaveValue('Doeness');
    expect(updateButton).toBeEnabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-03: Verify Email is Editable ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Verify First Name is Editable', async () => {
    const emailInput = page.locator(userProfile.selectors.emailInput);
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await emailInput.click();
    await emailInput.fill('jane.doeness@59club.com');
    expect(emailInput).toHaveValue('jane.doeness@59club.com');
    expect(updateButton).toBeEnabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-04: Verify Role is View-Only ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Role field is non-editable (read-only)', async () => {
    const roleSelectInput = page.locator(userProfile.selectors.roleSelectInput);
    await expect(roleSelectInput).toBeDisabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-05: Open Change Password Pop-up ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Click "Change Password" button', async () => {
    const changePasswordButton = page.locator(
      userProfile.selectors.changePasswordButton
    );
    await changePasswordButton.click();
  });
  await test.step('Change Password Pop-up is visible', async () => {
    const currentPasswordInput = page
      .locator(userProfile.selectors.currentPasswordInput)
      .nth(1);
    const newPasswordInput = page
      .locator(userProfile.selectors.newPasswordInput)
      .nth(1);
    const confirmNewPasswordInput = page
      .locator(userProfile.selectors.confirmNewPasswordInput)
      .nth(1);
    await expect(currentPasswordInput).toBeVisible();
    await expect(newPasswordInput).toBeVisible();
    await expect(confirmNewPasswordInput).toBeVisible();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-06: Cancel Change Password ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Open Change Password pop-up', async () => {
    const changePasswordButton = page.locator(
      userProfile.selectors.changePasswordButton
    );
    await changePasswordButton.click();
  });
  await test.step('Click "Cancel" button', async () => {
    const myProfileHeader = page.locator(userProfile.selectors.myProfileHeader);
    const cancelChangePasswordButton = page
      .locator(userProfile.selectors.cancelChangePasswordButton)
      .nth(1);
    await cancelChangePasswordButton.click();
    await expect(myProfileHeader).toBeVisible();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-07: Validate Password Requirements ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Open Change Password pop-up', async () => {
    const changePasswordButton = page.locator(
      userProfile.selectors.changePasswordButton
    );
    await changePasswordButton.click();
  });
  await test.step('Enter a valid current password', async () => {
    const currentPasswordInput = page
      .locator(userProfile.selectors.currentPasswordInput)
      .nth(1);
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await currentPasswordInput.fill(
      environment.credentials.SUPER_ADMIN_2.password
    );
    await expect(confirmChangePasswordButton).toBeDisabled();
  });
  await test.step('Enter a new password with min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character', async () => {
    const newPasswordInput = page
      .locator(userProfile.selectors.newPasswordInput)
      .nth(1);
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await newPasswordInput.fill('Password123!');
    await expect(confirmChangePasswordButton).toBeDisabled();
  });
  await test.step('Confirm the same password', async () => {
    const confirmNewPasswordInput = page
      .locator(userProfile.selectors.confirmNewPasswordInput)
      .nth(1);
    await confirmNewPasswordInput.fill('Password123!');
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await expect(confirmChangePasswordButton).toBeEnabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-08: Successful Password Change ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Open Change Password pop-up', async () => {
    const changePasswordButton = page.locator(
      userProfile.selectors.changePasswordButton
    );
    await changePasswordButton.click();
  });
  await test.step('Enter a valid current password', async () => {
    const currentPasswordInput = page
      .locator(userProfile.selectors.currentPasswordInput)
      .nth(1);
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await currentPasswordInput.fill(
      environment.credentials.SUPER_ADMIN_2.password
    );
    await expect(confirmChangePasswordButton).toBeDisabled();
  });
  await test.step('Enter a new password with min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character', async () => {
    const newPasswordInput = page
      .locator(userProfile.selectors.newPasswordInput)
      .nth(1);
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await newPasswordInput.fill('Password123!');
    await expect(confirmChangePasswordButton).toBeDisabled();
  });
  await test.step('Confirm the same password', async () => {
    const confirmNewPasswordInput = page
      .locator(userProfile.selectors.confirmNewPasswordInput)
      .nth(1);
    await confirmNewPasswordInput.fill('Password123!');
  });
  await test.step('Click "Change Password"', async () => {
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await confirmChangePasswordButton.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Success message should be visible', async () => {
    const changePasswordSuccessHeader = page.locator(
      userProfile.selectors.changePasswordSuccessHeader
    );
    const changePasswordSuccessMessage = page.locator(
      userProfile.selectors.changePasswordSuccessMessage
    );
    await expect(changePasswordSuccessHeader).toBeVisible();
    await expect(changePasswordSuccessMessage).toBeVisible();
  });
  await test.step('Revert password changes', async () => {
    await page.goto(
      'https://qa.survey.59club.studiographene.xyz/en-GB/my-profile'
    );
    await page.waitForTimeout(1000);
    const changePasswordButton = page.locator(
      userProfile.selectors.changePasswordButton
    );
    await changePasswordButton.click();
    const currentPasswordInput = page
      .locator(userProfile.selectors.currentPasswordInput)
      .nth(1);
    await currentPasswordInput.fill('Password123!');
    const newPasswordInput = page
      .locator(userProfile.selectors.newPasswordInput)
      .nth(1);
    await newPasswordInput.fill(environment.credentials.SUPER_ADMIN_2.password);
    const confirmNewPasswordInput = page
      .locator(userProfile.selectors.confirmNewPasswordInput)
      .nth(1);
    await confirmNewPasswordInput.fill(
      environment.credentials.SUPER_ADMIN_2.password
    );
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await confirmChangePasswordButton.click();
    await page.waitForTimeout(500);
  });
});

test(`SANITY-CLUB59-USER-PROFILE-09: Logout All Other Sessions ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page and open another tab in the same browser', async () => {
    await login(page);
    await navigateToProfilePage(page);
    const newPage = await page.context().newPage();
    await newPage.goto(environment.baseURL);
  });
  await test.step('Go back to the original tab and open Change Password pop-up', async () => {
    await page.bringToFront();
    const changePasswordButton = page.locator(
      userProfile.selectors.changePasswordButton
    );
    await changePasswordButton.click();
  });
  await test.step('Enter a valid current password', async () => {
    const currentPasswordInput = page
      .locator(userProfile.selectors.currentPasswordInput)
      .nth(1);
    await currentPasswordInput.fill(
      environment.credentials.SUPER_ADMIN_2.password
    );
  });
  await test.step('Enter a new password with min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character', async () => {
    const newPasswordInput = page
      .locator(userProfile.selectors.newPasswordInput)
      .nth(1);
    await newPasswordInput.fill('Password123!');
  });
  await test.step('Confirm the same password', async () => {
    const confirmNewPasswordInput = page
      .locator(userProfile.selectors.confirmNewPasswordInput)
      .nth(1);
    await confirmNewPasswordInput.fill('Password123!');
  });
  await test.step('Click "Change Password"', async () => {
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await confirmChangePasswordButton.click();
    await page.waitForTimeout(1000);
  });
  await test.step('Revert password changes', async () => {
    await page.goto(
      'https://qa.survey.59club.studiographene.xyz/en-GB/my-profile'
    );
    await page.waitForTimeout(1000);
    const changePasswordButton = page.locator(
      userProfile.selectors.changePasswordButton
    );
    await changePasswordButton.click();
    const currentPasswordInput = page
      .locator(userProfile.selectors.currentPasswordInput)
      .nth(1);
    await currentPasswordInput.fill('Password123!');
    const newPasswordInput = page
      .locator(userProfile.selectors.newPasswordInput)
      .nth(1);
    await newPasswordInput.fill(environment.credentials.SUPER_ADMIN_2.password);
    const confirmNewPasswordInput = page
      .locator(userProfile.selectors.confirmNewPasswordInput)
      .nth(1);
    await confirmNewPasswordInput.fill(
      environment.credentials.SUPER_ADMIN_2.password
    );
    const confirmChangePasswordButton = page
      .locator(userProfile.selectors.confirmChangePasswordButton)
      .nth(1);
    await confirmChangePasswordButton.click();
    await page.waitForTimeout(500);
  });
  await test.step('Check session status in other tab', async () => {
    const newPage = page.context().pages()[1];
    await newPage.bringToFront();
    await newPage.locator(userProfile.selectors.userProfileIconClosed).click();
    await newPage.locator(userProfile.selectors.myProfileOption).click();
    await expect(
      newPage.locator(userProfile.selectors.loginButtonSelector)
    ).toBeVisible();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-10: Select Language from Dropdown ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Click on Default Language dropdown', async () => {
    const defaultLanguageSelect = page.locator(
      userProfile.selectors.defaultLanguageSelect
    );
    await defaultLanguageSelect.click();
  });
  await test.step('View list of options', async () => {
    const options = page.getByRole('option');
    await expect(options).toHaveCount(11);
  });
});

test(`SANITY-CLUB59-USER-PROFILE-11: Verify Default Language Field ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Check the value in Default Language dropdown', async () => {
    const defaultLanguageSelect = page.locator(
      userProfile.selectors.defaultLanguageSelect
    );
    const currentUrl = page.url();
    expect(currentUrl).toContain('en-GB');
    await expect(defaultLanguageSelect).toHaveText('English (GB)');
  });
});

test(`SANITY-CLUB59-USER-PROFILE-12: Select Preferred Date Format ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Click on Date Format dropdown', async () => {
    const dateFormatSelect = page.locator(
      userProfile.selectors.dateFormatSelect
    );
    await dateFormatSelect.click();
  });
  await test.step('Select a valid date format', async () => {
    const options = page.getByRole('option');
    const ddMMyyyyOption = options.nth(0);
    await ddMMyyyyOption.click();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-13: Select Preferred Time Format ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Click on Time Format dropdown', async () => {
    const timeFormatSelect = page.locator(
      userProfile.selectors.timeFormatSelect
    );
    await timeFormatSelect.click();
  });
  await test.step('Select a valid time format', async () => {
    const options = page.getByRole('option');
    const hhmmOption = options.nth(0);
    await hhmmOption.click();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-14: Enable Update Button on Edit - Language/Date/Time ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Click on Default Language dropdown', async () => {
    const defaultLanguageSelect = page.locator(
      userProfile.selectors.defaultLanguageSelect
    );
    await defaultLanguageSelect.click();
  });
  await test.step('View list of options', async () => {
    const options = page.getByRole('option');
    await expect(options).toHaveCount(11);
    await options.nth(4).click();
  });
  await test.step('Enable Update Button', async () => {
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await expect(updateButton).toBeEnabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-15: Save Language/Date/Time Preferences ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Update Language Preferences', async () => {
    const defaultLanguageSelect = page.locator(
      userProfile.selectors.defaultLanguageSelect
    );
    await defaultLanguageSelect.click();
    const options = page.getByRole('option');
    await options.nth(6).click();
  });
  await test.step('Click "Update" button', async () => {
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await updateButton.click();
  });
  await test.step('Verify Success Message', async () => {
    const onUpdateSuccessText = page.locator(
      userProfile.selectors.onUpdateSuccessText
    );
    await expect(onUpdateSuccessText).toBeVisible();
  });
  await test.step('Close Success Modal', async () => {
    const closeSuccessModalButton = page.locator(
      userProfile.selectors.closeSuccessModalButton
    );
    await closeSuccessModalButton.click();
  });
  await test.step('Revert changes', async () => {
    const defaultLanguageSelect = page.locator(
      userProfile.selectors.defaultLanguageSelect
    );
    await defaultLanguageSelect.click();
    const options = page.getByRole('option');
    await options.nth(0).click();
    const updateButton = page.locator(userProfile.selectors.updateButton);
    await updateButton.click();
    const closeSuccessModalButton = page.locator(
      userProfile.selectors.closeSuccessModalButton
    );
    await closeSuccessModalButton.click();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-16: Warn on Unsaved Changes ${SANITY_TAG}`, async ({
  page,
}) => {
  await test.step('Navigate to Profile page', async () => {
    await login(page);
    await navigateToProfilePage(page);
  });
  await test.step('Make changes to Language/Date/Time', async () => {
    const defaultLanguageSelect = page.locator(
      userProfile.selectors.defaultLanguageSelect
    );
    await defaultLanguageSelect.click();
    const options = page.getByRole('option');
    await options.nth(1).click();
  });
  await test.step('Try to navigate away without saving', async () => {
    await page.locator(userProfile.selectors.navbarAnchor).click();
  });
  await test.step('Verify Warning Message', async () => {
    const onUpdateWarningText = page.locator(
      userProfile.selectors.onUpdateWarningText
    );
    await expect(onUpdateWarningText).toBeVisible();
  });
  await test.step('Close Warning Modal', async () => {
    const closeModalButton = page.locator(
      userProfile.selectors.closeSuccessModalButton
    );
    await closeModalButton.click();
  });
});
