import * as cdk from '@aws-cdk/core';

interface ClientStackProps extends cdk.StackProps{
  applicationName: string;
}
export class ClientStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: ClientStackProps) {
    super(scope, id, props);    
  }
}
