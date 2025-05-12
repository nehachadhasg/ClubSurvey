/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from '../../fixtures/fixture';
import { SANITY_TAG, E2E_TAG } from '../../../constants/tags';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { UserProfile } from '../../pages/UserProfile';

const environment = loadEnvironmentConfig();
let userProfile: UserProfile;

test.beforeEach(async ({ page, context }) => {
  userProfile = new UserProfile(page, context);
});

test(`E2E-CLUB59-USER-PROFILE-01: Login to the platform and verify user profile page ${E2E_TAG}`, async ({
  loggedInPage,
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
    await userProfile.loadApp(environment.baseURL);
    const pageTitle = await page.title();
    expect(pageTitle).toContain('59club');
  });
  await test.step('Login to the platform', async () => {
    const dashboardLogo = loggedInPage.locator(
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
  loggedInPage,
  page,
}) => {
  const navigateToProfilePage = async () => {
    await page.locator(userProfile.selectors.userProfileIconClosed).click();
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    await myProfileOption.click();
  };
  await test.step('Navigate to Profile page', async () => {
    await navigateToProfilePage();
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
  loggedInPage,
  page,
}) => {
  const navigateToProfilePage = async () => {
    await page.locator(userProfile.selectors.userProfileIconClosed).click();
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    await myProfileOption.click();
  };
  await test.step('Navigate to Profile page', async () => {
    await navigateToProfilePage();
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
  loggedInPage,
  page,
}) => {
  const navigateToProfilePage = async () => {
    await page.locator(userProfile.selectors.userProfileIconClosed).click();
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    await myProfileOption.click();
  };
  await test.step('Navigate to Profile page', async () => {
    await navigateToProfilePage();
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
  loggedInPage,
  page,
}) => {
  const navigateToProfilePage = async () => {
    await page.locator(userProfile.selectors.userProfileIconClosed).click();
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    await myProfileOption.click();
  };
  await test.step('Navigate to Profile page', async () => {
    await navigateToProfilePage();
  });
  await test.step('Role field is non-editable (read-only)', async () => {
    const roleSelectInput = page.locator(userProfile.selectors.roleSelectInput);
    await expect(roleSelectInput).toBeDisabled();
  });
});

test(`SANITY-CLUB59-USER-PROFILE-05: Open Change Password Pop-up ${SANITY_TAG}`, async ({
  loggedInPage,
  page,
}) => {
  const navigateToProfilePage = async () => {
    await page.locator(userProfile.selectors.userProfileIconClosed).click();
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    await myProfileOption.click();
  };
  await test.step('Navigate to Profile page', async () => {
    await navigateToProfilePage();
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
  loggedInPage,
  page,
}) => {
  const navigateToProfilePage = async () => {
    await page.locator(userProfile.selectors.userProfileIconClosed).click();
    await expect(
      page.locator(userProfile.selectors.userProfileIconOpen)
    ).toBeVisible();
    const myProfileOption = page.locator(userProfile.selectors.myProfileOption);
    await myProfileOption.click();
  };
  await test.step('Navigate to Profile page', async () => {
    await navigateToProfilePage();
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
