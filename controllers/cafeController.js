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

async function cafeDetails(req, res) {
    try {
        const cafeDetails = await Cafe.findById(req.params.id)

        if (cafeDetails) {
            res.status(200).json(cafeDetails)
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function updateCafe(req, res) {
    try {
        const updatedCafe = await Cafe.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (updatedCafe) {
            res.status(200).json(updatedCafe)
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCafe,
    allCafes,
    cafeDetails,
    updateCafe
}