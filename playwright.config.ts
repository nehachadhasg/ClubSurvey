import { defineConfig } from '@playwright/test';
import { loadEnvironmentConfig } from './config/configLoader';
//import { channel } from 'diagnostics_channel';
//import { OrtoniReportConfig } from 'ortoni-report';

const environment = loadEnvironmentConfig();
const timestamp = Date.now();
const reportDir = `./reporter/playwright-reports-${timestamp}`;
export default defineConfig({
  timeout: 50000,

  expect: {
    timeout: 20000

  },
  testDir: 'src/tests/Regression_Suite',


  fullyParallel: true,
  retries: 0,
  workers: 1,
  repeatEach: 0,

  
  reporter: [['html', { outputFolder: reportDir, open: 'always' }], [`./CustomReporterConfig.ts`], ['line'], ["allure-playwright"]],
 
  use: {
    baseURL: environment.baseURL, // Use the environment-specific base URL
    actionTimeout: 20000,
    trace: 'on',
    headless: false,
    screenshot: "on",
    browserName: 'chromium',
    video: 'on',
    ignoreHTTPSErrors: true,
    bypassCSP: true,
   // storageState: "logins/salesforceLogin.json"

  },

  // testMatch: [
  //   '*/tests/admin/adminGroups_CustomerAdminGroupUserCreation/**/*.spec.ts',
  //   '*/tests/admin/adminGroups2/**/*.spec.ts',
  // ],

  projects: [
    /*  {
       name: 'Chromium',
       use: {
         ...devices['Desktop Chromium'],=
         ignoreHTTPSErrors: true,
         headless: false,
         video: 'on',
         screenshot: "on",
         viewport: null,
         launchOptions: {
           slowMo: 300,
           args: ["--start-maximized", "--disable-web-security", "--disable-features=IsolateOrigins,site-per-process", '--no-proxy-server']
         },
 
 
       }
 
     }, */
    {
      name: 'chrome',
      use: {
        browserName: 'chromium', channel: 'chrome', headless: false,
        viewport: null,
        launchOptions: {
          slowMo: 300,
          args: ["--start-maximized", "--disable-web-security", "--disable-features=IsolateOrigins,site-per-process", '--no-proxy-server']

        }

      }
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit', // WebKit is the engine used by Safari
        headless: false, // Run in non-headless mode for Safari
        viewport: { width: 1280, height: 720 }, // Set a default viewport size
        launchOptions: {
          args: [], // Add any additional arguments if needed
        },
      },
    },
    
    /* ...(
      true ? [{
        name: 'API Testing',
        testDir: './api',

        use: {
          headless: false,
          ...devices['Desktop Chromium'],
          viewport: null,
          launchOptions: {
            slowMo: 300,
            args: ["--start-maximized", "--disable-web-security"]
          }

        }
      },] : []
    ),*/
  ],
  grep: undefined,
});
