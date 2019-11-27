import { CreatePayeeInput } from '../inputs';
import { CreatePayeeResponse } from '../responses';
import { BaseResource } from './BaseResource';
/**
 * Payee Resource class
 *
 * Handle Payee requests
 */
export declare class PayeesResource extends BaseResource {
    /**
     * Created a Payee
     * @param createPayeeInput
     */
    createPayee(createPayeeInput: CreatePayeeInput): Promise<CreatePayeeResponse>;
}
