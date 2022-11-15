const mongoose = require('mongoose');
const ExamenSchema = new mongoose.Schema({


    codigo:{
        type: Number,
        required: true
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
        type: Number,
        required: false
    },
    dimensional:{
        type: String,
        required: true
    }

});

const Examen = mongoose.model('Examen',ExamenSchema);

module.exports = Examen;