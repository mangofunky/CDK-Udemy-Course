import { DataStack } from "../stacks/DataStack";
import { App } from 'aws-cdk-lib';



const app = new App();

new DataStack(app, 'DataStack');