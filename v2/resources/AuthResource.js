"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const helpers_1 = require("../helpers");
class AuthResource {
    constructor({ junoAuthClient, clientId, secret }) {
        this.junoClient = junoAuthClient;
        this.basicToken = Buffer
            .from(`${clientId}:${secret}`)
            .toString('base64');
    }
    async doRequest(endpoint, payload) {
        try {
            const encodedPayload = helpers_1.RequestHelper.toEncodedUrlFormat(payload);
            const { data } = await this.junoClient.post(endpoint, encodedPayload, {
                headers: {
                    Authorization: `Basic ${this.basicToken}`,
                },
            });
            return data;
        }
        catch (err) {
            console.error(err.response.data);
            if (err.response) {
                throw new errors_1.JunoError(err.response.data.message);
            }
            throw err;
        }
    }
    async generateOAuthToken() {
        this.oAuthTokenData = await this.doRequest('/oauth/token', {
            grant_type: 'client_credentials',
        });
        return this.oAuthTokenData.access_token;
    }
    /**
     * TODO: Implement this method when its documentation became available
     */
    async refreshOAuthToken() {
        throw new Error('Not yet implemented.');
    }
    /**
     * TODO: Implement this method when its documentation became available
     */
    async getOAuthToken() {
        return this.generateOAuthToken();
    }
}
exports.AuthResource = AuthResource;
//# sourceMappingURL=AuthResource.js.map