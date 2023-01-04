const express = require('express');
const fermeVeterinaireCtrl = require('../controllers/fermeVeterinaireControllers');

const fermevet = express.Router();

fermevet.get('/fermevete', fermeVeterinaireCtrl.getFermeVeterinaire);
fermevet.post('/fermevete', fermeVeterinaireCtrl.createFermeVeterinaire);


module.exports = fermevet