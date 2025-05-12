import { httpRequest } from "../helpers/requestUtils";
import { environment } from "../config/qa";
import { FakerData } from "../helpers/fakerUtils";
import { UserData } from "../data/users.interface";import test from "playwright/test"; 
import { writeUserToFile } from '../helpers/playwright';
import { updateJSONFile } from "../helpers/jsonDataHandler";

 
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
    const response = await httpRequest({
        method: 'POST',
        endPoint: `${environment.apiBaseURL}/franchises`,
        contentType: 'json',
        userData: {
            "admins": [],
            "name": FakerData.getOrganizationName(),
            "status": "active",
            "firstName": FakerData.getFirstName(),
            "lastName": FakerData.getLastName(),
            "email": FakerData.getEmail(), 
        },
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log(response);
    let franchiseId = response.data.data.franchise_id;
  return franchiseId;
}


// Create a Group under the Franchise
export async function createGroup(franchiseId: string){
    const response = await httpRequest({
        method: 'POST',
        endPoint: `${environment.apiBaseURL}/groups`,
        contentType: 'json',
        userData: {
            "franchise_id": franchiseId,
            "name": FakerData.getOrganizationName(),
            "status": "active", 
        },
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log(response);
    let groupId = response.data.data.group_id;
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
    const response = await httpRequest({
        method: 'POST',
        endPoint: `${environment.apiBaseURL}/venues`,
        contentType: 'json',
        userData: {
            admins: [],
            "franchiseId": franchiseId,
            "groupId": groupId,
            "mentorSubdomain": "",
            "name": FakerData.getOrganizationName(),
            "status": "active", 
            "timezone": timezoneId,
        },
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log(response);
    let venueId = response.data.data.venueId;
  return venueId;
}

// Create a User and Assign to Franchise Admin Role
export async function createFranchiseAdmin(franchiseId: string, 
    role_id: number){
    try {
        const response = await httpRequest({
            method: 'POST',
            endPoint: `${environment.apiBaseURL}/users/register`,
            contentType: 'json',
            userData: {
                "assignTo": [franchiseId],
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
        let username_FA = response.data.data.email;
        updateJSONFile<UserData>('../data/users.json', {
            [role_id]: {
                username: username_FA,
                password: 'club59@123',
                role_id: role_id,
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
            }
        });
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
        let username_GA = response.data.data.email;
        updateJSONFile<UserData>('../data/users.json', {
            [role_id]: {
                username: username_GA,
                password: 'club59@123',
                role_id: role_id,
            }
        });
//        writeUserToFile(username_GA, 'club59@123', role_id);

        } catch (error: any) {
            console.error('Error during user creation:', error.response?.data || error.message);
            throw new Error('User creation failed');
            }
        }

// Create a User and Assign to Venue Admin Role
export async function createVenueAdmin(VenueId: string, 
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
            let username_VA = response.data.data.email;
            updateJSONFile<UserData>('../data/users.json', {
                [role_id]: {
                    username: username_VA,
                    password: 'club59@123',
                    role_id: role_id,
                }
            });
 //           writeUserToFile(username_VA, 'club59@123', role_id);

            } catch (error: any) {
                console.error('Error during user creation:', error.response?.data || error.message);
                throw new Error('User creation failed');
                }
            }
    

