app.controller('SplashController', ['$scope', '$http', 'SearchFactory', function ($scope, $http, SearchFactory) {

	$scope.search = function () {
		$http.post('http://localhost:3000/api/search', { keyword: $scope.query })
			.then(function (data) {
				console.log(data);
			}, function () {
				console.log('yay');
			});

		console.log($scope.query);

	};
}]);