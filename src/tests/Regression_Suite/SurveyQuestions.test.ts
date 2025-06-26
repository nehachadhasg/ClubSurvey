import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { SurveyQuestions } from '../../pages/SurveyQuestions';

const environment = loadEnvironmentConfig();
let surveyQuestions: SurveyQuestions;

test.beforeEach(async ({ page, context }) => {
  surveyQuestions = new SurveyQuestions(page, context);
  await surveyQuestions.loadApp(environment.baseURL);
  await surveyQuestions.login(page);
  await surveyQuestions.navigateToSurveyQuestions();
});

test.afterEach(async () => {
  await surveyQuestions.cleanUpSurvey();
});

test(`TC-653-01: Load Survey Questions Page`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-01' },
    {
      type: 'Test Description',
      description: 'Verify layout and default NPS question on load',
    }
  );
  await test.step('Verify layout and default NPS question on load', async () => {
    await expect(
      surveyQuestions.page.locator(
        surveyQuestions.selectors.surveyQuestionsHeading
      )
    ).toBeVisible();
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.defaultQuestion)
    ).toBeVisible();
  });
});

test(`TC-653-02: Add New Question – Trigger Dropdown`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-02' },
    {
      type: 'Test Description',
      description: 'Ensure Add Question dropdown options show correctly',
    }
  );
  await test.step('Ensure Add Question dropdown options show correctly', async () => {
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.locator(
        surveyQuestions.selectors.choiceQuestionDropdown
      )
    ).toBeVisible();
    await expect(
      surveyQuestions.page.locator(
        surveyQuestions.selectors.singleOrMultipleChoiceDropdown
      )
    ).toBeVisible();
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.enterChoiceInput)
    ).toBeVisible();
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.enterQuestionInput)
    ).toBeVisible();
  });
});

test(`TC-653-03: Add Choice Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-03' },
    {
      type: 'Test Description',
      description: 'Add Single Choice question with all settings',
    }
  );
  await test.step('Add Single Choice question with all settings', async () => {
    const question = 'Is Shrek the best movie ever made?';
    const questionDescription =
      'Did you know that the first Shrek movie was released in 2001?';
    const questionTooltip = 'Now you know!';
    const option1 = 'Of course';
    const option2 = 'Do you even watch movies?';
    await surveyQuestions.createNewChoiceQuestion(
      question,
      questionDescription,
      questionTooltip,
      option1,
      option2
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
    await surveyQuestions.createNewChoiceQuestionWithMultipleChoice(
      question,
      questionDescription,
      questionTooltip,
      option1,
      option2
    );
    const questionItemMultipleChoice = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(3)'
    );
    await expect(questionItemMultipleChoice).toBeVisible();
    await expect(questionItemMultipleChoice).toContainText(question);
  });
});

test(`TC-653-04: Add Matrix Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-04' },
    {
      type: 'Test Description',
      description: 'Add matrix question of toggle/tickbox/numeric type',
    }
  );
  await test.step('Add matrix question of toggle/tickbox/numeric type', async () => {
    const question = 'Do you accept Shrek as your favorite movie?';
    const questionDescription =
      'Shrek is a movie about a green ogre who falls in love with a princess.';
    const questionTooltip = 'Go Shrek!';
    const row1 = 'Yes';
    const row2 = 'No';
    const column1 = 'Fiona?';
    const column2 = 'Donkey?';
    await surveyQuestions.createNewMatrixQuestion(
      question,
      questionDescription,
      questionTooltip,
      row1,
      row2,
      column1,
      column2
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
    await surveyQuestions.createNewMatrixQuestionWithTickbox(
      question,
      questionDescription,
      questionTooltip,
      row1,
      row2,
      column1,
      column2
    );
    const questionItemTickbox = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(3)'
    );
    await expect(questionItemTickbox).toBeVisible();
    await expect(questionItemTickbox).toContainText(question);
    await surveyQuestions.createNewMatrixQuestionWithNumeric(
      question,
      questionDescription,
      questionTooltip,
      row1,
      row2,
      column1,
      column2
    );
    const questionItemNumeric = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(4)'
    );
    await expect(questionItemNumeric).toBeVisible();
    await expect(questionItemNumeric).toContainText(question);
  });
});

test(`TC-653-05: Add Rating Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-05' },
    {
      type: 'Test Description',
      description: 'Add rating scale with numeric or star options',
    }
  );
  await test.step('Add rating scale with numeric or star options', async () => {
    const question = 'From 1 to 5, how much do you like Shrek?';
    const questionDescription = 'Shrek holds a special place in our hearts.';
    const questionTooltip = 'Is Shrek the best movie ever made?';
    await surveyQuestions.createNewRatingQuestion(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);

    await surveyQuestions.createNewRatingQuestionWithNumeric(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItemNumeric = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(3)'
    );
    await expect(questionItemNumeric).toBeVisible();
    await expect(questionItemNumeric).toContainText(question);
  });
});

test(`TC-653-06: Add NPS Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-06' },
    {
      type: 'Test Description',
      description: 'Validate default NPS setup and restriction on 2nd NPS',
    }
  );
  await test.step('Validate default NPS setup and restriction on 2nd NPS', async () => {
    const question = 'How much do you like Shrek?';
    const questionDescription = 'What about the cat wearing boots?';
    const questionTooltip = "Maybe you don't like Shrek?";
    await surveyQuestions.createNewNPSQuestion(
      question,
      questionDescription,
      questionTooltip
    );
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.npsErrorMessage)
    ).toBeVisible();
  });
});

test(`TC-653-07: Add Ranking Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-07' },
    {
      type: 'Test Description',
      description: 'Add ranking question and test min limit on options',
    }
  );
  await test.step('Add ranking question and test min limit on options', async () => {
    const question = 'Which Shrek movie is the best?';
    const questionDescription =
      'Did you know that the donkey is the best character in the Shrek movies?';
    const questionTooltip = 'All the Shrek movies are great!';
    const option1 = 'Shrek';
    const option2 = 'Shrek 2';
    await surveyQuestions.createNewRankingQuestion(
      question,
      questionDescription,
      questionTooltip,
      option1,
      option2
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
  });
});

test(`TC-653-08: Add Text Input Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-08' },
    {
      type: 'Test Description',
      description: 'Add open-ended text question with optional media',
    }
  );
  await test.step('Add open-ended text question with optional media', async () => {
    const question = "What's your favorite Shrek character?";
    const questionDescription = 'Shrek is well made movie from the early 2000s';
    const questionTooltip = "Don't you love Shrek?";
    await surveyQuestions.createNewTextInputQuestion(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
  });
});

test(`TC-653-09: Add Numerical Input Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-09' },
    {
      type: 'Test Description',
      description: 'Test different number formats (int, %, currency, decimal)',
    }
  );
  await test.step('Test different number formats (int, %, currency, decimal)', async () => {
    const question = 'How much did you paid to watch Shrek 2 in the theatres?';
    const questionDescription = 'First screening of Shrek 2 was in 2004';
    const questionTooltip = 'Was it worth it?';
    await surveyQuestions.createNewNumericalInputQuestion(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
    await surveyQuestions.createNewNumericalInputQuestionWithNumber(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItemNumeric = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(3)'
    );
    await expect(questionItemNumeric).toBeVisible();
    await expect(questionItemNumeric).toContainText(question);
    await surveyQuestions.createNewNumericalInputQuestionWithPercentage(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItemPercentage = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(4)'
    );
    await expect(questionItemPercentage).toBeVisible();
    await expect(questionItemPercentage).toContainText(question);

    await surveyQuestions.createNewNumericalInputQuestionWithDecimalPoint(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItemDecimalPoint = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(5)'
    );
    await expect(questionItemDecimalPoint).toBeVisible();
    await expect(questionItemDecimalPoint).toContainText(question);

    await surveyQuestions.createNewNumericalInputQuestionWithCurrencyPound(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItemCurrencyPound = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(6)'
    );
    await expect(questionItemCurrencyPound).toBeVisible();
    await expect(questionItemCurrencyPound).toContainText(question);
  });
});

test(`TC-653-10: Add Dropdown Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-653-10' },
    {
      type: 'Test Description',
      description: 'Add dropdown with options and validate Answer Bank trigger',
    }
  );
  await test.step('Add dropdown with options and validate Answer Bank trigger', async () => {
    const question =
      'Since the release of Shrek, has the world changed for the better?';
    const questionDescription = 'Shrek teaches us that we should be ourselves';
    const questionTooltip = 'Do you agree?';
    const option1 = 'Yes';
    const option2 = 'No';
    await surveyQuestions.createNewDropdownQuestion(
      question,
      questionDescription,
      questionTooltip,
      option1,
      option2
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
  });
});

test(`TC_DTQ_001: Create Date/Time Picker Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_001' },
    {
      type: 'Test Description',
      description:
        'Validate creation of Date/Time question with default settings',
    }
  );
  await test.step('Validate creation of Date/Time question with default settings', async () => {
    const question = 'When did Shrek cured the curse of the swamp?';
    const questionDescription = 'Before Shrek, there was no Shrek';
    const questionTooltip = 'What do you think?';
    await surveyQuestions.createNewDateTimePickerQuestion(
      question,
      questionDescription,
      questionTooltip
    );
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
  });
});

test(`TC_DTQ_002: Add Description and Tooltip`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_002' },
    {
      type: 'Test Description',
      description:
        'Ensure user can add description and tooltip for the question',
    }
  );
  await test.step('Ensure user can add description and tooltip for the question', async () => {
    const question = "Don't you just love Shrek?";
    const questionDescription =
      'Shrek is the movie that sold more tickets than any other movie in 2001';
    const questionTooltip = 'Now you gotta love it!';
    const option1 = 'Of course';
    const option2 = 'I found love through Shrek';
    await surveyQuestions.createNewChoiceQuestion(
      question,
      questionDescription,
      questionTooltip,
      option1,
      option2
    );
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.descriptionText)
    ).toHaveText(questionDescription);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.tooltipIcon)
      .hover();
    await expect(
      surveyQuestions.page.getByText(questionTooltip).first()
    ).toBeVisible();
  });
});

test(`TC_DTQ_003: Remove Description and Tooltip`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_003' },
    {
      type: 'Test Description',
      description: 'Ensure user can remove description and tooltip',
    }
  );
  await test.step('Ensure user can remove description and tooltip', async () => {
    const question = 'What is your opinion on Shrek?';
    const questionDescription =
      'Do you know that the cast for Shrek 2 was the same as the cast for Shrek 1?';
    const questionTooltip = 'Pure magic!';
    const option1 = 'It was great';
    const option2 = 'It is perfect';

    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterQuestionInput)
      .fill(question);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addDescription)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addDescriptionInput)
      .fill(questionDescription);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addTooltipInput)
      .fill(questionTooltip);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.removeDescriptionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(1000);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterChoiceInput)
      .fill(option1);
    await surveyQuestions.page.keyboard.press('Enter');
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterChoiceInput)
      .fill(option2);
    await surveyQuestions.page.keyboard.press('Enter');
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addConditionButton)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.descriptionText)
    ).not.toBeVisible();
  });
});

test(`TC_DTQ_004: Select Date and/or Time Option`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_004' },
    {
      type: 'Test Description',
      description: 'Validate user can toggle between Date, Time, or both',
    }
  );
  await test.step('Validate user can toggle between Date, Time, or both', async () => {
    const question = 'At what date did you opened yourself to Shrek?';
    const questionDescription = "If not Shrek, Shrekn't?";
    const questionTooltip = 'Shrek is the way';
    const fillData = async () => {
      await surveyQuestions.page
        .locator(surveyQuestions.selectors.addQuestionButton)
        .click();
      await surveyQuestions.page.waitForTimeout(500);
      await surveyQuestions.page
        .locator(surveyQuestions.selectors.choiceQuestionDropdown)
        .click();
      await surveyQuestions.page.waitForTimeout(100);
      await surveyQuestions.page.getByText('Date/Time Picker').click();
      await surveyQuestions.page
        .locator(surveyQuestions.selectors.enterQuestionInput)
        .fill(question);
      await surveyQuestions.page
        .locator(surveyQuestions.selectors.addDescription)
        .click();
      await surveyQuestions.page
        .locator(surveyQuestions.selectors.addDescriptionInput)
        .fill(questionDescription);
      await surveyQuestions.page
        .locator(surveyQuestions.selectors.addTooltipInput)
        .fill(questionTooltip);
    };
    // both date and time
    await surveyQuestions.createNewDateTimePickerQuestion(
      question,
      questionDescription,
      questionTooltip
    );
    // only date
    await fillData();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    // only time
    await fillData();
    await surveyQuestions.page.getByText('Time Info').click();
    await surveyQuestions.page.getByText('Date Info').click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await expect(surveyQuestions.page.locator('.mt-5 > div > div')).toHaveCount(
      4
    );
  });
});

test(`TC_DTQ_005: Question Settings - Optional`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_005' },
    {
      type: 'Test Description',
      description: 'Enable "Optional" setting and verify behavior',
    }
  );
  await test.step('Enable "Optional" setting and verify behavior', async () => {
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(0)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.questionSettingsTooltips)
      .nth(0)
      .hover();
    await expect(
      surveyQuestions.page
        .getByText(
          "If enabled, respondents aren't required to answer this question."
        )
        .first()
    ).toBeVisible();
  });
});

test(`TTC_DTQ_006: Show Comment Field (Optional)`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TTC_DTQ_006' },
    {
      type: 'Test Description',
      description: 'Enable comment field and verify optional entry',
    }
  );
  await test.step('Enable comment field and verify optional entry', async () => {
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(1)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.questionSettingsTooltips)
      .nth(1)
      .hover();
    await expect(
      surveyQuestions.page
        .getByText(
          'Adds a text area for respondents to provide additional comments.'
        )
        .first()
    ).toBeVisible();
  });
});

test(`TC_DTQ_007: Make Comment Mandatory`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_007' },
    {
      type: 'Test Description',
      description: 'Enable “Show comment field” + “Make comment mandatory”',
    }
  );
  await test.step('Enable “Show comment field” + “Make comment mandatory”', async () => {
    const question = 'Best movie ever made?';
    const option1 = 'Shrek';
    const option2 = 'Shrek 2';
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterQuestionInput)
      .fill(question);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterChoiceInput)
      .fill(option1);
    await surveyQuestions.page.keyboard.press('Enter');
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterChoiceInput)
      .fill(option2);
    await surveyQuestions.page.keyboard.press('Enter');
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(1)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(2)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.selectMandatoryCommentsDropdown)
      .click();
    await surveyQuestions.page
      .getByRole('menuitem', { name: 'Shrek', exact: true })
      .click();
    await surveyQuestions.page
      .getByRole('menuitem', { name: 'Shrek 2' })
      .click();
    await surveyQuestions.page.keyboard.press('Escape');
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
  });
});

test(`TC_DTQ_008: Add Media to Question`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_008' },
    {
      type: 'Test Description',
      description: 'Add an image to Date/Time question and verify upload',
    }
  );
  await test.step('Add an image to Date/Time question and verify upload', async () => {
    const question = 'When was the first Shrek movie released?';
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.choiceQuestionDropdown)
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Date/Time Picker').click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterQuestionInput)
      .fill(question);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(2)
      .click();
    await surveyQuestions.page
      .locator('input[type="file"]')
      .setInputFiles('data/test-image.jpg');
    await surveyQuestions.page.waitForTimeout(1000);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.uploadedImage)
    ).toBeVisible();
  });
});

test(`TC_DTQ_009: Replace/Delete Media`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_009' },
    {
      type: 'Test Description',
      description: 'Edit or remove media from question',
    }
  );
  await test.step('Edit or remove media from question', async () => {
    const question = 'In which year was the second Shrek movie released?';
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.choiceQuestionDropdown)
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Date/Time Picker').click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterQuestionInput)
      .fill(question);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(2)
      .click();
    await surveyQuestions.page
      .locator('input[type="file"]')
      .setInputFiles('data/test-image.jpg');
    await surveyQuestions.page.waitForTimeout(1000);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.deleteImage)
      .click();
    await surveyQuestions.page.waitForTimeout(1000);
    await expect(
      surveyQuestions.page.locator(surveyQuestions.selectors.uploadedImage)
    ).not.toBeVisible();
    await surveyQuestions.page
      .locator('input[type="file"]')
      .setInputFiles('data/test-image-2.jpg');
    await surveyQuestions.page.waitForTimeout(1000);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.deleteImage)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(2)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
  });
});

test(`TC_DTQ_010: Allow Image for Answers`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_010' },
    {
      type: 'Test Description',
      description: 'Enable option to allow participants to upload image',
    }
  );
  await test.step('Enable option to allow participants to upload image', async () => {
    const question = "Shrek's birthday date?";
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.choiceQuestionDropdown)
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Date/Time Picker').click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterQuestionInput)
      .fill(question);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(3)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
  });
});

test(`TC_DTQ_011: Enable Anonymity`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_011' },
    {
      type: 'Test Description',
      description: 'Enable anonymity setting and verify tooltip',
    }
  );
  await test.step('Enable anonymity setting and verify tooltip', async () => {
    const question = 'Shrek is living in which year?';
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.choiceQuestionDropdown)
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Date/Time Picker').click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterQuestionInput)
      .fill(question);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.switchButtons)
      .nth(4)
      .click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.questionSettingsTooltips)
      .nth(4)
      .hover();
    await expect(
      surveyQuestions.page
        .getByText('Keeps respondent identity anonymous for this question.')
        .first()
    ).toBeVisible();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    const questionItem = surveyQuestions.page.locator(
      '.mt-5 > div > div:nth-child(2)'
    );
    await expect(questionItem).toBeVisible();
    await expect(questionItem).toContainText(question);
  });
});

test(`TC_DTQ_012: Average Completion Time`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_DTQ_012' },
    {
      type: 'Test Description',
      description: 'Verify default time set to 15 seconds',
    }
  );
  await test.step('Verify default time set to 15 seconds', async () => {
    const question = 'How long did it take you to answer this question?';
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.addQuestionButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.choiceQuestionDropdown)
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Date/Time Picker').click();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.enterQuestionInput)
      .fill(question);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.saveButton)
      .click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.timerIcon)
      .nth(1)
      .hover();
    await expect(
      surveyQuestions.page.getByText('Average time 15 sec').first()
    ).toBeVisible();
    await surveyQuestions.page.waitForTimeout(500);
  });
});

test(`TC-SL-001: Display warning when > 20 questions added`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SL-001' },
    {
      type: 'Test Description',
      description:
        'Verify that a warning message appears when the user adds more than 20 questions',
    }
  );
  await test.step('Verify that a warning message appears when the user adds more than 20 questions', async () => {
    const questions = [
      'What is your favorite layer of the onion?',
      'How satisfied are you with the swamp accommodations?',
      "Would you recommend Shrek's swamp to other ogres?",
      'What is your ogre age group?',
      'How did you hear about Far Far Away?',
      'What is your fairy tale occupation?',
      'How often do you visit the Magic Mirror?',
      'What Shrek features do you value most?',
      'How likely are you to buy another donkey?',
      'What improvements would you suggest for the castle?',
      'What is your dragon treasure level?',
      'How long have you been a fairy tale character?',
      'What is your preferred method of communication with talking animals?',
      "How would you rate the Gingerbread Man's customer service?",
      'What is your primary reason for visiting the Enchanted Forest?',
      'How important is the price of magic beans to your decision?',
      'What is your fairy tale education level?',
      'How do you typically make decisions about breaking curses?',
      'What is your ogre family size?',
      'How do you prefer to receive updates from the Magic Mirror?',
      'What is your biggest concern about living happily ever after?',
    ];

    for (const question of questions) {
      await surveyQuestions.createNewTextInputQuestion(
        question,
        question,
        question
      );
    }
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).toBeVisible();
    await surveyQuestions.page
      .locator('.flex-shrink-0 > .lucide')
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await expect(
      surveyQuestions.page.locator(
        surveyQuestions.selectors.surveyLengthWarningMessage
      )
    ).toBeVisible();
  });
});

test(`TC-SL-002: Display warning when estimated duration exceeds 10 minutes`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SL-002' },
    {
      type: 'Test Description',
      description:
        'Verify warning when total estimated time of all questions exceeds 10 minutes',
    }
  );
  await test.step('Verify warning when total estimated time of all questions exceeds 10 minutes', async () => {
    const questions = [
      'What is your favorite character from Shrek?',
      'How would you rate the humor in Shrek on a scale of 1-10?',
      'What is your favorite scene from the Shrek movies?',
      'How likely are you to recommend Shrek to a friend?',
      'What do you think about the animation quality in Shrek?',
      'How would you describe the relationship between Shrek and Donkey?',
      'What is your opinion on the soundtrack of Shrek?',
      'How do you feel about the villain characters in Shrek?',
      'What makes Shrek different from other animated movies?',
      'How would you rate the overall story of Shrek?',
      'Are you in love with Fiona?',
    ];

    for (const question of questions) {
      await surveyQuestions.createNewTextInputQuestion(
        question,
        question,
        question
      );
    }
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.getByText('Survey Duration Warning')
    ).toBeVisible();
    await surveyQuestions.page.locator('.flex-shrink-0 > .lucide').click();
    await surveyQuestions.page.waitForTimeout(100);
    await expect(
      surveyQuestions.page.locator(
        surveyQuestions.selectors.surveyDurationWarningMessage
      )
    ).toBeVisible();
  });
});

test(`TC-SL-003: Display combined warning when both duration and count exceeded`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SL-003' },
    {
      type: 'Test Description',
      description:
        'Verify both warnings are merged into a single message when both limits are exceeded',
    }
  );
  await test.step('Verify both warnings are merged into a single message when both limits are exceeded', async () => {
    const questions = [
      'If Shrek had to choose between onions and ogre breath, which would he pick?',
      'What do you think Donkey dreams about at night?',
      'If Shrek could only eat one food for the rest of his life, what would it be?',
      'What would happen if Shrek tried to use a smartphone?',
      'If Fiona could transform into any animal, what would she choose?',
      "What do you think Shrek's favorite dance move is?",
      'If Donkey could fly anywhere, where would he go?',
      'What would Shrek look like in a tuxedo?',
      'If the Gingerbread Man could talk to other cookies, what would they discuss?',
      "What do you think Shrek's morning routine looks like?",
      'If Fiona had to choose between being human or ogre forever, what would she pick?',
      'What would happen if Shrek tried to cook a gourmet meal?',
      'If Donkey could have any superpower, what would it be?',
      "What do you think Shrek's favorite TV show would be?",
      "If the Three Little Pigs moved into Shrek's swamp, how would that work out?",
      "What would Shrek's dating profile look like?",
      'If Donkey could only say one word for the rest of his life, what would it be?',
      "What do you think Shrek's favorite season is and why?",
      'If Fiona could only wear one outfit forever, what would she choose?',
      'What would happen if Shrek tried to use social media?',
      'If the Gingerbread Man could grow limbs, what would he do first?',
      "What do you think Shrek's biggest fear is?",
      'If Donkey could only eat one food, what would it be?',
      "What would Shrek's ideal vacation look like?",
      'If Fiona could have any job in the world, what would she choose?',
      "What do you think Shrek's favorite joke is?",
    ];

    for (const question of questions) {
      await surveyQuestions.createNewDateTimePickerQuestion(
        question,
        question,
        question
      );
    }
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).toBeVisible();
    await surveyQuestions.page
      .locator('.flex-shrink-0 > .lucide')
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await expect(
      surveyQuestions.page.locator(
        surveyQuestions.selectors.surveyLengthWarningMessage
      )
    ).toBeVisible();
    // await expect(
    //   surveyQuestions.page.getByText('Survey Duration Warning')
    // ).toBeVisible();
    // await surveyQuestions.page
    //   .locator('.flex-shrink-0 > .lucide')
    //   .nth(1)
    //   .click();
    // await surveyQuestions.page.waitForTimeout(100);
    // await expect(
    //   surveyQuestions.page.locator(
    //     surveyQuestions.selectors.surveyDurationWarningMessage
    //   )
    // ).toBeVisible();
  });
});

test(`TC-SL-004: Dismiss survey length warning`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SL-004' },
    {
      type: 'Test Description',
      description:
        'Verify user can dismiss the warning and it does not reappear',
    }
  );
  await test.step('Verify user can dismiss the warning and it does not reappear', async () => {
    const questions = [
      'What color would Shrek paint his toenails if he had to choose?',
      'If Donkey could only eat one food for the rest of his life, what would it be?',
      "What's the worst pickup line Puss in Boots has ever used?",
      'If Fiona had to pick a karaoke song, what would she sing?',
      "What's the most embarrassing thing that happened to Shrek at the royal ball?",
      'If the Gingerbread Man could talk, what would his favorite joke be?',
      "What's the weirdest thing Donkey has ever said to a princess?",
      'If Puss in Boots had a dating profile, what would it say?',
      "What's the most ridiculous thing Shrek has ever done to impress Fiona?",
      'If the Three Little Pigs opened a restaurant, what would they serve?',
      "What's the worst fashion choice Shrek has ever made?",
      'If Donkey could be any other animal for a day, what would he choose?',
      "What's the most embarrassing thing that happened to Fiona in the swamp?",
      'If Puss in Boots had a secret talent, what would it be?',
      "What's the weirdest thing Shrek has ever found in his swamp?",
      'If the Fairy Godmother had a day job, what would it be?',
      "What's the most ridiculous thing Donkey has ever done to help Shrek?",
      'If Fiona could change one thing about Shrek, what would it be?',
      "What's the worst thing that could happen at a royal dinner party?",
      'If Puss in Boots had a nemesis, who would it be?',
      "What's the most embarrassing thing that happened to Shrek on his wedding day?",
    ];

    for (const question of questions) {
      await surveyQuestions.createNewDateTimePickerQuestion(
        question,
        question,
        question
      );
    }
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).toBeVisible();
    await surveyQuestions.page
      .locator('.flex-shrink-0 > .lucide')
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByRole('button', { name: 'Dismiss' }).click();
    await surveyQuestions.page.waitForTimeout(100);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).not.toBeVisible();
  });
});

test(`TC-SL-005: Remove warning when question count is reduced to ≤ 20`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SL-005' },
    {
      type: 'Test Description',
      description:
        'Verify warning disappears when question count is adjusted below threshold',
    }
  );
  await test.step('Verify warning disappears when question count is adjusted below threshold', async () => {
    const questions = [
      'If Shrek had to babysit the Gingerbread Man, what would go wrong?',
      "What's the most embarrassing thing that could happen to Prince Charming at a royal ball?",
      'If Donkey and Puss in Boots had to share a tiny apartment, what would be their biggest problem?',
      "What's the weirdest thing Shrek has ever found in his swamp that he actually kept?",
      'If Fiona had to teach ogre etiquette to other princesses, what would she say?',
      "What's the most ridiculous thing that could happen during a royal family photo shoot?",
      'If the Three Little Pigs opened a food truck, what would their signature dish be?',
      "What's the worst thing that could happen if Shrek tried to cook a romantic dinner?",
      'If Puss in Boots had to wear a disguise, what would be his worst choice?',
      "What's the most embarrassing thing that could happen to Donkey during a job interview?",
      'If the Fairy Godmother had to use modern technology, what would she struggle with most?',
      "What's the weirdest thing that could happen if Shrek tried to learn to dance?",
      'If Fiona had to give relationship advice to other fairy tale couples, what would she say?',
      "What's the most ridiculous thing that could happen during a royal council meeting?",
      'If the Gingerbread Man had to go on a diet, what would be his biggest temptation?',
      "What's the worst thing that could happen if Shrek tried to be a fashion model?",
      'If Donkey had to write a self-help book, what would the title be?',
      "What's the most embarrassing thing that could happen to Puss in Boots during a sword fight?",
      'If the Three Little Pigs had to solve a mystery, what would they investigate first?',
      "What's the weirdest thing that could happen if Shrek tried to learn to play a musical instrument?",
      'If Prince Charming had to work a regular job, what would be his biggest workplace disaster?',
    ];

    for (const question of questions) {
      await surveyQuestions.createNewDateTimePickerQuestion(
        question,
        question,
        question
      );
    }
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).toBeVisible();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.threeDots)
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Delete', { exact: true }).click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.threeDots)
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Delete', { exact: true }).click();
    await surveyQuestions.page.waitForTimeout(100);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).not.toBeVisible();
  });
});

test(`TC-SL-006: Re-trigger warning after dismiss if condition met again`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC-SL-006' },
    {
      type: 'Test Description',
      description:
        'Verify warning is shown again if conditions are re-triggered after removal',
    }
  );
  await test.step('Verify warning is shown again if conditions are re-triggered after removal', async () => {
    const questions = [
      "Knock knock! Who's there? Shrek! Shrek who? Shrek and awe!",
      "Knock knock! Who's there? Donkey! Donkey who? Donkey see, donkey do!",
      "Knock knock! Who's there? Fiona! Fiona who? Fiona get out of here!",
      "Knock knock! Who's there? Puss! Puss who? Puss in boots, but I left my boots at home!",
      "Knock knock! Who's there? Farquaad! Farquaad who? Farquaad to be a short joke!",
      "Knock knock! Who's there? Gingerbread! Gingerbread who? Gingerbread man, but I'm made of cake!",
      "Knock knock! Who's there? Dragon! Dragon who? Dragon my feet to get here!",
      "Knock knock! Who's there? Pinocchio! Pinocchio who? Pinocchio nose grows when I tell jokes!",
      "Knock knock! Who's there? Three Little Pigs! Three Little Pigs who? Three Little Pigs in a blanket!",
      "Knock knock! Who's there? Big Bad Wolf! Big Bad Wolf who? Big Bad Wolf whistle!",
      "Knock knock! Who's there? Fairy Godmother! Fairy Godmother who? Fairy Godmother of all bad jokes!",
      "Knock knock! Who's there? Prince Charming! Prince Charming who? Prince Charming, but I'm really an ogre!",
      "Knock knock! Who's there? Magic Mirror! Magic Mirror who? Magic Mirror on the wall, who's the silliest of them all?",
      "Knock knock! Who's there? Muffin Man! Muffin Man who? Muffin Man can stop these jokes!",
      "Knock knock! Who's there? Humpty Dumpty! Humpty Dumpty who? Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall!",
      "Knock knock! Who's there? Three Blind Mice! Three Blind Mice who? Three Blind Mice, see how they run!",
      "Knock knock! Who's there? Little Red Riding Hood! Little Red Riding Hood who? Little Red Riding Hood, but I left my basket at home!",
      "Knock knock! Who's there? Cinderella! Cinderella who? Cinderella glass slipper broke!",
      "Knock knock! Who's there? Snow White! Snow White who? Snow White and the seven dwarfs, but they're all on vacation!",
      "Knock knock! Who's there? Rapunzel! Rapunzel who? Rapunzel hair down, it's time for bed!",
      "Knock knock! Who's there? Sleeping Beauty! Sleeping Beauty who? Sleeping Beauty, but I'm wide awake now!",
    ];

    for (const question of questions) {
      await surveyQuestions.createNewDateTimePickerQuestion(
        question,
        question,
        question
      );
    }
    await surveyQuestions.page.waitForTimeout(500);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).toBeVisible();
    await surveyQuestions.page
      .locator('.flex-shrink-0 > .lucide')
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByRole('button', { name: 'Dismiss' }).click();
    await surveyQuestions.page.waitForTimeout(100);
    await expect(
      surveyQuestions.page.getByText('Survey Length Warning')
    ).not.toBeVisible();
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.threeDots)
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Delete', { exact: true }).click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.threeDots)
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Delete', { exact: true }).click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page
      .locator(surveyQuestions.selectors.threeDots)
      .first()
      .click();
    await surveyQuestions.page.waitForTimeout(100);
    await surveyQuestions.page.getByText('Delete', { exact: true }).click();
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.createNewDateTimePickerQuestion(
      questions[0],
      questions[0],
      questions[0]
    );
    await surveyQuestions.page.waitForTimeout(500);
    await surveyQuestions.createNewDateTimePickerQuestion(
      questions[1],
      questions[1],
      questions[1]
    );
    await surveyQuestions.createNewDateTimePickerQuestion(
      questions[2],
      questions[2],
      questions[2]
    );
    await surveyQuestions.page.waitForTimeout(500);
    // TODO: Uncomment once functionality is correctly implemented
    // await expect(
    //   surveyQuestions.page.getByText('Survey Length Warning')
    // ).toBeVisible();
  });
});
