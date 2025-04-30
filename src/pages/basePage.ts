/*class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async click(selector) {
        await this.waitForSelector(selector);
        await this.page.click(selector);
    }

    async fill(selector, text) {
        await this.waitForSelector(selector);
        await this.page.fill(selector, text);
    }

    async getText(selector) {
        await this.waitForSelector(selector);
        return await this.page.textContent(selector);
    }
} 

export default BasePage;*/
