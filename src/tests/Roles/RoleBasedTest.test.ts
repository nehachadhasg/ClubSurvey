import { test } from '@playwright/test';
import { JsonReader } from '../../../helpers/jsonReader';
import { ClubSurveyLogin } from '../../pages/ClubSurveyLogin';
import { SettingsPage } from '../../pages/SettingsPage';
import { GroupPage } from '../../pages/GroupPage';
import { VenuePage } from '../../pages/VenuePage';
import { UsersPage } from '../../pages/UsersPage';
import { ROLES } from '../../../constants/roles';
import { UserData } from '../../../data/users.interface';

const filePath = '../../data/users.json';

test.describe('Role-Based Access Tests', () => {
    // Read users.json file
    const users: UserData = JsonReader.readJson(filePath) as UserData;

    if (!users) {
        throw new Error('Failed to read users.json or file is empty.');
    }

    Object.entries(ROLES).forEach(([roleName, roleId]) => {
        test(`${roleName} Role Access Permissions`, async ({ page, context }) => {
            // Fetch user credentials for the current role
            const user = users[roleId];
            if (!user || !user.username || !user.password) {
                throw new Error(`User credentials for role ${roleName} (role_id: ${roleId}) are missing in users.json.`);
            }

            // Login as the user
            const loginPage = new ClubSurveyLogin(page, context);
            await loginPage.ClubSurveyLogin({ username: user.username, password: user.password });

            // Validate Settings Page
            const settingsPage = new SettingsPage(page);
            await settingsPage.navigateToSettings();
            await settingsPage.validateCards(roleName === 'SUPERADMIN' ? ['Franchise', 'Groups', 'Venues', 'Users', 'Surveys', 'Translations'] : ['Groups', 'Venues', 'Users', 'Surveys', 'Translations']);

            // Validate Group Permissions (if applicable)
            if (roleName === 'SUPERADMIN' || roleName === 'FRANCHISEADMIN' || roleName === 'GROUPADMIN') {
                const groupPage = new GroupPage(page);
                await groupPage.navigateToGroup();
                await groupPage.validateViewAccess();
                if (roleName === 'SUPERADMIN' || roleName === 'FRANCHISEADMIN') {
                    await groupPage.validateEditAccess();
                }
            }

            // Validate Venue Permissions (if applicable)
            if (roleName === 'SUPERADMIN' || roleName === 'FRANCHISEADMIN' || roleName === 'VENUEADMIN') {
                const venuePage = new VenuePage(page);
                await venuePage.navigateToVenue();
                await venuePage.validateViewAccess();
                if (roleName === 'SUPERADMIN' || roleName === 'FRANCHISEADMIN') {
                    await venuePage.validateEditAccess();
                }
            }

            // Validate User Permissions (if applicable)
            if (roleName === 'SUPERADMIN' || roleName === 'FRANCHISEADMIN') {
                const usersPage = new UsersPage(page);
                await usersPage.navigateToUsers();
                await usersPage.validateViewAccess(['Franchise Admin', 'Group Admin', 'Venue Admin', 'Translator', 'Staff Member']);
                if (roleName === 'SUPERADMIN') {
                    await usersPage.validateEditAccess(['Franchise Admin', 'Group Admin', 'Venue Admin', 'Translator', 'Staff Member']);
                }
            }
        });
    });
});