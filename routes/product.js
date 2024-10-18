//This js file is made to set the all routes used for product
//As we have to use the method like get and post thus have to first require int this file
const express = require('express');
const router = express.Router();//Mini instance of app .... as app is the instance of application thus we can't export it use here we have to use its mini instance!!
const Product = require('../models/Product');//For accessing data from the db

//To show all the products
router.get('/products', async function(req, res) {
    let products = await Product.find()
    res.render('products/index', {products});
})
//To show the form for new products
router.get('/products/new', function(req, res) {
    res.render('products/new');
})

//To actually add a new product
router.post('/products', async function(req, res) {
    let {name,img,price,desc} = req.body;
    await Product.create({name,img,price,desc});
    res.redirect('/products');
})
//To show a perticular product
router.get('/products/:id', async function(req, res) {
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/show',{foundProduct});
})
//Show edit form for edit the product details
router.get('/products/:id/edit', async function(req, res) {
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit',{foundProduct});
})
//To actually edit the product details
router.patch('/products/:id', async function(req, res) {
    let {id} = req.params;
    let updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
    res.redirect(`/products`);
})
//To delete a product

router.delete('/products/:id', async function(req, res) {
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})
module.exports = router;