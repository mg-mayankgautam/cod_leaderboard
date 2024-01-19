const mongoose = require('mongoose');
const {mongo} = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const {Schema}=mongoose;


const rankingSchema = new Schema({
    teamname: {type:String,required:true,unique:true},
    rank: {type:Number,required:true, unique:true},

});

module.exports =mongoose.model('Ranks',rankingSchema);