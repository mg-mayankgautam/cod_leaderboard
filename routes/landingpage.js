const path = require('path');
const express = require('express');
const router = express.Router();

const rankingsController = require('../controller/rankingscontroller.js');

router.get('/rankings', rankingsController.getRankings);

module.exports = router;
