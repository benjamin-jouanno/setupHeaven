export interface IAuthenticateData {
    identifier: string;
    password: string;
}

export interface iUser {
    email: string;
    password: string;
    username: string;
}

export interface JWTData {
    token: string;
}