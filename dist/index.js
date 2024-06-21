"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event, context) => {
    console.log('Event: ', event);
    console.log('Context: ', context);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from TypeScript Lambda!',
            input: event,
        }),
    };
    return response;
};
exports.handler = handler;
