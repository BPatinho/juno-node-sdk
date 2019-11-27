import { CreateTransferInput } from '../inputs';
import { Transfer } from '../entities';
import { BaseResource } from './BaseResource';
export declare class TransfersResource extends BaseResource {
    protected readonly baseUri = "/transfers";
    /**
     * Requests a Transfer
     * @param token User token
     * @param requestTransferInput
     */
    create(requestTransferInput: CreateTransferInput): Promise<Transfer>;
}
