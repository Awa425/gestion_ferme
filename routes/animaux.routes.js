const express = require('express');
const animauxCtrl = require('../controllers/animauxControllers');


const animaux = express.Router();

animaux.get('/animaux', animauxCtrl.getAnimaux);
// user.post('/animaux', animauxCtrl.);


module.exports = animaux