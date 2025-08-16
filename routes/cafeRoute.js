const express = require('express')
const router = express.Router()
const cafeControllers = require('../controllers/cafeController')

router.post('/new', cafeControllers.createCafe)
router.get('/', cafeControllers.allCafes)
router.get('/:id', cafeControllers.cafeDetails)
router.put('/:id', cafeControllers.updateCafe)

module.exports = router