app.factory('ListFactory', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/list/:id', {id: '@id'});
}]);