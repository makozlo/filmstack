var express = require("express");
var procedures = require("../procedures/dashboard.proc");
var router = express.Router();

router.route('/:id')
    .get(function (req, res) {
        var response = {};
        return procedures.showMainList(req.params.id, "Main List").then(function (success) {
            response.mainList = success;
        }).then(procedures.showAllLists.bind(null, req.params.id)).then(function (success) {
            response.otherLists = success;
            res.send(response);
        }).catch(function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    })

    .post(function (req, res) {
        return procedures.createList(req.body.name, req.param.id).then(function (success) {
            res.send(success);
            console.log(success);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    })


module.exports = router;