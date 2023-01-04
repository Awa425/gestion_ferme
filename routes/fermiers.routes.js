const express = require('express');
const fermiersCtrl = require('../controllers/fermiersControllers');

const fermier = express.Router();

fermier.get('/fermiers', fermiersCtrl.getFermiers);
fermier.post('/fermiers', fermiersCtrl.createFermiers);


module.exports = fermier