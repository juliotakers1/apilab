const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({


    codigo:{
        type: Number,
        required: true
    },
      nombre:{
        type: String,
        required: true
      },
      telefono:{
        type: Number,
        required: false
      },
      colegiado:{
        type: String,
        required: true
      }

});

const Doctor = mongoose.model('Doctor',DoctorSchema);
 
module.exports = Doctor;