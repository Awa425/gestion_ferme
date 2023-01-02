'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    email: {
      type: DataTypes.STRING,
      defaultValue: "test"
    },
    password: DataTypes.STRING,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    telephone: DataTypes.STRING,
    pays: DataTypes.STRING,
    region: DataTypes.STRING,
    adresse: DataTypes.STRING,
    profile: DataTypes.STRING,
    etat: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Users',
  },
  );
  return Users;
};