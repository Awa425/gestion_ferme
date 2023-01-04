const express = require('express');
const models = require('../models');

module.exports = {

    getFermeFermier: (req, res) => {
        models.FermeFermier.findAll().then((data) => {
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createFermeFermier: (req, res) => {
        const { idFerme, idFermier } = req.body
        models.FermeFermier.create(
            {
                idFerme: idFerme,
                idFermier: idFermier
            },

        ).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

