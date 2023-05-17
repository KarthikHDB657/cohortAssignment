const AWS = require('aws-sdk');
const BUCKET_NAME = 'new-bucket-47';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const params = {
    Bucket: BUCKET_NAME,
};

//Creating bucket
s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});