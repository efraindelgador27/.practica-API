'use strict'

const producto=require('../models/producto')


function getProducts(req,res){
    producto.find({},(err,prodt)=>{
        if(err) return res.status(500).send({message:`Error de solicitud ${err}`});
        if(!prodt) return res.status(404).send({message:"Recurso no disponible"});
        res.status(200).send(prodt);
        console.log(" Solicitud procesada con exito ...")        
        })  
}

function createProduct(req,res){

    console.log(req.body);
    let prodt=new producto();
    prodt.nombre=req.body.nombre;
    prodt.color=req.body.color;
    prodt.precio=req.body.precio;
    prodt.categoria=req.body.categoria;

    prodt.save((err,producto) => {    
        if(err) res.status(500).send( {message : `Error al guardar los datos ${err}`})
        res.status(200).send(prodt)
        })
}

function getProduct(req,res){
    let id=req.params.prodtId;

    producto.findById(id,(err,prodt)=>{
        console.log(id)
        if(err) return res.status(500).send({message:`Error de solicitud ${err}`});
        if(!prodt) return res.status(404).send({message:"Recurso no disponible"});
        res.status(200).send({prodt});
        console.log(" Solicitud procesada con exito ...")  
        })
}

function deleteProduct(req,res){
    let id=req.params.prodtId;
        producto.findById(id,(err,prodt)=>{

            if(err){ res.status(500).send({message:`Error de solicitud${err}`})};

            producto.remove({_id:id},err =>{
                if(err){ res.status(500).send(`Error de solicitud no pudo eliminarse el recuros solicitado${err}`)};
                res.status(200).send("Solicitud procesada con exito ...")
            })
        }) 
}

function updateProduct(req,res){
    let id=req.params.productId;
    let productUpdate=req.body;

    producto.findByIdAndUpdate(id,productUpdate,(err,productUpdate)=>{
        if(err) res.status(500).send( {message : `Error al actualizar los datos ${err}`});
        res.status(200).send({productUpdate})
        })
}

module.exports={
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct
}