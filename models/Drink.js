const mongoose = require('mongoose')

const DrinkSchema = new mongoose.Schema({
    drinkName: {
        type: String,
        required: trusted
    },
    drinkImage: {
        type: String
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review'

    }]
})

const Drink = mongoose.model('Drink', DrinkSchema)

module.exports = Drink