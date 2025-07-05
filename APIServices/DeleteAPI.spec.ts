import test from "playwright/test";
import { authenticateSuperAdmin, createFranchise,createGroup,getTimezone,createVenue, createFranchiseAdmin, createGroupAdmin, createVenueAdmin, deleteUser } from "./userManagement.ts";
import { fr } from "@faker-js/faker";
import { clearUsersFile } from '../helpers/playwright.ts'; // Import clearUsersFile
import { updateJSONFile } from "../helpers/jsonDataHandler.ts";
import { JsonReader } from '../helpers/jsonReader';
import * as path from 'path';
import { UserData } from '../data/users.interface';


let users: UserData;
test('Delete User', async () => {

    const usersFilePath = path.resolve(__dirname, '../data/users.json');
    users = JsonReader.readJson(usersFilePath) as UserData;

 // Check if the file is valid and contains data
 if (!users || Object.keys(users).length === 0) {
    throw new Error('users.json is empty or invalid. Please run the data generation script.');
}
const franchiseAdminUser = Object.values(users).find((user: any) => user.role_id === 2);
// Access the franchiseAdmin user ID
const franchiseAdminUserId = franchiseAdminUser.user_id;

if (!franchiseAdminUserId) {
    throw new Error('Franchise Admin user ID is missing in users.json.');
}

console.log('Franchise Admin User ID:', franchiseAdminUserId);

// Call the deleteFranchiseAdmin function with the user ID
await deleteUser(franchiseAdminUserId);

const groupAdminUser = Object.values(users).find((user: any) => user.role_id === 4);
// Access the franchiseAdmin user ID
const groupAdminUserId = groupAdminUser.user_id;

if (!groupAdminUserId) {
    throw new Error('Group Admin user ID is missing in users.json.');
}

console.log('Group Admin User ID:', groupAdminUserId);

// Call the deleteFranchiseAdmin function with the user ID
await deleteUser(groupAdminUserId);

const venueAdminUser = Object.values(users).find((user: any) => user.role_id === 5);
// Access the franchiseAdmin user ID
const venueAdminUserId = venueAdminUser.user_id;

if (!venueAdminUserId) {
    throw new Error('Venue Admin user ID is missing in users.json.');
}

console.log('Venue Admin User ID:', venueAdminUserId);

// Call the deleteFranchiseAdmin function with the user ID
await deleteUser(venueAdminUserId);

// Clear the users.json file after running tests
const outputFilePath = path.join(__dirname, '../data/users.json');
clearUsersFile(outputFilePath);

});