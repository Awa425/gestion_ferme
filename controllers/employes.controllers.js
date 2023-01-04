const express = require('express');
const models = require('../models');

module.exports = {

    getEmployes: (req, res) => {
        models.Employes.findAll().then((data) => {
            // console.log('Toutes les users : ', users);
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createEmployes: (req, res) => {
        const { salaire } = req.body
        models.Employes.create(
            {
                salaire: salaire,
            },

        ).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

