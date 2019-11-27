"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const helpers_1 = require("../helpers");
/**
 * Base Resource V1 class
 */
class BaseResource {
    // eslint-disable-next-line no-useless-constructor
    constructor(junoClient, token) {
        this.junoClient = junoClient;
        this.token = token;
    }
    /**
     * Performs a request to Boleto Fácil
     * @param endpoint Endpoint resource
     * @param payload Payload object
     * @param token overrides the default token
     */
    async doRequest(endpoint, payload, token) {
        try {
            const encodedPayload = helpers_1.RequestHelper.toEncodedUrlFormat({
                token: token || this.token,
                ...payload,
            });
            const { data } = await this.junoClient.post(endpoint, encodedPayload);
            return data;
        }
        catch (err) {
            if (err.response) {
                throw new errors_1.JunoError(err.response.data.errorMessage);
            }
            throw err;
        }
    }
}
exports.BaseResource = BaseResource;
//# sourceMappingURL=BaseResource.js.map