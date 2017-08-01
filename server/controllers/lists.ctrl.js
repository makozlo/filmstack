<<<<<<< HEAD
var express = require("express");
var passport = require('passport');
var procedures = require('../procedures/lists.proc');
var authMw = require('../middleware/auth.mw');
var utils = require('../config/utils');

var router = express.Router();

router.get('*', authMw.isLoggedIn);

router.get("/", function(req, res) {
    return procedures.all().then(function(success){
        res.send(success);
    }, function(err) {
        console.log(err);
        res.status(500).send(err);
    })
})

.post(function (req, res) {
        return procedures.write(req.body.name, req.body.userid)
        .then(function (data) {
            res.status(201).send(data);
        }, function (err) {
            console.log(err);
            res.sendStatus(500);
        })
    })
=======
var express = require('express');
var procedures = ('../procedures/lists.proc');
var router =  express.Router();

<<<<<<< HEAD
router.route("/:id")
    .get(function (req, res) {
        return procedures.getMovieInfo(req.params.id).then(function (success) {
            res.send(success);
            console.log(success);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    });
=======
>>>>>>> 82ddf8a31e4dab2182d00849831f2b74d8a9e5db
>>>>>>> dev

module.exports = router;