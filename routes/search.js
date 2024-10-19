const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Make sure this path is correct

// Search route
router.get('/search', async (req, res) => {
    const searchTerm = req.query.q;//String that we search
    const foundProducts = await Product.find({
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } }, // case-insensitive search
            { desc: { $regex: searchTerm, $options: 'i' } }
        ]
    }).populate('reviews');
    res.render('products/search', { foundProducts, searchTerm });
});



module.exports = router;
