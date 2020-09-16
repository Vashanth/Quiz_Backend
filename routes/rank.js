const express = require('express')
const router = express.Router()

const Users = require('../models/users')

router.route('/').get((req,res)=>{
    Users.find()
    .then(data=>res.status(200).send(data))
    .catch(err=>res.status(400).send(err))
})

module.exports = router