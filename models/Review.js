const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min:0,
        max:5,
        required: true
    },
    comment: {
        type: String,
        trim: true,
        required: true
    },
},{timestamps:true})
let Review = mongoose.model('Review', reviewSchema)
module.exports = Review;