// app.js has discussion board module
var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		title: "Login and Registration",
		templateUrl: 'partials/discussion/index.html',
		controller: 'usersController'
	})
	.when('/dashboard', {
		title: "Main Dashboard",
		templateUrl: 'partials/discussion/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/topic/:id', {
		title: "Topic",
		controller: 'topicController',
		templateUrl: 'partials/discussion/topic.html'
	})
	.when('/user/:id', {
		title: "User Profile",
		controller: 'profileController',
		templateUrl: 'partials/discussion/user.html'
	})
	.otherwise({
		redirectTo: '/'
	})

}]);

App.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);