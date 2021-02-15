'use strict'

const express=require('express');
const api=express.Router()
const controlerProductos=require('../controlers/productoControlers')

api.get('/producto/:prodtId',controlerProductos.getProduct) 

api.get('/producto/',controlerProductos.getProducts)
      
api.post('/producto',controlerProductos.createProduct)

api.put('/producto/:productId',controlerProductos.updateProduct)

api.delete('/producto/:prodtId',controlerProductos.deleteProduct);

module.exports=api;