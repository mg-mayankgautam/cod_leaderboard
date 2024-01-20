const rankingDB = require('../models/rankingDB')

module.exports.getRankings = async(req,res)=>{
    //res.send({ "name": "GeeksforGeeks" });
    res.render('ranking',{
        
  
     });
   // res.send('ranking)
   //res.send('some ranking data');
    console.log('inside get');

    const allRankings = await rankingDB.find({}).select({ "teamname":1, "rank": 1, "_id": 1});

    //console.log({allRankings})
    // res.send({allRankings});
}