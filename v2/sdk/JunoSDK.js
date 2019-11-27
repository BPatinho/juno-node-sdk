"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const util_1 = require("util");
const configs_1 = require("../configs");
const consts_1 = require("../consts");
const errors_1 = require("../errors");
const resources_1 = require("../resources");
const DocumentResource_1 = require("../resources/DocumentResource");
/**
 * JunoSdk class
 *
 * Integration V2 for NodeJS
 */
class JunoSDK {
    constructor(config) {
        const { environment, clientId, secret, token, } = JunoSDK.mergeConfigWithEnvironment(config);
        const junoAuthClient = JunoSDK.createJunoAuthClient(environment);
        const junoClient = JunoSDK.createJunoClient(environment);
        const authResource = new resources_1.AuthResource({
            junoAuthClient,
            clientId,
            secret,
        });
        const resourceConstructor = {
            junoClient,
            token,
            authResource,
        };
        this._transfers = new resources_1.TransfersResource(resourceConstructor);
        this._notifications = new resources_1.NotificationsResource(resourceConstructor);
        this._documents = new DocumentResource_1.DocumentResource(resourceConstructor);
        this._data = new resources_1.DataResource(resourceConstructor);
    }
    static mergeConfigWithEnvironment(config) {
        const configWithEnv = {
            token: consts_1.JUNO_TOKEN,
            clientId: consts_1.JUNO_CLIENT_ID,
            secret: consts_1.JUNO_SECRET,
            environment: consts_1.JUNO_ENV,
            ...config,
        };
        JunoSDK.validateEnvironment(configWithEnv);
        return configWithEnv;
    }
    static createJunoClient(environment) {
        return axios_1.default.create({
            baseURL: JunoSDK.setEndpoint(environment),
            headers: {
                'X-API-Version': '2',
                'Content-Type': 'application/json',
            },
        });
    }
    static createJunoAuthClient(environment) {
        return axios_1.default.create({
            baseURL: JunoSDK.setAuthEndpoint(environment),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }
    static validateEnvironment({ token, clientId, secret, environment, }) {
        if (!token || typeof token !== 'string') {
            throw new errors_1.JunoEnvironmentError(`JUNO_TOKEN environment variable is invalid (${token}).`);
        }
        if (!clientId || typeof clientId !== 'string') {
            throw new errors_1.JunoEnvironmentError(`JUNO_CLIENT_ID environment variable is invalid (${clientId}).`);
        }
        if (!secret || typeof secret !== 'string') {
            throw new errors_1.JunoEnvironmentError(`JUNO_SECRET environment variable is invalid (${secret}).`);
        }
        const values = Object.values(configs_1.JunoEnvironments);
        if (!environment || !values.includes(environment)) {
            const message = 'JUNO_ENV environment variable is invalid (%s), it must be either (%s).';
            throw new errors_1.JunoEnvironmentError(util_1.format(message, environment, values.join('|')));
        }
    }
    static setAuthEndpoint(environment) {
        if (!Object.values(configs_1.JunoEnvironments).includes(environment)) {
            throw new errors_1.JunoEnvironmentError('Invalid JUNO_ENV.');
        }
        return consts_1.JUNO_API_AUTH_URLS[environment];
    }
    static setEndpoint(environment) {
        if (!Object.values(configs_1.JunoEnvironments).includes(environment)) {
            throw new errors_1.JunoEnvironmentError('Invalid JUNO_ENV.');
        }
        return consts_1.JUNO_API_BASE_URLS[environment];
    }
    /**
     * Transfers resource
     */
    get transfers() {
        return this._transfers;
    }
    /**
     * Documents resource
     */
    get documents() {
        return this._documents;
    }
    /**
     * Notifications resource
     */
    get notifications() {
        return this._notifications;
    }
    /**
     * Data resource
     */
    get data() {
        return this._data;
    }
}
exports.JunoSDK = JunoSDK;
//# sourceMappingURL=JunoSDK.js.map