var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/spark';

var _connection = null;
 
 var open = function(){
 	MongoClient.connect(dburl,function(err,db){
 		if(err){
 			console.log('db error');
 			return;
 		}
 		_connection = db;
 		console.log('db open',db);
 	});
 };

 var get = function(){
 	return _connection;
 };

 module.exports = {
 	open : open,
 	get : get
 };