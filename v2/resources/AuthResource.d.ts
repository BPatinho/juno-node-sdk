import { AxiosInstance } from 'axios';
interface AuthResourceConstructor {
    junoAuthClient: AxiosInstance;
    clientId: string;
    secret: string;
}
export declare class AuthResource {
    private readonly basicToken;
    private oAuthTokenData;
    private junoClient;
    constructor({ junoAuthClient, clientId, secret }: AuthResourceConstructor);
    private doRequest;
    private generateOAuthToken;
    /**
     * TODO: Implement this method when its documentation became available
     */
    private refreshOAuthToken;
    /**
     * TODO: Implement this method when its documentation became available
     */
    getOAuthToken(): Promise<string>;
}
export {};
