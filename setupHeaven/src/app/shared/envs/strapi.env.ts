export interface IStrapiEnv {
    baseUrl: string;
    authentication: string;
    register: string;
}

export const StrapiLocalEnv: IStrapiEnv =  {
    baseUrl: 'http://localhost:1337',
    authentication: '/api/auth/local',
    register: '/auth/local/register'
}