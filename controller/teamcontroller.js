const teamDB = require('../models/teamDB')

module.exports.addTeam = async (req, res) => {
   
   
     console.log(req.body);
    const { scrimname, teamname }=req.body;
    const team = await teamDB.findOne({scrimname,teamname});

    /////////////////////////////////////////
    // const scrimname='pubgroung';
    // const teamname='dogs';
    
    // const team_temp= await teamDB.findOne({scrimname});
    // console.log('here',team_temp);
    ////////////////////////////////


    if(team){
        console.log('team exists');

      return res.redirect('/adminhome')
    }
    
    if(!team){
      console.log('team doesnt exists', team)
    }
    
    let newTeam = new teamDB ({scrimname,teamname});
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
