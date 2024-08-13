const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const clienteRoutes = require('./routes/clienteRoutes');
const servicioRoutes = require('./routes/servicioRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sincronizar modelos con la base de datos
sequelize.sync();

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/servicios', servicioRoutes);

module.exports = app;
