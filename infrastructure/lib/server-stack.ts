import * as cdk from '@aws-cdk/core';

interface ServerStackProps extends cdk.StackProps{
  applicationName: string;
}
export class ServerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: ServerStackProps) {
    super(scope, id, props);
  }
}
