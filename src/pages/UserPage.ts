import { BrowserContext, Page } from 'playwright';
import { PlaywrightWrapper } from '../../helpers/playwright';
import { loadEnvironmentConfig } from '../../config/configLoader';

export class UserPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
      super(page, context);
    }

  // Locators
  selectors = {
    settingsbutton: 'li[data-sidebar="menu-item"] a[href="/en-GB/settings"] button[data-sidebar="menu-button"]',
    usersButton: 'div.flex.cursor-pointer.rounded-[16px].border.border-greyscale-200.bg-white', 
    addUserButton: 'button.font-body.inline-flex.items-center.justify-center.bg-dark-green.text-greyscale-0.typography-body-1-bold[aria-disabled="false"]',
    editUserButton: 'button#editUser', 
    deleteUserButton: 'button#deleteUser', 
    userTable: 'table#usersTable', 
  };

  public someAbstractMethod(): void {
    console.log('Abstract method implemented in UserProfile');
  }

  // Navigate to the Users page
  async navigateToUsersPage() {

    await this.click(this.selectors.settingsbutton, 'Settings Button', 'button');
    // await this.click(this.selectors.usersButton, 'Users Button', 'button');
  }

  // Create a new user
  async createUser() {
  
    await this.click(this.selectors.addUserButton, 'Add User Button', 'button');
    //Add create user logic here , use Faker lib to generate random user data
  }


  // Edit an existing user
  async editUser() {
    // Add logic to edit user details
  }

  // Delete a user
  async deleteUser() {
  // Add logic to delete a user
  }

  // Validate that the Users table is visible
  async validateUsersTableVisible() {
   // await this.validateElementVisibility(this.selectors.userTable, 'Users Table');
  }
}