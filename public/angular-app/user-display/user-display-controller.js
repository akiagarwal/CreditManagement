var spark = angular.module('spark').controller('User1Controller',User1Controller);

function User1Controller($window,$routeParams,userDataFactory){
	var vm1 = this;
	var id = $routeParams.id;
	userDataFactory.userDisplay(id).then(function(response){
		vm1.user= response.data;
	});
	userDataFactory.userList().then(function(response){
		console.log(response);
		vm1.users= response.data;
	});

	vm1.addTransfer = function(){
		var postData={
			sender: vm1.user,
			receiver:vm1.userTo,
			value:vm1.trValue
		};
		console.log(postData);
		if(vm1.transferForm.$valid){
			userDataFactory.postTransfer(postData).then(function(response){
				console.log(response.status);
				if(response.status===200){
					if(!alert("Transfer successful"))
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
			vm1.isSubmitted=true;
		}
	};
		
	
}
spark.filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<max; i++)
      input.push(i);
    return input;
  };
});

