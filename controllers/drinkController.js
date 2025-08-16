const Drink = require('../models/Drink')

async function createDrink(req, res) {
    try {
        const newDrink = await Drink.create(req.body)
        res.status(201).json(newDrink)
        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createDrink
}