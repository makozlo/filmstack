app.factory('SearchFactory', ['$resource', '$http', function($resource, $http) {
	return $resource('http://localhost:3000/api/search/:query',{query: '@query'});
}]);