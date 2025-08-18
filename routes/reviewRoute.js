const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')
const secureRoute = require('../middleware/secureRoute')


router.post('/new', secureRoute, reviewController.createReview)
router.get('/', reviewController.getAllReviews)
router.get('/:id', reviewController.findReview)
router.delete('/:id', secureRoute, reviewController.deletereview)
module.exports = router