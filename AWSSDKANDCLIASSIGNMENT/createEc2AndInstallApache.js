import AWS from 'aws-sdk';
import { encode } from 'js-base64';

// Configure AWS credentials
AWS.config.update({
  region: 'us-east-1' //updating region
});

// Create an EC2 instance and install Apache
async function createEC2InstanceWithApache() {
  try {
    const ec2 = new AWS.EC2();
    const userDataScript = `#!/bin/bash
    sudo yum update -y
    sudo yum install -y httpd
    sudo service httpd start
    sudo chkconfig httpd on`

    const base64UserData = encode(userDataScript);

    // Step 1: Create an EC2 instance
    const instanceParams = {
      ImageId: 'ami-0889a44b331db0194',//Adding AMI id
      InstanceType: 't2.micro', //Instance type
      MinCount: 1,
      MaxCount: 1,
      SecurityGroupIds: [`sg-0824dce96fafecd16`], //Defining security id
      SubnetId :`subnet-009d0a315b6bf9ca7`, //Defining subnet id's
      UserData: base64UserData //sending userdata to install apache tomcat
    };

    const instanceData = await ec2.runInstances(instanceParams).promise();
    const instanceId = instanceData.Instances[0].InstanceId;

    console.log('EC2 instance created with ID:', instanceId);
    console.log('Apache will be installed during instance launch.');
} catch (error) {
    console.error('Error:', error);
  }
}

// Invoke the function
createEC2InstanceWithApache();
