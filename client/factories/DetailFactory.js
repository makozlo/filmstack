app.factory('DetailFactory', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/detail/:id', {id: '@id'});
}]);