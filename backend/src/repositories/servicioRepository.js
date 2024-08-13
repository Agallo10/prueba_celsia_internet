const Servicio = require("../models/Servicio");

class ServicioRepository {
  async getAll() {
    return await Servicio.findAll();
  }

  async create(data) {
    return await Servicio.create(data);
  }

  async getById(id) {
    return await Servicio.findByPk(id);
  }
  async getByIdentificacion(id) {
    const servicioDb = await Servicio.findAll({where: {"identificacion": id}});
    if (!servicioDb) throw new Error('Servicio not found');
    return servicioDb;
  }

  async update(id, data) {
    const ServicioDb = await Servicio.findByPk(id);
    if (!ServicioDb) throw new Error('Servicio not found');
    return await ServicioDb.update(data);
  }

  async delete(id) {
    const ServicioDb = await Servicio.findByPk(id);
    if (!ServicioDb) throw new Error('Servicio not found');
    return await ServicioDb.destroy();
  }
}

module.exports = new ServicioRepository();
