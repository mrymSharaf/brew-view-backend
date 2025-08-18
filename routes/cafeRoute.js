const express = require('express')
const router = express.Router()
const cafeControllers = require('../controllers/cafeController')
const secureRoute = require('../middleware/secureRoute')

const { cloudinary, multerSetup } = require('../config/Cloudinary')
const upload = multerSetup()

router.post('/new', secureRoute, upload.single("cafeImage"), cafeControllers.createCafe)
router.get('/', cafeControllers.allCafes)
router.get('/:id', cafeControllers.cafeDetails)
router.put('/:id', secureRoute, upload.single("cafeImage"), cafeControllers.updateCafe)
router.delete('/:id', secureRoute, cafeControllers.deleteCafe)

module.exports = router