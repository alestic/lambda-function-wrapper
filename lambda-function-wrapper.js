//
// lambda-function-wrapper.js
//
// A Lambda function wrapper that calls the "lambda-function" program
// in the top directory, passing it the Lamba event JSON as the comand
// line argument.
//
// This can be used as a wrapper for writing Lambda functions in
// languages other than JavaScript/nodejs.
//
// See also:
//   http://alestic.com/TBD
//

var spawn = require('child_process').spawn;
exports.handler = function(event, context) {
    var child = spawn('./lambda-function', [JSON.stringify(event, null, 2)]);
    child.stdout.on('data', function (data) { console.log("stdout:\n"+data); });
    child.stderr.on('data', function (data) { console.log("stderr:\n"+data); });
    child.on('close', function (code) { context.done(); });
}
