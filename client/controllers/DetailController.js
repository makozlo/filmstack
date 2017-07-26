app.controller('DetailController', ['$scope', '$http', 'DetailFactory', function($scope, $http, DetailFactory) {

	$scope.movie = DetailFactory.get({id: '315635'});
	
	$scope.poster = $scope.movie.poster;

	$scope.getSpiderMan = function() {
		console.log($scope.movie);
    };

    $scope.getTitle = function() {
    	console.log($scope.movie.title);
    	console.log($scope.movie);
	console.log($scope.movie.title);
	console.log($scope.movie.homepage);
	console.log($scope.movie.poster_path);
    };

    $scope.getPoster = function() {
    	console.log('https://image.tmdb.org/t/p/w500' + $scope.movie.poster_path);
    };
}]);