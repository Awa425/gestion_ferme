const express = require('express');
const models = require('../models');

module.exports = {

    getVeterinaires: (req, res) => {
        models.Veterinaires.findAll().then((data) => {
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createVeterinaires: (req, res) => {
        const { specialite } = req.body
        models.Veterinaires.create(
            {
                specialite: specialite,
            },

        ).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

