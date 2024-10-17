//-----------------------------REQUIRE CONFIG-----------------------------
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDb = require('./seed')
const productRoutes = require('./routes/product');
//-----------------------------FOLDER CONFIG----------------------
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

//-----------------------------DB SEEDING-----------------------------

// seedDb(); // Seed the database with sample data for testing jsut use one time only

//-----------------------------DB CONFIG-----------------------------
mongoose.connect('mongodb://127.0.0.1:27017/shopping')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('Db Error: ' + err));

//-----------------------------ROUTES CONFIG-----------------------------
app.get('/', function (req, res) {
    res.send('Raand!!')
})
app.use(productRoutes)

//-----------------------------SERVER CONFIG-----------------------------
app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})