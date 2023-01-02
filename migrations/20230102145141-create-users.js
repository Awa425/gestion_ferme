'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      nom: Sequelize.STRING,
      prenom: Sequelize.STRING,
      telephone: Sequelize.STRING,
      pays: Sequelize.STRING,
      region: Sequelize.STRING,
      adresse: Sequelize.STRING,
      profile: Sequelize.STRING,
      etat: Sequelize.BOOLEAN,
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
    await queryInterface.bulkInsert('Users', [
      {
        email: 'test@example.com',
        password: 'ok',
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
        email: 'test1@example.com',
        password: 'ok',
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
        email: 'test2@example.com',
        password: 'ok',
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
    await queryInterface.dropTable('Users');
  }
};