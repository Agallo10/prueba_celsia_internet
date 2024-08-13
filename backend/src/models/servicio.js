const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');

const Servicio = sequelize.define('Servicio', {

  servicio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ultimoPago: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  ultimaFacturacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  identificacion: {
    type: DataTypes.STRING(20),
    allowNull: false,
    // primaryKey: true,
    // references: {
    //   model: Cliente,
    //   key: 'identificacion'
    // }
  },
});

// Servicio.belongsTo(Cliente, { foreignKey: 'identificacion', as: 'Cliente' });

module.exports = Servicio;
