import { BasePage } from './basePage';

export class ExamplePage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
  }

  async fillOutForm(data) {
    await this.page.fill('#name', data.name);
    await this.page.fill('#email', data.email);
    await this.page.click('#submit');
  }

  async clickButton(selector) {
    await this.page.click(selector);
  }

  async getConfirmationMessage() {
    return await this.page.textContent('#confirmation');
  }
}
