// router.js

var BookModel = require('./bookSchema.js');

module.exports = function(app) {
	// Routes
	app.get('/api', function(req, res) {
		res.send('Library API is working');
	});

	app.get('/api/books', function(req, res) {
		return BookModel.find(function(err, books) {
			if (!err) {
				return res.send(books);
			} else {
				return console.log(err);
			}
		});
	});

	// Insert a new book
	app.post('/api/books', function(req, res) {
		var book = new BookModel({
			title: req.body.title,
			author: req.body.author,
			releaseDate: req.body.releaseDate
		});
		book.save(function(err) {
			if (!err) {
				return console.log('Book created!');
			} else {
				return console.log(err);
			}
		});

		return res.send(book);
	});

	// Get a book by ID
	app.get('/api/books/:id', function(req, res) {
		return BookModel.findById(req.params.id, function(err, book) {
			if (!err) {
				return res.send(book);
			} else {
				return console.log(err);
			}
		});
	});

};