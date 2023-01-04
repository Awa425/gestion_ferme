const express = require('express');
const veterinaireCtrl = require('../controllers/veterinairesControllers');

const veterinaire = express.Router();

veterinaire.get('/veterinaires', veterinaireCtrl.getVeterinaires);
veterinaire.post('/veterinaires', veterinaireCtrl.createVeterinaires);


module.exports = veterinaire