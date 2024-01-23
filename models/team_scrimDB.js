const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const teamSchema = new Schema({
   
   scrimname:{type:String,required:true},
   teamname:{type:String,required:true}

});

module.exports =mongoose.model('team_scrims',teamSchema);