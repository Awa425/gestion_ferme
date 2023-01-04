'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      salaire: {
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
    await queryInterface.bulkInsert('Employes', [
      { salaire: 'salaire A' },
      { salaire: 'salaire A' },
      { salaire: 'salaire C' }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employes');
  }
};