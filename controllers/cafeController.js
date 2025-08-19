const { cloudinary } = require('../config/Cloudinary')
const Cafe = require('../models/Cafe')
const Review = require('../models/Reviews')

async function createCafe(req, res) {
    try {
        const cafeData = { ...req.body }

        if (req.file) {
            cafeData.cafeImage = req.file.path
            cafeData.cafeImagePublicId = req.file.filename
        }

        const newCafe = await Cafe.create(cafeData)
        res.status(201).json(newCafe)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function allCafes(req, res) {
    try {
        const allCafes = await Cafe.find().populate('drinks')

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
        const cafeReviews = await Review.find({ cafe: req.params.id })
        const cafeDetails = await Cafe.findById(req.params.id)

        if (cafeDetails && cafeReviews) {
            res.status(200).json({ cafeDetails, cafeReviews })
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function updateCafe(req, res) {
    try {
        const foundCafe = await Cafe.findById(req.params.id)

        const cafeData = { ...req.body }

        if (req.file) {
            if (foundCafe.cafeImagePublicId) {
                await cloudinary.uploader.destroy(foundCafe.cafeImagePublicId)
            }
            cafeData.cafeImage = req.file.path
            cafeData.cafeImagePublicId = req.file.filename
        }

        const updatedCafe = await Cafe.findByIdAndUpdate(req.params.id, cafeData, { new: true })


        if (updatedCafe) {
            res.status(200).json(updatedCafe)
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function deleteCafe(req, res) {
    try {
        const foundCafe = await Cafe.findById(req.params.id)

        if (req.file) {
            if (foundCafe.cafeImagePublicId) {
                await cloudinary.uploader.destroy(foundCafe)
            }
        }
        const deletedCafe = await Cafe.findByIdAndDelete(req.params.id, req.body)

        if (deletedCafe) {
            res.status(200).json(deletedCafe)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCafe,
    allCafes,
    cafeDetails,
    updateCafe,
    deleteCafe
}