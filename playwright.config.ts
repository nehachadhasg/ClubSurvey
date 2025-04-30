import { defineConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { loadEnvironmentConfig } from './config/configLoader';

const environment = loadEnvironmentConfig();
const timestamp = Date.now();
const reportDir = `./reporter/playwright-reports-${timestamp}`;
export default defineConfig({
  timeout: 50000,

  expect: {
    timeout: 20000,
  },
  testDir: 'src/tests/Regression_Suite',

  fullyParallel: true,
  retries: 0,
  workers: 1,
  repeatEach: 0,

  reporter: [
    ['html', { outputFolder: reportDir, open: 'always' }],
    [`./CustomReporterConfig.ts`],
    ['line'],
    ['allure-playwright'],
  ],

  use: {
    baseURL: environment.baseURL, // Use the environment-specific base URL
    actionTimeout: 20000,
    headless: false,
    screenshot: 'only-on-failure', // Capture screenshots only on failure
    trace: 'retain-on-failure', // Retain traces only on failure
    video: 'retain-on-failure',
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
         }
      }
     }, */
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        headless: false,
        viewport: null,
        launchOptions: {
          slowMo: 300,
          args: [
            '--start-maximized',
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            '--no-proxy-server',
          ],
        },
      },
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit', // WebKit is the engine used by Safari
        headless: false, // Run in non-headless mode for Safari
        viewport: { width: 1280, height: 720 }, // Set a default viewport size
        launchOptions: {
          slowMo: 300,
          args: ['--start-maximized'], // Add any additional arguments if needed
        },
      },
    },
    /*
     // Viewport: 375 x 667 (e.g., iPhone SE)
     {
      name: 'Viewport 375x667',
      use: {
        browserName: 'chromium',
        viewport: { width: 375, height: 667 },
      },
    },

    // Viewport: 1080 x 2408 (e.g., Pixel 6 Pro)
    {
      name: 'Viewport 1080x2408',
      use: {
        browserName: 'chromium',
        viewport: { width: 1080, height: 2408 },
      },
    },

    // Viewport: 2532 x 1170 (e.g., iPhone 12 Pro)
    {
      name: 'Viewport 2532x1170',
      use: {
        browserName: 'chromium',
        viewport: { width: 2532, height: 1170 },
      },
    },

    // Viewport: 768 x 1024 (e.g., Tablet Portrait)
    {
      name: 'Viewport 768x1024',
      use: {
        browserName: 'chromium',
        viewport: { width: 768, height: 1024 },
      },
    },

    // Viewport: 1024 x 768 (e.g., Tablet Landscape)
    {
      name: 'Viewport 1024x768',
      use: {
        browserName: 'chromium',
        viewport: { width: 1024, height: 768 },
      },
    },

    // Viewport: 1280 x 768 (e.g., Desktop Small)
    {
      name: 'Viewport 1280x768',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 768 },
      },
    },

    // Viewport: 2560 x 1660 (e.g., Large Desktop)
    {
      name: 'Viewport 2560x1660',
      use: {
        browserName: 'chromium',
        viewport: { width: 2560, height: 1660 },
      },
    },

    // Viewport: 1366 x 768 (e.g., Laptop)
    {
      name: 'Viewport 1366x768',
      use: {
        browserName: 'chromium',
        viewport: { width: 1366, height: 768 },
      },
    },

    // Viewport: 1920px (e.g., Full HD Desktop)
    {
      name: 'Viewport 1920x1080',
      use: {
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 },
      },
    },

    // Viewport: 2577px (e.g., Ultra-Wide Desktop)
    {
      name: 'Viewport 2577x1440',
      use: {
        browserName: 'chromium',
        viewport: { width: 2577, height: 1440 },
      },
    },
*/
    // Mobile iPhone 12
    {
      name: 'Mobile iPhone 12',
      use: {
        ...devices['iPhone 12'], // Predefined device descriptor for iPhone 12
      },
    },

    // Mobile Pixel 5
    {
      name: 'Mobile Pixel 5',
      use: {
        ...devices['Pixel 5'], // Predefined device descriptor for Pixel 5
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
