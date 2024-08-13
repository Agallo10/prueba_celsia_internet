const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Servicio = require('./Servicio');

const Cliente = sequelize.define('Cliente', {
  identificacion: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,

  },
  nombres: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  tipoIdentificacion: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  numeroCelular: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  correoElectronico: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    // defaultValue: DataTypes.NOW,
  },
});

Cliente.hasMany(Servicio, { foreignKey: 'identificacion', as: 'servicios' });


module.exports = Cliente;
