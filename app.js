const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true })

app.use('/quiz',require('./routes/quiz'))
app.use('/scores',require('./routes/rank'))

app.listen(PORT || 5000 ,()=>{
    console.log("Server running on port " + PORT)
})
