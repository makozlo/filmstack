app.factory('ListFactory', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/lists/:id/:listID', {id: '@id', listID: '@listID'},
		{
			"update": {method: "PUT"}
		});
}]);