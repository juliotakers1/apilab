const mongoose = require('mongoose');
const OrdenSchema = new mongoose.Schema({


    numerorder:{
        type: String,
        required: false
    },
      nombre:{
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
      valor:{
        type: String,
        required: false
      }

});

const Orden = mongoose.model('Orden',OrdenSchema);
 
module.exports = Orden;