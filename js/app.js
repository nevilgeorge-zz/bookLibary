// js/app.js
// entry point for our code 

var app = app || {};

$(function() {

	// Associate the datePicker to the releaseDate field
	$('#releaseDate').datepicker();

	// Instantiate the view. No data is passed in because a GET request is done
	// by the collection in the LibraryView
	new app.LibraryView();
});