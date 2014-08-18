// /bookSchema.js

var mongoose = require('mongoose');

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date
});

var BookModule = mongoose.model('Book', Book);

module.exports = BookModule;