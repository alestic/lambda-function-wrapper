lambda-function-wrapper

See also:

  http://alestic.com/TBD

This is a simple nodejs Lambda function wrapper that passes the Lambda
event JSON to a program named "lambda-function" in the current
directory.

That program can be written in any language, making AWS Lambda usable
with any language that can be uploaded in the ZIP file.

A Perl program sample is provided.

Perl and Python are currently available in the AWS Lambda environment 
(not guaranteed by Amazon), so all you need to include in the ZIP file 
is the extra libraries you will use. Other languages may take more work.
