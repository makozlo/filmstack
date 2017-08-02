var db = require("../config/db");

exports.addMovie = function(id, title, poster, listID){
    return db.empty('add_movie', [id, title, poster, listID]);
};
// exports.addMovieToList = function(movieID, listID){
//     return db.empty('add_to_movie_lists', [movieID, listID]);
// };

exports.addToSpecificList = function(movieID, title, poster_path, listID, listName) {
    return db.empty('add_movie_to_specific_list', [movieID, title, poster_path, listID, listName]);
}

exports.read = function(id) {
    return db.rows('get_all_user_lists', [id]);
};
exports.getSingleList = function (userID, listID) {
    return db.row('get_single_list', [userID, listID]);
};
exports.remove = function (id) {
    return db.empty('delete_list', [id]);
};
