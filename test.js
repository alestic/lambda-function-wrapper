// Our Lambda function fle is required
var importify = require('./lambda-function-wrapper.js');

// The Lambda context "done" function is called when complete with/without error
var context = {
    done: function (err, result) {
        console.log('------------');
        console.log('Context done');
        console.log('   error:', err);
        console.log('   result:', result);
    }
};

// Simulated S3 bucket event
var event = {
    Records: [
        {
            s3: {
                bucket: {
                    name: 'hotlunch-west-2'
                },
                object: {
                    key: 'importing/org_create_table_test/4-25-mytestfile.docx'
                }
            }
        }
    ]
};

// Call the Lambda function
importify.handler(event, context);
