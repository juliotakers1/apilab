const mongoose = require('mongoose');
const CoprologiaSchema = new mongoose.Schema({


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
      restosal:{
        type: String,
        required: false
      },
      sangre:{
        type: String,
        required: false
      },
      moco:{
        type: String,
        required: false
      },
      cvegetales:{
        type: String,
        required: false
      },
      almidon:{
        type: String,
        required: false
      },
      grasas:{
        type: String,
        required: false
      },
      fmusculares:{
        type: String,
        required: false
      },
      lencocitos:{
        type: String,
        required: false
      },
      eritocitos:{
        type: String,
        required: false
      },

});

const Coprologia = mongoose.model('Coprologia',CoprologiaSchema);
 
module.exports = Coprologia;