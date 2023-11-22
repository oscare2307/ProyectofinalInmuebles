'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Clientes.init({
    nomCli: DataTypes.STRING,
    apeCli: DataTypes.STRING,
    docIde: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};