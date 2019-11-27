import { FetchBalanceResponse } from '../responses';
import { BaseResource } from './BaseResource';
/**
 * Balance Resource
 *
 * Handle Balance requests
 */
export declare class BalancesResource extends BaseResource {
    /**
     * Gets the balance
     * @param token User Token
     */
    fetchBalance(token: string): Promise<FetchBalanceResponse>;
}
