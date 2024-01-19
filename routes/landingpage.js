const path = require('path');
const express = require('express');
const router = express.Router();

const rankingsController = require('../controller/rankingscontroller.js');
const servicesController = require('../controller/servicescontroller.js');


router.get('/rankings', rankingsController.getRankings);
router.get('/services', servicesController.getServices);


module.exports = router;
