const express = require("express");
	router    = express.Router();

	router.use('/college', require('../college'));
	router.use('/faculty', require('../faculty'));
	router.use('/sub-admin', require('../subAdmin'));
	router.use('/admin', require('../admin'));


	
	module.exports = router;