// src/App.jsx
import React from 'react';
import ClienteForm from './components/ClienteForm';
import ServicioForm from './components/ServicioForm';

const App = () => {
  return (
    <div>
      <h1>CRUD de Clientes y Servicios</h1>
      <ClienteForm />
      <ServicioForm />
    </div>
  );
};

export default App;
