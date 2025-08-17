const express = require('express')
const router = express.Router()
const drinkControllers = require('../controllers/drinkController')

const {cloudinary, multerSetup} = require('../config/Cloudinary')
const upload = multerSetup()

router.post('/new',upload.single("image"), drinkControllers.createDrink)
router.get('/', drinkControllers.allDrinks)
router.get('/:id', drinkControllers.drinkDetails)
router.put('/:id',upload.single("image"), drinkControllers.updateDrink)
router.delete('/:id', drinkControllers.deleteDrink)

module.exports = router