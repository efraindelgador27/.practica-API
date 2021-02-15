'use strict'

const { response } = require("express")

const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const productSchema= Schema({
    nombre:String,
    color:String,
    precio:{type:Number,default:0},
    categoria:{type:String,enum:['computadoras','telefoos','accesorios','pescado']}
})

module.exports= mongoose.model('producto',productSchema);