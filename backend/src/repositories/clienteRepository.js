const Cliente = require('../models/cliente');

class ClienteRepository {
  async getAll() {
    return await Cliente.findAll();
  }

  async create(data) {
    
    const {identificacion} = data;

    const ClienteDb = await Cliente.findByPk(identificacion);
    if (ClienteDb) throw new Error('El registro ya existe');
    return await Cliente.create(data);
  }

  async getById(id) {
    return await Cliente.findByPk(id);
  }

  async update(id, data) {
    const ClienteDb = await Cliente.findByPk(id);
    if (!ClienteDb) throw new Error('Cliente not found');
    return await ClienteDb.update(data);
  }

  async delete(id) {
    const ClienteDb = await Cliente.findByPk(id);
    if (!ClienteDb) throw new Error('Cliente not found');
    return await ClienteDb.destroy();
  }
}

module.exports = new ClienteRepository();
