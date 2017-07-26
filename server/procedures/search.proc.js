const mdb = require('moviedb')(process.env.TMDB_API_KEY);

exports.search = function(query) {
	return new Promise(function(fulfill, reject) {
		mdb.searchMulti({ query: query }, (err, res) => {
			if(err) {
				reject(err);
			} else {
				fulfill(res);
			}
		});
	});
};

