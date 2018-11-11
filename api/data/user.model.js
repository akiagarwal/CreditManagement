var mongoose= require('mongoose');

var userSchema = new mongoose.Schema({
	name : {
		type:String
	},
	email : {
		type:String
	},
	cu_credit : {
		type: Number
	} 
});



mongoose.model('User',userSchema);
