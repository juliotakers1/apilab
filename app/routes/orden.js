const express = require('express');

const OrdenCtrl = require('../controllers/OrdenController');


const Router = express.Router();

Router.get('/',   OrdenCtrl.index)
        .post('/ver/:value', OrdenCtrl.verOrden)
        .post('/',    OrdenCtrl.create)
        .get('/:key/:value',  OrdenCtrl.find, OrdenCtrl.show) 
        .put('/:key/:value',   OrdenCtrl.find,OrdenCtrl.update)
        .delete('/:key/:value',  OrdenCtrl.find,OrdenCtrl.remove);

module.exports = Router; 