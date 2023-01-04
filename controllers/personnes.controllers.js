const express = require('express');
const models = require('../models');

module.exports = {

    getPersonnes: (req, res) => {
        models.Personnes.findAll().then((data) => {
            // console.log('Toutes les users : ', users);
            return res.status(200).json(data);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createPersonne: (req, res) => {
        const { nom, prenom, telephone, region, adresse, pays, profile, etat } = req.body
        models.Personnes.create(
            {

                nom: nom,
                prenom: prenom,
                telephone: telephone,
                region: region,
                adresse: adresse,
                pays: pays,
                profile: profile,
                etat: etat
            },

        ).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return res.status(500).json('erreur de création de personne')
        })
    }
}

