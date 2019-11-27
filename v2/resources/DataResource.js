"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class DataResource extends BaseResource_1.BaseResource {
    constructor() {
        super(...arguments);
        this.baseUri = '/data';
    }
    async getBanks() {
        return this.httpGet('/banks');
    }
}
exports.DataResource = DataResource;
//# sourceMappingURL=DataResource.js.map