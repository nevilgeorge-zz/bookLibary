// js/views/book.js
// view to display each book

var app = app || {};

app.BookView = Backbone.View.extend({

	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),

	render: function() {
		// template is a function that takes a JSON object and returns html
		// this.el refers to what we defined as tagName
		// use $el to get access to the jQuery html() function
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});