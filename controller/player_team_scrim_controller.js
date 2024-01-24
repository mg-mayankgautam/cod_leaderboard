const playerDB = require('../models/player_team_scrimDB.js')
const scrimDB = require('../models/scrimDB.js')
const team_scrimDB = require('../models/team_scrimDB.js')

module.exports.addplayerdata = async(req, res) => {
    // console.log(req.body);
    const {  member_name, scrimname, teamname, kills, damage} =req.body;

   
    const player = await playerDB.findOne({member_name,scrimname,teamname});
    //console.log(player);


    if(player){
        console.log('error player already exists');

        // const dataFromTeam_scribDB = await team_scrimDB.findOne({scrimname,teamname}); 
       
        //console.log('dataFromTeam_scribDB',dataFromTeam_scribDB.team_total_kills);

        // const team_total_kills= Number(kills) + Number(dataFromTeam_scribDB.team_total_kills);
       
        // console.log('teamTotalkills',team_total_kills);

        
     

        playerDB.updateOne(player, {kills, damage})
          .then(()=>{
              console.log('updated player data')
             
              })
          .catch(err =>{console.log(err);});
        

        //  team_scrimDB.updateOne({scrimname, teamname},{team_total_kills})    //, team_total_points
        //  .then(()=>{
        //      console.log('updated player data')
       
        //      })
        //  .catch(err =>{console.log(err);});

    }
    else{
        console.log('player doesnt exist')
      
      let newPlayer = new playerDB ({member_name, scrimname, teamname, kills, damage});

      newPlayer.save()
       .then(()=>{
           console.log('player added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
      }
}








module.exports.getplayerdata = async(req, res) => {
 
    const allPlayers = await playerDB.find({});//.select({ "currentUser":1, "question": 1, "_id": 1});
   // console.log('yaha tak aa gayi request',allPlayers);
    const allScrims=await scrimDB.find({});
    //console.log("scrims from DB",allScrims)
    res.send(allPlayers);
    //res.send({allPlayers,allScrims});
}