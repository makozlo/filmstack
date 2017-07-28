var express = require("express");
var detail = require('./controllers/detail.ctrl');
var search = require('./controllers/search.ctrl');	
var dashboard = require('./controllers/dashboard.ctrl');
var router = express.Router();
//AT THIS POINT THE URL IS HTTP://LOCALHOST:3000/API    

// router.use('/detail/:id', detail);
router.use('/detail', detail);
router.use('/search', search);
router.use('/dashboard', dashboard);
// router.use('/list/:id', list);

module.exports = router;