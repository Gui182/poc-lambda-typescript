import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {

  const queryParams = event.queryStringParameters || {};
  const channelId = queryParams.channelId
  const clientId = event.queryStringParameters?.clientId;
  const skuId = event.queryStringParameters?.skuId;
  const ramdomNumber = Math.random()

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `O numero aleátorio gerado é ${ramdomNumber}, o queryParams é ${channelId}, o clientId é ${clientId}, o skuId é ${skuId}`,
      input: event,
    }),
  };

  return response;
};
