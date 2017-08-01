var db = require("../config/db");

exports.addMovie = function(id, title, poster){
    return db.row('add_movie', [id, title, poster]);
};
exports.addMovieToList = function(movieID, listID){
    return db.row('add_to_movie_list', [movieID, listID]);
};
exports.read = function(id) {
    return db.rows('get_all_user_lists', [id]);
};
exports.read = function (userID, listID) {
    return db.row('get_single_list', [userID, listID]);
};
exports.remove = function (id) {
    return db.empty('delete_list', [id]);
};
