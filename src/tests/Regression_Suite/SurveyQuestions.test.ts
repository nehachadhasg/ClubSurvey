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
