const express = require('express');

const CoprologiaCtrl = require('../controllers/CoprologiaController');


const Router = express.Router();

Router.get('/',   CoprologiaCtrl.index)
        .post('/ver/:value', CoprologiaCtrl.verCoprologia)
        .post('/',    CoprologiaCtrl.create)
        .get('/:key/:value',  CoprologiaCtrl.find, CoprologiaCtrl.show) 
        .put('/:key/:value',   CoprologiaCtrl.find,CoprologiaCtrl.update)
        .delete('/:key/:value',  CoprologiaCtrl.find,CoprologiaCtrl.remove);

module.exports = Router; 