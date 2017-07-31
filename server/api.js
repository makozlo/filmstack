var express = require("express");
var detail = require('./controllers/detail.ctrl');
var search = require('./controllers/search.ctrl');	
var dashboard = require('./controllers/dashboard.ctrl');
var user = require('./controllers/users.ctrl');
var castCrew = require('./controllers/castCrew.ctrl');
var router = express.Router();

//AT THIS POINT THE URL IS HTTP://LOCALHOST:3000/API    
router.use('/detail', detail);
router.use('/search', search);
router.use('/dashboard', dashboard);
router.use('/users', user);
router.use('/cast-crew', castCrew);

module.exports = router;