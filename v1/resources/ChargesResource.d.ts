import { IssueChargeInput, ListChargeInput } from '../inputs';
import { CancelChargeResponse, FetchPaymentDetailsResponse, IssueChangeResponse, ListChargesResponse } from '../responses';
import { BaseResource } from './BaseResource';
/**
 * ChargeV1 Resource class
 *
 * Handle Charges requests
 */
export declare class ChargesResource extends BaseResource {
    issueCharge(issueChargeInput: IssueChargeInput): Promise<IssueChangeResponse>;
    fetchPaymentDetails(paymentToken: string): Promise<FetchPaymentDetailsResponse>;
    listCharges(listChargeInput: ListChargeInput): Promise<ListChargesResponse>;
    cancelCharge(code: string): Promise<CancelChargeResponse>;
}
