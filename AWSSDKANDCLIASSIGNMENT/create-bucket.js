// const AWS = require('aws-sdk');
// const fs = require('fs');
// const BUCKET_NAME = 'new-bucket-48';

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// const params = {
//     Bucket: BUCKET_NAME,
// };

// //Creating bucket
// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log('Bucket Created Successfully', data.Location);
// });

//This method createBucket and upload a file named location.csv to the targeted bucket
import { CreateBucketCommand,S3Client } from "@aws-sdk/client-s3";
import { fileURLToPath } from "url";

const client = new S3Client({});

//Creating a bucket
export const main = async () => {
  const BUCKET_NAME = "kbhd-new-bucket-50";
  const command = new CreateBucketCommand({
    // The name of the bucket. Bucket names are unique and have several other constraints.
    Bucket: BUCKET_NAME ,
  });

  try {
    const { Location } = await client.send(command);
    console.log(`Bucket created with location ${Location}`);
  } catch (err) {
    console.error(err);
  }
  //return BUCKET_NAME;
};

// Invoke main function if this file was run directly.
 if (process.argv[1] === fileURLToPath(import.meta.url)) {
     main();
    
    
}

