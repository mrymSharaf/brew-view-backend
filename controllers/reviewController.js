const Review = require('../models/Reviews')

async function createReview(req,res) {
    try{
        const newReview = await Review.create(req.body)
        res.status(201).json(newReview)

    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }

}

async function getAllReviews(req,res) {
    try{
        const allReviews = await Review.find()
        if(allReviews.length){
            res.status(200).json(allReviews)

        }
        else{
            res.status(204)
        }

    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createReview,
    getAllReviews

}