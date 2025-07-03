import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { SurveyAudience } from '../../pages/SurveyAudience';

const environment = loadEnvironmentConfig();
let surveyAudience: SurveyAudience;

test.beforeEach(async ({ page, context }) => {
  surveyAudience = new SurveyAudience(page, context);
  await surveyAudience.loadApp(environment.baseURL);
  await surveyAudience.login(page);
  await surveyAudience.navigateToSurveyAudience();
});

test.afterEach(async () => {
  await surveyAudience.cleanUpSurvey();
});

test(`TC-SA-001: Navigate to Survey Audience`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-001' },
    {
      type: 'Test Description',
      description:
        'Verify that the Survey Audience page loads with correct layout and controls',
    }
  );
  await test.step('Verify that the Survey Audience page loads with correct layout and controls', async () => {
    await surveyAudience.page
      .getByRole('button', { name: 'Link/QR Code(0)' })
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .getByRole('button', { name: 'Testers(0)' })
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .getByRole('button', { name: 'Email Invitations(0)' })
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.enableAnonymitySwitch)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.validateEmailSwitch)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.hintButton)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await expect(
      surveyAudience.page.locator(
        'h1:has-text("Hints and Tips to improve Participation Rates")'
      )
    ).toBeVisible();
    await surveyAudience.page.keyboard.press('Escape');
    await surveyAudience.page.waitForTimeout(100);
  });
});

test(`TC-SA-002: Customise Messages Preview and Edit`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-002' },
    {
      type: 'Test Description',
      description: 'Verify editing and previewing participant messages',
    }
  );
  await test.step('Verify editing and previewing participant messages', async () => {
    const footerTextarea = 'Shrek is love, Shrek is life';
    const messageTextarea = 'Shrek says: Beauty is in the eye of the beholder';
    const buttonText = 'Shrek more';
    await surveyAudience.createInviteEmail(messageTextarea, footerTextarea);
    await surveyAudience.createOpenSurvey(messageTextarea);
    await surveyAudience.createEndSurvey(
      messageTextarea,
      footerTextarea,
      buttonText
    );
    await surveyAudience.createSurveyCompletedEmail(
      messageTextarea,
      footerTextarea
    );
    await surveyAudience.createChaseEmail(messageTextarea, footerTextarea);
  });
});

test(`TC-SA-003: Toggle Anonymity Options`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-003' },
    {
      type: 'Test Description',
      description:
        'Verify user can toggle anonymity, default, and force options',
    }
  );
  await test.step('Verify user can toggle anonymity, default, and force options', async () => {
    await surveyAudience.page
      .locator(surveyAudience.selectors.enableAnonymitySwitch)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.defaultAnonymitySwitch)
      .click();
    await surveyAudience.page
      .locator(surveyAudience.selectors.forceAnonymitySwitch)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await expect(
      surveyAudience.page.locator(
        surveyAudience.selectors.enableAnonymitySwitch
      )
    ).toHaveAttribute('data-state', 'checked');
    await expect(
      surveyAudience.page.locator(
        surveyAudience.selectors.defaultAnonymitySwitch
      )
    ).toHaveAttribute('data-state', 'checked');
    await expect(
      surveyAudience.page.locator(surveyAudience.selectors.forceAnonymitySwitch)
    ).toHaveAttribute('data-state', 'checked');
  });
});

test(`TC-SA-004: Toggle Email Validation for QR/Link`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-004' },
    {
      type: 'Test Description',
      description: 'Verify QR/Link setting enforces email validation',
    }
  );
  await test.step('Verify QR/Link setting enforces email validation', async () => {
    await surveyAudience.page
      .locator(surveyAudience.selectors.validateEmailSwitch)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await expect(
      surveyAudience.page.locator(surveyAudience.selectors.validateEmailSwitch)
    ).toHaveAttribute('data-state', 'checked');
    await surveyAudience.page
      .locator(surveyAudience.selectors.infoIcon)
      .nth(1)
      .hover();
    await surveyAudience.page.waitForTimeout(100);
    await expect(
      surveyAudience.page.getByText(
        'Require participants to validate their email'
      )
    ).toBeVisible();
  });
});

test(`TC-SA-005: Set Support Query Recipient`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-005' },
    {
      type: 'Test Description',
      description:
        'Verify support email input and dropdown selection on support',
    }
  );
  await test.step('Verify support email input and dropdown selection on support', async () => {
    await surveyAudience.page
      .locator(surveyAudience.selectors.emailInput)
      .first()
      .fill('test@test.com');
    await surveyAudience.page.keyboard.press('Enter');
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.infoIcon)
      .nth(2)
      .hover();
    await surveyAudience.page.waitForTimeout(100);
    await expect(
      surveyAudience.page
        .getByText(
          'If enabled, participants will be able to receive the results of the survey.'
        )
        .first()
    ).toBeVisible();
  });
});

test(`TC-SA-006: Configure Survey Results Recipients`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-006' },
    {
      type: 'Test Description',
      description: 'Verify setting recipients and toggles for survey results',
    }
  );
  await test.step('Verify setting recipients and toggles for survey results', async () => {
    await surveyAudience.page
      .locator(surveyAudience.selectors.surveyParticipationSummarySwitch)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(
        surveyAudience.selectors
          .surveyResultsFromParticipantsWhoWaivedAnonymitySwitch
      )
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(
        surveyAudience.selectors
          .individualSurveyResultsFromAllParticipantsSwitch
      )
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.emailInput)
      .first()
      .fill('testeteste@test.com');
    await surveyAudience.page.keyboard.press('Enter');
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.emailInput)
      .nth(1)
      .fill('test@test.com');
    await surveyAudience.page.keyboard.press('Enter');
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.emailInput)
      .nth(1)
      .fill('test2@test.com');
    await surveyAudience.page.keyboard.press('Enter');
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.getByRole('button', { name: 'Continue' }).click();
    await expect(
      surveyAudience.page.getByText('Survey settings updated successfully:')
    ).toBeVisible();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.reload();
    await surveyAudience.page.waitForTimeout(1000);
    await expect(surveyAudience.page.getByText('test@test.com')).toBeVisible();
    await expect(surveyAudience.page.getByText('test2@test.com')).toBeVisible();
    await expect(
      surveyAudience.page
        .locator(surveyAudience.selectors.surveyParticipationSummarySwitch)
        .getAttribute('data-state')
    ).resolves.toBe('checked');
    await expect(
      surveyAudience.page
        .locator(
          surveyAudience.selectors
            .surveyResultsFromParticipantsWhoWaivedAnonymitySwitch
        )
        .getAttribute('data-state')
    ).resolves.toBe('checked');
    await expect(
      surveyAudience.page
        .locator(
          surveyAudience.selectors
            .individualSurveyResultsFromAllParticipantsSwitch
        )
        .getAttribute('data-state')
    ).resolves.toBe('checked');
  });
});
