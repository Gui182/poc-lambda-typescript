"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopfyUseCase = void 0;
class ShopfyUseCase {
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
            usecase: "shopfy",
        };
    }
}
exports.ShopfyUseCase = ShopfyUseCase;
