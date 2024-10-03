import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';  // Importar el JS de Bootstrap para funcionalidades interactivas

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ms-3">Pizzería Mamma Mía</a>

      {/* Botón para mostrar la navegación en pantallas pequeñas */}
      <button 
        className="navbar-toggler me-2" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent" 
        aria-controls="navbarContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Contenido de la barra de navegación */}
      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="d-flex flex-column flex-lg-row"> {/* Se apilan en columna solo en pantallas pequeñas */}
          <button className="btn btn-dark me-2 border border-warning">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-dark me-2 border border-warning">🔓 Profile</button>
              <button className="btn btn-dark me-2 border border-warning">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-dark me-2 border border-warning">🔐 Login</button>
              <button className="btn btn-dark me-2 border border-warning">🔐 Register</button>
            </>
          )}
        </div>
        <div className="ms-auto mt-2 mt-lg-0">
          <button className="btn btn-dark border border-warning me-3">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
