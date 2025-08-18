const express = require('express')
const router = express.Router()
const drinkControllers = require('../controllers/drinkController')
const secureRoute = require('../middleware/secureRoute')
const { cafeOnly } = require('../middleware/validateRole')

const { cloudinary, multerSetup } = require('../config/Cloudinary')
const upload = multerSetup()

router.post('/new',
    // cafeOnly,
    // secureRoute,
    upload.single("drinkImage"),
    drinkControllers.createDrink)
router.get('/', drinkControllers.allDrinks)
router.get('/:id', drinkControllers.drinkDetails)
router.put('/:id',
    // cafeOnly,
    // secureRoute,
    upload.single("drinkImage"),
    drinkControllers.updateDrink)
router.delete('/:id',
    // cafeOnly,
    // secureRoute,
    drinkControllers.deleteDrink)

module.exports = router