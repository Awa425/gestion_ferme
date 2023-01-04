const express = require('express');
const fermesCtrl = require('../controllers/fermesControllers');


const fermes = express.Router();

fermes.get('/fermes', fermesCtrl.getFermes);
fermes.post('/fermes', fermesCtrl.createFerme);


module.exports = fermes