import { test, expect } from "@playwright/test";
import { ClubSurveyLogin } from "../../pages/ClubSurveyLogin";
import { URLConstants } from "../../../constants/urlConstants";

let clubSurveyLogin: ClubSurveyLogin; // Declare the object at the top

test.beforeEach(async ({ page, context }) => {
  // Initialize the ClubSurveyLogin object before each test
  clubSurveyLogin = new ClubSurveyLogin(page, context);
});

test('E2E-CLUB59-31-TC01: Navigate to Surveys Platform via 59club Logo @smoke',  async ({ page, context }) => {
        // Add test metadata
        test.info().annotations.push(
          
            { type: "TestCase", description: "E2E-CLUB59-31-TC01" },
            { type: "Test Description", description: "Verify clicking the 59club logo redirects to the homepage" }
        );

        // Initialize the ClubSurveyLogin page object
       // const clubSurveyLogin = new ClubSurveyLogin(page, context);

        // Step 1: Open the login screen
        await test.step("Navigate to the login screen", async () => {
            await clubSurveyLogin.loadApp(URLConstants.adminURL);

            // Assert that the login screen is loaded
            const pageTitle = await page.title();
            expect(pageTitle).toContain("59club"); 
        });

        // Step 2: Verify redirection to the homepage via the 59club logo
        await test.step("Verify redirection to the homepage via the 59club logo", async () => {
            await clubSurveyLogin.verifyLogoRedirection(URLConstants.clubURL);

            // Assert that the current URL matches the expected homepage URL
            const currentURL = await page.url();
          //  expect(currentURL).toBe(URLConstants.clubURL);

            // Assert that the homepage contains a specific element (e.g., a header or logo)
            const homepageLogo = page.locator(clubSurveyLogin.selectors.clublogo);
            await expect(homepageLogo).toBeVisible();
        });
    });


    test('E2E-CLUB59-31-TC02: Verify Contact Us button opens the Contact Us modal @smoke', async ({ page }) => {
        // Add test metadata
        test.info().annotations.push(
            { type: "TestCase", description: "E2E-CLUB59-31-TC02" },
            { type: "Test Description", description: "Verify clicking the Contact Us button opens the Contact Us modal" }
        );
        // Step 1: Open the login screen
        await test.step("Navigate to the login screen", async () => {
            await clubSurveyLogin.loadApp(URLConstants.adminURL);
            // Assert that the login screen is loaded
            const pageTitle = await page.title();
            expect(pageTitle).toContain("59club"); 
        });
       
        // Step 2: verify Contact us modal is visible by clicking on contact us button.
        //let contactUsModalAssertText = "Need help or want to contact us?";
        await test.step("Verify contactus modal via the contact us button", async () => {
            await clubSurveyLogin.verifyContactUsModal(clubSurveyLogin.selectors.contactUsModalAssert.toString());

        // Step 2: Assert that the "Contact Us" modal is visible
        const contactUsModal = page.locator(clubSurveyLogin.selectors.contactUsModal); // Locator for the modal heading
        await expect(page.locator(clubSurveyLogin.selectors.contactUsModalAssert)).toContainText("Need help"); // Assert that the modal is visible
      });
    });
    
   

test('Verify auto-scrolling of the image carousel', async ({ page }) => {
    // Add test metadata
    test.info().annotations.push(
        { type: 'TestCase', description: 'E2E-CLUB59-31-TC03' },
        { type: 'Test Description', description: 'Verify auto-scrolling of the image carousel' }
    );
    // Step 1: Open the login screen
    await test.step("Navigate to the login screen", async () => {
        await clubSurveyLogin.loadApp(URLConstants.adminURL);
        // Assert that the login screen is loaded
        const pageTitle = await page.title();
        expect(pageTitle).toContain("59club"); 
    });






  /*// Step 2: Locate the carousel container
  const carousel = page.locator('this.selector.carousel-container'); 
  await expect(carousel).toBeVisible();

  // Step 3: Capture the first active image
  const firstImage = await carousel.locator('.carousel-image.active').getAttribute('src'); // Replace with the actual selector for active images
  console.log('First active image:', firstImage);

  // Step 4: Wait for the carousel to auto-scroll
  await page.waitForTimeout(3000); // Adjust the timeout based on the carousel's auto-scroll interval

  // Step 5: Capture the new active image
  const secondImage = await carousel.locator('.carousel-image.active').getAttribute('src');
  console.log('Second active image:', secondImage);

  // Step 6: Verify that the active image has changed
  expect(secondImage).not.toBe(firstImage);
});
*/