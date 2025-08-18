const mongoose = require('mongoose')

const DrinkSchema = new mongoose.Schema({
    drinkName: {
        type: String,
        required: [true, 'Drink name is required']
    },
    drinkImage: {
        type: String
    },
    drinkImagePublicId: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Drink price is required']
    },
    description: {
        type: String
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'

    }]
})

const Drink = mongoose.model('Drink', DrinkSchema)

module.exports = Drink