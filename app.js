const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDb = require('./seed')
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const reviewRoutes = require('./routes/review');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.engine('ejs',ejsMate)
app.set('view engine','ejs');//Iska simple yahi kaam hai ki ejs file ko read kare
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
// seedDb(); // Seed the database with sample data for testing jsut use one time only
mongoose.connect('mongodb://127.0.0.1:27017/shopping')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('Db Error: ' + err));
app.get('/', function (req, res) {
    res.send('Raand!!')
})
app.use(productRoutes)
app.use(userRoutes)
app.use(reviewRoutes)
app.get('*', function (req, res) {
    res.send('Randibaaz kaha dekh raha hai!!');
})
app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})