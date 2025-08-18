const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Review content is required ']
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    drink: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drink'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review