
const userDB = require("../models/authenticationDB");

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

    if (user){return res.render('admin')}
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

