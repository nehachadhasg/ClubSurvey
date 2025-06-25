/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';
import { loadEnvironmentConfig } from '../../config/configLoader';
import { expect } from 'playwright/test';

const environment = loadEnvironmentConfig();

export class SurveyQuestions extends PlaywrightWrapper {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  public selectors = {
    tableRow:
      'tr[class*="hover:bg-muted/50 border-b transition-colors data-[state=selected]:bg-muted focus:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime group mb-2 border-separate !border-b-0 bg-greyscale-100 [&_td:first-child]:rounded-l-xl [&_td:last-child]:rounded-r-xl cursor-pointer"]',
    emailSelector: 'input[placeholder="Insert your email address"]',
    passwordSelector: 'input[placeholder="Enter your password"]',
    loginButtonSelector:
      'button[type="submit"][class*="inline-flex"][class*="bg-dark-green"][class*="typography-body-1-bold"]',
    clubSmallLogo: 'img[alt="59club logo"][width="24"]',
    addSurveyButton:
      'button[class*="font-body inline-flex items-center justify-center w-content rounded-sm transition-all active:scale-[0.98] bg-dark-green text-greyscale-0 typography-body-1-bold hover:bg-dark-green-dark focus:shadow-dark-green focus:bg-dark-green-dark focus:ring focus:ring-offset-2 focus:ring-offset-dark-green focus:ring-lime-shadow focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-dark-green focus-visible:ring-lime-shadow focus-visible:outline-none active:bg-dark-green-2 disabled:bg-greyscale-600 disabled:cursor-not-allowed disabled:pointer-events-none aria-disabled:bg-greyscale-600 aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none px-[20px] py-[13px] max-h-[40px] max-w-content"]:has-text("Add Survey")',
    surveyCards: 'div[data-testid="new-survey-modal-card"]',
    startFromScratchButton:
      'button[class*="typography-label mb-[15px] mt-auto flex items-center"]:has-text("Start from Scratch")',
    getStartedButton: 'button[title="Get Started"]:has-text("Get Started")',
    surveyDetailsHeading:
      'h2[class*="typography-heading-2 px-6 pb-6 pt-6 tracking-[-0.96px] md:pt-12"]:has-text("Survey Details")',
    backButton: 'button[aria-label="Back"]',
    surveyName:
      'div[class*="max-w-[200px] truncate sm:max-w-[300px] md:max-w-[400px]"]',
    progressSteps: 'div[class*="flex cursor-pointer items-center gap-2"]',
    previewButton: 'button[title="Preview"]:has-text("Preview")',
    translationDropdown:
      'div[class*="max-w-80 undefined flex w-full items-center justify-between px-4 py-3 text-lg"][aria-haspopup="menu"][aria-expanded="false"]',
    publishButton:
      'button[aria-haspopup="menu"][data-state="closed"]:has-text("Publish")',
    publicAndInternalSwitch:
      'button[role="switch"][class*="peer inline-flex h-[24px] w-[50px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-dark-green hover:ring-2 hover:ring-dark-green-shadow focus:outline-none focus:ring-[2px] focus:ring-lime-shadow focus:hover:ring-dark-green-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-[1px] focus-visible:ring-lime-shadow focus-visible:hover:ring-dark-green-shadow disabled:cursor-not-allowed disabled:bg-background disabled:opacity-50 bg-[#2d5749] data-[state=unchecked]:bg-gray-200"]',
    surveyNameInput: 'input[id="surveyNameInput"]',
    publicNameInput: 'input[id="publicNameInput"]',
    filtersButton:
      'button[class*="flex w-full items-center justify-between rounded-md bg-gray-100 p-3 hover:bg-gray-200"]:has-text("Filters")',
    filtersPageHeading:
      'p[class="typography-heading-3 text-black"]:has-text("Filters")',
    avgTimeDiv:
      'div[class*="inline-block rounded-sm bg-greyscale-100 p-2"]:has-text("Avg. time 15 min")',
    languageButtonDisabled:
      'button[data-disabled][class*="font-body inline-flex items-center justify-center w-content rounded-sm transition-all active:scale-[0.98] bg-background text-greyscale-1000 typography-body-1-bold hover:bg-greyscale-200 focus:shadow-dark-green focus:bg-greyscale-200 focus:ring focus:ring-offset-2 focus:ring-offset-dark-green focus:ring-lime-shadow focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-dark-green focus-visible:ring-lime-shadow focus-visible:outline-none active:bg-greyscale-300 disabled:bg-background disabled:text-greyscale-600 disabled:cursor-not-allowed aria-disabled:bg-background aria-disabled:text-greyscale-600 aria-disabled:cursor-not-allowed px-[20px] py-[13px] max-h-[40px] max-w-content w-full flex w-full justify-between"]',
    continueButton: 'button[title="Continue"]:has-text("Continue")',
    questionsPageHeading:
      'h2[class*="typography-heading-2 flex justify-start gap-2 text-black"]:has-text("Questions")',
    addNewFilterButton:
      'p[class*="typography-body-1"]:has-text("Add New Filter")',
    filterNameInput: 'input[placeholder="Enter Filter name"]',
    optionsInput: 'input[placeholder="Add Choice..."]',
    addOptionButton:
      'div[class*=" flex cursor-pointer items-center justify-center rounded-sm p-2 text-greyscale-1000"]',
    saveFilterButton: 'button[title="Save"]:has-text("Save")',
    selectedFilters: 'div[data-testid="filter-info-container"]',
    threeDotsButton:
      'svg[class="lucide lucide-ellipsis-vertical w-full"][data-testid="menu-trigger"]',
    deleteButton:
      'p[class="typography-body-1 max-w-[350px] truncate  undefined"]:has-text("Delete")',
    deletedFilters: 'p:has-text("Deleted (1)")',
    restoreButton:
      'button[class*="font-body inline-flex items-center justify-center w-content rounded-sm transition-all active:scale-[0.98] bg-background text-greyscale-1000 typography-body-1-bold hover:bg-greyscale-200 focus:shadow-dark-green focus:bg-greyscale-200 focus:ring focus:ring-offset-2 focus:ring-offset-dark-green focus:ring-lime-shadow focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-dark-green focus-visible:ring-lime-shadow focus-visible:outline-none active:bg-greyscale-300 disabled:bg-background disabled:text-greyscale-600 disabled:cursor-not-allowed aria-disabled:bg-background aria-disabled:text-greyscale-600 aria-disabled:cursor-not-allowed px-[20px] py-[13px] max-h-[40px] max-w-content flex max-w-fit items-center justify-center gap-1 !p-2 hover:bg-greyscale-300"]:has-text("Add")',
    backSvg: 'svg[class="lucide lucide-chevron-left"]',
    dragSvg: 'svg[class="lucide lucide-grip-vertical text-greyscale-300"]',
    surveyQuestionsHeading:
      'h2[class*="typography-heading-2 flex justify-start gap-2 text-black"]:has-text("Questions")',
    defaultQuestion:
      'p[class*="typography-heading-3 text-greyscale-1000"]:has-text("How likely are you to recommend our venue to a friend or colleague?")',
    addQuestionButton:
      'p[class="typography-label text-placeholder1"]:has-text("Add Question...")',
    enterQuestionInput: 'input[placeholder="Enter question..."]',
    enterChoiceInput: 'input[placeholder="Enter choice..."]',
    choiceQuestionDropdown:
      'button[name="questionType"][data-testid="question-type-select-questionType"]',
    singleOrMultipleChoiceDropdown:
      'button[name="responseType"][data-testid="response-type-select-responseType"]',
    addDescription:
      'p[class*=" typography-label-bold flex cursor-pointer items-center justify-start gap-2 text-greyscale-1000"]:has-text("Add description")',
    addDescriptionInput: 'input[placeholder="Add description..."]',
    addTooltipInput: 'input[placeholder="Add tooltip..."]',
    addConditionButton: 'button[type="button"]:has-text("Add Condition")',
    saveButton: 'button[title="Save"]:has-text("Save")',
    questionItem:
      'div[class*="relative flex h-[48px] w-full items-center justify-between rounded-sm bg-greyscale-100 py-2 pl-1 pr-3 hover:cursor-pointer hover:bg-greyscale-200 z-0"][style="opacity: 1;"]',
    enterRowsInput: 'input[placeholder="Enter row..."]',
    enterColumnsInput: 'input[placeholder="Enter column..."]',
    minimumRatingDropdown: 'button[name="rating-min-0"]',
    maximumRatingDropdown: 'button[name="rating-max-1"]',
    switchButtons:
      'button[role="switch"][value="on"][class*="peer inline-flex h-[24px] w-[50px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-dark-green data-[state=unchecked]:bg-greyscale-200 hover:ring-2 hover:ring-dark-green-shadow focus:outline-none focus:ring-[2px] focus:ring-lime-shadow focus:hover:ring-dark-green-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-[1px] focus-visible:ring-lime-shadow focus-visible:hover:ring-dark-green-shadow disabled:cursor-not-allowed disabled:bg-background disabled:opacity-50"]',
    npsErrorMessage:
      'p:has-text("Only one NPS question can exist for a survey")',
    enterRankingChoiceInput: 'input[placeholder="Add Choice"]',
    currencyDropdown: 'button[name="currrency-Pound £"]',
    answerBankButton: 'button:has-text("Answer Bank")',
    trashIcon: 'div[title="Delete Item"]',
    descriptionText: 'p[class="typography-body-1 text-placeholder1"]',
    tooltipIcon:
      'svg[class="lucide lucide-info text-placeholder1"][width="16"][height="16"]',
    removeDescriptionButton:
      'p[class*="typography-label-bold mt-4 flex cursor-pointer items-center justify-start gap-2 text-greyscale-1000"]:has-text("Remove description")',
    questionSettingsTooltips:
      'svg[class="lucide lucide-info -ml-1 text-placeholder1"][width="17.5"][height="17.5"]',
    selectMandatoryCommentsDropdown: 'span:has-text("Select options...")',
    uploadIcon: 'svg[class="lucide lucide-upload"][width="16"][height="16"]',
    uploadedImage: 'img[class="max-h-80 w-full object-cover object-center"]',
    deleteImage: 'div[title="Delete"][aria-label="Delete"]',
    timerIcon:
      'svg[class="lucide lucide-timer text-greyscale-500"][width="16"][height="16"]',
    surveyLengthWarningMessage:
      'p[class="typography-body-1 mt-1 text-greyscale-1000"]:has-text("You have added more questions than the recommended limit of 20. Surveys with too many questions may result in lower completion rates and reduced quality of responses. Consider prioritising key questions to improve engagement.")',
    surveyDurationWarningMessage:
      'p[class="typography-body-1 mt-1 text-greyscale-1000"]:has-text("Your survey is estimated to take more than the recommended 10 minutes to complete. Longer surveys can lead to lower completion rates.")',
    threeDots:
      'svg[class="lucide lucide-ellipsis w-full h-4 w-4 rotate-90"][width="24"][height="24"]',
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in SurveyQuestions');
  }

  public async login(page: Page) {
    const emailInput = page.locator(this.selectors.emailSelector);
    const passwordInput = page.locator(this.selectors.passwordSelector);
    const loginButton = page.locator(this.selectors.loginButtonSelector);
    await emailInput.fill(environment.credentials.SUPER_ADMIN.username);
    await passwordInput.fill(environment.credentials.SUPER_ADMIN.password);
    await loginButton.click();
    await page.waitForTimeout(1000);
  }

  public async navigateToSurveyQuestions() {
    await this.page.locator(this.selectors.tableRow).nth(0).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.tableRow).nth(0).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.tableRow).nth(0).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.addSurveyButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.surveyCards).nth(0).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.startFromScratchButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.getStartedButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.continueButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewChoiceQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string,
    option1: string,
    option2: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.locator(this.selectors.enterChoiceInput).fill(option1);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.enterChoiceInput).fill(option2);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.addConditionButton).click();
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewMatrixQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string,
    row1: string,
    row2: string,
    column1: string,
    column2: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Matrix Scale').click();
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.locator(this.selectors.enterRowsInput).fill(row1);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.enterRowsInput).fill(row2);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.enterColumnsInput).fill(column1);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.enterColumnsInput).fill(column2);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewRatingQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Rating').click();
    await this.page
      .locator(this.selectors.singleOrMultipleChoiceDropdown)
      .click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Stars').click();
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.locator(this.selectors.switchButtons).nth(4).click();
    await this.page.locator(this.selectors.addConditionButton).click();
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewNPSQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('NPS').click();
    await this.page.waitForTimeout(100);
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.locator(this.selectors.saveButton).click();
  }

  public async createNewRankingQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string,
    option1: string,
    option2: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Ranking').click();
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page
      .locator(this.selectors.enterRankingChoiceInput)
      .fill(option1);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.saveButton).click();
    await expect(
      this.page.getByText('Error: choices: At least two choices are required')
    ).toBeVisible();
    await this.page.waitForTimeout(1000);
    await this.page
      .locator(this.selectors.enterRankingChoiceInput)
      .fill(option2);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewTextInputQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Text Question').click();
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.locator(this.selectors.switchButtons).nth(0).click();
    await this.page.locator(this.selectors.switchButtons).nth(3).click();
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewNumericalInputQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Numeric Input').click();
    await this.page
      .locator(this.selectors.singleOrMultipleChoiceDropdown)
      .click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Currency').click();
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.locator(this.selectors.currencyDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('USD $').click();
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewDropdownQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string,
    option1: string,
    option2: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Dropdown').click();
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.locator(this.selectors.enterChoiceInput).fill(option1);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.enterChoiceInput).fill(option2);
    await this.page.keyboard.press('Enter');
    await this.page.locator(this.selectors.trashIcon).nth(1).click();
    await this.page.locator(this.selectors.trashIcon).click();
    await this.page.locator(this.selectors.answerBankButton).click();
    await this.page
      .locator('.pointer-events-none > .font-body')
      .first()
      .click();
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }

  public async createNewDateTimePickerQuestion(
    question: string,
    questionDescription: string,
    questionTooltip: string
  ) {
    await this.page.locator(this.selectors.addQuestionButton).click();
    await this.page.waitForTimeout(500);
    await this.page.locator(this.selectors.choiceQuestionDropdown).click();
    await this.page.waitForTimeout(100);
    await this.page.getByText('Date/Time Picker').click();
    await this.page.locator(this.selectors.enterQuestionInput).fill(question);
    await this.page.locator(this.selectors.addDescription).click();
    await this.page
      .locator(this.selectors.addDescriptionInput)
      .fill(questionDescription);
    await this.page
      .locator(this.selectors.addTooltipInput)
      .fill(questionTooltip);
    await this.page.getByText('Time Info').click();
    await this.page.locator(this.selectors.saveButton).click();
    await this.page.waitForTimeout(500);
  }
}
