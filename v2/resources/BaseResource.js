"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FormData = require("form-data");
const errors_1 = require("../errors");
/**
 * Base Resource V2 class
 */
class BaseResource {
    constructor({ junoClient, token, authResource }) {
        this.junoClient = junoClient;
        this.token = token;
        this.authResource = authResource;
    }
    getCompleteEndpoint(endpoint) {
        if (!this.baseUri) {
            throw new Error('baseUri not defined.');
        }
        if (!endpoint) {
            throw new Error('endpoint not defined.');
        }
        return `${this.baseUri}${endpoint}`;
    }
    /**
     * TODO: this.authResource.refreshOAuthToken() method when its documentation became available
     */
    async getRequestConfig(token, headers = {}) {
        const accessToken = await this.authResource.getOAuthToken();
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${accessToken}`,
                'X-Resource-Token': token || this.token,
            },
        };
    }
    static async handleRequest(request) {
        try {
            const { data } = await request;
            return data;
        }
        catch (err) {
            if (err.response) {
                const message = err.response.data.details
                    ? err.response.data.details.map((detail) => `${detail.message}`)
                    : err.data;
                throw new errors_1.JunoError(message);
            }
            throw err;
        }
    }
    async httpGet(endpoint, token) {
        return BaseResource.handleRequest(this.junoClient.get(this.getCompleteEndpoint(endpoint), await this.getRequestConfig(token)));
    }
    async httpPost(endpoint, payload, token) {
        return BaseResource.handleRequest(this.junoClient.post(this.getCompleteEndpoint(endpoint), payload, await this.getRequestConfig(token)));
    }
    async httpPut(endpoint, payload, token) {
        return BaseResource.handleRequest(this.junoClient.put(this.getCompleteEndpoint(endpoint), payload, await this.getRequestConfig(token)));
    }
    async httpPatch(endpoint, payload, token) {
        return BaseResource.handleRequest(this.junoClient.patch(this.getCompleteEndpoint(endpoint), payload, await this.getRequestConfig(token)));
    }
    async httpDelete(endpoint, token) {
        return BaseResource.handleRequest(this.junoClient.delete(this.getCompleteEndpoint(endpoint), await this.getRequestConfig(token)));
    }
    async httpPostMultipart(endpoint, readStreams, token) {
        const form = new FormData();
        readStreams.forEach(readStream => form.append('files', readStream));
        return BaseResource.handleRequest(this.junoClient.post(this.getCompleteEndpoint(endpoint), form, await this.getRequestConfig(token, 
        // multipart/form-data
        form.getHeaders())));
    }
}
exports.BaseResource = BaseResource;
//# sourceMappingURL=BaseResource.js.map