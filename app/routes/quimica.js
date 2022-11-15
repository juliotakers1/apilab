const express = require('express');

const QuimicaCtrl = require('../controllers/QuimicaController');


const Router = express.Router();

Router.get('/',   QuimicaCtrl.index)
        .post('/ver/:value', QuimicaCtrl.verQuimica)
        .post('/',    QuimicaCtrl.create)
        .get('/:key/:value',  QuimicaCtrl.find, QuimicaCtrl.show) 
        .put('/:key/:value',   QuimicaCtrl.find,QuimicaCtrl.update)
        .delete('/:key/:value',  QuimicaCtrl.find,QuimicaCtrl.remove);

module.exports = Router; 