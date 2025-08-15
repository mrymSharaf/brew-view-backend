const mongoose = require('mongoose')

const CafeSchema = new mongoose.Schema({
    cafeName: {
        type: String,
        required: [true, 'Cafe name is required']

    },
    location: {
        type: String
    },
    cafeImage: {
        type: String
    },
    drinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drink'
    }]

})

const Cafe = mongoose.model('Cafe', CafeSchema)

module.exports = Cafe