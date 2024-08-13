"use strict";
class ResponseBodyFactory {
    static getPayload(channelId, clientId, skuId) {
        if (channelId === 'vtex') {
            return new VtexUseCase(channelId, clientId, skuId);
        }
        else if (channelId === 'shopfy') {
            return new ShopfyUseCase(channelId, clientId, skuId);
        }
        else {
            throw new Error('invalid channel');
        }
    }
}
