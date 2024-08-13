const ClienteRepository = require('../repositories/clienteRepository');

class ClienteService {
  async getAllClientes() {
    return await ClienteRepository.getAll();
  }

  async createCliente(data) {
    return await ClienteRepository.create(data);
  }

  async getClienteById(id) {
    return await ClienteRepository.getById(id);
  }

  async updateCliente(id, data) {
    return await ClienteRepository.update(id, data);
  }

  async deleteCliente(id) {
    return await ClienteRepository.delete(id);
  }
}

module.exports = new ClienteService();
