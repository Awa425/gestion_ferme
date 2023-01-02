const express = require('express');
const models = require('../models');

module.exports = {

    getFermes: (req, res) => {
        models.Fermes.findAll().then((ferme) => {
            // console.log('Toutes les users : ', users);
            return res.status(200).json(ferme);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    // createUser: (req, res) => {
    //     const { nom, age, couleur, matricule, etat } = req.body
    //     models.Users.create(
    //         {
    //             nom: nom,
    //             age: age,
    //             couleur: couleur,
    //             etat: etat,
    //             matricule: matricule,

    //         },

    //     ).then((user) => {
    //         return res.status(201).json(user);
    //     }).catch((err) => {
    //         return res.status(500).json('erreur de création des données')
    //     })
    // }
}

