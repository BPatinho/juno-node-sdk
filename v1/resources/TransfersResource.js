"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const BaseResource_1 = require("./BaseResource");
/**
 * Transfer Resource class
 *
 * Handle Transfer requests
 */
class TransfersResource extends BaseResource_1.BaseResource {
    /**
     * Requests a Transfer
     * @param token User token
     */
    requestTransfer(token, amount) {
        if (!token) {
            throw new errors_1.JunoParamsMissingError("token wasn't provided.");
        }
        return this.doRequest('/request-transfer', { amount }, token);
    }
}
exports.TransfersResource = TransfersResource;
//# sourceMappingURL=TransfersResource.js.map