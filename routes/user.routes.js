const express = require('express');
const userCtrl = require('../controllers/users.controllers');

const user = express.Router();

user.get('/users', userCtrl.getUsers);
user.post('/users', userCtrl.createUser);


module.exports = user