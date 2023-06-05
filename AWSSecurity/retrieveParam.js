const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
const ssmClient = new SSMClient({ region: "us-east-1" });


async function retrieveParam(parameterName) {
    const command = new GetParameterCommand({ Name: parameterName, WithDecryption: true });
  
    try {
      const response = await ssmClient.send(command);
      return response.Parameter.Value;
    } catch (error) {
      console.error('Error retrieving parameter:', error);
      throw error;
    }
  }
  
  const parameterName = 'sampleString';

retrieveParam(parameterName)
  .then(value => {
    console.log('Parameter value:', value);
    
  })
  .catch(error => {
    console.log("Not able to retrieve the param", error)
  });

  