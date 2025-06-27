import { expect, test } from '@playwright/test';
import { loadEnvironmentConfig } from '../../../config/configLoader';
import { SurveyFilters } from 'pages/SurveyFilters';

const environment = loadEnvironmentConfig();
let surveyFilters: SurveyFilters;

test.beforeEach(async ({ page, context }) => {
  surveyFilters = new SurveyFilters(page, context);
  await surveyFilters.loadApp(environment.baseURL);
  await surveyFilters.login(page);
  await surveyFilters.navigateToSurveyFilters();
});

test.afterEach(async () => {
  await surveyFilters.cleanUpSurvey();
});

test(`TC_SF_001: Navigate to Survey Filters`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SF_001' },
    {
      type: 'Test Description',
      description: 'User lands on Survey Filters screen via Survey Details',
    }
  );
  await test.step('User lands on Survey Filters screen via Survey Details', async () => {
    await expect(
      surveyFilters.page.locator(surveyFilters.selectors.filtersPageHeading)
    ).toBeVisible();
  });
});

test(`TC_SF_002: Add New Filter`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SF_002' },
    {
      type: 'Test Description',
      description: 'Add a new filter (dropdown or numeric)',
    }
  );
  await test.step('Add a new filter (dropdown or numeric)', async () => {
    const filterName = 'Test Filter';
    const option1 = 'Yes';
    const option2 = 'No';
    await surveyFilters.createNewDropdownFilter(filterName, option1, option2);
    await expect(
      surveyFilters.page.locator(surveyFilters.selectors.selectedFilters)
    ).toContainText(filterName);
  });
});

test(`TC_SF_003: Edit Existing Filter`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SF_003' },
    {
      type: 'Test Description',
      description: 'Edit filter attributes',
    }
  );
  await test.step('Edit filter attributes', async () => {
    const filterName = 'Test Filter 2';
    const newFilterName = 'Is Shrek 3 a good movie?';
    const option1 = 'Yes';
    const option2 = 'No';
    const newOption1 = 'Maybe';
    const newOption2 = 'Idk';
    await surveyFilters.createNewDropdownFilter(filterName, option1, option2);
    await surveyFilters.page.waitForTimeout(500);
    await surveyFilters.editDropdownFilter(
      filterName,
      newFilterName,
      newOption1,
      newOption2
    );
    await surveyFilters.page.waitForTimeout(500);
    await expect(
      surveyFilters.page.locator(surveyFilters.selectors.selectedFilters)
    ).toContainText(newFilterName);
  });
});

test(`TC_SF_004: Delete Filter`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SF_004' },
    {
      type: 'Test Description',
      description: 'Remove filter and move to deleted list',
    }
  );
  await test.step('Remove filter and move to deleted list', async () => {
    const filterName = 'Is Shrek the best movie ever?';
    const option1 = 'Of course';
    const option2 = 'Do you even watch movies?';
    await surveyFilters.createNewDropdownFilter(filterName, option1, option2);
    await surveyFilters.deleteDropdownFilter();
    await expect(
      surveyFilters.page.locator(surveyFilters.selectors.deletedFilters)
    ).toBeVisible();
  });
});

test(`TC_SF_005: Restore Deleted Filter`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SF_005' },
    {
      type: 'Test Description',
      description: 'Restore a filter from deleted list',
    }
  );
  await test.step('Restore a filter from deleted list', async () => {
    const filterName = 'Is Shrek the best movie ever?';
    const option1 = 'Of course';
    const option2 = 'Do you even watch movies?';
    await surveyFilters.createNewDropdownFilter(filterName, option1, option2);
    await surveyFilters.deleteDropdownFilter();
    await surveyFilters.page
      .locator(surveyFilters.selectors.deletedFilters)
      .click();
    await surveyFilters.page.getByRole('button', { name: 'Add' }).click();
    await surveyFilters.page.waitForTimeout(500);
    await surveyFilters.page.locator(surveyFilters.selectors.backSvg).click();
    await expect(
      surveyFilters.page.locator(surveyFilters.selectors.selectedFilters)
    ).toContainText(filterName);
  });
});

test(`TC_SF_006: Reorder Filters`, async () => {
  test.info().annotations.push(
    { type: 'TestCase', description: 'TC_SF_006' },
    {
      type: 'Test Description',
      description: 'Change order of filters using drag & drop',
    }
  );
  await test.step('Change order of filters using drag & drop', async () => {
    const filterName1 = 'Is Shrek the best movie ever?';
    const option1 = 'Of course';
    const option2 = 'Do you even watch movies?';
    const filterName2 = 'Is Shrek 3 a good movie?';
    const option3 = 'Yes';
    const option4 = 'No';
    await surveyFilters.createNewDropdownFilter(filterName1, option1, option2);
    await surveyFilters.createNewDropdownFilter(filterName2, option3, option4);
    await surveyFilters.page.waitForTimeout(500);
    const filterContainers = await surveyFilters.page
      .locator(surveyFilters.selectors.selectedFilters)
      .all();
    const dragHandles = await surveyFilters.page
      .locator(surveyFilters.selectors.dragSvg)
      .all();
    await dragHandles[0].dragTo(filterContainers[1]);
    await surveyFilters.page.waitForTimeout(500);
    const filtersAfterDrag = await surveyFilters.page
      .locator(surveyFilters.selectors.selectedFilters)
      .all();
    expect(filtersAfterDrag[0]).toContainText(filterName2);
    expect(filtersAfterDrag[1]).toContainText(filterName1);
  });
});
