import { httpRequest } from "../helpers/requestUtils.ts";
import { environment } from "../config/qa.ts";
import { FakerData } from "../helpers/fakerUtils.ts";
import { UserData } from "../data/users.interface.ts";
import test from "playwright/test"; 
import { writeUserToFile } from '../helpers/playwright.ts';
import { updateJSONFile } from "../helpers/jsonDataHandler.ts";
import { JsonReader } from '../helpers/jsonReader';
import * as path from 'path';
import { FranchiseData } from "../data/franchise.interface.ts";
import { GroupData } from "../data/group.interface.ts";
import { VenueData } from "../data/venue.interface.ts"; 
 
 
// Authenticate as Super Admin and get a token
  export async function authenticateSuperAdmin() {
    const response = await httpRequest({
        method: 'POST',
        endPoint: `${environment.apiBaseURL}/users/login`,
        userData: {
            email: environment.credentials.SUPER_ADMIN.username,
            password: environment.credentials.SUPER_ADMIN.password,
            rememberMe: false
        },
    });
    console.log(response);
 return response.data.data.token;
}

// Create a Franchise with super admin token
export async function createFranchise(){
    const uniqueFranchiseName = `Franchise ${FakerData.getOrganizationName()} ${Date.now()}`;
    const response = await httpRequest({
        method: 'POST',
        endPoint: `${environment.apiBaseURL}/franchises`,
        contentType: 'json',
        userData: {
            "admins": [],
            "email": FakerData.getEmail(), 
            "firstName": FakerData.getFirstName(),
            "lastName": FakerData.getLastName(),
            "name": uniqueFranchiseName,
            "status": "active",
                },
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log(response);
    let franchiseId = response.data.data.franchise_id;
    let franchiseName = response.data.data.name;
    let status = response.data.data.status;
    updateJSONFile<FranchiseData>('../data/franchise.json', {
    "franchise": {
        id: franchiseId,
        name: franchiseName,
        status: status,
        }
        });
  return franchiseId;
}


// Create a Group under the Franchise
export async function createGroup(franchiseId: string){
    const uniqueGroupName = `Group ${FakerData.getOrganizationName()} ${Date.now()}`;
    const response = await httpRequest({
        method: 'POST',
        endPoint: `${environment.apiBaseURL}/groups`,
        contentType: 'json',
        userData: {
            "franchise_id": franchiseId,
            "name": uniqueGroupName,
            "status": "active", 
        },
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log(response);
    let groupId = response.data.data.group_id;
    let groupName = response.data.data.name;
    let status = response.data.data.status;
    updateJSONFile<GroupData>('../data/group.json', {
    "group": {
        id: groupId,
        name: groupName,
        status: status,
        }
        });
  return groupId;
}

// getTimezone from groups
export async function getTimezone(): Promise<string> {
    const response = await httpRequest({
        method: 'GET',
        endPoint: `${environment.apiBaseURL}/timezones`,
        contentType: 'json',
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });

    console.log("Timezones response:", response.data);
    // Select the first timezone ID from the response data
    if (response.data && response.data.data && response.data.data.length > 0) {
        const timezoneId = response.data.data[0].id; // Get the first timezone ID
        console.log(`Selected Timezone ID: ${timezoneId}`);
        return timezoneId;
    } else {
        throw new Error("No timezones found in the response");
    }
}   

// Create a Venue under the group and assign a timezone
export async function createVenue(franchiseId: string, groupId: string, timezoneId: string){
    const uniqueVenueName = `Venue ${FakerData.getOrganizationName()} ${Date.now()}`;
    const response = await httpRequest({
        method: 'POST',
        endPoint: `${environment.apiBaseURL}/venues`,
        contentType: 'json',
        userData: {
            admins: [],
            "franchiseId": franchiseId,
            "groupId": groupId,
            "mentorSubdomain": "",
            "name": uniqueVenueName,
            "status": "active", 
            "timezone": timezoneId,
        },
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log(response);
    let venueId = response.data.data.venueId;
    let venueName = response.data.data.name;
    let status = response.data.data.status;
    updateJSONFile<VenueData>('../data/venue.json', {
    "venue": {
        id: venueId,
        franchise_id: franchiseId,
        group_id: groupId,
        name: venueName,
        status: status,
        timezone: timezoneId,
        }
        });
  return venueId;
}

// Create a User and Assign to Franchise Admin Role
export async function createFranchiseAdmin(franchiseId: string, 
    role_id: number){
    const uniqueUserNameFA = `user_${Date.now()}@example.com`;    
    try {
        const response = await httpRequest({
            method: 'POST',
            endPoint: `${environment.apiBaseURL}/users/register`,
            contentType: 'json',
            userData: {
                "assignTo": [franchiseId],
                "email": uniqueUserNameFA,
                "first_name": FakerData.getFirstName(),
                "last_name": FakerData.getLastName(),
                "locale": "en-GB",
                "role_id": role_id,
                 "timeZone": "(GMT - 08h00) Pacific Standard Time",
            },
            customHeaders: {
                    Authorization: `Bearer ${await authenticateSuperAdmin()}`
            }
        });
        console.log("User created successfully:", response.data);
        const username_FA = response.data.data.email;
        const user_ID = response.data.data.id;
        updateJSONFile<UserData>('../data/users.json', {
            [role_id]: {
                username: username_FA,
                password: 'Club59@123',
                role_id: role_id,
                user_id: user_ID,
            }
        });
        let username_SA = environment.credentials.SUPER_ADMIN.username;
        let password_SA = environment.credentials.SUPER_ADMIN.password;
        role_id = 1;
        updateJSONFile<UserData>('../data/users.json', {
            [1]: {
                username: username_SA ,
                password: password_SA,
                role_id: role_id,
                user_id: user_ID,
            }
        });
        return user_ID;
        // Write user data to JSON file
//        writeUserToFile(username_FA, 'club59@123', role_id);
        } catch (error: any) {
            console.error('Error during user creation:', error.response?.data || error.message);
            throw new Error('User creation failed');
            }
            
        }



    // Create a User and Assign to Group Admin Role
export async function createGroupAdmin(groupId: string, 
    role_id: number){
    const uniqueUserNameGA = `user_${Date.now()}@example.com`;
    try {
        const response = await httpRequest({
            method: 'POST',
            endPoint: `${environment.apiBaseURL}/users/register`,
            contentType: 'json',
            userData: {
                "assignTo": [groupId],
                "email": uniqueUserNameGA,
                "first_name": FakerData.getFirstName(),
                "last_name": FakerData.getLastName(),
                "locale": "en-GB",
                "role_id": role_id,
                 "timeZone": "(GMT - 08h00) Pacific Standard Time",
            },
            customHeaders: {
                    Authorization: `Bearer ${await authenticateSuperAdmin()}`
            }
        });
        console.log("User created successfully:", response.data);
        const username_GA = response.data.data.email;
        const user_ID = response.data.data.id;
        updateJSONFile<UserData>('../data/users.json', {
            [role_id]: {
                username: username_GA,
                password: 'Club59@123',
                role_id: role_id,
                user_id: user_ID,
            }
        });
        return user_ID;
        } catch (error: any) {
            console.error('Error during user creation:', error.response?.data || error.message);
            throw new Error('User creation failed');
            }
        }

// Create a User and Assign to Venue Admin Role
export async function createVenueAdmin(VenueId: string, 
    role_id: number){
    const uniqueUserNameVA = `user_${Date.now()}@example.com`;
    try {
        const response = await httpRequest({
            method: 'POST',
            endPoint: `${environment.apiBaseURL}/users/register`,
            contentType: 'json',
            userData: {
                "assignTo": [VenueId],
                "email": uniqueUserNameVA,
                "first_name": FakerData.getFirstName(),
                "last_name": FakerData.getLastName(),
                "locale": "en-GB",
                "role_id": role_id,
                "timeZone": "(GMT - 08h00) Pacific Standard Time",
                },
            customHeaders: {
                Authorization: `Bearer ${await authenticateSuperAdmin()}`
                }
            });
            console.log("User created successfully:", response.data);
            const username_VA = response.data.data.email;
            const user_ID = response.data.data.id;
            console.log("User ID:", user_ID);
            updateJSONFile<UserData>('../data/users.json', {
                [role_id]: {
                    username: username_VA,
                    password: 'Club59@123',
                    role_id: role_id,
                    user_id: user_ID,
                }
            });
            return user_ID;

            } catch (error: any) {
                console.error('Error during user creation:', error.response?.data || error.message);
                throw new Error('User creation failed');
                }
            }

export async function deleteUser(userId: string,) {
    try {
        const response = await httpRequest({

            method: 'DELETE',
            endPoint: `${environment.apiBaseURL}/users/delete/${userId}`,
            contentType: 'json',
            customHeaders: {
                Authorization: `Bearer ${await authenticateSuperAdmin()}`
            }
        });
        console.log("User deleted successfully:", response.data.message);
    } catch (error: any) {
        console.error('Error during user deletion:', error.response?.data || error.message);
        throw new Error('User deletion failed');
    }

}



// Delete a User and Assign to Group Admin Role
/*export async function deleteGroupAdmin(groupId: string,
    role_id: number) {
    try {
        const response = await httpRequest({
            method: 'POST',
            endPoint: `${environment.apiBaseURL}/users/register`,
            contentType: 'json',
            userData: {
                "assignTo": [groupId],
                "email": FakerData.getEmail(),
                "first_name": FakerData.getFirstName(),
                "last_name": FakerData.getLastName(),
                "locale": "en-GB",
                "role_id": role_id,
                "timeZone": "(GMT - 08h00) Pacific Standard Time",
            },
            customHeaders: {
                Authorization: `Bearer ${await authenticateSuperAdmin()}`
            }
        });
        console.log("User created successfully:", response.data);
        const username_GA = response.data.data.email;
        const user_ID = response.data.data.id;
        updateJSONFile<UserData>('../data/users.json', {
            [role_id]: {
                username: username_GA,
                password: 'Club59@123',
                role_id: role_id,
                user_id: user_ID,
            }
        });
        return user_ID;
        //        writeUserToFile(username_GA, 'club59@123', role_id);

    } catch (error: any) {
        console.error('Error during user creation:', error.response?.data || error.message);
        throw new Error('User creation failed');
    }
}
            
export async function deleteVenueAdmin(VenueId: string, 
    role_id: number){
    try {
            const response = await httpRequest({
                method: 'POST',
                endPoint: `${environment.apiBaseURL}/users/register`,
                contentType: 'json',
                userData: {
                    "assignTo": [VenueId],
                    "email": FakerData.getEmail(),
                    "first_name": FakerData.getFirstName(),
                    "last_name": FakerData.getLastName(),
                    "locale": "en-GB",
                    "role_id": role_id,
                    "timeZone": "(GMT - 08h00) Pacific Standard Time",
                },
                customHeaders: {
                    Authorization: `Bearer ${await authenticateSuperAdmin()}`
                }
            });
        console.log("User created successfully:", response.data);
        const username_VA = response.data.data.email;
        const user_ID = response.data.data.id;
        console.log("User ID:", user_ID);
        updateJSONFile<UserData>('../data/users.json', {
            [role_id]: {
                username: username_VA,
                password: 'Club59@123',
                role_id: role_id,
                user_id: user_ID,
            }
        });
        return user_ID;

    } catch (error: any) {
        console.error('Error during user creation:', error.response?.data || error.message);
        throw new Error('User creation failed');
    }
}*/
            
            

    

