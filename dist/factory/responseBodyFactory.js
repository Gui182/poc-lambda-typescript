"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBodyFactory = void 0;
const shopfyUseCase_1 = require("../useCases/shopfyUseCase");
const vtexUseCase_1 = require("../useCases/vtexUseCase");
class ResponseBodyFactory {
    static getPayload(channelId, clientId, skuId) {
        if (channelId === 'vtex') {
            return new vtexUseCase_1.VtexUseCase(channelId, clientId, skuId);
        }
        else if (channelId === 'shopfy') {
            return new shopfyUseCase_1.ShopfyUseCase(channelId, clientId, skuId);
        }
        else {
            throw new Error('invalid channel');
        }
    }
}
exports.ResponseBodyFactory = ResponseBodyFactory;
