var myApp = angular.module('myApp');

myApp.controller('MoviesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MoviesController loaded...');

	$scope.getMovies = function(){
		$http.get('/api/movies').then(function(response){
			$scope.movies = response.data;
		});
	}

	$scope.getMovie = function(){
		var id = $routeParams.id;
		$http.get('/api/movies/'+id).then(function(response){
			$scope.movie = response.data;
		});
	}

	$scope.addMovie = function(){
		$http.post('/api/movies/', $scope.movie).then(function(response){
			window.location.href='#!movie';
		});
	}

	// $scope.updateMovie = function(){
	// 	var id = $routeParams.id;
	// 	$http.put('/api/movies/'+id, $scope.movie).success(function(response){
	// 		window.location.href='#/movies';
	// 	});
	// }

	// $scope.removeMovie = function(id){
	// 	$http.delete('/api/movies/'+id).success(function(response){
	// 		window.location.href='#/movies';
	// 	});
	// }
}]);