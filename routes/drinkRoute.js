const express = require('express')
const router = express.Router()
const drinkControllers = require('../controllers/drinkController')

router.post('/new', drinkControllers.createDrink)

module.exports = router