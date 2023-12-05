import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-1"
process.env.TABLE_NAME = "SpaceTable-0eb3c459d0fb"

handler({
    httpMethod: 'POST',
    body: JSON.stringify({
        location: 'Barcelona'
    })
} as any, {} as any);