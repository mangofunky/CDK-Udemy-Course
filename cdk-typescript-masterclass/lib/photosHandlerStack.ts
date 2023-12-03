import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { Fn } from 'aws-cdk-lib';
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';

interface photosHandlerStackProps extends cdk.StackProps {
    targetBucketArn: string
}

export class photosHandlerStack extends cdk.Stack {
    
    constructor(scope: Construct, id: string, props: photosHandlerStackProps) {
        super(scope, id, props);
        
        new LambdaFunction(this, 'PhotoHandler',{
            runtime: Runtime.NODEJS_16_X,
            handler: 'index.handler',
            code: Code.fromInline(`
            exports.handler = async (event) => {
              console.log("hello!zxzxc: " + process.env.TARGET_BUCKET)
            };
          `),
            environment: {
                TARGET_BUCKET: props.targetBucketArn,
            },
        });
    }

}