const mongoose = require('mongoose');
const ExamenSchema = new mongoose.Schema({


    codigo:{
        type: String,
        required: false
    },
    nombre:{
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
    },
    pnormal:{
        type: String,
        required: false
    },
    preferencia:{
        type: String,
        required: false
    },
    pespecial:{
        type: String,
        required: false
    },
});

const Examen = mongoose.model('Examen',ExamenSchema);

module.exports = Examen;