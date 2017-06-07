// Add dependency ngRoute
var myApp = angular.module('myApp',['ngRoute']);

// Set up routes
myApp.config(function($routeProvider){
	// homepage url
	$routeProvider.when('/', {
		controller:'MoviesController',
		templateUrl: 'views/movies.html'
	})
	.when('/movies', {
		controller:'MoviesController',
		templateUrl: 'views/movies.html'
	})
	.when('/movies/details/:id',{
		controller:'MoviesController',
		templateUrl: 'views/movies_details.html'
	})
	.when('/movies/add',{
		controller:'MoviesController',
		templateUrl: 'views/add_movies.html'
	})
	.when('/movies/edit/:id',{
		controller:'MoviesController',
		templateUrl: 'views/edit_movies.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});