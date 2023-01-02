const express = require('express');
const animalesCtrl = require('../controllers/animalesControllers');


const animaux = express.Router();

animaux.get('/animales', animalesCtrl.getAnimales);
// user.post('/animaux', animauxCtrl.);


module.exports = animaux