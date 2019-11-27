"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class NotificationsResource extends BaseResource_1.BaseResource {
    constructor() {
        super(...arguments);
        this.baseUri = '/notifications';
    }
    getWebhooks(token) {
        return this.httpGet('/webhooks', token);
    }
    getWebHookById(id, token) {
        return this.httpGet(`/webhooks/${id}`, token);
    }
    createWebhook({ token = undefined, ...payload }) {
        return this.httpPost('/webhooks/', payload, token);
    }
    updateWebhook({ token, id, ...payload }) {
        return this.httpPatch(`/webhooks/${id}`, payload, token);
    }
    removeWebhook({ token, id }) {
        return this.httpDelete(`/webhooks/${id}`, token);
    }
    getEventTypes() {
        return this.httpGet('/event-types');
    }
}
exports.NotificationsResource = NotificationsResource;
//# sourceMappingURL=NotificationsResource.js.map