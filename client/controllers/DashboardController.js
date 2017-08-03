app.controller('DashboardController', ['$scope', '$http', 'DashboardFactory', 'ListFactory', 'UserService', '$routeParams','UserFactory', function ($scope, $http, DashboardFactory, ListFactory, UserService, $routeParams, UserFactory) {
	//remove below to test for protected routes
	// UserService.requireLogin();
	UserService.me().then(function(user){
		$scope.user = user;

		var dashInfo = new DashboardFactory({id: $scope.user.id});
		dashInfo.$get(function(data) {
			$scope.otherLists = data.otherLists;
			$scope.mainList = data.mainList;
		});
	});


	$scope.changeView = function(listID) {
		var newList = new DashboardFactory({id: $scope.user.id, listid: listID});
		newList.$save(function(data) {
			$scope.mainList = data.lists;
		}, function(err) {
			console.log(err);
		});
	};

	$scope.createList = function(listname) {
		var createdList = new DashboardFactory(
			{
				name: listname,
				userid: $scope.user.id
			}
		);

		createdList.$save(function(success) {
			console.log(success);
		}, function(err) {
			console.log('can\'t create a new list', err);
		});

		location.reload();
	};

	$scope.logOut = function(){
           UserFactory.get({id: 'logout'}, function() {
                window.location.replace('http://localhost:3000');
           })
        }
}]);


// old code

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