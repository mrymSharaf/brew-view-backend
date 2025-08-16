const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')


router.post('/new',reviewController.createReview)
router.get('/',reviewController.getAllReviews)

module.exports = router