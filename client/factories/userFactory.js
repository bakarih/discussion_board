//=======================================================
//usersFactory -- New User
//=======================================================
App.factory('usersFactory', '$location', ['$http', '$location', function($http)
{
	//console.log(usersFactory);
	var factory = {};

	// method to be called by controller to check if user exists in db
	// http post request sent to routes.js (back end)
	factory.checkUserExists = function(name, callback){
		console.log('in usersFactory', name);
		$http.post('/checkUserExists/' + name).success(function(output){
			callback(output);
		});
	}

	// method to be called by controller to add user to db
	// http post request sent to routes.js (back end)
	factory.addUser = function(data, callback){
		$http.post('/addUser', data).success(function(output){
			$location.path('/dashboard');
			callback(output);
		});
	}

	// method to be called by controller to get user from db and show
	// http get request sent to routes.js (back end)
	factory.getUser = function(data, callback){
		console.log(data);
		$http.get('/showUser/' + data).success(function(output){
			callback(output);
		});
	}
	return factory;
}]);