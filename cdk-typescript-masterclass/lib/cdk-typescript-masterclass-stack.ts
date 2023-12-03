import * as cdk from 'aws-cdk-lib';
import { CfnOutput,CfnParameter, Duration } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

// create S3 bucket using L3 constructs
class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, 'L3Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(expiration)
      }]
    })
  }
}

export class CdkTypescriptMasterclassStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const duration = new cdk.CfnParameter(this, 'duration', {
      default: 6,
      minValue: 1,
      maxValue: 10,
      type: 'Number'
    })
     
    // create S3 bucket using L1 constructs
    new CfnBucket(this, 'L1Bucket', {
      lifecycleConfiguration:{
        rules: [{
          expirationInDays: 1,
          status: 'Enabled'
        }]
      }
    })

    // create S3 bucket using L2 constructs
    const myL2Bucket = new Bucket(this, 'L2Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(duration.valueAsNumber)
      }] 
    });
    new cdk.CfnOutput(this, 'MyL2BucketName', {
      value: myL2Bucket.bucketName
    })

    // create S3 bucket using L3 constructs
    new L3Bucket(this, 'L3Bucket', 3);
  }
}