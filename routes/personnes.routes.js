const express = require('express');
const personneCtrl = require('../controllers/personnes.controllers');

const personne = express.Router();

personne.get('/personnes', personneCtrl.getPersonnes);
personne.post('/personnes', personneCtrl.createPersonne);


module.exports = personne