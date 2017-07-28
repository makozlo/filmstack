app.controller('DashboardController', ['$scope', '$http', 'DashboardFactory', function ($scope, $http, DashboardFactory) {
	userid = 2;
	var data = new DashboardFactory({id: userid});

	data.$get(function(data) {
		$scope.otherLists = data.otherLists;
		// console.log($scope.lists);
		// console.log($scope.lists.otherLists);
	});

}]);