angular.module('spark').factory('userDataFactory',userDataFactory);

function userDataFactory($http){
	return{
		userList: userList,
		userDisplay : userDisplay,
		postTransfer:postTransfer,
		postUser: postUser
	};

	function userList(){
		return $http.get('/api/users').then(complete).catch(failed);
	}

	function userDisplay(id){
		return $http.get('/api/users/'+id).then(complete).catch(failed);
	}

	function postTransfer(postData){
		console.log('re',postData);
		return $http.post('/api/transfer',postData).then(complete).catch(failed);
	}

	function postUser(postData){
		console.log('re',postData);
		return $http.post('/api/user',postData).then(complete).catch(failed);
	}

	function complete(response){
		return response;
	}

	function failed(error){
		console.log(error.statusText);
	}
}