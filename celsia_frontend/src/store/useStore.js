import create from 'zustand';
import celsiaApi from '../api/celsiaApi';

const useStore = create((set) => ({
  clientes: [],
  servicios: [],
  getClientes: async () => {
    const response = await celsiaApi.get('/api/clientes');
    set({ clientes: response.data });
  },
  getServicios: async () => {
    const response = await celsiaApi.get('/api/servicios');
    set({ servicios: response.data });
  },
  addCliente: async (cliente) => {
    const response = await celsiaApi.post('/api/clientes', cliente);
    set((state) => ({ clientes: [...state.clientes, response.data] }));
  },
  updateCliente: async (id, updatedCliente) => {
    const response = await celsiaApi.put(`/api/clientes/${id}`, updatedCliente);
    set((state) => ({
      clientes: state.clientes.map(cliente => cliente.id === id ? response.data : cliente),
    }));
  },
  deleteCliente: async (id) => {
    await celsiaApi.delete(`/api/clientes/${id}`);
    set((state) => ({
      clientes: state.clientes.filter(cliente => cliente.id !== id),
    }));
  },
  addServicio: async (servicio) => {
    const response = await celsiaApi.post('/api/servicios', servicio);
    set((state) => ({ servicios: [...state.servicios, response.data] }));
  },

  updateServicio: async (id, updatedServicio) => {
    const response = await celsiaApi.put(`/api/servicios/${id}`, updatedServicio);
    set((state) => ({
      servicios: state.servicios.map(servicio => servicio.id === id ? response.data : servicio),
    }));
  },
  deleteServicio: async (id) => {
    await celsiaApi.delete(`/api/servicios/${id}`);
    set((state) => ({
      servicios: state.servicios.filter(servicio => servicio.id !== id),
    }));
  },
  getServicioByIdCli: async (id) => {
    await celsiaApi.delete(`/api/servicios/identificacion/${id}`);
    set((state) => ({
      servicios: [...state.servicios, response.data],
    }));
  },
  
}));

export default useStore;
