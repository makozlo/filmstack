app.controller('SplashController', ['$scope', '$resource', '$http', 'SearchFactory', '$location', function ($scope, $resource, $http, SearchFactory, $location) {

	$scope.search = function () {
		// $http.post('http://localhost:3000/api/search', { keyword: $scope.query })
		// 	.then(function (data) {
		// 		$scope.results = data.data.results;
		// 		$scope.firstResultTitle = data.data.results[0].title;
		// 	}, function () {
		// 		console.log('nope');
		// 	});

		$scope.results = $resource('http://localhost:3000/api/search/:query',{query: $scope.query});			
		console.log($scope.results);
		$location.path('/search-results');
	};
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