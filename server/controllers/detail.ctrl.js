var express = require("express");
var procedures = require("../procedures/detail.proc");

var router = express.Router();

router.route("/:id")
    .get(function(req, res) {
        // return procedures.getMovieInfo(req.params.id).then(function(sucess) {
        return procedures.getMovieInfo(315635).then(function(sucess) {
            res.send(success);
            console.log(success);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        });
    });

module.exports = router;