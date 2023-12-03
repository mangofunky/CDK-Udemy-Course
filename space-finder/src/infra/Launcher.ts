import { DataStack } from "../stacks/DataStack";
import { LambdaStack } from "../stacks/LambdaStack";
import { App } from 'aws-cdk-lib';



const app = new App();

new DataStack(app, 'DataStack');
new LambdaStack(app, 'LambdaStack')
