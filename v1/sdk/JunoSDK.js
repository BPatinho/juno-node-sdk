"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const util_1 = require("util");
const configs_1 = require("../configs");
const consts_1 = require("../consts");
const errors_1 = require("../errors");
const resources_1 = require("../resources");
class JunoSDK {
    constructor(config) {
        const configWithEnv = {
            token: consts_1.JUNO_TOKEN,
            environment: consts_1.JUNO_ENV,
            ...config,
        };
        JunoSDK.validateEnvironment(configWithEnv);
        const { environment, token } = configWithEnv;
        const junoClient = axios_1.default.create({
            baseURL: JunoSDK.setEndpoint(environment),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        this._balanceResource = new resources_1.BalancesResource(junoClient, token);
        this._chargeResource = new resources_1.ChargesResource(junoClient, token);
        this._transferResource = new resources_1.TransfersResource(junoClient, token);
        this._payees = new resources_1.PayeesResource(junoClient, token);
    }
    static setEndpoint(environment) {
        switch (environment) {
            case configs_1.JunoEnvironments.Sandbox:
                return consts_1.SANDBOX_JUNO_API_BASE_URL;
            case configs_1.JunoEnvironments.Production:
                return consts_1.JUNO_API_BASE_URL;
            default:
                throw new errors_1.JunoEnvironmentError('Invalid JUNO_ENV.');
        }
    }
    static validateEnvironment({ token, environment }) {
        if (!token || typeof token !== 'string') {
            throw new errors_1.JunoEnvironmentError(`JUNO_TOKEN environment variable is invalid (${token}).`);
        }
        const values = Object.values(configs_1.JunoEnvironments);
        if (!environment || !values.includes(environment)) {
            const message = 'JUNO_ENV environment variable is invalid (%s), it must be either (%s).';
            throw new errors_1.JunoEnvironmentError(util_1.format(message, environment, values.join('|')));
        }
    }
    /**
     * Balance resources
     */
    get balances() {
        return this._balanceResource;
    }
    /**
     * ChargeV1 resources
     */
    get charges() {
        return this._chargeResource;
    }
    /**
     * Transfer resources
     */
    get transfers() {
        return this._transferResource;
    }
    /**
     * Payee resources
     */
    get payees() {
        return this._payees;
    }
}
exports.JunoSDK = JunoSDK;
//# sourceMappingURL=JunoSDK.js.map