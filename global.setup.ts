import { ConcretePlaywrightWrapper } from './helpers/playwright'; 
//import { BrowserContext, Page, chromium, FullConfig } from '@playwright/test'; // Import FullConfig
//import { exec } from 'child_process'; // Import exec for running AppleScript
import { BrowserContext, Page, chromium } from '@playwright/test';

let wrapper: ConcretePlaywrightWrapper;
let context: BrowserContext;
let page: Page;


/*
async function globalSetup(config: FullConfig) {
    // Bring Safari to the foreground
    if (process.env.PLAYWRIGHT_PROJECT_NAME === 'safari') {
      exec('osascript -e \'tell application "Safari" to activate\'', (error) => {
        if (error) {
          console.error('Failed to bring Safari to the foreground:', error);
        } else {
          console.log('Safari brought to the foreground.');
        }
      });
    }
  }
*/

async function globalSetup(page, context) {
    const browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    wrapper = new ConcretePlaywrightWrapper(page, context);
 

    const eleAppLaunch = wrapper.page.locator('button .slds-icon-waffle');
    console.log(eleAppLaunch);
}

export default globalSetup;
