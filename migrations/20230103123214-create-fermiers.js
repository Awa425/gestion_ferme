'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fermiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attribut: {
        type: Sequelize.STRING
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
    await queryInterface.bulkInsert('Fermiers', [
      {
        attribut: 'attr 1',
      },
      {
        attribut: 'attr 2',
      },
      {
        attribut: 'attr 3',
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fermiers');
  }
};