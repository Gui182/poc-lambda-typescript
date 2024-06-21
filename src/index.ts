import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
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
