const express = require('express');
const models = require('../models');

module.exports = {

    getFermes: (req, res) => {
        models.Fermes.findAll(
            {
                attribut: ['id', 'nom'],
                include: [
                    {
                        model: models.FermeVeterinaire
                    },
                    {
                        model: models.Veterinaires
                    },
                ]
            }
        ).then((ferme) => {

            return res.status(200).json(ferme);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createFerme: (req, res) => {
        const { nom, telephone, adresse, region, ville } = req.body
        models.Fermes.create(
            {
                nom: nom,
                telephone: telephone,
                adresse: adresse,
                region: region,
                ville: ville,

            },

        ).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

