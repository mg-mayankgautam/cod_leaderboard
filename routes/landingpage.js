const path = require('path');
const express = require('express');
const router = express.Router();

 const rankingsController = require('../controller/rankingscontroller.js');
const servicesController = require('../controller/servicescontroller.js');
const aboutController = require('../controller/aboutcontroller.js');
const shopController = require('../controller/shopcontroller.js');
const playerController = require('../controller/playercontroller.js');

router.get('/rankings', rankingsController.getRankings);
router.get('/services', servicesController.getServices);
router.get('/about', aboutController.getAbout);
router.get('/shop', shopController.getShop);
//router.get('/admin', adminController.getadmin);
router.get('/rankings/data', rankingsController.getplayerdata);


module.exports = router;
