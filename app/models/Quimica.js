const mongoose = require('mongoose');
const QuimicaSchema = new mongoose.Schema({


    codigo:{
        type: String,
        required: false
    },
      paciente:{
        type: String,
        required: false
      },
      fecha:{
        type: String,
        required: false
      },
      doctor:{
        type: String,
        required: false
      },
      examen:{
        type: String,
        required: false
      },
      valor:{
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