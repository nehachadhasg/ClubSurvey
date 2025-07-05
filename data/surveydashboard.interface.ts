export interface surveyDashboardData {
    [roleId: number]: {
            "totalVenues": string,
            "totalSurveys": string,
            "activeSurveys": string,
            "avgParticipation": number,
            "avgCompletion": number,
            "total": number,
            "page": number,
            "perPage": number,
            "lastPage": number
            "Id": string[]

    };
}