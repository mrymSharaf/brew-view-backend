const express = require('express')
const router = express.Router()
const drinkControllers = require('../controllers/drinkController')

router.post('/new', drinkControllers.createDrink)
router.get('/', drinkControllers.allDrinks)
router.get('/:id', drinkControllers.drinkDetails)
router.put('/:id', drinkControllers.updateDrink)
router.delete('/:id', drinkControllers.deleteDrink)

module.exports = router