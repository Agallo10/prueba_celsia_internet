const { response } = require('express');
const ClienteService = require('../services/clienteService');

class ClienteController {
  async getClientes(req, res = response) {
    try {
      const Clientes = await ClienteService.getAllClientes();
      res.json(Clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCliente(req, res = response) {
    try {
      const Cliente = await ClienteService.createCliente(req.body);
      res.json(Cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCliente(req, res = response) {
    try {
      const Cliente = await ClienteService.getClienteById(req.params.id);
      res.json(Cliente);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateCliente(req, res = response) {
    try {
      const Cliente = await ClienteService.updateCliente(req.params.id, req.body);
      res.json(Cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCliente(req, res = response) {
    try {
      await ClienteService.deleteCliente(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new ClienteController();
