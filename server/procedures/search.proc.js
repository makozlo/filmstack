const mdb = require('moviedb')(process.env.TMDB_API_KEY);

exports.search = function(movie){
    return mdb.searchMovie({ query: movie }, (err, res) => {
    console.log(res);
    res.send(movie);
});
}