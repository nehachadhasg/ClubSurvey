import test from "playwright/test";
import { authenticateSuperAdmin, createFranchise,createGroup,getTimezone,createVenue, createFranchiseAdmin, createGroupAdmin, createVenueAdmin } from "./userManagement.ts";
import { fr } from "@faker-js/faker";
import { clearUsersFile } from '../helpers/playwright.ts'; // Import clearUsersFile
import { updateJSONFile } from "../helpers/jsonDataHandler.ts";

test.beforeAll(async () => {
    // Clear the users.json file before running tests
    clearUsersFile();
});

test('Create User', async () => {
    //await authenticateSuperAdmin();
    const franchiseId=await createFranchise();
    const groupId = await createGroup(franchiseId);
    const timezoneId = await getTimezone();
    const venueId = await createVenue(franchiseId, groupId, timezoneId);
    const userId_FA = await createFranchiseAdmin(franchiseId, 2);
    const userId_GA = await createGroupAdmin(groupId, 4);
    const userId_VA = await createVenueAdmin(venueId, 5);

        // Save user IDs to users.json
        updateJSONFile('../data/users.json', {
            franchiseAdmin: userId_FA,
            groupAdmin: userId_GA,
            venueAdmin: userId_VA,
        });

    }
);