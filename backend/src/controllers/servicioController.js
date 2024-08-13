const { response } = require('express');
const ServicioService = require('../services/servicioService');

class ServicioController {
  async getServicios(req, res = response) {
    try {
      const Servicios = await ServicioService.getAllServicios();
      res.json(Servicios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createServicio(req, res = response) {
    try {
      const Servicio = await ServicioService.createServicio(req.body);
      res.json(Servicio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getServicio(req, res = response) {
    try {
      const Servicio = await ServicioService.getServicioById(req.params.id);
      res.json(Servicio);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async getServicioByIdentificacion(req, res = response) {
    try {
      const Servicio = await ServicioService.getServicioByIdentificacion(req.params.id);
      res.json(Servicio);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateServicio(req, res = response) {
    try {
      const Servicio = await ServicioService.updateServicio(req.params.id, req.body);
      res.json(Servicio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteServicio(req, res = response) {
    try {
      await ServicioService.deleteServicio(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new ServicioController();
