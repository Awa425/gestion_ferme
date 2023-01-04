const express = require('express');
const employesCtrl = require('../controllers/employes.controllers');

const employe = express.Router();

employe.get('/employes', employesCtrl.getEmployes);
employe.post('/employes', employesCtrl.createEmployes);


module.exports = employe