app.controller('DashboardController', ['$scope', '$http', 'DashboardFactory','UserService', '$routeParams','UserFactory', function ($scope, $http, DashboardFactory,  UserService, $routeParams, UserFactory) {

	// UserService.requireLogin();

	// get info for user
	var user = new UserFactory({id: $routeParams.id});
	user.$get(function(data) {
		console.log(data.id);
		$scope.user = data;

		// get lists from the database, using the current user
		var dashInfo = new DashboardFactory({id: $scope.user.id});
		dashInfo.$get(function(data) {
			$scope.otherLists = data.otherLists;
			$scope.mainList = data.mainList;
		});
	});
}]);