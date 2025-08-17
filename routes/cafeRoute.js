const express = require('express')
const router = express.Router()
const cafeControllers = require('../controllers/cafeController')

const { cloudinary, multerSetup } = require('../config/Cloudinary')
const upload = multerSetup()

router.post('/new', upload.single("cafeImage"), cafeControllers.createCafe)
router.get('/', cafeControllers.allCafes)
router.get('/:id', cafeControllers.cafeDetails)
router.put('/:id', upload.single("cafeImage"), cafeControllers.updateCafe)
router.delete('/:id', cafeControllers.deleteCafe)

module.exports = router