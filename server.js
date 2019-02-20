var app = require('./app');
var port = process.env.PORT || 8000;

// Start the server
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});