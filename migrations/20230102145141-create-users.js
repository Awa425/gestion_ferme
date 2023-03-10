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
      profile: Sequelize.STRING,
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
        profile: "ROLE_FERMIER",
      },
      {
        email: 'test1@example.com',
        password: 'ok',
        profile: "ROLE_VETERINAIRE",
      },
      {
        email: 'test2@example.com',
        password: 'ok',
        profile: "ROLE_FOURNISSEUR",
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};