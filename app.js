var express = require('express');
var app = express();
// var db = require('./db');

var webhookController = require('./webhook/webhookController');
app.use('/api', webhookController);

module.exports = app;