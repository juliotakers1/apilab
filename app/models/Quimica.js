const mongoose = require('mongoose');
const QuimicaSchema = new mongoose.Schema({


    numerorder:{
        type: Number,
        required: true
    },
      nombre:{
        type: String,
        required: true
      },
      fecha:{
        type: String,
        required: false
      },
      doctor:{
        type: String,
        required: false
      },
      valor:{
        type: String,
        required: false
      },
      detalles:{
        type: String,
        required: false
      },
      examen:{
        type: String,
        required: false
      },
      tipoexamen:{
        type: String,
        required: false
      },
      descripcion:{
        type: String,
        required: false
      },
      resultado:{
        type: String,
        required: false
      },


});

const Quimica = mongoose.model('Quimica',QuimicaSchema);
 
module.exports = Quimica;