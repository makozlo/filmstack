app.factory('SearchFactory', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/search/:query',{query: '@query'});
}]);