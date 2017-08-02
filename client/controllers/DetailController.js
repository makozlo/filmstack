app.controller('DetailController', ['$scope', '$http', 'DetailFactory', 'CastCrewFactory', 'ListFactory','UserService', function ($scope, $http, DetailFactory, CastCrewFactory, ListFactory, UserService) {
	
	function getMovieID() {
		array = location.pathname.split('/');
		var movieID = array[array.length - 1];
		return movieID;
	}
	var movieDbID = getMovieID();

	$scope.movie = DetailFactory.get({ id: movieDbID });
	$scope.castCrew = CastCrewFactory.get({ id: movieDbID });
	$scope.poster = 'https://image.tmdb.org/t/p/w500' + $scope.movie.poster_path;

	UserService.me().then(function(user){
	$scope.user = user;
		var lists = new ListFactory({id: $scope.user.id});
		lists.$save(function(data) {
			console.log(data);
			$scope.lists = data.lists;
		});
	});

	$scope.lists = ListFactory.query();
	console.log($scope.lists);

	$scope.addToList = function(movieID, title, poster_path, listID) {
		var movie = new ListFactory({
			movieID: movieID,
			title: title,
			poster: poster_path,
			listID: listID 
		});

		movie.$save(function(success) {
			console.log(success);
		}, function(err) {
			console.log('nope');
			console.log(err);
		});
	};
}]);