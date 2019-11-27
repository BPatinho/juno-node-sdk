import { AxiosInstance } from 'axios';
/**
 * Base Resource V1 class
 */
export declare abstract class BaseResource {
    protected readonly junoClient: AxiosInstance;
    protected readonly token: string;
    constructor(junoClient: AxiosInstance, token: string);
    /**
     * Performs a request to Boleto Fácil
     * @param endpoint Endpoint resource
     * @param payload Payload object
     * @param token overrides the default token
     */
    protected doRequest<T>(endpoint: string, payload: any, token?: string): Promise<T>;
}
