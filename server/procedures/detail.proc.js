const mdb = require("moviedb")(process.env.TMDB_API_KEY);

exports.getMovieInfo = function(id) {
    mdb.movieInfo({ id: id }, (err, res) => {
    // console.log(res);
});
};