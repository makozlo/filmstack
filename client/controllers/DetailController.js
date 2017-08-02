app.controller('DetailController', ['$scope', '$http', 'DetailFactory', 'CastCrewFactory', 'ListFactory', function ($scope, $http, DetailFactory, CastCrewFactory, ListFactory) {
	
	function getMovieID() {
		array = location.pathname.split('/');
		var movieID = array[array.length - 1];
		return movieID;
	}

	var movieDbID = getMovieID();

	$scope.movie = DetailFactory.get({ id: movieDbID });
	console.log($scope.movie);
	$scope.castCrew = CastCrewFactory.get({ id: movieDbID });
	$scope.poster = 'https://image.tmdb.org/t/p/w500' + $scope.movie.poster_path;

	$scope.lists = ListFactory.query();

	console.log($scope.lists);
	$scope.addToList = function(movieID, title, poster_path) {

		var movie = new ListFactory({
			movieID: movieID,
			title: title,
			poster: poster_path,
			listID: 3 // fix - change to be set to list to be added to
		});

		movie.$save(function(success) {
			console.log(success);
		}, function(err) {
			console.log('nope');
			console.log(err);
		});
	};
}]);