// /bookSchema.js

var mongoose = require('mongoose'),
	Keywords = require('./keywordSchema.js');

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date,
	keywords: [ Keywords ]// adding a subschema to an existing schema
});

var BookModel = mongoose.model('Book', Book);

module.exports = BookModel;