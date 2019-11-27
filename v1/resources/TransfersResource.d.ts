import { RequestTransferResponse } from '../responses';
import { BaseResource } from './BaseResource';
/**
 * Transfer Resource class
 *
 * Handle Transfer requests
 */
export declare class TransfersResource extends BaseResource {
    /**
     * Requests a Transfer
     * @param token User token
     */
    requestTransfer(token: string, amount?: number): Promise<RequestTransferResponse>;
}
