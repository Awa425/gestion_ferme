'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personnes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      },
      etat: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
    await queryInterface.bulkInsert('Personnes', [
      {
        nom: "Ba",
        prenom: "Mouhamed",
        telephone: "773464678",
        region: "Dakar",
        adresse: "Kounoune",
        pays: "Sénégal",
        profile: "ROLE_FERMIER",
        etat: true
      },
      {

        nom: "Diop",
        prenom: "Awa",
        telephone: "773464678",
        region: "Dakar",
        adresse: "Pikine",
        pays: "Sénégal",
        profile: "ROLE_VETERINAIRE",
        etat: true
      },
      {

        nom: "Mangane",
        prenom: "Abdoulahi",
        telephone: "773464678",
        region: "Dakar",
        adresse: "PA",
        pays: "Sénégal",
        profile: "ROLE_FOURNISSEUR",
        etat: true
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personnes');
  }
};