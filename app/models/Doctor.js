const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({


    codigo:{
        type: String,
        required: false
    },
      nombre:{
        type: String,
        required: false
      },
      telefono:{
        type: String,
        required: false
      },
      colegiado:{
        type: String,
        required: false
      }

});

const Doctor = mongoose.model('Doctor',DoctorSchema);
 
module.exports = Doctor;