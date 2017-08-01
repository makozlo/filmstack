app.factory('ListFactory', ['$resource', '$http', function($resource, $http) {
	return $resource('http://localhost:3000/api/lists/:id', {id: '@id'},
		{
			"update": {method: "PUT"}
		});
}]);