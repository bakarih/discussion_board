//=======================================================
//usersFactory -- New User
//=======================================================
discussionBoardModule.factory('dashboardFactory', function($http)
{
	var factory = {};
	// method to be called by controller to get user from db and show
	// http get request sent to routes.js (back end)
	factory.getUsers = function(callback)
	{
		$http.get('/getUsers').success(function(output)
		{
			callback(output);
		});
	}
	// method to be called by controller to add user to db
	// http post request sent to routes.js (back end)
	factory.addUser = function(data, callback)
	{
		$http.post('/addUser', data).success(function(output)
		{
			callback(output);
		});
	}
	// method to be called by controller to add topic to db
	// http post request sent to routes.js (back end)
	factory.addTopic = function(data, callback)
	{
		$http.post('/addTopic', data).success(function(output)
		{
			callback(output);
		});
	}
	// method to be called by controller to get topics from db and show
	// http get request sent to routes.js (back end)
	factory.getTopics = function(callback)
	{
		$http.get('/getTopic').success(function(output)
		{
			callback(output);
		});
	}
	function.showUser = function(user, callback)
	{
		$http.get('/showUser/' + user).success(function(output)
		{
			callback(output);
		});	
	}
	return factory;
});