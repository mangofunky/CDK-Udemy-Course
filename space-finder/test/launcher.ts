import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-1"
process.env.TABLE_NAME = "SpaceTable-0eb3c459d0fb"

handler({
    httpMethod: 'PUT',
    queryStringParameters: {
        id: '1b8e9211-a5d0-42b8-8ef8-7b39eca0fdf1'
    },
    body: JSON.stringify({
        location: 'Barcelona2'
    })
} as any, {} as any);