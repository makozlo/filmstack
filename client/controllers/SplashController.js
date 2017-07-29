app.controller('SplashController', ['$scope', '$resource', '$http', 'SearchFactory', 'SearchCacheService', '$location', 'UserService', 'User', '$routeParams', function ($scope, $resource, $http, SearchFactory, SearchCacheService, $location, UserService, User, $routeParams) {


	$scope.search = function () {
		$scope.results = {};

		var movies = new SearchFactory({ query: $scope.query });

		movies.$save(function (data) {
			$scope.results = data.results;
			SearchCacheService.setResults(data.results);
			$location.path('/search-results');
		});

		
		// $scope.results = SearchFactory.save({query: $scope.query});
		// console.log($scope.results);
		// $http.post('http://localhost:3000/api/search', { keyword: $scope.query })
		// 	.then(function (data) {
		// 		$scope.results = data.data.results[0];

		// 		$scope.firstResultTitle = data.data.results[0].title;
		// 		console.log($scope.results);
		// 		console.log($scope.firstResultTitle);
		// 		console.log(data.data);
		// 	}, function () {
		// 		console.log('nope');
		// 	});
		// .then(function(data) {
		// 	$location.path('/search-results');
		// });

	};

	$scope.createUser = function () {
			var user = new User({
				username: $scope.username,
				password: $scope.password
			}).$save(function () {
				window.location.replace('http://localhost:3000/dashboard/' + $routeParams.id);
			})
		}

		$scope.login = function () {

			UserService.me().then(function () {
				redirect();
			});

			UserService.login($scope.username, $scope.password).then(function () {
				redirect();
			}, function (err) {
				console.log(err);
			});
		};

		function redirect() {
			var dest = $location.search().p;
			if (!dest) {
				dest = '/dashboard/' + $routeParams.id;
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