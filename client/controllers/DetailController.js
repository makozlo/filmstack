app.controller('DetailController', ['$scope', '$http', 'DetailFactory', function($scope, $http, DetailFactory) {

	$scope.movie = DetailFactory.get({id: '315635'});

	$scope.getSpiderMan = function() {
		console.log($scope.movie);
    };

    $scope.getTitle = function() {
    	console.log($scope.movie.title);
    };
}]);