'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Fermes, {
        foreignKey: {
          name: 'fermeId',
          allowNull: false
        }
      });
    }
  }
  Animales.init({
    fermeId: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    age: DataTypes.INTEGER,
    matricule: {
      type: DataTypes.STRING,
      defaultValue: "mat_321"
    },
    couleur: DataTypes.STRING,
    etat: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Animales',
  });
  return Animales;
};