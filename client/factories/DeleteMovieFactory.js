app.factory('DeleteMovieFactory', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/deleteMovie/');
}]);