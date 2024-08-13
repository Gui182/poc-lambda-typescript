import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { ResponseBodyFactory } from './factory/responseBodyFactory';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {

  const queryParams = event.queryStringParameters || {};
  const channelId = queryParams.channelId || 'defaultValue'
  const clientId = event.pathParameters?.clientId || 'defaultValue'
  const skuId = event.pathParameters?.skuId || 'defaultValue'

  const responseFactory = ResponseBodyFactory.getPayload(channelId, clientId , skuId);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: responseFactory.returnResponseBody(),
      input: event,
    }),
  };

  return response;
};
