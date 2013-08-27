// npm modules
var express = require('express');
var config = require('./config');

// Create the server
var app = express();

// Serve static content
app.use(express.static(config.folder));

// Overide headers
app.disable('x-powered-by');
app.use(function (req, res, next) {
    res.contentType('application/json');
    next();
});

// Setup routes
var routes = require('./routes')(app, config);

// Start the server
app.listen(config.port);