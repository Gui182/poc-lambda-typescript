import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {

  const queryParams = event.queryStringParameters || {};
  const channelId = queryParams.channelId || 'defaultValue'
  const clientId = event.pathParameters?.clientId
  const skuId = event.pathParameters?.skuId

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
