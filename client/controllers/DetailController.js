app.controller('DetailController', ['$scope', '$http', 'DetailFactory', 'CastCrewFactory', function ($scope, $http, DetailFactory, CastCrewFactory) {
	
	function getMovieID() {
		array = location.pathname.split('/');
		var movieID = array[array.length-1];
		return movieID;
	}

	var movieDbID = getMovieID();

	$scope.movie = DetailFactory.get({ id: movieDbID });

	$scope.castCrew = CastCrewFactory.get({ id: movieDbID });

	$scope.poster = 'https://image.tmdb.org/t/p/w500' + $scope.movie.poster_path;
}]);