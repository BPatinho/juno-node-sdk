/// <reference types="node" />
import { AxiosInstance } from 'axios';
import { ReadStream } from 'fs';
import { AuthResource } from './AuthResource';
export interface BaseResourceConstructor {
    junoClient: AxiosInstance;
    token: string;
    authResource: AuthResource;
}
/**
 * Base Resource V2 class
 */
export declare abstract class BaseResource {
    protected abstract readonly baseUri: string;
    protected readonly junoClient: AxiosInstance;
    protected readonly token: string;
    private authResource;
    constructor({ junoClient, token, authResource }: BaseResourceConstructor);
    private getCompleteEndpoint;
    /**
     * TODO: this.authResource.refreshOAuthToken() method when its documentation became available
     */
    private getRequestConfig;
    private static handleRequest;
    protected httpGet<T>(endpoint: string, token?: string): Promise<T>;
    protected httpPost<T>(endpoint: string, payload: any, token?: string): Promise<T>;
    protected httpPut<T>(endpoint: string, payload: any, token?: string): Promise<T>;
    protected httpPatch<T>(endpoint: string, payload: any, token?: string): Promise<T>;
    protected httpDelete<T>(endpoint: string, token?: string): Promise<T>;
    protected httpPostMultipart<T>(endpoint: string, readStreams: ReadStream[], token: string): Promise<T>;
}
