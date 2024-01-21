const playerDB = require('../models/playerDB')


module.exports.addplayerdata = async(req, res) => {
    // console.log(req.body);
    const {  member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points } =req.body;

   // console.log("incoming playerdata", member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points);
     
    const player = await playerDB.findOne({member_name,scrimname,teamname});
    console.log(player);

    if(player){
        console.log('error player already exists');
        
        playerDB.updateOne(player, {match_wins, position_points, kills, damage, total_points})
          .then(()=>{
              console.log('updated player data')
              // res.render('admin');
              })
          .catch(err =>{console.log(err);});
        // return res.send(player)
    }
    else{
        console.log('player doesnt exist')
      
      let newPlayer = new playerDB ({member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points});

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

  //  console.log("players from DB",allPlayers)

    res.send(allPlayers);
}