const scrimDB = require('../models/scrimDB')

module.exports.addScrim = (req, res) => {
  //  console.log(req.body);
    const { scrimshortform, scrimname }=req.body;
    console.log(scrimshortform,scrimname);
    //const allQuestions = await questionDB.find({}).select({ "currentUser":1, "question": 1, "_id": 1});
    
    let newScrim = new scrimDB ({scrimshortform,scrimname});
    newScrim.save()
     .then(()=>{
         console.log('scrimm added success');
         res.redirect('/adminhome');
     })
     .catch(err =>{console.log(err);});


}