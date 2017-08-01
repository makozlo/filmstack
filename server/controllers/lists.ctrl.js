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
<<<<<<< HEAD

    .delete(function(req, res) {
        return procedures.destroy(req.params.id).then(function() {
            res.sendStatus(204);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        })
    })

    router.get("/:id", function(req, res) {
    return procedures.read(req.params.id).then(function(success){
        res.send(success);
    }, function(err) {
        console.log(err);
        res.status(500).send(err);
    })
})
=======
>>>>>>> 92a5ccaf6730f4077582c3235d2fe0245122d009

module.exports = router;