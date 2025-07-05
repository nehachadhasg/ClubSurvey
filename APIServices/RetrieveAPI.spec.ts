import test from "playwright/test";
import { authenticateSuperAdmin, createFranchise,createGroup,getTimezone,createVenue, createFranchiseAdmin, createGroupAdmin, createVenueAdmin } from "./userManagement.ts";
import { getDashboardPageSA, getDashboardPageFA,getDashboardPageGA, getDashboardPageVA } from "./surveyDashboard.ts";
import { fr } from "@faker-js/faker";
import { clearUsersFile } from '../helpers/playwright.ts'; // Import clearUsersFile
import { updateJSONFile } from "../helpers/jsonDataHandler.ts";
import path from 'path';

test.beforeAll(async () => {
    // Clear the users.json file before running tests
    const outputFilePath = path.join(__dirname, '../data/surveydashboard.json');
     clearUsersFile(outputFilePath);
});

test('Get dashboard page', async () => {
    //await authenticateSuperAdmin();
     await getDashboardPageSA(1);
     await getDashboardPageFA(2);
     await getDashboardPageGA(4);
     await getDashboardPageVA(5); 
    });