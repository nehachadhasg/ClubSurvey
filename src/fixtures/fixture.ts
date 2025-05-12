/*import { test as base, expect, Page, BrowserContext } from '@playwright/test';
import { ClubSurveyLogin } from '../pages/ClubSurveyLogin';
import { UserManagementAPI } from '../../helpers/userManagementAPI';import { loadEnvironmentConfig } from '../../config/configLoader';
import { FakerData  } from '../../helpers/fakerUtils';

type TestFixtures = {
  loggedInPage: Page; // A page object after login
   loginAsRole: any;
};

// Extend the base test with custom fixtures
export const test = base.extend<TestFixtures>({
    loggedInPage: async (
        { page, context }: { page: Page; context: BrowserContext },
        use
      ) => {
        const clubSurveyLogin = new ClubSurveyLogin(page, context);
      
        // Perform login using the ClubSurveyLogin class
        await clubSurveyLogin.ClubSurveyLogin({
          username: '59clubqaadmin@yopmail.com', // Replace with actual SUPER_ADMIN username
          password: 'Tulip@345*', // Replace with actual SUPER_ADMIN password
        });
      
        // Provide the logged-in page to the test
        await use(page);
      },
  loginAsRole: async (
    { page, context }: { page: Page; context: BrowserContext },
  ) => {
    const userManagementAPI = new UserManagementAPI();
    const admintoken = await userManagementAPI.authenticateSuperAdmin();
    console.log('Admin Token:', admintoken);

    // Create Franchise, Group, and Venue hierarchy
    const franchiseId = await userManagementAPI.createFranchise('IshuNew Franchise 1403');
    //const groupId = await userManagementAPI.createGroup(franchiseId, 'Test Group');
    //const venueId = await userManagementAPI.createVenue(groupId, 'Test Venue');

    // Create users for each role
   // const franchiseAdminFirstname = FakerData.getFirstName();
    //const franchiseAdminLastname = FakerData.getLastName();
    //const locale = 'ENGLISH (GB)';
    const role_id = 2; // Assuming 1 is the role ID for Franchise Admin
    //const timezone = '(GMT - 08h00) Pacific Standard Time'; // Assuming UTC is the timezone
    //const franchiseAdminEmail = FakerData.getEmail();
    
    
    //const groupAdminUsername = 'groupadmin@test.com';
    //const venueAdminUsername = 'venueadmin@test.com';

    await userManagementAPI.createUser(String(franchiseId), role_id);
    //await userManagementAPI.createUser(groupAdminUsername, 'Password123', 'GROUP_ADMIN', groupId);
    //await userManagementAPI.createUser(venueAdminUsername, 'Password123', 'VENUE_ADMIN', venueId);

    // Provide a function to log in as a specific role
    /*await use(async (role: 'FRANCHISE_ADMIN' | 'GROUP_ADMIN' | 'VENUE_ADMIN') => {
        const clubSurveyLogin = new ClubSurveyLogin(page, context);
      
        const credentials = {
          FRANCHISE_ADMIN: { username: franchiseAdminEmail, password: 'Club59@123' },
          GROUP_ADMIN: { username: groupAdminUsername, password: 'Password123' },
          VENUE_ADMIN: { username: venueAdminUsername, password: 'Password123' },
        };
      
        // Get the credentials for the specified role
        const { username, password } = credentials[role];
      
        // Pass the credentials object to ClubSurveyLogin
        await clubSurveyLogin.ClubSurveyLogin({ username, password });
      
        return page;
      });
  },
});

// Re-export `expect` from Playwright
export { expect };*/
