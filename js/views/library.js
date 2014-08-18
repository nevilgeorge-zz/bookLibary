// js/views/library.js
// view for the list itself

var app = app || {};

app.LibraryView = Backbone.View.extend({

	el: '#books',

	initialize: function(initialBooks) {
		this.collection = new app.Library(initialBooks);
		this.render();
	},

	// render library by rendering each book in its collection
	render: function() {
		this.collection.each(function(item) {
			this.renderBook(item);
		});
	},

	// render a book by creating a BookView and appending the element
	// it renders to the library's element
	renderBook: function(book) {
		var bookView = new app.BookView({
			model: book
		});
		/* Understanding render().el:
		bookView.render() returns the BookView itself (since we did "return this"),
		so the .el is taking the HTML element from the BookView and appending it to
		the library.
		*/
		this.$el.append(bookView.render().el);
	}
});