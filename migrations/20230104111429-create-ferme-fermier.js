'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FermeFermiers', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      idFerme: {
        foreignKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fermes',
          key: 'id',

        },
      },
      idFermier: {
        foreignKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fermiers',
          key: 'id',
        },
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
    await queryInterface.bulkInsert('FermeFermiers', [{
      idFerme: 1,
      idFermier: 1,
    }])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FermeFermiers');
  }
};