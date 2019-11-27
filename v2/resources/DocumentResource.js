"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class DocumentResource extends BaseResource_1.BaseResource {
    constructor() {
        super(...arguments);
        this.baseUri = '/documents';
    }
    get(token) {
        return this.httpGet('/', token);
    }
    getById(id, token) {
        return this.httpGet(`/${id}`, token);
    }
    uploadDocument(id, readStreams, token) {
        return this.httpPostMultipart(`/${id}/files`, readStreams, token);
    }
}
exports.DocumentResource = DocumentResource;
//# sourceMappingURL=DocumentResource.js.map