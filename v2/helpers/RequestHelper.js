"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestHelper {
    static toEncodedUrlFormat(payload) {
        return Object.keys(payload)
            .filter(key => payload[key] !== null && payload[key] !== undefined)
            .map(key => `${key}=${payload[key]}`).join('&');
    }
}
exports.RequestHelper = RequestHelper;
//# sourceMappingURL=RequestHelper.js.map