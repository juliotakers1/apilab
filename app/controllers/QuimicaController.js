const Quimica = require('../models/Quimica');

function index(req,res){
    Quimica.find({}) 
    .then(quimicas =>{
        if(quimicas.length) return res.status(200).send({quimicas});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verQuimica(req,res){
    Quimica.findOne({id:req.body.id}) 
    .then(quimica =>{
        if(quimica) return res.status(200).send({quimica});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.quimicas) return res.status(404).send({message: 'not found'});
    let quimicas = req.body.quimicas;
    return res.status(200).send({ quimicas});
}

function create(req,res){
    console.log(req.body);
    new Quimica(req.body).save().then(quimica => res.status(201).send({quimica})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.quimicas) return res.status(404).send({message: 'not funsito'});
    let quimica = req.body.quimicas[0];
    quimica = Object.assign(quimica, req.body);
    quimica.save().then(quimica =res.status(200).send({message:'UPDATED', quimica})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.quimicas) return res.status(404).send({message: 'no funcio'});
    req.body.quimicas[0].remove().then(quimica => res.status(200).send({message:'eliminao',quimica})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Quimica.find(query).then(quimicas =>{
        if(!quimicas.length) return next();
        req.body.quimicas = quimicas;
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
    verQuimica
}