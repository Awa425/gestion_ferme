'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fermiers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fermiers.init({
    attribut: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fermiers',
  });
  return Fermiers;
};