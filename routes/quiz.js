const express = require('express')
const router = express.Router()

const Quiz = require('../models/quiz')

router.route('/').get((req,res)=>{
    Quiz.find()
    .then(data=>res.status(200).send(data))
    .catch(err=>console.log(err))
})

router.route('/add').post((req,res)=>{
    const question = req.body
    const newQuestion = new Quiz(question)
    newQuestion.save()
    .then(data=>res.status(201).send(data))
    .catch(err=>console.log(err))
})

router.route('/:id').get((req,res)=>{
    Quiz.findById(req.params.id)
    .then(data=>res.status(200).send(data))
    .catch(err=>console.log(err))
})

module.exports = router