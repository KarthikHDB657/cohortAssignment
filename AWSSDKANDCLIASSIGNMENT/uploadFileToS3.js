const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadFile = fileName => {
    const params = {
        Bucket: 'new-bucket-47',
        Key: 'Location.csv',
        ContentDisposition: 'attachment',
        Body: fs.readFileSync(fileName),
    }

    return s3.upload(params).promise()
}

uploadFile('Location.csv')

