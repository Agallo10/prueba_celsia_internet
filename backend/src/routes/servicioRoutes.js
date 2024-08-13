const express = require('express');
const router = express.Router();
const ServicioController = require('../controllers/servicioController');

router.get('/', ServicioController.getServicios);
router.post('/', ServicioController.createServicio);
router.get('/:id', ServicioController.getServicio);
router.get('/identificacion/:id', ServicioController.getServicioByIdentificacion);
router.put('/:id', ServicioController.updateServicio);
router.delete('/:id', ServicioController.deleteServicio);

module.exports = router;
