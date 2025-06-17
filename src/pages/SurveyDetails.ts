/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';
import { loadEnvironmentConfig } from '../../config/configLoader';

const environment = loadEnvironmentConfig();

export class SurveyDetails extends PlaywrightWrapper {
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
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in ClubSurveyLogin');
  }

  public async navigateToSurveyDetails() {
    await this.page.locator(this.selectors.tableRow).nth(0).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.selectors.tableRow).nth(0).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.selectors.tableRow).nth(0).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.selectors.addSurveyButton).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.selectors.surveyCards).nth(0).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.selectors.startFromScratchButton).click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.selectors.getStartedButton).click();
    await this.page.waitForTimeout(1000);
  }

  public async login(
    role: 'SUPER_ADMIN' | 'FRANCHISE_ADMIN' | 'GROUP_ADMIN' | 'VENUE_ADMIN'
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { username, password } = environment.credentials[role];
    await this.loadApp(environment.baseURL);

    const pageTitle = await this.page.title();
    if (pageTitle.startsWith('59club')) {
      await this.type(this.selectors.emailSelector, 'Username', username);
      await this.type(this.selectors.passwordSelector, 'Password', password);
      await this.click(this.selectors.loginButtonSelector, 'Sign In', 'Button');
      await this.page.waitForTimeout(1000);
      await this.validateElementVisibility(
        this.selectors.clubSmallLogo,
        'Club Small Logo'
      );
    } else {
      console.log('Login page is Skipped');
    }
  }
}
