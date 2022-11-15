const mongoose = require('mongoose');
const OrdenSchema = new mongoose.Schema({


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
      }

});

const Orden = mongoose.model('Orden',OrdenSchema);
 
module.exports = Orden;