import AWS from 'aws-sdk';

// Configure AWS 
const awsConfig = {
 region: 'us-east-1' //sending desired region
};

// Create an SQS instance
const sqs = new AWS.SQS(awsConfig);

// Send a message to an SQS queue
async function sendMessageToQueue(message) {
  try {
    const queueURL = 'https://sqs.us-east-1.amazonaws.com/713577900377/MyQueue47'; // entering queue url

    const params = {
      MessageBody: message,
      QueueUrl: queueURL
    };

    const data = await sqs.sendMessage(params).promise();
    console.log('Message sent:', data.MessageId);

  } catch (error) {
    console.error('Error sending message:', error);
  }
}

// Receive messages from an SQS queue
async function receiveMessagesFromQueue() {
  try {
    const queueURL = 'https://sqs.us-east-1.amazonaws.com/713577900377/MyQueue47'; // SQS queue URL

    const params = {
      QueueUrl: queueURL,
      MaxNumberOfMessages: 10 // Number of messages to retrieve (adjust as needed)
    };

    const data = await sqs.receiveMessage(params).promise();
    const messages = data.Messages;

    if (messages) {
      messages.forEach((message) => {
        console.log('Received message:', message.Body);

        // Delete the received message from the queue
        deleteMessageFromQueue(message.ReceiptHandle);
      });
    } else {
      console.log('No messages in the queue.');
    }

  } catch (error) {
    console.error('Error receiving messages:', error);
  }
}

// Delete a message from an SQS queue
async function deleteMessageFromQueue(receiptHandle) {
  try {
    const queueURL = 'https://sqs.us-east-1.amazonaws.com/713577900377/MyQueue47'; 

    const params = {
      QueueUrl: queueURL,
      ReceiptHandle: receiptHandle
    };

    await sqs.deleteMessage(params).promise();
    console.log('Message deleted.');

  } catch (error) {
    console.error('Error deleting message:', error);
  }
}

// Invoke the functions
sendMessageToQueue('Hello, SQS!');
receiveMessagesFromQueue();
