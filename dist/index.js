"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event, context) => {
    const queryParams = event.queryStringParameters || {};
    const channelId = queryParams.channelId || 'defaultValue';
    const clientId = event.pathParameters?.clientId;
    const skuId = event.pathParameters?.skuId;
    const responseFactory = ResponseBodyFactory.getPayload(channelId, clientId || '', skuId || '');
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
