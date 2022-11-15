const Coprologia = require('../models/Coprologia');

function index(req,res){
    Coprologia.find({}) 
    .then(coprologias =>{
        if(coprologias.length) return res.status(200).send({coprologias});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verCoprologia(req,res){
    Coprologia.findOne({id:req.body.id}) 
    .then(coprologia =>{
        if(coprologia) return res.status(200).send({coprologia});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.coprologias) return res.status(404).send({message: 'not found'});
    let coprologias = req.body.coprologias;
    return res.status(200).send({ coprologias});
}

function create(req,res){
    console.log(req.body);
    new Coprologia(req.body).save().then(coprologia => res.status(201).send({coprologia})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.coprologias) return res.status(404).send({message: 'not funsito'});
    let coprologia = req.body.coprologias[0];
    coprologia = Object.assign(coprologia, req.body);
    coprologia.save().then(coprologia =res.status(200).send({message:'UPDATED', coprologia})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.coprologias) return res.status(404).send({message: 'no funcio'});
    req.body.coprologias[0].remove().then(coprologia => res.status(200).send({message:'eliminao',coprologia})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Coprologia.find(query).then(coprologias =>{
        if(!coprologias.length) return next();
        req.body.coprologias = coprologias;
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
    verCoprologia
}