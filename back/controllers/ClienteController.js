'use strict'

//const cliente = require('../models/cliente');
var Cliente = require('../models/cliente');

const registro_cliente= async function(req,res){
    //
    var data=req.body;

    var reg= await Cliente.create(data);

    console.log(reg);

    res.status(200).send({message:reg});
} 

module.exports = {
    registro_cliente
}