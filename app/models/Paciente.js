const mongoose = require('mongoose');
const PacienteSchema = new mongoose.Schema({


    nombre:{
        type: String,
        required: false
    },
      codigo:{
        type: String,
        required: false
      },
      telefono:{
        type: String,
        required: false
      },

});

const Paciente = mongoose.model('Paciente',PacienteSchema);
 
module.exports = Paciente;