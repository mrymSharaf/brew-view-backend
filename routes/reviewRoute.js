const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')


router.post('/new', reviewController.createReview)
router.get('/', reviewController.getAllReviews)
router.get('/:id', reviewController.findReview)
router.delete('/:id', reviewController.deletereview)
module.exports = router