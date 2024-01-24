// const rankingDB = require('../models/rankingDB')
const playerDB = require('../models/player_team_scrimDB')
const scrimDB = require('../models/scrimDB')
const teamDB = require('../models/team_scrimDB')


 module.exports.getRankings = async(req,res)=>{
//     //res.send({ "name": "GeeksforGeeks" });
    res.render('ranking',{
        
  
     });}


 module.exports.getdata= async(req,res)=>{

    const allPlayers = await playerDB.find({});
    const allScrims=await scrimDB.find({});
    const allTeams = await teamDB.find({});
    // console.log("scrims from DB",allScrims)
    
     res.send({allScrims, allTeams ,allPlayers});
 };    
