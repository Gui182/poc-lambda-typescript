"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const responseBodyFactory_1 = require("./factory/responseBodyFactory");
const handler = async (event, context) => {
    const queryParams = event.queryStringParameters || {};
    const channelId = queryParams.channelId || 'defaultValue';
    const clientId = event.pathParameters?.clientId || 'defaultValue';
    const skuId = event.pathParameters?.skuId || 'defaultValue';
    const responseFactory = responseBodyFactory_1.ResponseBodyFactory.getPayload(channelId, clientId, skuId);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: responseFactory.returnResponseBody(),
            input: event,
        }),
    };
    return response;
};
exports.handler = handler;
