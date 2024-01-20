const path = require('path');
const express = require('express');
const router = express.Router();


const adminHomeController = require('../controller/adminHomecontroller.js');
const scrimController = require('../controller/scrimcontroller.js');



router.get('/',adminHomeController.loadAdminHome);
router.get('/logout',adminHomeController.logout);
router.post('/addscrim',scrimController.addScrim);

module.exports = router;