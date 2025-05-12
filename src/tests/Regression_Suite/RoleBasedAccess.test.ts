/*import { test, expect, chromium } from '@playwright/test';
import { ClubSurveyLogin } from '../../pages/ClubSurveyLogin';
import { SettingsPage } from '../../pages/SettingsPage';
//import { FranchisePage } from '../../pages/FranchisePage';
import { GroupPage } from '../../pages/GroupPage';
import { VenuePage } from '../../pages/VenuePage';
import { UsersPage } from '../../pages/UsersPage';
//import { validateCreatePermission } from '../../../APIServices/permissionsAPI';
import { getUserCredentials } from '../../../helpers/playwright';

const roles = ['SUPERADMIN', 'FRANCHISEADMIN', 'GROUPADMIN' , 'VENUEADMIN'];

roles.forEach((role) => {
    test(`${role} Role Access Permissions`, async ({ page, context }) => {
       
        try {
            // Get credentials and permissions for the role
            const { username, password } = getUserCredentials(role);
            const permissions = getPermissionsForRole(role);

            // Login as the role
            const loginPage = new ClubSurveyLogin(page, context);
            await loginPage.ClubSurveyLogin({ username, password });

            // Validate Settings Page
            const settingsPage = new SettingsPage(page);
            await settingsPage.navigateToSettings();
            await settingsPage.validateCards(permissions.settings.viewCards);

            // Validate Franchise Permissions (if applicable)
            if (permissions.franchise.view) {
                const franchisePage = new FranchisePage(page);
                await franchisePage.navigateToFranchise();
                await franchisePage.validateViewAccess();
                if (permissions.franchise.edit) {
                    await franchisePage.validateEditAccess();
                }
            }

            // Validate Group Permissions (if applicable)
            if (permissions.group.view) {
                const groupPage = new GroupPage(page);
                await groupPage.navigateToGroup();
                await groupPage.validateViewAccess();
                if (permissions.group.edit) {
                    await groupPage.validateEditAccess();
                }
            }

            // Validate Venue Permissions (if applicable)
            if (permissions.venue.view) {
                const venuePage = new VenuePage(page);
                await venuePage.navigateToVenue();
                await venuePage.validateViewAccess();
                if (permissions.venue.edit) {
                    await venuePage.validateEditAccess();
                }
            }

            // Validate User Permissions (if applicable)
            if (permissions.user.view) {
                const usersPage = new UsersPage(page);
                await usersPage.navigateToUsers();
                await usersPage.validateViewAccess(permissions.user.createRoles);
                if (permissions.user.edit) {
                    await usersPage.validateEditAccess(permissions.user.createRoles);
                }
            }
        } finally {
            await context.close();
        }
    });
});*/