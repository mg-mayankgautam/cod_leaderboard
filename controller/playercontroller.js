const playerDB = require('../models/playerDB')

module.exports.addplayer = async(req, res) => {
    console.log(req.body);
    const { teamname, member_name} =req.body;
     
    const player = await playerDB.findOne({member_name});
    // console.log(player);

    if(player){
       console.log('error player already exists');
    
        return res.redirect('/adminhome');
     }
    
        //console.log('player doesnt exist')
      let newPlayer = new playerDB ({teamname, member_name});

      newPlayer.save()
       .then(()=>{
           console.log('player added success');
            res.redirect('/adminhome');
       })
       .catch(err =>{console.log(err);});
}


module.exports.getplayer = async (req, res) =>{
    const allPlayers=await playerDB.find({});

    res.send(allPlayers);
}