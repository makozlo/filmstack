var db = require("../config/db");

exports.all = function() {
    return db.rows("getUsers", []);
};

exports.read = function(id){
    return db.row('getSingleUser', [id]);
};

exports.readByEmail = function(email){
    return db.row('getUserByEmail', [email]);
};

exports.write = function(first, last, email, password){
    return db.row('createUser', [first, last, email, password]);
};

exports.updatePassword = function(id, hash){
    return db.empty('updatePassword', [id, hash]);
};

exports.updateEmail = function(id,email){
    return db.empty('updateEmail', [id, email]);
};

exports.deleteUser = function(id){
    return db.empty('deleteUser', [id]);
};