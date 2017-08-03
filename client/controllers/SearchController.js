app.controller('SearchController', ['$scope', '$http', '$location', 'SearchFactory', 'SearchCacheService', 'UserService', function ($scope, $http, $location, SearchFactory, SearchCacheService,UserService) {
	$scope.results = SearchCacheService.getResults();
	console.log($scope.results);
	$scope.goToMovie = function(id) {
		var path = '/detail/' + id;
		$location.path(path);
	};

}]);