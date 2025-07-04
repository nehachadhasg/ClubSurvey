import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { SurveyAudience } from '../../pages/SurveyAudience';
import { faker } from '@faker-js/faker/locale/en';

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
    const email = faker.internet.email();
    await surveyAudience.page
      .locator(surveyAudience.selectors.emailInput)
      .first()
      .fill(email);
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
    const email = faker.internet.email();
    const email2 = faker.internet.email();
    const email3 = faker.internet.email();
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
      .fill(email);
    await surveyAudience.page.keyboard.press('Enter');
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.emailInput)
      .nth(1)
      .fill(email2);
    await surveyAudience.page.keyboard.press('Enter');
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.emailInput)
      .nth(1)
      .fill(email3);
    await surveyAudience.page.keyboard.press('Enter');
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.getByRole('button', { name: 'Continue' }).click();
    await expect(
      surveyAudience.page.getByText('Survey settings updated successfully:')
    ).toBeVisible();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.reload();
    await surveyAudience.page.waitForTimeout(1000);
    await expect(surveyAudience.page.getByText(email2)).toBeVisible();
    await expect(surveyAudience.page.getByText(email3)).toBeVisible();
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

test(`TC-SA-007: Add Participant Emails`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-007' },
    {
      type: 'Test Description',
      description: 'Verify adding participants manually using modal',
    }
  );
  await test.step('Verify adding participants manually using modal', async () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const firstName2 = faker.person.firstName();
    const lastName2 = faker.person.lastName();
    const email2 = faker.internet.email();
    const firstName3 = faker.person.firstName();
    const lastName3 = faker.person.lastName();
    const email3 = faker.internet.email();
    await surveyAudience.page
      .locator(surveyAudience.selectors.addEmailsButton)
      .first()
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .locator(surveyAudience.selectors.firstNameInput)
      .fill(firstName);
    await surveyAudience.page
      .locator(surveyAudience.selectors.lastNameInput)
      .fill(lastName);
    await surveyAudience.page
      .locator(surveyAudience.selectors.userEmailInput)
      .fill(email);
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .getByRole('button', { name: 'Add Email' })
      .click();
    await surveyAudience.page
      .locator(surveyAudience.selectors.firstNameInput)
      .nth(1)
      .fill(firstName2);
    await surveyAudience.page
      .locator(surveyAudience.selectors.lastNameInput)
      .nth(1)
      .fill(lastName2);
    await surveyAudience.page
      .locator(surveyAudience.selectors.userEmailInput)
      .nth(1)
      .fill(email2);
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .getByRole('button', { name: 'Add Email' })
      .click();
    await surveyAudience.page
      .locator(surveyAudience.selectors.firstNameInput)
      .nth(2)
      .fill(firstName3);
    await surveyAudience.page
      .locator(surveyAudience.selectors.lastNameInput)
      .nth(2)
      .fill(lastName3);
    await surveyAudience.page
      .locator(surveyAudience.selectors.userEmailInput)
      .nth(2)
      .fill(email3);
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.getByRole('button', { name: 'Save' }).click();
    await surveyAudience.page.waitForTimeout(500);
    await expect(surveyAudience.page.getByText(email)).toBeVisible();
    await expect(surveyAudience.page.getByText(email2)).toBeVisible();
    await expect(surveyAudience.page.getByText(email3)).toBeVisible();
  });
});

test(`TC-SA-008: Import Participants from Previous Survey`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-008' },
    {
      type: 'Test Description',
      description: 'Verify importing eligible participants from prior surveys',
    }
  );
  await test.step('Verify importing eligible participants from prior surveys', async () => {
    await surveyAudience.page
      .locator(surveyAudience.selectors.importParticipantsButton)
      .first()
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .getByRole('menuitem', { name: 'From Previous Survey' })
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.getByText('Select previous survey').click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.getByRole('menuitem').first().click();
    await surveyAudience.page.getByRole('button', { name: 'Generate' }).click();
    await surveyAudience.page.waitForTimeout(100);
    // TODO: none of the surveys have participants, so we can't test this now
    // await surveyAudience.page
    //   .getByRole('button', { name: 'Import Participants' })
    //   .click();
    // await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.keyboard.press('Escape');
    await surveyAudience.page.waitForTimeout(100);
    await expect(
      surveyAudience.page.getByRole('heading', { name: 'No emails added' })
    ).toBeVisible();
  });
});

test(`TC-SA-009: Invite via Email – Single Survey`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-009' },
    {
      type: 'Test Description',
      description:
        'Verify invitation table, CSV import, and sending for Single type',
    }
  );
  await test.step('Verify invitation table, CSV import, and sending for Single type', async () => {
    await surveyAudience.page
      .locator(surveyAudience.selectors.importParticipantsButton)
      .nth(1)
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page
      .getByRole('menuitem', { name: 'CSV File' })
      .click();
    await surveyAudience.page.waitForTimeout(100);
    await surveyAudience.page.setInputFiles(
      'input[type="file"]',
      'data/participant-sample.csv'
    );
    await surveyAudience.page.waitForTimeout(500);
    await surveyAudience.page
      .getByRole('button', { name: 'Import Participants' })
      .click();
    await surveyAudience.page.waitForTimeout(1000);
    const status = surveyAudience.page.getByText('Pending');
    await expect(status).toHaveCount(5);
  });
});

test.skip(`TC-SA-010: Invite via Email – Rolling Survey`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SA-010' },
    {
      type: 'Test Description',
      description:
        'Verify encounter date field and invite sending for Rolling survey',
    }
  );
  await test.step('Verify encounter date field and invite sending for Rolling survey', async () => {
    // TODO: Unable to replicate flow, so skipping this test
    // 1. Go to Rolling survey
    // 2. Import CSV
    // 3. Add encounter date
    // 4. Send invites
  });
});
