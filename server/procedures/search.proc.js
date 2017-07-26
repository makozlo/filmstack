const mdb = require('moviedb')(process.env.TMDB_API_KEY);

exports.getMovieInfo = function(movie) {
	return new Promise(function(fulfill, reject) {
		mdb.searchMovie({ query: movie }, (err, res) => {
			if(err) {
				reject(err);
			} else {
				fulfill(res);
			}
		});
	});
};

