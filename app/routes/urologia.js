const express = require('express');

const UrologiaCtrl = require('../controllers/UrologiaController');


const Router = express.Router();

Router.get('/',   UrologiaCtrl.index)
        .post('/ver/:value', UrologiaCtrl.verUrologia)
        .post('/',    UrologiaCtrl.create)
        .get('/:key/:value',  UrologiaCtrl.find, UrologiaCtrl.show) 
        .put('/:key/:value',   UrologiaCtrl.find,UrologiaCtrl.update)
        .delete('/:key/:value',  UrologiaCtrl.find,UrologiaCtrl.remove);

module.exports = Router; 