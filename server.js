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
app.use('/reviews', reviewRoute)



const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log("Listening on port " + port)
})

server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(` Port ${port} is already in use.`);
    } else {
        console.error(" Server error:", err.message);
    }
})

