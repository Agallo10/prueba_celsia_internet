const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');

router.get('/', ClienteController.getClientes);
router.post('/', ClienteController.createCliente);
router.get('/:id', ClienteController.getCliente);
router.put('/:id', ClienteController.updateCliente);
router.delete('/:id', ClienteController.deleteCliente);

module.exports = router;
