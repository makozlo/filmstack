app.controller('DashboardController', ['$scope', '$http', 'DashboardFactory','UserService', '$routeParams','UserFactory', function ($scope, $http, DashboardFactory,  UserService, $routeParams, UserFactory) {
//remove below to test for protected routes
	// UserService.requireLogin();
	UserService.me().then(function(user){
		console.log("Got that");
		console.log(user);
		$scope.user = user;
	})
	// get info for user
	// var user = new UserFactory({id: });
	// user.$get(function(data) {
	// 	$scope.user = data;
	// 	console.log($scope.user);

	// 	// get lists from the database, using the current user
	// 	var dashInfo = new DashboardFactory({id: $scope.user.id});
	// 	dashInfo.$get(function(data) {
	// 		$scope.otherLists = data.otherLists;
	// 		$scope.mainList = data.mainList;
	// 	});
	// });
}]);