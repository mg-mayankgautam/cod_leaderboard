const teamDB = require('../models/team_scrimDB')
// const player_team_scrimDB = require('../models/player_team_scrimDB')

module.exports.addTeamToScrim = async (req, res) => {
   
   
     console.log(req.body);
    const { scrimname, teamname }=req.body;
   const team = await teamDB.findOne({scrimname,teamname});
    const team_wins=0;
    const team_position_pts=0;
    const team_total_kills=0;
    const team_total_pts=0;
    /////////////////////////////////////////
    // const scrimname='pubgroung';
    // const teamname='dogs';
    
    // const team_temp= await teamDB.findOne({scrimname});
    // console.log('here',team_temp);
    ////////////////////////////////


     if(team){
        console.log('team from db',team);

       return res.redirect('/adminhome')
    }
    
     if(!team){
      //console.log(scrimname,teamname,team_wins,team_position_pts, team_total_kills, team_total_pts)
      console.log('team not found')
     }
    
    let newTeam = new teamDB ({scrimname,teamname,team_wins,team_position_pts, team_total_kills, team_total_pts});
    newTeam.save()
     .then(()=>{
         console.log('team added success');
         res.redirect('/adminhome');
     })
     .catch(err =>{console.log(err);});


}


module.exports.getTeams = async (req, res) => {

    const allTeams = await teamDB.find({});//.select({ "currentUser":1, "question": 1, "_id": 1});
   
  //  console.log("teams from DB",allTeams)
      res.send(allTeams)
}



module.exports.addTeamEntries=async (req, res) => {



  const {scrimname,teamname,team_wins,team_position_pts } = req.body;

  // const total_kills= await player_team_scrimDB.find({scrimname,teamname})
  // console.log(total_kills)
  

  teamDB.updateOne({scrimname,teamname},{team_wins, team_position_pts})
  .then(()=>{
    console.log('updated team data')
    // res.render('admin');
    })
  .catch(err =>{console.log(err);});


};