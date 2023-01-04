'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FermeVeterinaires', {

      fermeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fermes',
          key: 'id',
        },
      },
      veterinaireId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Veterinaires',
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
    await queryInterface.bulkInsert('FermeVeterinaires', [
      {
        fermeId: 1,
        veterinaireId: 1,
      },
      {
        fermeId: 1,
        veterinaireId: 2,
      },

    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FermeVeterinaires');
  }
};