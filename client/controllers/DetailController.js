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
			$scope.lists = data.lists;
			// console.log($scope.lists[0]);
		}, function(err) {
			console.log('err', err);
		});
	});

	// var userLists = new ListFactory({id: $scope.user.id});
	// $scope.userLists = ListFactory.query();
	$scope.userLists = ListFactory.query(function(success) {
		console.log(success);
	}, function(err) {
		console.log(err);
	});
	// console.log($scope.userLists);

	$scope.addToList = function(movieID, title, poster_path, listID, userID) {
		var movie = new ListFactory({
			movieID: movieID,
			title: title,
			poster: poster_path,
			listID: listID,
			userID: userID 
		});
		

		movie.$save(function(success) {
			console.log(success);
		}, function(err) {			
			console.log(err);
		});
	};

	$scope.logOut = function(){
           UserFactory.get({id: 'logout'}, function() {
                window.location.replace('http://localhost:3000');
           })
        }
}]);