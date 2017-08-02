var express = require("express");
var passport = require('passport');
var procedures = require('../procedures/lists.proc');
var authMw = require('../middleware/auth.mw');
var utils = require('../config/utils');

var router = express.Router();

router.get('*', authMw.isLoggedIn);

router.route("/") 
    .get(function (req, res) {
        return procedures.read(req.params.id).then(function (success) {
            console.log(success);
            res.send(success);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    })

    .delete(function (req, res) {
        return procedures.remove(req.params.id).then(function () {
            res.sendStatus(204);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    })

    .post(function (req, res) {
        var response = {};
        return procedures.addMovie(req.body.movieID, req.body.title, req.body.poster, req.body.listID).then(function (success) {
            response.id = success;
            console.log(success);
        }).catch(function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    });

router.get("/:id", function (req, res) {
    return procedures.getSingleList(req.params.id, req.body.listid).then(function (success) {
        res.send(success);
    }, function (err) {
        console.log(err);
        res.status(500).send(err);
    });
});

module.exports = router;