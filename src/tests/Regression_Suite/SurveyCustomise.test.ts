import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { SurveyCustomise } from 'pages/SurveyCustomise';

const environment = loadEnvironmentConfig();
let surveyCustomise: SurveyCustomise;

test.beforeEach(async ({ page, context }) => {
  surveyCustomise = new SurveyCustomise(page, context);
  await surveyCustomise.loadApp(environment.baseURL);
  await surveyCustomise.login(page);
  await surveyCustomise.navigateToSurveyCustomise();
});

test.afterEach(async () => {
  await surveyCustomise.cleanUpSurvey();
});

test(`TC-CS-001: Toggle Survey and Email Preview`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-001' },
    {
      type: 'Test Description',
      description: 'Verify user can toggle between Survey and Email previews',
    }
  );
  await test.step('Verify user can toggle between Survey and Email previews', async () => {
    await surveyCustomise.page.getByRole('button', { name: 'Email' }).click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.emailSpanPreview)
    ).toBeVisible();
    await surveyCustomise.page
      .getByRole('button', { name: 'Survey', exact: true })
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.emailSpanPreview)
    ).not.toBeVisible();
  });
});

test(`TC-CS-002: Select Default Style`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-002' },
    {
      type: 'Test Description',
      description: 'Verify default style (Green) is applied initially',
    }
  );
  await test.step('Verify default style (Green) is applied initially', async () => {
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.greenButton)
    ).toBeVisible();
  });
});

test(`TC-CS-003: Add Custom Style with Main & Background Colours`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-003' },
    {
      type: 'Test Description',
      description:
        'Verify user can add custom colours using picker and it reflects on preview',
    }
  );
  await test.step('Verify user can add custom colours using picker and it reflects on preview', async () => {
    const mainColour = '2DE1C2';
    const rgbMainColour = 'rgb(45, 225, 194)';

    await surveyCustomise.page
      .getByRole('button', { name: 'Customise' })
      .nth(1)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.mainColourPicker)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .getByRole('textbox', { name: 'hex' })
      .fill(mainColour);
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page.keyboard.press('Escape');
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.backgroundColourPicker)
      .nth(3)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.getByRole('button', { name: 'Start Survey' })
    ).toHaveCSS('background-color', rgbMainColour);
  });
});

test(`TC-CS-004: Upload Cover Image`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-004' },
    {
      type: 'Test Description',
      description:
        'Verify user can upload a cover image, select an image from My Gallery and see it on preview',
    }
  );
  await test.step('Verify user can upload a cover image, select an image from My Gallery and see it on preview', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.addImageButtons)
      .nth(0)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator('input[type="file"]')
      .setInputFiles('data/test-image.jpg');
    await surveyCustomise.page.waitForTimeout(1000);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .first()
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.saveButton)
      .click();
    await surveyCustomise.page.waitForTimeout(1000);
    await expect(
      surveyCustomise.page.locator('.md\\:px-\\[48px\\] > div').first()
    ).toBeVisible();
  });
});

test(`TC-CS-005: Browse and Upload New Cover Image`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-005' },
    {
      type: 'Test Description',
      description: 'Verify user can browse local system and upload cover image',
    }
  );
  await test.step('Verify user can browse local system and upload cover image', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.addImageButtons)
      .nth(0)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator('input[type="file"]')
      .setInputFiles('data/test-image.jpg');
    await surveyCustomise.page.waitForTimeout(1000);
    await surveyCustomise.page
      .getByRole('img', { name: 'test-image.jpg' })
      .first()
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.saveButton)
      .click();
    await surveyCustomise.page.waitForTimeout(1000);
    await expect(
      surveyCustomise.page.locator('.md\\:px-\\[48px\\] > div').first()
    ).toBeVisible();
  });
});

test(`TC-CS-006: Remove or Preview Cover Image`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-006' },
    {
      type: 'Test Description',
      description: 'Verify user can preview or delete selected image',
    }
  );
  await test.step('Verify user can preview or delete selected image', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.addImageButtons)
      .nth(0)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator('input[type="file"]')
      .setInputFiles('data/test-image.jpg');
    await surveyCustomise.page.waitForTimeout(1000);
    await surveyCustomise.page
      .getByRole('img', { name: 'test-image.jpg' })
      .first()
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.saveButton)
      .click();
    await surveyCustomise.page.waitForTimeout(1000);
    await expect(
      surveyCustomise.page.getByRole('img', { name: 'test-image.jpg' })
    ).toBeVisible();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.previewImageButton)
      .click();
    await surveyCustomise.page.waitForTimeout(500);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.imageModalHeading)
    ).toContainText('test-image.jpg');
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.imagePreview)
    ).toBeVisible();
    await surveyCustomise.page.keyboard.press('Escape');
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.deleteImageButton)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.getByRole('img', { name: 'test-image.jpg' })
    ).not.toBeVisible();
  });
});

test(`TC-CS-007: Upload Logo`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-007' },
    {
      type: 'Test Description',
      description: 'Verify user can upload one logo and it appears in preview',
    }
  );
  await test.step('Verify user can upload one logo and it appears in preview', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.addImageButtons)
      .nth(1)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator('input[type="file"]')
      .setInputFiles('data/test-image-2.jpg');
    await surveyCustomise.page.waitForTimeout(1000);
    await surveyCustomise.page
      .getByRole('img', { name: 'test-image-2.jpg' })
      .first()
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.saveButton)
      .click();
    await surveyCustomise.page.waitForTimeout(1000);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.logoImage)
    ).toBeVisible();
    await surveyCustomise.page.getByRole('button', { name: 'Email' }).click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.logoImage)
    ).toBeVisible();
  });
});

test(`TC-CS-008: Set Logo Position`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-008' },
    {
      type: 'Test Description',
      description: 'Verify logo can be positioned left, center, or right',
    }
  );
  await test.step('Verify logo can be positioned left, center, or right', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.addImageButtons)
      .nth(1)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .first()
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.saveButton)
      .click();
    await surveyCustomise.page.waitForTimeout(1000);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.alignLogoMiddleSvg)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(
        surveyCustomise.selectors.logoImageMiddleAligned
      )
    ).toBeVisible();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.alignLogoRightSvg)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(
        surveyCustomise.selectors.logoImageRightAligned
      )
    ).toBeVisible();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.alignLogoLeftSvg)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page.locator(surveyCustomise.selectors.logoImage)
    ).toBeVisible();
  });
});

test(`TC-CS-009: Upload Sponsor Images`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-009' },
    {
      type: 'Test Description',
      description: 'Verify sponsor images can be added and seen on preview',
    }
  );
  await test.step('Verify sponsor images can be added and seen on preview', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.addImageButtons)
      .nth(2)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .first()
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(1)
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(2)
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(3)
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(4)
      .click();
    await surveyCustomise.page
      .getByRole('button', { name: 'Save (5) Items' })
      .click();
    await surveyCustomise.page.waitForTimeout(1000);
    const sponsorImages = surveyCustomise.page.locator(
      surveyCustomise.selectors.sponsorImages
    );
    await expect(sponsorImages).toHaveCount(5);
    await expect(sponsorImages.nth(0)).toBeVisible();
    await expect(sponsorImages.nth(1)).toBeVisible();
    await expect(sponsorImages.nth(2)).toBeVisible();
    await expect(sponsorImages.nth(3)).toBeVisible();
    await expect(sponsorImages.nth(4)).toBeVisible();
  });
});

test(`TC-CS-010: Prevent More Than 5 Sponsors`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-CS-010' },
    {
      type: 'Test Description',
      description: 'Ensure no more than 5 sponsor images can be added',
    }
  );
  await test.step('Ensure no more than 5 sponsor images can be added', async () => {
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.addImageButtons)
      .nth(2)
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .first()
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(1)
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(2)
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(3)
      .click();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.galleryImages)
      .nth(4)
      .click();
    await surveyCustomise.page
      .getByRole('button', { name: 'Save (5) Items' })
      .click();
    await surveyCustomise.page.waitForTimeout(1000);
    await expect(
      surveyCustomise.page
        .locator(surveyCustomise.selectors.addImageButtons)
        .nth(2)
    ).not.toBeVisible();
    await surveyCustomise.page
      .locator(surveyCustomise.selectors.deleteImageButton)
      .first()
      .click();
    await surveyCustomise.page.waitForTimeout(100);
    await expect(
      surveyCustomise.page
        .locator(surveyCustomise.selectors.addImageButtons)
        .nth(2)
    ).toBeVisible();
  });
});
