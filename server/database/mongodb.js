var mongo = require('mongodb').MongoClient;

var db;
mongo.connect('mongodb://localhost:27017/mongoExample',
function(err, database) {
    if(err) {
        console.log(err);
    } else {
        db = database;
    }
});