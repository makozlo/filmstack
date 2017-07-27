var express = require("express");
//var passport = require('passport');
var procedures = require('../procedures/search.proc');


var router = express.Router();


router.route("/")
    .get(function(req, res) {
    // return procedures.search("The Tree of Life").then(function(success) {
    return procedures.search(req.body.query).then(function(success) {
        res.send(success);
    }, function(err) {
        console.log(err);
        res.status(500).send(err);
    });
});

module.exports = router;