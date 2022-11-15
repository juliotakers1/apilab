const Orden = require('../models/Orden');

function index(req,res){
    Orden.find({}) 
    .then(ordenes =>{
        if(ordenes.length) return res.status(200).send({ordenes});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verOrden(req,res){
    Orden.findOne({id:req.body.id}) 
    .then(orden =>{
        if(orden) return res.status(200).send({orden});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.ordenes) return res.status(404).send({message: 'not found'});
    let ordenes = req.body.ordenes;
    return res.status(200).send({ ordenes});
}

function create(req,res){
    console.log(req.body);
    new Orden(req.body).save().then(orden => res.status(201).send({orden})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.ordenes) return res.status(404).send({message: 'not funsito'});
    let orden = req.body.ordenes[0];
    orden = Object.assign(orden, req.body);
    orden.save().then(orden =res.status(200).send({message:'UPDATED', orden})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.ordenes) return res.status(404).send({message: 'no funcio'});
    req.body.ordenes[0].remove().then(orden => res.status(200).send({message:'eliminao',orden})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Orden.find(query).then(ordenes =>{
        if(!ordenes.length) return next();
        req.body.ordenes = ordenes;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find,
    verOrden
}