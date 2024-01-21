const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const playerSchema = new Schema({
    member_name: {type:String,required:true},
    scrimname: {type:String,required:true},
    teamname: {type:String,required:true},
    match_wins: {type:Number,required:true},
    position_points: {type:Number,required:true},
    kills: {type:Number,required:true},
    damage: {type:Number,required:true},
    total_points: {type:Number,required:true},
   
});

module.exports =mongoose.model('Players',playerSchema);