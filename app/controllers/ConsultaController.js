const Consulta = require('../models/Consulta');

function index(req,res){
    Consulta.find({}) 
    .then(Consultas =>{
        if(Consultas.length) return res.status(200).send({Consultas});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verConsulta(req,res){
    Consulta.findOne({id:req.body.id}) 
    .then(consulta =>{
        if(consulta) return res.status(200).send({consulta});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.Consultas) return res.status(404).send({message: 'not found'});
    let Consultas = req.body.Consultas;
    return res.status(200).send({ Consultas});
}

function create(req,res){
    console.log(req.body);
    new Consulta(req.body).save().then(consulta => res.status(201).send({consulta})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Consultas) return res.status(404).send({message: 'not funsito'});
    let consulta = req.body.Consultas[0];
    consulta = Object.assign(consulta, req.body);
    consulta.save().then(consulta =res.status(200).send({message:'UPDATED', consulta})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Consultas) return res.status(404).send({message: 'no funcio'});
    req.body.Consultas[0].remove().then(consulta => res.status(200).send({message:'eliminao',consulta})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Consulta.find(query).then(Consultas =>{
        if(!Consultas.length) return next();
        req.body.Consultas = Consultas;
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
    verConsulta
}