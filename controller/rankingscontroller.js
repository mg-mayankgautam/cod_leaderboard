// const rankingDB = require('../models/rankingDB')
const playerDB = require('../models/player_team_scrimDB')
const scrimDB = require('../models/scrimDB')
const teamDB = require('../models/team_scrimDB')

module.exports.getRankings = async(req,res)=>{
    res.render('ranking',{
  
     });
    }


module.exports.getscrimdata= async(req,res)=>{

    // const allPlayers = await playerDB.find({});
    const allScrims=await scrimDB.find({});
    // const allTeams = await teamDB.find({});
    // console.log("scrims from DB",allScrims)
    
     res.send(allScrims);
};    



module.exports.getteamsdata= async(req,res)=>{
    const scrimname = req.query.scrimname;
    const allTeams = await teamDB.find({scrimname});
    // console.log("from DB",allScrims)
    
     res.send(allTeams);
};    


module.exports.getplayersdata= async(req,res)=>{
    const scrimname = req.query.scrimname;
    const allPlayers = await playerDB.find({scrimname});
      // console.log("from DB",allScrims)
    
     res.send(allPlayers);
};