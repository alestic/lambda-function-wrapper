lambda-function-wrapper

This is a simple nodejs Lambda function wrapper that passes the Lambda
event JSON to a program named "lambda-function" in the current
directory.

That program can be written in any language, making AWS Lambda usable
with any language that can be uploaded in the ZIP file.

A Perl program sample is provided.

The AWS credentials are available in these environment variables:

  AWS_ACCESS_KEY_ID
  AWS_SECRET_ACCESS_KEY
  AWS_SESSION_TOKEN

For more information about the AWS Lambda function environment, see

  http://alestic.com/2014/11/aws-lambda-environment

Perl and Python are currently available in the AWS Lambda environment
(though not guaranteed by Amazon), so all you need to include in the
ZIP file is the extra libraries you will use. Other languages may take
more work.
