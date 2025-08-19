const { cloudinary } = require('../config/Cloudinary')
const Drink = require('../models/Drink')
const Review = require('../models/Reviews')

async function createDrink(req, res) {
    try {
        const drinkData = { ...req.body }

        if (req.file) {
            drinkData.drinkImage = req.file.path
            drinkData.drinkImagePublicId = req.file.filename
        }

        const newDrink = await Drink.create(drinkData)
        res.status(201).json(newDrink)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function allDrinks(req, res) {
    try {
        const allDrinks = await Drink.find()

        if (allDrinks) {
            res.status(200).json(allDrinks)
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function drinkDetails(req, res) {
    try {
        const drinkReviews = await Review.find({ drink: req.params.id })
        const drinkDetails = await Drink.findById(req.params.id)

        if (drinkDetails && drinkReviews) {
            res.status(200).json({ drinkDetails, drinkReviews })
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function updateDrink(req, res) {
    try {
        const foundDrink = await Drink.findById(req.params.id)
        const drinkData = { ...req.body }

        if (req.file) {
            if (foundDrink.drinkImagePublicId) {
                await cloudinary.uploader.destroy(foundDrink.drinkImagePublicId)
            }
            drinkData.drinkImage = req.file.path
            drinkData.drinkImagePublicId = req.file.filename
        }

        const updatedDrink = await Drink.findByIdAndUpdate(req.params.id, drinkData, { new: true })

        if (updatedDrink) {
            res.status(200).json(updatedDrink)
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function deleteDrink(req, res) {
    try {
        const foundDrink = await Drink.findById(req.params.id)

        if (req.file) {
            if (foundDrink.drinkImagePublicId) {
                await cloudinary.uploader.destroy(foundDrink)
            }
        }

        const deletedDrink = await Drink.findByIdAndDelete(req.params.id, req.body)

        if (deletedDrink) {
            res.status(200).json(deletedDrink)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createDrink,
    allDrinks,
    drinkDetails,
    updateDrink,
    deleteDrink
}