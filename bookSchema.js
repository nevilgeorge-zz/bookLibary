// /bookSchema.js

var mongoose = require('mongoose');

var Keywords = new mongoose.Schema({
	keyword: String
});

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date,
	keywords: [ Keywords ]// adding a subschema to an existing schema
});

var BookModule = mongoose.model('Book', Book);

module.exports = BookModule;