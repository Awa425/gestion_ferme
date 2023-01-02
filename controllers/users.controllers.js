const express = require('express');
const models = require('../models');

module.exports = {

    getUsers: (req, res) => {
        models.Users.findAll().then((users) => {
            // console.log('Toutes les users : ', users);
            return res.status(200).json(users);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createUser: (req, res) => {
        const { email, password, nom, prenom, telephone, region, adresse, pays, profile, etat } = req.body
        models.Users.create(
            {
                email: email,
                password: password,
                nom: nom,
                prenom: prenom,
                telephone: telephone,
                region: region,
                adresse: adresse,
                pays: pays,
                profile: profile,
                etat: etat
            },

        ).then((user) => {
            return res.status(201).json(user);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

