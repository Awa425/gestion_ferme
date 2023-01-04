const express = require('express');
const fermeFermierCtrl = require('../controllers/fermeFermierControllers');

const fermeFermier = express.Router();

fermeFermier.get('/fermeFermier', fermeFermierCtrl.getFermeFermier);
fermeFermier.post('/fermeFermier', fermeFermierCtrl.createFermeFermier);


module.exports = fermeFermier