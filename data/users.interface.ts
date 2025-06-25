export interface UserData {
    [roleId: number]: {
        username: string;
        password: string;
        role_id: number;
        user_id: string;

    };
}