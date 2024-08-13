const ServicioRepository = require('../repositories/servicioRepository');

class ServicioService {
  async getAllServicios() {
    return await ServicioRepository.getAll();
  }

  async createServicio(data) {
    return await ServicioRepository.create(data);
  }

  async getServicioById(id) {
    return await ServicioRepository.getById(id);
  }

  async getServicioByIdentificacion(id) {
    return await ServicioRepository.getByIdentificacion(id);
  }

  async updateServicio(id, data) {
    return await ServicioRepository.update(id, data);
  }

  async deleteServicio(id) {
    return await ServicioRepository.delete(id);
  }
}

module.exports = new ServicioService();
