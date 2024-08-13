// src/components/ServicioForm.jsx
import React, { useState, useEffect } from "react";
import useStore from "../store/useStore";
import "../components/ServicioFront.css";

const ServicioForm = () => {
  const [servicio, setServicio] = useState({
    identificacion: "",
    servicio: "",
    ultimoPago: "",
    fechaInicio: "",
    ultimaFacturacion: "",
  });

  const {
    servicios,
    getServicios,
    addServicio,
    deleteServicio,
    updateServicio,
  } = useStore();

  useEffect(() => {
    getServicios();
  }, [getServicios, addServicio, deleteServicio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServicio({
      ...servicio,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addServicio(servicio);
    setServicio({
      identificacion: "",
      servicio: "Internet 200 MB",
      ultimoPago: "",
      fechaInicio: "",
      ultimaFacturacion: "",
      ultimaFacturacion: "",
      id_cliente: "",
    });
  };

  const handleDelete = (id) => {
    deleteServicio(id);
  };

//   const handleUpdate = (id) => {
//     const updatedServicio = prompt(
//       "Ingresa los nuevos valores en formato JSON",
//       JSON.stringify(servicios.find((s) => s.id === id))
//     );
//     if (updatedServicio) {
//       updateServicio(id, JSON.parse(updatedServicio));
//     }
//   };

  return (
    <div className="servicio-form-container">
      <h2>Formulario de Servicio</h2>
      <form onSubmit={handleSubmit} className="servicio-form">
        <div className="form-group">
          <label htmlFor="identificacion">Identificación del Cliente:</label>
          <input
            id="identificacion"
            name="identificacion"
            value={servicio.identificacion}
            onChange={handleChange}
            placeholder="Identificación del servicio"
          />
        </div>

        <div className="form-group">
          <label htmlFor="servicio">Servicio:</label>
          <select id="servicio" name="servicio" value={servicio.servicio} onChange={handleChange}>
                <option value="Internet 200 MB">Internet 200 MB</option>
                <option value="Internet 400 MB">Internet 400 MB                </option>
                <option value="Internet 600 MB">nternet 600 MB</option>
                <option value="Directv Go">Directv Go</option>
                <option value="Paramount+">Paramount+</option>
                <option value="Win+">Win+</option>
              </select>
        </div>

        <div className="form-group">
          <label htmlFor="ultimoPago">Último Pago:</label>
          <input
            id="ultimoPago"
            name="ultimoPago"
            value={servicio.ultimoPago}
            onChange={handleChange}
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaInicio">Fecha de Inicio:</label>
          <input
            id="fechaInicio"
            name="fechaInicio"
            value={servicio.fechaInicio}
            onChange={handleChange}
            type="date"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ultimaFacturacion">Última Facturación:</label>
          <input
            id="ultimaFacturacion"
            name="ultimaFacturacion"
            value={servicio.ultimaFacturacion}
            onChange={handleChange}
            type="date"
          />
        </div>


        <button type="submit" className="submit-button">
          Agregar Servicio
        </button>
      </form>

      <h2>Lista de Servicios</h2>
      <table className="servicio-table">
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Servicio</th>
            <th>Último Pago</th>
            <th>Fecha de Inicio</th>
            <th>Última Facturación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((servicio) => (
            <tr key={servicio.id}>
              <td>
                <input
                  type="text"
                  value={servicio.identificacion}
                  onChange={(e) =>
                    updateServicio(servicio.id, {
                      ...servicio,
                      identificacion: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={servicio.servicio}
                  onChange={(e) =>
                    updateServicio(servicio.id, {
                      ...servicio,
                      servicio: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={servicio.ultimoPago}
                  onChange={(e) =>
                    updateServicio(servicio.id, {
                      ...servicio,
                      ultimoPago: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={servicio.fechaInicio}
                  onChange={(e) =>
                    updateServicio(servicio.id, {
                      ...servicio,
                      fechaInicio: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={servicio.ultimaFacturacion}
                  onChange={(e) =>
                    updateServicio(servicio.id, {
                      ...servicio,
                      ultimaFacturacion: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                {/* <button onClick={() => handleUpdate(servicio.id)}>
                  Actualizar
                </button> */}
                <button onClick={() => handleDelete(servicio.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ServicioForm;
