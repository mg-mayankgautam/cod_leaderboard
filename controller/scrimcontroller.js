const scrimDB = require('../models/scrimDB')

module.exports.addScrim = async(req, res) => {
  //  console.log(req.body);
    const { scrimshortform, scrimname }=req.body;
 //   console.log(scrimshortform,scrimname);//working till here
    //const allQuestions = await questionDB.find({}).select({ "currentUser":1, "question": 1, "_id": 1});
    
    const scrim = await scrimDB.findOne({scrimname});

    if(scrim){
      return res.redirect('/adminhome')
    }
    
    if(!scrim){
      console.log('scrim doesnt exists', scrim)
    }
    
    let newScrim = new scrimDB ({scrimshortform,scrimname});
    newScrim.save()
     .then(()=>{
         console.log('scrimm added success');
         res.redirect('/adminhome');
     })
     .catch(err =>{console.log(err);});


}


module.exports.getScrims = async (req, res) => {

    const allScrims = await scrimDB.find({});//.select({ "currentUser":1, "question": 1, "_id": 1});

  //  console.log("scrims from DB",allScrims)

    res.send(allScrims);
}