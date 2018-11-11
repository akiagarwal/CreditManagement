angular.module('spark').controller('UserController',UserController);

function UserController(userDataFactory){
	var vm=this;
	vm.title = 'Credit App';
	userDataFactory.userList().then(function(response){
		console.log(response);
		vm.users= response.data;
	});
}