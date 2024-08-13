"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VtexUseCase = void 0;
class VtexUseCase {
    constructor(channelId, clientId, skuId) {
        this.channelId = channelId;
        this.clientId = clientId;
        this.skuId = skuId;
    }
    returnResponseBody() {
        return {
            channelId: this.channelId,
            clientId: this.clientId,
            skuId: this.skuId,
            usecase: "vtex",
        };
    }
}
exports.VtexUseCase = VtexUseCase;
