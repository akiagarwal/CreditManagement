angular.module('spark').controller('UserController',UserController);

function UserController($window,userDataFactory){
	var vm=this;
	vm.title = 'Credit App';
	userDataFactory.userList().then(function(response){
		console.log(response);
		vm.users= response.data;
	});

	vm.addUser = function(){
		var postData={
			name: vm.name,
			email:vm.email,
			cu_credit:vm.credit
		};
		console.log(postData);
		if(vm.addUserForm.$valid){
			userDataFactory.postUser(postData).then(function(response){
				console.log(response.status);
				if(response.status===200){
					if(!alert("Added user successfully"))
						{
							console.log("reloading");
							$window.location.reload();
						}
				}
			}).catch(function(error){
				console.log('no data',error);
			});
		}
		else{
			vm.isSubmitted=true;
		}
	};
}