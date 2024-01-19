
const userDB = require("../models/authenticationDB");
const rankingDB = require("../models/rankingDB");

module.exports.getAdmin = async(req,res)=>{
    //res.send({ "name": "GeeksforGeeks" });
    res.render('admin',{
        
  
     });
   // res.send('ranking)
       // console.log('inside get');
    //res.send('some ranking data');
}



module.exports.signUp = async(req,res)=>{
    
console.log(req.body)
const {username,password} = req.body;
   
    let user = await userDB.findOne({username});

    if (user)
      {return res.render('admin')}
//    //console.log(req.session);
    else{
      let newuser = new userDB ({username,password});
      newuser.save()
     .then(()=>{
        
        
//       //  console.log('user addes success');
       res.render('admin');
      })
      .catch(err =>{console.log(err);});}

}


module.exports.enterRank = async(req,res)=>{
    
  console.log(req.body)
  const {teamname,rank} = req.body;
     
      let team = await rankingDB.findOne({teamname});
  
      if (team){
          console.log('team exists')
          rankingDB.updateOne({rank})
          
          .then(()=>{
              console.log('updated team')
              res.render('admin');
              })
          .catch(err =>{console.log(err);});
      }

                //console.log(req.session);
      else{
          let newteam = new rankingDB ({teamname,rank});
          newteam.save()

          .then(()=>{
              console.log('team added success');
              res.render('admin');
              })
          .catch(err =>{console.log(err);});}
  
  }
