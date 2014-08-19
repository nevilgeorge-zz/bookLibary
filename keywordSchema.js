// keywordSchema.js

var mongoose = require('mongoose');

var Keywords = new mongoose.Schema({
	keyword: String
});

module.exports = Keywords;