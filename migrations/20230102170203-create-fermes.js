'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fermes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      etat: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

      }
    });
    await queryInterface.bulkInsert('Fermes', [
      {
        nom: 'Fermet',
        telephone: '+49',
        adresse: 'Lille',
        region: 'Lille',
        ville: 'Lille',
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fermes');
  }
};