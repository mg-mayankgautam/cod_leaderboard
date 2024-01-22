const path = require('path');
const express = require('express');
const router = express.Router();


const adminHomeController = require('../controller/adminHomecontroller.js');
const scrimController = require('../controller/scrimcontroller.js');
const teamController = require('../controller/teamcontroller.js');
const playerController = require('../controller/playercontroller.js');
const teamPlayercontroller = require('../controller/teamPlayercontroller.js');


router.get('/',adminHomeController.loadAdminHome);
router.get('/logout',adminHomeController.logout);
router.post('/addscrim',scrimController.addScrim);
router.get('/getscrims',scrimController.getScrims);
router.post('/addteam',teamController.addTeam);
router.get('/getteams',teamController.getTeams);
router.post('/addplayerdata',playerController.addplayerdata);
router.get('/getplayerdata',playerController.getplayerdata);
router.post('/addteamplayer', teamPlayercontroller.addteamplayer);

module.exports = router;