const express = require('express')
const router = express.Router()
const cafeControllers = require('../controllers/cafeController')

router.post('/new', cafeControllers.createCafe)
router.get('/' , cafeControllers.allCafes)

module.exports = router