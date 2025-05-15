import { test, expect } from '@playwright/test';
import { JsonReader } from '../../../helpers/jsonReader';
import { ClubSurveyLogin } from '../../pages/ClubSurveyLogin';
import { SettingsPage } from '../../pages/SettingsPage';
import { ROLE_CONFIG } from '../../../constants/roleConfig';
import { ROLES } from '../../../constants/roles';
import { UserData } from '../../../data/users.interface';
import path from 'path';

type RoleName = keyof typeof ROLE_CONFIG;
const filePath = '/Users/nehachadha/59club_playwright/playwright-automation-framework/data/users.json';

test.describe('Role-Based Permissions Tests', () => {
    let users: UserData;

    // Load pre-generated users.json file
    test.beforeEach(() => {
        users = JsonReader.readJson(filePath) as UserData;
        if (!users || Object.keys(users).length === 0) {
            throw new Error('users.json is empty or invalid. Please run the data generation script.');
        }
    });

    // Iterate through roles and run individual tests
    Object.entries(ROLES).forEach(([roleName, roleId]) => {
        test(`${roleName} Role - Validate Permissions`, async ({ page, context }) => {
            // Add a tag for the role
            const roleTag =
                roleName === 'SUPERADMIN'
                    ? '@superadmin'
                    : roleName === 'FRANCHISEADMIN'
                    ? '@franchiseadmin'
                    : roleName === 'GROUPADMIN'
                    ? '@groupadmin'
                    : '@venueadmin';

            test.info().annotations.push({ type: 'tag', description: roleTag });

            // Fetch user credentials for the current role
            const user = users[roleId];
            if (!user || !user.username || !user.password) {
                throw new Error(`User credentials for role ${roleName} (role_id: ${roleId}) are missing in users.json.`);
            }

            // Login as the user
            const loginPage = new ClubSurveyLogin(page, context);
            await loginPage.ClubSurveyLogin({ username: user.username, password: user.password });

            // Validate Permissions for Each Section
            const rolePermissions = ROLE_CONFIG[roleName as RoleName];

            // Validate Settings Permissions
            if (rolePermissions.settings.view) {
                const settingsPage = new SettingsPage(page);
                await settingsPage.navigateToSettings();
            }

            // Validate Users Permissions
            if (rolePermissions.users.view) {
                const canViewUsers = await page.isVisible('text=Users'); // Replace with actual selector
                expect(canViewUsers).toBeTruthy();
            }

            if (rolePermissions.users.create) {
                console.log(`${roleName} can create users.`);
            }

            if (rolePermissions.users.edit) {
                console.log(`${roleName} can edit users.`);
            }

            if (rolePermissions.users.delete) {
                console.log(`${roleName} can delete users.`);
            }

            // Add similar validations for other sections (e.g., translations, surveys, franchises, groups, venues)
        });
    });
});