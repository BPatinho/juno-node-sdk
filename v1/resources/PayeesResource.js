"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
/**
 * Payee Resource class
 *
 * Handle Payee requests
 */
class PayeesResource extends BaseResource_1.BaseResource {
    /**
     * Created a Payee
     * @param createPayeeInput
     */
    createPayee(createPayeeInput) {
        return this.doRequest('/create-payee', createPayeeInput);
    }
}
exports.PayeesResource = PayeesResource;
//# sourceMappingURL=PayeesResource.js.map