#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkTypescriptMasterclassStack } from '../lib/cdk-typescript-masterclass-stack';
import { photosStack } from '../lib/photosStack';
import { photosHandlerStack } from '../lib/photosHandlerStack';
import { bucketTagger } from './tagger';

const REGION='eu-west-1';
const app = new cdk.App();

const PhotosStack = new photosStack(app, 'PhotosStack');
new photosHandlerStack(app, 'PhotosHandlerStack', {
  targetBucketArn: PhotosStack.photosBucketArn
})

const tagger = new bucketTagger('level', 'test-env');
cdk.Aspects.of(app).add(tagger);