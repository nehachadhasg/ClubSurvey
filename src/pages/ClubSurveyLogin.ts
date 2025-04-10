//import { Page } from "@playwright/test";
import { BrowserContext, Page } from "playwright";
import { PlaywrightWrapper } from "../../helpers/playwright";
import { credentials } from "../../constants/credentials";
import { expect } from "playwright/test";
import { URLConstants } from "../../constants/urlConstants";

export class ClubSurveyLogin extends PlaywrightWrapper {

    constructor( page: Page, context: BrowserContext) {
        super( page, context);
    }
    public selectors = {
        emailSelector: 'input[placeholder="Insert your email address"]',
        secondaryEmailSelector: 'input[name="email"]',
        passwordSelector: 'input[placeholder="Enter your password"]',
        secondaryPasswordSelector: 'input[name="password"]',
        loginButtonSelector: 'button[name="Login"]',
        clublogo: 'img[alt="logo"][src*="clubLogo"]',
        contactus: 'button[class*="inline-flex"][class*="bg-lime"][class*="typography-body-1-bold"]',
       // contactus: 'button[contains(text(), "Contact us") and contains(@class, "inline-flex") and contains(@class, "bg-lime")]',
        imgscroller1: 'img[@alt="Unlock Powerful Insights" and contains(@src, "loginsecond") and contains(@class, "object-contain")]',
        imgscroller2: 'img alt="Unlock Powerful Insights" loading="lazy" width="450" height="300" decoding="async" data-nimg="1" class="object-contain" src="/_next/static/media/loginsecond.b5f50a21.svg" style="color: transparent"',
        imgscroller3: 'img[@alt="Train & Excel with Expert Guidance" and contains(@src, "loginthird") and contains(@class, "object-contain")]',
        loginButton: 'button[contains(text(), "Login") and contains(@class, "inline-flex") and contains(@class, "bg-dark-green")]',
        rememberme: 'div[contains(@class, "relative") and contains(@class, "flex") and contains(@class, "h-5") and contains(@class, "w-5")]/input[@type="checkbox"]',
        remembermeLabel: 'div[contains(@class, "relative") and contains(@class, "flex") and contains(@class, "h-5") and contains(@class, "w-5")]/input[@type="checkbox"]',
        togglebutton: 'button[contains(@class, "text-gray-1000") and contains(@class, "flex") and contains(@class, "cursor-pointer") and contains(@class, "px-3")]',
        clublogodashboard: 'img alt="Large Logo" width="51" height="18" decoding="async" data-nimg="1" class="h-[17px] w-[48px]" src="/_next/static/media/largeLogo.087c4efb.svg" style="color: transparent"',
        contactUsModal: 'div[role="dialog"][data-state="open"]',
        contactUsModalAssert:'h2[class*="typography-heading"]:has-text("Need help")',
        contactUsModalCloseButton:'div[class*="cursor-pointer"][class*="bg-greyscale-100"',
        carouselcontainer: 'div[role="region"][aria-roledescription="carousel"]',
        firstImage: 'img[alt="Enhance Service & Sales Excellence"][class="object-contain"]',
        secondImage: 'img[alt="Train & Excel with Expert Guidance"][class="object-contain"]',
        thirdImage: ''
    };

    public someAbstractMethod(): void {
        console.log("Abstract method implemented in ClubSurveyLogin");
    }


    public async ClubSurveyLogin(role: keyof typeof credentials) {

        const { username, password } = credentials[role];

        await this.loadApp(URLConstants.adminURL)
        const pageTitle = await this.page.title();
        if (pageTitle.startsWith("59club")) {
            await this.type(this.selectors.emailSelector, "Username", username);
            await this.type(this.selectors.passwordSelector, "password", password);
            await this.click(this.selectors.loginButtonSelector, "Sign In", "Button");
            await this.wait('mediumWait')
         //   await this.storeState("./logins/salesforceLogin.json")
            await this.validateElementVisibility(this.selectors.clublogodashboard, "clubLargeLogo");
        } else {
            console.log("Login page is Skipped");

        }
}

public async verifyLogoRedirection(expectedURL: string) {
    // Ensure the 59club logo is visible
    await this.validateElementVisibility(this.selectors.clublogo, "logo");

    // Listen for the new tab to open
    const [newPage] = await Promise.all([
        this.context.waitForEvent('page'), // Wait for a new page (tab) to open
        this.click(this.selectors.clublogo, "59club Logo", "img"), // Click the logo
    ]);

    // Wait for the new page to load
    await newPage.waitForLoadState('domcontentloaded');

    // Get the URL of the new page
    const currentURL = await newPage.url();
    console.log("Navigated to URL:", currentURL);

    // Assert that the URL matches the expected URL
    expect(currentURL).toBe(expectedURL);

    // Ensure the new page is not closed prematurely
    await newPage.close(); // Close the new tab after verification (optional)
}

public async verifyContactUsModal(expectedTextSubstring: string) {
    //Ensure the contact us button is visible
    await this.validateElementVisibility(this.selectors.contactus, "Contact Us");
    // click contactus button
    this.click(this.selectors.contactus, "Contact Us Button", "Button"), // Click the button
    
    //Ensure contactus modal appears
    this.validateElementVisibility(this.selectors.contactUsModal, "Contact Us Modal");
    // Wait for the modal to be visible 
   // const modal = this.page.locator('contactUsModal');

    // Assert that the URL matches the expected URL
    //await expect('contactUsModalAssert').toBe(expectedTextSubstring);

    // Ensure the new page is not closed prematurely
    //await this.click(this.selectors.contactUsModalCloseButton, "Close Button", "button"); // Close the new tab after verification (optional)
}
}
/*
public async closeContactUsModal(selector: string) {
    // Ensure the modal close button is visible
    await this.validateElementVisibility(this.selectors.contactUsModalCloseButton, "Contact Us Modal Close Button");
    // Click the close button
    await this.click(selector, "Close Button", "button");
    // Wait for the modal to be closed
    await this.page.waitForSelector(this.selectors.contactUsModal, { state: 'hidden' });
    // Assert that the modal is no longer visible
    const modal = this.page.locator(this.selectors.contactUsModal);
    await expect(modal).not.toBeVisible();
    console.log("Contact Us modal closed successfully.");
}
}*/
