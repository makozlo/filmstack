app.controller('SplashController', ['$scope', '$resource', '$http', 'SearchFactory', 'SearchCacheService', '$location', 'UserService', 'UserFactory', 'CastCrewFactory', '$routeParams', function ($scope, $resource, $http, SearchFactory, SearchCacheService, $location, UserService, UserFactory, CastCrewFactory, $routeParams) {


	$scope.search = function () {
		$scope.results = {};

		var movies = new SearchFactory({ query: $scope.query });

		movies.$save(function (data) {
			$scope.results = data.results;
			SearchCacheService.setResults(data.results);
			$location.path('/search-results');
		});
	};

	$scope.createUser = function () {
		var user = new UserFactory({
			username: $scope.username,
			email: $scope.email,
			password: $scope.password
		}).$save(function (data) {
			UserService.login($scope.username, $scope.password).then(function () {
				redirect();
			}, function (err) {
				console.log(err);
			});
		})
	}

	$scope.login = function () {

		UserService.me().then(function (data) {
			console.log(data);
			// redirect();
		});

		UserService.login($scope.username, $scope.password).then(function () {
			// redirect();
			// $location.path('/dashboard');
			window.location.replace('http://localhost:3000/dashboard');
		}, function (err) {
			console.log(err);
		});
	};
	
	function logOut() {
		UserService.logout();
		redirect();
	}

	function redirect() {
		var dest = $location.search().p;
		if (!dest) {
			dest = '/dashboard/';
		}
		$location.path(dest).search('p', null).replace();
	}
}]);




// monique's stuff
// app.controller('SplashController', ['$scope', '$http', 'SearchFactory', '$location', '$rootScope',function ($scope, $http, SearchFactory,$location,$rootScope) {

// 	$scope.search = function () {
// 		$http.post('http://localhost:3000/api/search', { keyword: $scope.query })
// 			.then(function (data) {
// 				$rootScope.results = data.data.results;
// 				$location.path('/search-results');
// 				 console.log($rootScope.results);
// 			}, function () {
// 				console.log('yay');
// 			});
// 	};
// 	// console.log(SearchFactory.query());
// }]);