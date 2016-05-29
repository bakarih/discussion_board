// app.js has discussion board module
var App = angular.module('myApp', ['ngRoute']);

App.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		title: "Login and Registration",
		controller: 'usersController',
		templateUrl: 'partials/discussion/index.html'
	})
	.when('/dashboard', {
		title: "Main Dashboard",
		controller: 'dashboardController',
		templateUrl: 'partials/discussion/dashboard.html'
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