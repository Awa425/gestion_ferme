const express = require('express');
const fermesCtrl = require('../controllers/fermesControllers');


const fermes = express.Router();

fermes.get('/fermes', fermesCtrl.getFermes);
// user.post('/animaux', animauxCtrl.);


module.exports = fermes