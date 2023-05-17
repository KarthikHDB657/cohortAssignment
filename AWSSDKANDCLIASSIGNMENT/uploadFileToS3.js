// const fs = require('fs');
// const AWS = require('aws-sdk');

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// const uploadFile = fileName => {
//     const params = {
//         Bucket: 'new-bucket-47',
//         Key: 'Location.csv',
//         ContentDisposition: 'attachment',
//         Body: fs.readFileSync(fileName),
//     }

//     return s3.upload(params).promise()
// }

// uploadFile('Location.csv')
import { PutObjectCommand ,S3Client } from "@aws-sdk/client-s3";
import { fileURLToPath } from "url";
import fs from "fs";
//import { main } from "./create-bucket.js";

const client = new S3Client({})
const BUCKET_NAME = "kbhd-new-bucket-50" ; //main();
export const upload = async () => {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: "Location.csv",
      Body: fs.readFileSync("Location.csv"),
    });
  
     try {
      const response = await client.send(command);
      console.log(response);
    } catch (err) {
      console.error(err);
   }
  };
// Invoke main function if this file was run directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    //try to run upload
    upload();
}

