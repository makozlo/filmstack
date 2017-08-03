app.factory('DashboardFactory', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/dashboard/:id', {id: '@id'},
		{
			"save": {
				method: "POST"
			}
		});
}]);