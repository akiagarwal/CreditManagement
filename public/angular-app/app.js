angular.module('spark',['ngRoute'])
.config(config);

function config($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'angular-app/main/main.html',
	})
	.when('/users',{
		templateUrl:'angular-app/user-list/user.html',
		controller : UserController,
		controllerAs: 'vm'
	})
	.when('/users/:id',{
		templateUrl:'angular-app/user-display/user1.html',
		controller:User1Controller,
		controllerAs:'vm1'
	});
}
