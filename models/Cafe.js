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
        type: String,
        required: [true, 'The image is required']

    },
    cafeImagePublicId: {
        type: String
    }

})

const Cafe = mongoose.model('Cafe', CafeSchema)

module.exports = Cafe