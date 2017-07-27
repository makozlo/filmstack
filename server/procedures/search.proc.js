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

// if this is put into index.js it successfully logs the results to the terminal
// mdb.searchMulti({ query: 'dunkirk' }, (err, res) => {
//     console.log(res);
// });