var mongoose= require('mongoose');

var transferSchema = new mongoose.Schema({
	from:String,
	to:String,
	value: Number
});

mongoose.model('Transfer',transferSchema);