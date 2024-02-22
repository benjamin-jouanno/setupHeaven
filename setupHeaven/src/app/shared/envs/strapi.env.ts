export interface IStrapiEnv {
    baseUrl: string;
    authentication: string;
    register: string;
    me: string;
}

export const StrapiLocalEnv: IStrapiEnv =  {
    baseUrl: 'http://localhost:1337',
    authentication: '/api/auth/local',
    register: '/api/auth/local/register',
    me: '/api/users/me',
}