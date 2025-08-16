const Cafe = require('../models/Cafe')

async function createCafe(req, res) {
    try {
        const newCafe = await Cafe.create(req.body)
        res.status(201).json(newCafe)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function allCafes(req, res) {
    try {
        const allCafes = await Cafe.find()

        if (allCafes) {
            res.status(200).json(allCafes)
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCafe,
    allCafes
}