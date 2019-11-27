"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const SANDBOX_JUNO_URL = 'https://sandbox.boletobancario.com';
const JUNO_URL = 'https://boletobancario.com';
exports.SANDBOX_JUNO_API_BASE_URL = `${SANDBOX_JUNO_URL}/boletofacil/integration/api/v1/`;
exports.JUNO_API_BASE_URL = `${JUNO_URL}/boletofacil/integration/api/v1`;
_a = process.env, exports.JUNO_TOKEN = _a.JUNO_TOKEN, exports.JUNO_ENV = _a.JUNO_ENV;
//# sourceMappingURL=consts.js.map