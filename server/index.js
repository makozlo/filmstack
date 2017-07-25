var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongo = require('mongodb').MongoClient;
var api = require('./api');
var cookieParser = require('cookie-parser');
var configurePassport = require('./config/passport');
var userProc = require('./procedure/users.proc');
var utils = require('./config/utils');

var db;
mongo.connect('mongodb://localhost:27017/mongoExample',
function(err, database) {
    if(err) {
        console.log(err);
    } else {
        db = database;
    }
});

var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(cookieParser());
configurePassport(app);

app.get('/', function(req, res) {
    res.send(console.log('Hello World!'));
});




app.listen(3000);
console.log('Server listening on port 3000');