var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var api = require('./api');
var cookieParser = require('cookie-parser');
require("dotenv").load();

var configurePassport = require('./config/passport');
var userProc = require('./procedure/users.proc');
var utils = require('./config/utils');
const mdb = require('moviedb')(process.env.TMDB_API_KEY);

var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(cookieParser());
configurePassport(app);
app.use("/api", api);

app.get('/', function(req, res) {
    res.send(console.log('Hello World!'));
});

app.listen(3000);
console.log('Server listening on port 3000');