"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("./configs");
const SANDBOX_JUNO_URL = 'https://sandbox.boletobancario.com';
const PRODUCTION_JUNO_URL = 'https://api.juno.com.br';
const SANDBOX_JUNO_API_BASE_URL = `${SANDBOX_JUNO_URL}/api-integration`;
const PRODUCTION_JUNO_API_BASE_URL = PRODUCTION_JUNO_URL;
const SANDBOX_JUNO_API_AUTH_URL = `${SANDBOX_JUNO_URL}/authorization-server`;
const PRODUCTION_JUNO_API_AUTH_URL = `${PRODUCTION_JUNO_URL}/authorization-server`;
exports.JUNO_API_BASE_URLS = {
    [configs_1.JunoEnvironments.Sandbox]: SANDBOX_JUNO_API_BASE_URL,
    [configs_1.JunoEnvironments.Production]: PRODUCTION_JUNO_API_BASE_URL,
};
exports.JUNO_API_AUTH_URLS = {
    [configs_1.JunoEnvironments.Sandbox]: SANDBOX_JUNO_API_AUTH_URL,
    [configs_1.JunoEnvironments.Production]: PRODUCTION_JUNO_API_AUTH_URL,
};
_a = process.env, exports.JUNO_TOKEN = _a.JUNO_TOKEN, exports.JUNO_CLIENT_ID = _a.JUNO_CLIENT_ID, exports.JUNO_SECRET = _a.JUNO_SECRET;
exports.JUNO_ENV = process.env.JUNO_ENV;
//# sourceMappingURL=consts.js.map