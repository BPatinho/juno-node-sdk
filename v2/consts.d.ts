import { JunoEnvironments } from './configs';
export declare const JUNO_API_BASE_URLS: {
    [JunoEnvironments.Sandbox]: string;
    [JunoEnvironments.Production]: string;
};
export declare const JUNO_API_AUTH_URLS: {
    [JunoEnvironments.Sandbox]: string;
    [JunoEnvironments.Production]: string;
};
export declare const JUNO_TOKEN: string, JUNO_CLIENT_ID: string, JUNO_SECRET: string;
export declare const JUNO_ENV: JunoEnvironments;
