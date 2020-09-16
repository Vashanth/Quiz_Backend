const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rank = new Schema({
    username:String,
    score:Number
},{
    timestamps:true
})

module.exports = mongoose.model('Rank',Rank)