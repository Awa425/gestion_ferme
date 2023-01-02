'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Animales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fermeId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fermes',
          key: 'id'
        }
      },
      nom: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      matricule: {
        type: Sequelize.STRING,
        defaultValue: "mat_123"
      },
      couleur: {
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
    await queryInterface.bulkInsert('Animales', [{
      fermeId: "1",
      nom: 'Animaux 1',
      age: 1,
      couleur: 'Couleur 1',
    }])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Animales');
  }
};