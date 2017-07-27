app.controller('SplashController', ['$scope', '$http', 'SearchFactory', function($scope, $http, SearchFactory) {
	var searchQuery = {
		keyword: $scope.query
	};



	$scope.search = function() {
		// SearchFactory.save({query: $scope.query});
		// $http.post('http://localhost:3000/api/search', searchQuery);

		$http.post('http://localhost:3000/api/search', "The Lord of the Rings")
		.then(function(data) {
			console.log(data);
		}, function() {
			console.log('nope');
		});



	};
}]);




// $scope.search = function() {
// 		$http.post('http://localhost:3000/api/search', searchQuery)
// 		.then(function(data) {
// 			console.log(data);
// 		}, function() {
// 			console.log('nope');
// 		});