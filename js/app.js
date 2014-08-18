// js/app.js
// entry point for our code 

var app = app || {};

$(function() {

	var books = [
		{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript programming'},
		{ title: 'The Little book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript programming'},
		{ title: 'Scala for the impatient', author: 'Cay Horstman', releaseDate: '2012', keywords: 'Scala programming'},
	];

	new app.LibraryView(books);
});