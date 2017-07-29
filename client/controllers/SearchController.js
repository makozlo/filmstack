app.controller('SearchController', ['$scope', '$http', '$location', 'SearchFactory', 'SearchCacheService', function ($scope, $http, $location, SearchFactory, SearchCacheService) {
	$scope.results = SearchCacheService.getResults();
	console.log($scope.results);
	$scope.goToMovie = function(id) {
		var path = '/detail/' + id;
		$location.path(path);
	};

}]);