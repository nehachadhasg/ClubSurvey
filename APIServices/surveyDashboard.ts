import { httpRequest } from "../helpers/requestUtils.ts";
import { environment } from "../config/qa.ts";
import { FakerData } from "../helpers/fakerUtils.ts";
import { surveyDashboardData } from "../data/surveydashboard.interface.ts";
import test from "playwright/test"; 
import { writeUserToFile } from '../helpers/playwright.ts';
import { updateJSONFile } from "../helpers/jsonDataHandler.ts";
import { JsonReader } from '../helpers/jsonReader.ts';
import * as path from 'path';
import { FranchiseData } from "../data/franchise.interface.ts";
import { franchise } from "../data/franchise.json";
import { GroupData } from "../data/group.interface.ts";
import { group } from "../data/group.json";
import { VenueData } from "../data/venue.interface.ts"; 
import { venue } from "../data/venue.json";
 
 
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

/*Get the survey dashboard of super admin
 This function fetches the survey dashboard data for a given role_id and updates the JSON file
 It returns the first franchise ID from the fetched data.
 If no franchises are found, it returns an empty string.*/
export async function getDashboardPageSA(role_id: number): Promise<string> {

     const response = await httpRequest({
        method: 'GET',
        endPoint: `${environment.apiBaseURL}/surveys/dashboard?page=1&perPage=10&sort=asc`,
        contentType: 'json',
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log("SA Dashboard fetched:", response.data);
    if (Array.isArray(response.data.data.franchises) && response.data.data.franchises.length > 0) {

        const totalVenuesCount = response.data.data.stats.totalVenues;
        console.log(totalVenuesCount); // Get the total venues count
        const totalSurveysCount = response.data.data.stats.totalSurveys; // Get the total surveys count
        const totalactiveSurveysCount = response.data.data.stats.activeSurveys; // Get the total active surveys count
        const avgParticipationRate = response.data.data.stats.avgParticipation; // Get the average participation rate
        const avgCompletionRate = response.data.data.stats.avgCompletion; // Get the average completion rate
        const totalFranchiseCount = response.data.data.meta.total; // Get the total franchise count
        console.log(`Total Franchises Count: ${totalFranchiseCount}`);
        const pageNumber = response.data.data.meta.page; // Get the current page number
        const perPage = response.data.data.meta.perPage; // Get the number of items per page
        const lastPage  = response.data.data.meta.lastPage; // Get the last page number
        const franchises = response.data.data.franchises.franchiseId; // Get the list of franchises
        updateJSONFile<surveyDashboardData>('../data/surveydashboard.json', {
            [role_id]: {
            "totalVenues": totalVenuesCount,
            "totalSurveys": totalSurveysCount,
            "activeSurveys": totalactiveSurveysCount,
            "avgParticipation": avgParticipationRate,
            "avgCompletion": avgCompletionRate,
            "total": totalFranchiseCount,
            "page": pageNumber,
            "perPage": perPage,
            "lastPage": lastPage,
            "Id": franchises
            }
        });

        return franchises; // Return the first franchise ID
        } 
        return "";
    }

    
/*Get the survey dashboard of group admin
 This function fetches the survey dashboard data for a given role_id and updates the JSON file
 It returns the first group ID from the fetched data.
 If no groups are found, it returns an empty string.*/
export async function getDashboardPageFA(role_id: number): Promise<string> {

     const response = await httpRequest({
        method: 'GET',
        endPoint: `${environment.apiBaseURL}/surveys/dashboard?page=1&perPage=10&sort=asc&franchiseId=${franchise.id}`,
        contentType: 'json',
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log("FA Dashboard fetched:", response.data);
    if (Array.isArray(response.data.data.groups) && response.data.data.groups.length > 0) {

        const totalVenuesCount = response.data.data.stats.totalVenues;
        console.log(totalVenuesCount); // Get the total venues count
        const totalSurveysCount = response.data.data.stats.totalSurveys; // Get the total surveys count
        const totalactiveSurveysCount = response.data.data.stats.activeSurveys; // Get the total active surveys count
        const avgParticipationRate = response.data.data.stats.avgParticipation; // Get the average participation rate
        const avgCompletionRate = response.data.data.stats.avgCompletion; // Get the average completion rate
        const totalFranchiseCount = response.data.data.meta.total; // Get the total franchise count
        console.log(`Total Franchises Count: ${totalFranchiseCount}`);
        const pageNumber = response.data.data.meta.page; // Get the current page number
        const perPage = response.data.data.meta.perPage; // Get the number of items per page
        const lastPage  = response.data.data.meta.lastPage; // Get the last page number
        const groups = response.data.data.groups.groupId; // Get the list of franchises
        updateJSONFile<surveyDashboardData>('../data/surveydashboard.json', {
            [role_id]: {
            "totalVenues": totalVenuesCount,
            "totalSurveys": totalSurveysCount,
            "activeSurveys": totalactiveSurveysCount,
            "avgParticipation": avgParticipationRate,
            "avgCompletion": avgCompletionRate,
            "total": totalFranchiseCount,
            "page": pageNumber,
            "perPage": perPage,
            "lastPage": lastPage,
            "Id": groups
            }
        });

        return groups; // Return the first group ID
        } 
        return "";
    }

    

    export async function getDashboardPageGA(role_id: number): Promise<string> {

     console.log("Franchise ID:", franchise.id);
        console.log(`Group ID:`, group.id);   
     const response = await httpRequest({
        method: 'GET',
        endPoint: `${environment.apiBaseURL}/surveys/dashboard?page=1&perPage=10&sort=asc&franchiseId=${franchise.id}&groupId=${group.id}&surveyTypeFilter=Single+survey`,
    //                                      /surveys/dashboard?page=1&perPage=10&sort=asc&franchiseId=45dc17bc-af87-4&groupId=a82cee3c-17&surveyTypeFilter=Single+survey
        contentType: 'json',
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log("GA Dashboard fetched:", response.data);
    if (Array.isArray(response.data.data.venues) && response.data.data.venues.length > 0) {

        const totalVenuesCount = response.data.data.stats.totalVenues;
        console.log(totalVenuesCount); // Get the total venues count
        const totalSurveysCount = response.data.data.stats.totalSurveys; // Get the total surveys count
        const totalactiveSurveysCount = response.data.data.stats.activeSurveys; // Get the total active surveys count
        const avgParticipationRate = response.data.data.stats.avgParticipation; // Get the average participation rate
        const avgCompletionRate = response.data.data.stats.avgCompletion; // Get the average completion rate
        const totalFranchiseCount = response.data.data.meta.total; // Get the total franchise count
        console.log(`Total Franchises Count: ${totalFranchiseCount}`);
        const pageNumber = response.data.data.meta.page; // Get the current page number
        const perPage = response.data.data.meta.perPage; // Get the number of items per page
        const lastPage  = response.data.data.meta.lastPage; // Get the last page number
        const venue = response.data.data.venues.venueId; // Get the list of franchises
        updateJSONFile<surveyDashboardData>('../data/surveydashboard.json', {
            [role_id]: {
            "totalVenues": totalVenuesCount,
            "totalSurveys": totalSurveysCount,
            "activeSurveys": totalactiveSurveysCount,
            "avgParticipation": avgParticipationRate,
            "avgCompletion": avgCompletionRate,
            "total": totalFranchiseCount,
            "page": pageNumber,
            "perPage": perPage,
            "lastPage": lastPage,
            "Id": venue
            }
        });

        return venue; // Return the first venue ID
        } 
        return "";
    }


    export async function getDashboardPageVA(role_id: number): Promise<string> {

     const response = await httpRequest({
        method: 'GET',
        endPoint: `${environment.apiBaseURL}/surveys/dashboard?page=1&perPage=10&sort=asc&franchiseId=${franchise.id}&groupId=${group.id}&showSurveys=true&surveyTypeFilter=Single+survey&venueId=${venue.id}`,
        contentType: 'json',
        customHeaders: {
            Authorization: `Bearer ${await authenticateSuperAdmin()}`
        }
    });
    console.log("VA Dashboard fetched:", response.data);
    if (Array.isArray(response.data.data.surveys) && response.data.data.surveys.length >= 0) {

        const totalSurveysCount = response.data.data.stats.totalSurveys; // Get the total surveys count
        const totalactiveSurveysCount = response.data.data.stats.activeSurveys; // Get the total active surveys count
        const avgParticipationRate = response.data.data.stats.avgParticipation; // Get the average participation rate
        const avgCompletionRate = response.data.data.stats.avgCompletion; // Get the average completion rate
        const totalCount = response.data.data.meta.total; // Get the total franchise count
        console.log(`Total Surveys Count: ${totalCount}`);
        const pageNumber = response.data.data.meta.page; // Get the current page number
        const perPage = response.data.data.meta.perPage; // Get the number of items per page
        const lastPage  = response.data.data.meta.lastPage; // Get the last page number
        const survey = response.data.data.surveys.surveyId; // Get the list of franchises
        updateJSONFile<surveyDashboardData>('../data/surveydashboard.json', {
            [role_id]: {
            "totalVenues": "",
            "totalSurveys": totalSurveysCount,
            "activeSurveys": totalactiveSurveysCount,
            "avgParticipation": avgParticipationRate,
            "avgCompletion": avgCompletionRate,
            "total": totalCount,
            "page": pageNumber,
            "perPage": perPage,
            "lastPage": lastPage,
            "Id": survey
            }
        });

        return survey; // Return the first survey ID
        } 
        return "";
    }

    