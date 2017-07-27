var express = require("express");
var procedures = require('../procedures/search.proc');
var router = express.Router();

router.route("/")
    .post(function (req, res) {
        return procedures.search(req.body.keyword).then(function (success) {
            console.log(req.body.keyword);
            res.send(success);
            console.log(success);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    });

module.exports = router;