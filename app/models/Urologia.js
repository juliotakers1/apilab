const mongoose = require('mongoose');
const UrologiaSchema = new mongoose.Schema({


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
      emicroscopico:{
        type: String,
        required: false
      },
      color:{
        type: String,
        required: false
      },
      aspecto:{
        type: String,
        required: false
      },
      ph:{
        type: String,
        required: false
      },
      densidad:{
        type: String,
        required: false
      },
      bioquimica:{
        type: String,
        required: false
      },
      eritrocitos:{
        type: String,
        required: false
      },
      leucocitos:{
        type: String,
        required: false
      },
      cepiteliales:{
        type: String,
        required: false
      },
      moco:{
        type: String,
        required: false
      },
      bacterias:{
        type: String,
        required: false
      },

});

const Urologia = mongoose.model('Urologia',UrologiaSchema);
 
module.exports = Urologia;