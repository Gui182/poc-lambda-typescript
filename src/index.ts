import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {

  const queryParams = event.queryStringParameters || {};
  const channelId = queryParams.channelId || 'defaultValue'
  const ramdomNumber = Math.random()

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `O numero aleátorio gerado é ${ramdomNumber} e o queryParams é ${channelId}`,
      input: event,
    }),
  };

  return response;
};
