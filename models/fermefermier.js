'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FermeFermier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FermeFermier.init({
    fermeId: DataTypes.INTEGER,
    fermierId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FermeFermier',
  });
  return FermeFermier;
};