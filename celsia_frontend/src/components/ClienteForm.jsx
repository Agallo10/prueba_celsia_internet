// src/components/ClienteForm.jsx
import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import '../components/ClienteFront.css';

const ClienteForm = () => {
  const [cliente, setCliente] = useState({
    identificacion: '',
    nombres: '',
    apellidos: '',
    tipoIdentificacion: 'CC', // Valor por defecto
    numeroCelular: '',
    correoElectronico: '',
    fechaNacimiento: '', // Nuevo campo
  });

  const { clientes, getClientes, addCliente, deleteCliente, updateCliente } = useStore();

  useEffect(() => {
    getClientes();
  }, [getClientes, addCliente, deleteCliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCliente(cliente);
    setCliente({
      identificacion: '',
      nombres: '',
      apellidos: '',
      tipoIdentificacion: 'CC',
      numeroCelular: '',
      correoElectronico: '',
      fechaNacimiento: '',
    });
  };

  const handleDelete = (id) => {
    deleteCliente(id);
  };

  const handleUpdate = (id) => {
    const updatedCliente = clientes.find(c => c.id === id);
    updateCliente(id, updatedCliente);
  };

  return (
        <div className="cliente-form-container">
          <h2>Formulario de Cliente</h2>
          <form onSubmit={handleSubmit} className="cliente-form">
            <div className="form-group">
              <label htmlFor="identificacion">Identificación:</label>
              <input id="identificacion" name="identificacion" value={cliente.identificacion} onChange={handleChange} placeholder="Identificación" />
            </div>
    
            <div className="form-group">
              <label htmlFor="nombres">Nombres:</label>
              <input id="nombres" name="nombres" value={cliente.nombres} onChange={handleChange} placeholder="Nombres" />
            </div>
    
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos:</label>
              <input id="apellidos" name="apellidos" value={cliente.apellidos} onChange={handleChange} placeholder="Apellidos" />
            </div>
    
            <div className="form-group">
              <label htmlFor="tipoIdentificacion">Tipo de Identificación:</label>
              <select id="tipoIdentificacion" name="tipoIdentificacion" value={cliente.tipoIdentificacion} onChange={handleChange}>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="RC">Registro Civil</option>
              </select>
            </div>
    
            <div className="form-group">
              <label htmlFor="numeroCelular">Número de Celular:</label>
              <input id="numeroCelular" name="numeroCelular" value={cliente.numeroCelular} onChange={handleChange} placeholder="Número de Celular" />
            </div>
    
            <div className="form-group">
              <label htmlFor="correoElectronico">Correo Electrónico:</label>
              <input id="correoElectronico" name="correoElectronico" value={cliente.correoElectronico} onChange={handleChange} placeholder="Correo Electrónico" />
            </div>
    
            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
              <input id="fechaNacimiento" name="fechaNacimiento" value={cliente.fechaNacimiento} onChange={handleChange} type="date" />
            </div>
    
            <button type="submit" className="submit-button">Agregar Cliente</button>
          </form>
    
          <h2>Lista de Clientes</h2>
          <table className="cliente-table">
            <thead>
              <tr>
                <th>Identificación</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tipo de Identificación</th>
                <th>Número de Celular</th>
                <th>Correo Electrónico</th>
                <th>Fecha de Nacimiento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td><input type="text" value={cliente.identificacion} onChange={(e) => updateCliente(cliente.id, { ...cliente, identificacion: e.target.value })} /></td>
                  <td><input type="text" value={cliente.nombres} onChange={(e) => updateCliente(cliente.id, { ...cliente, nombres: e.target.value })} /></td>
                  <td><input type="text" value={cliente.apellidos} onChange={(e) => updateCliente(cliente.id, { ...cliente, apellidos: e.target.value })} /></td>
                  <td>
                    <select value={cliente.tipoIdentificacion} onChange={(e) => updateCliente(cliente.id, { ...cliente, tipoIdentificacion: e.target.value })}>
                      <option value="CC">Cédula de Ciudadanía</option>
                      <option value="TI">Tarjeta de Identidad</option>
                      <option value="CE">Cédula de Extranjería</option>
                      <option value="RC">Registro Civil</option>
                    </select>
                  </td>
                  <td><input type="text" value={cliente.numeroCelular} onChange={(e) => updateCliente(cliente.id, { ...cliente, numeroCelular: e.target.value })} /></td>
                  <td><input type="email" value={cliente.correoElectronico} onChange={(e) => updateCliente(cliente.id, { ...cliente, correoElectronico: e.target.value })} /></td>
                  <td><input type="date" value={cliente.fechaNacimiento} onChange={(e) => updateCliente(cliente.id, { ...cliente, fechaNacimiento: e.target.value })} /></td>
                  <td>
                    {/* <button onClick={() => handleUpdate(cliente.id)}>Actualizar</button> */}
                    <button onClick={() => handleDelete(cliente.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default ClienteForm;
