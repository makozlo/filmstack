app.factory('CastCrewFactory', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/cast-crew/:id', {id: '@id'});
}]); 