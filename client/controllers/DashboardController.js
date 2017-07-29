app.controller('DashboardController', ['$scope', '$http', 'DashboardFactory','UserService', '$routeParams','User', function ($scope, $http, DashboardFactory,  UserService, $routeParams, User) {
	UserService.requireLogin();
	$scope.user = User.get({ id: $routeParams.id });
	console.log($scope.user);
	//userid = 2;
	var data = new DashboardFactory({id: $scope.user});

	data.$get(function(data) {
		$scope.otherLists = data.otherLists;
		$scope.mainList = data.mainList;

	});

}]);