import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {

  const ramdomNumber = Math.random()

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `O numero aleátorio gerado é ${ramdomNumber}`,
      input: event,
    }),
  };

  return response;
};
