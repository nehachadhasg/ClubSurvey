import test from "playwright/test";
import { authenticateSuperAdmin, createFranchise,createGroup,getTimezone,createVenue, createFranchiseAdmin, createGroupAdmin, createVenueAdmin } from "./userManagement";
import { fr } from "@faker-js/faker";
import { clearUsersFile } from '../helpers/playwright'; // Import clearUsersFile

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
    await createFranchiseAdmin(franchiseId, 2);
    await createGroupAdmin(groupId, 4);
    await createVenueAdmin(venueId, 5);

    }
);