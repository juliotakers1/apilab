const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();



const Doctor = require('./routes/doctor');
const User = require('./routes/user');
const Login = require('./routes/login');

const Orden = require('./routes/orden');
const Examen = require('./routes/examen');
const Urologia = require('./routes/urologia');
const Coprologia = require('./routes/coprologia');
const Quimica = require('./routes/quimica');
const Paciente = require('./routes/paciente');



App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 


App.use('/doctor',Doctor);
App.use('/user', User);
App.use('/login', Login);

App.use('/orden', Orden);
App.use('/examen', Examen);
App.use('/urologia', Urologia);
App.use('/coprologia', Coprologia);
App.use('/quimica', Quimica);
App.use('/paciente', Paciente);
 

module.exports = App;