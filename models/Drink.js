const mongoose = require('mongoose')

const DrinkSchema = new mongoose.Schema({
    drinkName: {
        type: String,
        required: [true, 'Drink name is required']
    },
    drinkImage: {
        type: String,
        required: [true, 'The image is required']
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
    cafe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe'

    }
})

const Drink = mongoose.model('Drink', DrinkSchema)

module.exports = Drink