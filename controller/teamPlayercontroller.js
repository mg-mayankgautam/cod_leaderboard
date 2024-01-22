const teamPlayerDB = require('../models/teamPlayerDB');

module.exports.addteamplayer = async(req, res) => {
    console.log(req.body);
    const { teamname, teamshortform, member_name } =req.body;

   // console.log("incoming playerdata", member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points);
     
    const team_player = await teamPlayerDB.findOne({teamname, teamshortform});
    // console.log(player);

    if(team_player){
        console.log('error player already exists');
        
        // playerDB.updateOne(player, {match_wins, position_points, kills, damage, total_points})
        //   .then(()=>{
        //       console.log('updated player data')
        //       // res.render('admin');
        //       })
        //   .catch(err =>{console.log(err);});
        // // return res.send(player)
    }
    else{
        console.log('player doesnt exist')
      
      let newTeamPlayer = new teamPlayerDB ({teamname, teamshortform, member_name});

      newTeamPlayer.save()
       .then(()=>{
           console.log('player added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
      }
}