import {Schema, model } from "mongoose";

export const producto = new Schema({
    title: {
            type: String,
            require:true
        },
    price:{
            type: Number,
            require: true
        },
     description: {
            type: String,
            require: false
        },
     stock: {
            type: Boolean,
            required: false
        },
});

export const Product = model('Products' , producto)