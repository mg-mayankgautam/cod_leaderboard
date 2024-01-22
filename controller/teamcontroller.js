const teamDB = require('../models/teamDB');

module.exports.addteam = async(req, res) => {
    console.log(req.body);
    const { teamname, teamshortform} =req.body;

   // console.log("incoming playerdata", member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points);
     
    const team = await teamDB.findOne({teamname});
    // console.log(player);

    if(team){
       console.log('error team already exists');
        
    //     // playerDB.updateOne(player, {match_wins, position_points, kills, damage, total_points})
    //     //   .then(()=>{
    //     //       console.log('updated player data')
    //     //       // res.render('admin');
    //     //       })
    //     //   .catch(err =>{console.log(err);});
    return res.redirect('/adminhome');
     }
    
        //console.log('player doesnt exist')
      
      let newTeam = new teamDB ({teamname, teamshortform});

      newTeam.save()
       .then(()=>{
           console.log('team added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
      
}


module.exports.getteam = async(req, res) => {

    const allTeams=await teamDB.find({});
    // const uniqueTeams = await teamDB.distinct("teamname")
    
    // console.log("all teamplayers",allTeamPlayers,"unique teams", uniqueTeams);

    res.send(allTeams);
}
