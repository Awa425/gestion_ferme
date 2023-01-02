const express = require('express');
const models = require('../models');

module.exports = {

    getAnimales: (req, res) => {
        models.Animales.findAll({
            attributes:['id','nom','age','couleur'],
            include: [
                {
                    model: models.Fermes,
                    attributes: ['id']
                }
            ],
        }).then((animaux) => {
            console.log('Toutes les animaux : ', animaux);
            return res.status(200).json(animaux);
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

