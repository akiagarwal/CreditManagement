//var dbconn = require('../data/dbconnection.js');
var mongoose= require('mongoose');
var User = mongoose.model('User');
var Transfer = mongoose.model('Transfer');
//var userData = require('../data/user-data.json');

module.exports.viewAll	=function(req,res){
	//var db = dbconn.get();
	//var collection = db.collection('users');
	/*collection.find()
	.toArray(function(err,doc){
		console.log("users found:",doc);
		res.status(200).json(doc);
	});*/
	User
	.find()
	.exec(function(err,users){
		console.log("users found:",users.length);
		res.json(users);
	});
}

module.exports.getOne =function(req,res){

	var userId= req.params.userId;
	console.log("Go to user",userId);
	User.findById(userId).exec(function(err,doc){
		var response={
			status:200,
			message:doc
		};
		if(err){
				console.log("error finding user");
				response.status=500;
				response.message=err;
			}
			else if(!doc){
				response.status=404;
				response.message={
					"message":"user id not found"
				};
			}
				console.log('user found',response.message);
				res.status(response.status).json(response.message);	
		
	});
}

module.exports.addTransfer = function(req,res){
	console.log(req.body);
	Transfer
		.create({
			from:req.body.sender.name,
			to: req.body.receiver.name,
			value : req.body.value
		},function(err,resp){
			if(err){
				console.log('error creating transfer');
			}
			else {
				User.findById(req.body.sender._id).select("-email -name").exec(function(err1,doc){
					if(err1){
						console.log("error updating");
					}
					else{
						doc.cu_credit = doc.cu_credit - req.body.value;
						doc.save(function(err,userNew){
						if(err){
							console.log("error saving");
						}
						else{
							console.log("updated");
						}
					});

					}
				})

				User.findById(req.body.receiver._id).select("-email -name").exec(function(err1,doc){
					if(err1){
						console.log("error updating");
					}
					else{
						doc.cu_credit = doc.cu_credit + req.body.value;
						doc.save(function(err,userNew){
						if(err){
							console.log("error saving");
						}
						else{
							console.log("updated");
						}
					});

					}
				})
				res
				.status(200)
				.json("transfer added successfully");
			}
		});
};
