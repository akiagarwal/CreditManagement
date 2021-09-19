var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users.controllers.js');

router
 .route('/users')
 .get(ctrlUsers.viewAll);

 router
 .route('/users/:userId')
 .get(ctrlUsers.getOne);

 router
 .route('/transfer')
 .post(ctrlUsers.addTransfer);

 router
 .route('/user')
 .post(ctrlUsers.addUser);


 module.exports = router;