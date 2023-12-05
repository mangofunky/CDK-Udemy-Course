import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-1"
process.env.TABLE_NAME = "SpaceTable-0eb3c459d0fb"

handler({
    httpMethod: 'PUT',
    queryStringParameters: {
        id: 'c3f63937-c391-4584-a888-95953856bf79'
    },
    body: JSON.stringify({
        name: 'Best nightclubs'
    })
} as any, {} as any).then(result =>{
    console.log(result)
});