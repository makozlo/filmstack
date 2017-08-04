app.controller('SearchController', ['$scope', '$http', '$location', 'SearchFactory', 'SearchCacheService', 'UserService','SearchFactory', 'SearchCacheService', '$location', function ($scope, $http, $location, SearchFactory, SearchCacheService, UserService, SearchFactory, SearchCacheService, $location) {
	$scope.results = SearchCacheService.getResults();
	console.log($scope.results);
	$scope.goToMovie = function(id) {
		var path = '/detail/' + id;
		$location.path(path);
	};
	$scope.search = function () {
		
		$scope.results = {};

		var movies = new SearchFactory({ query: $scope.query });

		movies.$save(function (data) {
			$scope.results = data.results;
			SearchCacheService.setResults(data.results);
			$location.path('/search-results');
		});
	};

}]);