//This file is always made to just add the dummy/initial data to the database!!
const mongoose = require('mongoose')
const Product = require('./models/Product')
const User = require('./models/User')

const products = [
    {
        name: 'Shiv Ji',
        img : "https://i.pinimg.com/736x/53/c9/91/53c99138f7a01bf171ab931d6029ffcb.jpg",
        price: 25.99,
        desc: 'This is Product 4',
        review:
            {
                rating: 5,
                comment: 'This is a great product! I love it.'
            }
    }
]
const users = [
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123'
    },
    {
        name: 'Goel Doe',
        email: 'jaan@example.com',
        password: 'password456'
    }
]
//Database ke command jab ham use karte hai idhar toh wo command promise return karte hai jinhe resolve karne ke liye async & awiat use kai jata hai ok !
//Ya phir data base maii dummy data ko add karne mai thoda time lagega and ya toh wo kaam hoga ya nahi .... so hamko uska wait karna hota hai by using async and await!
async function seedDb(){
    await Product.insertMany(products);
    await User.insertMany(users);
    console.log("Database seeded!");
}

module.exports = seedDb;
//Yhaan se hamne isko export kar dia and jaha par bhi isko use karna hoga waha par jsut call laga denge bss