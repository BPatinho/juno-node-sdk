import { JunoSDKConfig } from '../configs';
import { DataResource, NotificationsResource, TransfersResource } from '../resources';
import { DocumentResource } from '../resources/DocumentResource';
/**
 * JunoSdk class
 *
 * Integration V2 for NodeJS
 */
export declare class JunoSDK {
    private readonly _transfers;
    private readonly _notifications;
    private readonly _documents;
    private readonly _data;
    constructor(config?: JunoSDKConfig);
    private static mergeConfigWithEnvironment;
    private static createJunoClient;
    private static createJunoAuthClient;
    private static validateEnvironment;
    private static setAuthEndpoint;
    private static setEndpoint;
    /**
     * Transfers resource
     */
    readonly transfers: TransfersResource;
    /**
     * Documents resource
     */
    readonly documents: DocumentResource;
    /**
     * Notifications resource
     */
    readonly notifications: NotificationsResource;
    /**
     * Data resource
     */
    readonly data: DataResource;
}
