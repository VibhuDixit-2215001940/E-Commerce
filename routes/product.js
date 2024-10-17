//This js file is made to set the all routes used for product
//As we have to use the method like get and post thus have to first require int this file
const express = require('express');
const router = express.Router();//Mini instance of app .... as app is the instance of application thus we can't export it use here we have to use its mini instance!!
const Product = require('../models/Product');//For accessing data from the db

router.get('/products', async function(req, res) {
    let products = await Product.find()
    res.render('products/index', {products});
})


module.exports = router;