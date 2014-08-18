// router.js

var BookModel = require('./bookSchema.js');

module.exports = function(app) {
	// Routes
	app.get('/api', function(req, res) {
		res.send('Library API is working');
	});

};