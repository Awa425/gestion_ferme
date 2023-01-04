'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Veterinaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialite: {
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
    await queryInterface.bulkInsert('Veterinaires', [
      {
        specialite: 'specialite A',
      },
      {
        specialite: 'specialite B',
      },
      {
        specialite: 'specialite C',
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Veterinaires');
  }
};