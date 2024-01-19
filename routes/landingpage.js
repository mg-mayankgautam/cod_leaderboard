const path = require('path');
const express = require('express');
const router = express.Router();

const rankingsController = require('../controller/rankingscontroller.js');
const servicesController = require('../controller/servicescontroller.js');
const aboutController = require('../controller/aboutcontroller.js');
const shopController = require('../controller/shopcontroller.js');


router.get('/rankings', rankingsController.getRankings);
router.get('/services', servicesController.getServices);
router.get('/about', aboutController.getAbout);
router.get('/shop', shopController.getShop);

module.exports = router;
