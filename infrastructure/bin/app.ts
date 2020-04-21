#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ClientStack } from '../lib/client-stack';
import { ServerStack } from '../lib/server-stack';

const app = new cdk.App();

const applicationName = process.env.APP || 'cdk-test';

new ClientStack(app, `${applicationName}-client-stack`);

new ServerStack(app, `${applicationName}-server-stack`);
