const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(err => console.error('Error al conectar a PostgreSQL', err));

module.exports = sequelize;
