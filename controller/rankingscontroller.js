// const rankingDB = require('../models/rankingDB')
const playerDB = require('../models/playerDB')
const scrimDB = require('../models/scrimDB')


 module.exports.getRankings = async(req,res)=>{
//     //res.send({ "name": "GeeksforGeeks" });
    res.render('ranking',{
        
  
     });}


 module.exports.getplayerdata= async(req,res)=>{

    const allPlayers = await playerDB.find({});//.select({ "currentUser":1, "question": 1, "_id": 1});
    // console.log('yaha tak aa gayi request',allPlayers);
     const allScrims=await scrimDB.find({});
    // console.log("scrims from DB",allScrims)
    
     res.send({allPlayers,allScrims});
 };    
