const express = require('express')
const router = express.Router()
const cafeControllers = require('../controllers/cafeController')
const secureRoute = require('../middleware/secureRoute')
const { cafeOnly } = require('../middleware/validateRole')

const { cloudinary, multerSetup } = require('../config/Cloudinary')
const upload = multerSetup()

router.post('/new',
    // cafeOnly,
    // secureRoute,
    upload.single("cafeImage"),
    cafeControllers.createCafe)
router.get('/', cafeControllers.allCafes)
router.get('/:id', cafeControllers.cafeDetails)
router.put('/:id',
    // cafeOnly,
    // secureRoute,
    upload.single("cafeImage"),
    cafeControllers.updateCafe)
router.delete('/:id',
    // cafeOnly,
    // secureRoute,
    cafeControllers.deleteCafe)

module.exports = router