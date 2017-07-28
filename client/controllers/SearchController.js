app.controller('SearchController', ['$scope', '$http', '$location', 'SearchFactory', 'SearchCacheService', function ($scope, $http, $location, SearchFactory, SearchCacheService) {
	$scope.results = SearchCacheService.getResults();
	var posterURL = "https://image.tmdb.org/t/p/w500";
	console.log
	$scope.poster = posterURL + $scope.results.poster_path;
}]);