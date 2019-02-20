var express = require('express');
var app = express();

// Configure API Routes
var webhookController = require('./webhook/webhookController');
app.use('/api', webhookController);

module.exports = app;