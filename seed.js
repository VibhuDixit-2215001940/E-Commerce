//This file is always made to just add the dummy/initial data to the database!!
const mongoose = require('mongoose')
const Product = require('./models/Product')

const products = [
    {
        name: 'Danny',
        img : "https://images.unsplash.com/photo-1518921754906-0d74d5592e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        price: 10.99,
        desc: 'This is Product 1'
    },
    {
        name: 'Mia',
        img : "https://plus.unsplash.com/premium_photo-1665663927587-a5b343dff128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        price: 15.99,
        desc: 'This is Product 2'
    },
    {
        name: 'Ammy',
        img : "https://images.unsplash.com/photo-1662113238040-f782500095d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1c3NpYW4lMjBnaXJsfGVufDB8fDB8fHww",
        price: 20.99,
        desc: 'This is Product 3'
    },
    {
        name: 'Salena',
        img : "https://images.unsplash.com/flagged/photo-1576659529462-670a89313ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNlbGVuYSUyMGdvbWV6fGVufDB8fDB8fHww",
        price: 25.99,
        desc: 'This is Product 4'
    },
    {
        name: 'Urfi',
        img : "https://images.unsplash.com/photo-1565325058867-e9a6c855ebb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZW5hJTIwZ29tZXp8ZW58MHx8MHx8fDA%3D",
        price: 25.99,
        desc: 'This is Product 4'
    }
]

//Database ke command jab ham use karte hai idhar toh wo command promise return karte hai jinhe resolve karne ke liye async & awiat use kai jata hai ok !
//Ya phir data base maii dummy data ko add karne mai thoda time lagega and ya toh wo kaam hoga ya nahi .... so hamko uska wait karna hota hai by using async and await!
async function seedDb(){
    await Product.insertMany(products);
    console.log("Database seeded!");
}

module.exports = seedDb;
//Yhaan se hamne isko export kar dia and jaha par bhi isko use karna hoga waha par jsut call laga denge bss