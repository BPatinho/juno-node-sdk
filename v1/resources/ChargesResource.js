"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
/**
 * ChargeV1 Resource class
 *
 * Handle Charges requests
 */
class ChargesResource extends BaseResource_1.BaseResource {
    issueCharge(issueChargeInput) {
        return this.doRequest('/issue-charge', issueChargeInput);
    }
    fetchPaymentDetails(paymentToken) {
        return this.doRequest('/fetch-payment-details', { paymentToken });
    }
    listCharges(listChargeInput) {
        return this.doRequest('/list-charges', listChargeInput);
    }
    cancelCharge(code) {
        return this.doRequest('/cancel-charge', { code });
    }
}
exports.ChargesResource = ChargesResource;
//# sourceMappingURL=ChargesResource.js.map