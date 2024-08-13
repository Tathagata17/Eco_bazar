const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    orginalname:
    {
        type:String,
        required:true,
    },
    bigdescription:{
        type: String,
        required: true,
        trim: true
    },
    additionalinfo: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    images: [{
        url: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }],
    brand: {
        type: String,
        trim: true
    },
    ratings: {
        averageRating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        reviewsCount: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    reviews: [{
        user: {
           type:String,
           required:true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5
        },
        comment: {
            type: String,
            trim: true
        },
    }],
});

const productmodel=mongoose.model("products",productSchema);

module.exports=productmodel;