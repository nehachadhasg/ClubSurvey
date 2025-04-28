import { ConcretePlaywrightWrapper } from './helpers/playwright'; 
import { BrowserContext, Page, chromium } from '@playwright/test';

let wrapper: ConcretePlaywrightWrapper;
let context: BrowserContext;
let page: Page;

async function globalSetup(page, context) {
    const browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    wrapper = new ConcretePlaywrightWrapper(page, context);
 

    const eleAppLaunch = wrapper.page.locator('button .slds-icon-waffle');
    console.log(eleAppLaunch);
}

export default globalSetup;
