//These files of models are made to only define the schema and model for the required data models args
//-----------------------------REQUIRE CONFIG-----------------------------
const mongoose = require('mongoose')

//-----------------------------SCHEMA CONFIG-----------------------------
const productSchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true,
            required: true
        },
        img: {
            type: String,
            trim: true,
            // default:
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        desc: {
            type: String,
            trim: true
        }
    }
)

//-----------------------------MODEL CONFIG-----------------------------
let Product = mongoose.model('Product', productSchema)

//-----------------------------EXPORT FILES CONFIG-----------------------------
module.exports = Product;