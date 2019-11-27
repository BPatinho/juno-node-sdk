"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
/**
 * Balance Resource
 *
 * Handle Balance requests
 */
class BalancesResource extends BaseResource_1.BaseResource {
    /**
     * Gets the balance
     * @param token User Token
     */
    fetchBalance(token) {
        return this.doRequest('/fetch-balance', {}, token);
    }
}
exports.BalancesResource = BalancesResource;
//# sourceMappingURL=BalancesResource.js.map