const Urologia = require('../models/Urologia');

function index(req,res){
    Urologia.find({}) 
    .then(urologias =>{
        if(urologias.length) return res.status(200).send({urologias});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verUrologia(req,res){
    Urologia.findOne({id:req.body.id}) 
    .then(urologia =>{
        if(urologia) return res.status(200).send({urologia});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.urologias) return res.status(404).send({message: 'not found'});
    let urologias = req.body.urologias;
    return res.status(200).send({ urologias});
}

function create(req,res){
    console.log(req.body);
    new Urologia(req.body).save().then(urologia => res.status(201).send({urologia})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.urologias) return res.status(404).send({message: 'not funsito'});
    let urologia = req.body.urologias[0];
    urologia = Object.assign(urologia, req.body);
    urologia.save().then(urologia =res.status(200).send({message:'UPDATED', urologia})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.urologias) return res.status(404).send({message: 'no funcio'});
    req.body.urologias[0].remove().then(urologia => res.status(200).send({message:'eliminao',urologia})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Urologia.find(query).then(urologias =>{
        if(!urologias.length) return next();
        req.body.urologias = urologias;
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
    verUrologia
}