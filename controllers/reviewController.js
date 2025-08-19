const Review = require('../models/Reviews')

async function createReview(req,res) {
    try{
        const newReview = await Review.create({...req.body, user: req.user.id})
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

async function findReview(req,res){
    try{
        const review = await Review.findById(req.params.id)
        if(review){
            res.status(200).json(review)

        }
        else{
            res.sendStatus(404)
        }

    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

async function updateReview(req,res){
    try{
        const review = await Review.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(review){
            res.status(200).json(review)

        }else{
            res.status(404)
        }

    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
    
}

async function deletereview(req,res) {
    try{
        const review = await Review.findByIdAndDelete(req.params.id)
        if(review){
            res.status(200).json(review)
        }
        else{
            res.status(404)
        }

    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createReview,
    getAllReviews,
    findReview,
    updateReview,
    deletereview

}