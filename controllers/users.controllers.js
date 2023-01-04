const express = require('express');
const models = require('../models');

module.exports = {

    getUsers: (req, res) => {
        models.Users.findAll({
            attributes: ['id', 'email', 'password'],
            // include: [
            //     {
            //         model: models.Personnes,
            //         attributes: ['id']
            //     }
            // ]
        }).then((users) => {
            // console.log('Toutes les users : ', users);
            return res.status(200).json(users);
        }).catch(err => {
            return res.status(500).json('erreur de recuperation des données de la base')
        })
    },


    createUser: (req, res) => {
        const { email, password, profile } = req.body
        models.Users.create(
            {
                email: email,
                password: password,
                profile: profile,
            },

        ).then((user) => {
            return res.status(201).json(user);
        }).catch((err) => {
            return res.status(500).json('erreur de création des données')
        })
    }
}

