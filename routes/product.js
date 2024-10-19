//This js file is made to set the all routes used for product
//As we have to use the method like get and post thus have to first require int this file
const express = require('express');
const router = express.Router();//Mini instance of app .... as app is the instance of application thus we can't export it use here we have to use its mini instance!!
const Product = require('../models/Product');//For accessing data from the db

router.get('/products', async function(req, res) {//To show all the products
    // const cartCount = req.session.cartCount || 0; // Get cart count from session
    console.log('Session:', req.session);

    let products = await Product.find().populate('reviews');
    res.render('products/index', { products});
})
router.get('/products/new', function(req, res) {//To show the form for new products
    res.render('products/new');
})
router.post('/products', async function(req, res) {//To actually add a new product
    let {name,img,price,desc} = req.body;
    await Product.create({name,img,price,desc});
    res.redirect('/products');
})
router.get('/products/:id', async function(req, res) {//To show a perticular product
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('products/show',{foundProduct});
})
router.get('/products/:id/edit', async function(req, res) {//Show edit form for edit the product det
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit',{foundProduct});
})
router.patch('/products/:id', async function(req, res) {//To actually edit the product details
    let {id} = req.params;
    let updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
    res.redirect(`/products`);
})
router.delete('/products/:id', async function(req, res) {//To delete a product
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})
router.post('/products/:id/buy', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!req.session) {
        req.session = {}; // Initialize session if undefined
    }
    req.session.cartCount = req.session.cartCount || 0; // Initialize if undefined
    req.session.cartCount++; // Increment cartCount
    res.redirect(`/products/${id}`);
});

module.exports = router;