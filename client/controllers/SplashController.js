app.controller('SplashController', ['$scope', '$http', 'SearchFactory', '$location', '$rootScope',function ($scope, $http, SearchFactory,$location,$rootScope) {

	$scope.search = function () {
		$http.post('http://localhost:3000/api/search', { keyword: $scope.query })
			.then(function (data) {
				$rootScope.results = data.data.results;
				$location.path('/search-results');
				 console.log($rootScope.results);
			}, function () {
				console.log('yay');
			});
	};
	//console.log(SearchFactory.query());
}]);