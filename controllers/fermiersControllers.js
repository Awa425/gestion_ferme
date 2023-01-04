const express = require('express');
const models = require('../models');

module.exports = {

    getFermiers: (req, res) => {
        models.Fermiers.findAll().then((data) => {
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createFermiers: (req, res) => {
        const { attrubut } = req.body
        models.Employes.create(
            {
                attrubut: attrubut,
            },

        ).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

