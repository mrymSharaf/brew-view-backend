const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const logger = require('morgan')
const cors = require('cors')

const cafeRoute = require('./routes/cafeRoute')
const drinkRoute = require('./routes/drinkRoute')


const reviewRoute = require('./routes/reviewRoute')

const app = express()
dotenv.config()


mongoose.connect(process.env.DB_URL)
mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB')
})

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())
app.use(logger('dev'))

app.use('/cafes', cafeRoute)
app.use('/drinks', drinkRoute)


app.use('/reviews',reviewRoute)



app.listen(3000, () => {
    console.log('App is listening!')
})