// server.js

// Module dependencies
var application_root = __dirname,
	express = require('express'), // Web framework
	bodyParser = require('body-parser'), // Middleware used to populate req.body
	path = require('path'), // Utilities for dealing with file paths
	mongoose = require('mongoose'), // MongoDB integration
	methodOverride = require('method-override'); // Allows HTTP verbs to be used

// Create server
var app = express();

// parses request body and populates req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// checks req.body for HTTP method overrides
app.use(methodOverride());

// where to serve static content
app.use(express.static(application_root));

app.listen(8080, function() {
	console.log('Express server listening on port 8080 in %s mode', app.settings.env);
});