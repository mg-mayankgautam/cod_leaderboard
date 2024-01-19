const path = require('path');
const express = require('express');
const router = express.Router();


const adminController = require('../controller/admincontroller');


router.get('/', adminController.getAdmin);
router.post('/signup',adminController.signUp)

module.exports = router;
