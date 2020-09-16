const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Quiz = new Schema({
    id:Number,
    question:String,
    answerIndex:Number,
    choices:Array
},{
    timestamps:true
})

module.exports = mongoose.model('Quiz',Quiz)