import AWS from 'aws-sdk';

// Configure AWS credentials
AWS.config.update({
  region: 'us-east-1' // updating region
});

// Create an instance of the DynamoDB DocumentClient
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Add data to a DynamoDB table
async function addDataToTable() {
  try {
    const tableName = 'Movie'; // Already created a table name with movie using aws cli

    const params = {
      TableName: tableName,
      Item: {
        Artist: 'jerry',
        MovieTitle: 'New Title 49',
        
      }
    };

    await dynamodb.put(params).promise();
    console.log('Data added to the table.');

  } catch (error) {
    console.error('Error adding data:', error);
  }
}

// Read data from a DynamoDB table
async function readDataFromTable() {
  try {
    const tableName = 'Movie'; // Replace with your DynamoDB table name

    const params = {
      TableName: tableName,
      Key: {
        Artist: 'ABC',
        MovieTitle: 'ABC'
      }
    };

    const data = await dynamodb.get(params).promise();
    const item = data.Item;

    if (item) {
      console.log('Retrieved data:', item);
    } else {
      console.log('Item not found in the table.');
    }

  } catch (error) {
    console.error('Error reading data:', error);
  }
}

// Invoke the functions
addDataToTable();
readDataFromTable();
