import { JunoSDKConfig } from '../configs';
import { BalancesResource, ChargesResource, PayeesResource, TransfersResource } from '../resources';
export declare class JunoSDK {
    private readonly _balanceResource;
    private readonly _chargeResource;
    private readonly _transferResource;
    private readonly _payees;
    constructor(config?: JunoSDKConfig);
    private static setEndpoint;
    private static validateEnvironment;
    /**
     * Balance resources
     */
    readonly balances: BalancesResource;
    /**
     * ChargeV1 resources
     */
    readonly charges: ChargesResource;
    /**
     * Transfer resources
     */
    readonly transfers: TransfersResource;
    /**
     * Payee resources
     */
    readonly payees: PayeesResource;
}
