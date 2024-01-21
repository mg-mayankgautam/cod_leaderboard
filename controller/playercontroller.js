const playerDB = require('../models/playerDB')


module.exports.addplayerdata = async(req, res) => {
    console.log(req.body);
    const { member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points } =req.body;

     //const player = await playerDB.findOne({member_name, scrimname, teamname});
    
    // if(player){
    //     console.log('error player already exists', player);
        
    //     // return res.send(player)
    // }
    // if(!player){
    //     console.log('player doesnt exist')
    //   }
      
      let newPlayer = new playerDB ({member_name, scrimname, teamname, match_wins, position_points, kills, damage, total_points});

      newPlayer.save()
       .then(()=>{
           console.log('player added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
    
}