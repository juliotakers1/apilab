const mongoose = require('mongoose');
const ExamenSchema = new mongoose.Schema({


    codigo:{
        type: String,
        required: false
    },
    tipo:{
        type: String,
        required: false
    },
    descripcion:{
        type: String,
        required: false
    },
    valores:{
        type: String,
        required: false
    },
    dimensional:{
        type: String,
        required: false
    }

});

const Examen = mongoose.model('Examen',ExamenSchema);

module.exports = Examen;