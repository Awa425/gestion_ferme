const express = require('express');
const models = require('../models');

module.exports = {

    getFermeVeterinaire: (req, res) => {
        models.FermeVeterinaire.findAll(
            // {
                // include: [
                //     {
                //         model: models.Fermes,
                //         attributes: ['id']
                //     },
                //     {
                //         model: models.Veterinaires,
                //         attributes: ['id']
                //     },
                // ],
            // }
        ).then((data) => {
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createFermeVeterinaire: (req, res) => {
        const { veterinaireId, fermeId } = req.body
        models.FermeFermier.create(
            {
                veterinaireId: veterinaireId,
                fermeId: fermeId
            },

        ).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

