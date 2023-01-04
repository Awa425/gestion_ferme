'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FermeVeterinaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Veterinaires)
      this.belongsTo(models.Fermes)

    }
  }
  FermeVeterinaire.init({}, {
    sequelize,
    modelName: 'FermeVeterinaire',
  });
  return FermeVeterinaire;
};