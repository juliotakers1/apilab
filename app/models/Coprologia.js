const mongoose = require('mongoose');
const CoprologiaSchema = new mongoose.Schema({


  numerorder:{
    type: String,
    required: false
  },
  paciente:{
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
  examen:{
    type: String,
    required: false
  },
  valor:{
    type: String,
    required: false
  },
  color:{
    type: String,
    required: false
  },
  ph:{
    type: String,
    required: false
  },
  sangre:{
    type: String,
    required: false
  },
  celulasv:{
    type: String,
    required: false
  },
  grasas:{
    type: String,
    required: false
  },
  leucocitos:{
    type: String,
    required: false
  },
  mbacteriano:{
    type: String,
    required: false
  },
  otros:{
    type: String,
    required: false
  },
  aspecto:{
    type: String,
    required: false
  },
  ralimenticio:{
    type: String,
    required: false
  },
  moco:{
    type: String,
    required: false
  },
  almidon:{
    type: String,
    required: false
  },
  fmusculares:{
    type: String,
    required: false
  },
  eritrocito:{
    type: String,
    required: false
  },
  parasitos:{
    type: String,
    required: false
  },

});

const Coprologia = mongoose.model('Coprologia',CoprologiaSchema);
 
module.exports = Coprologia;