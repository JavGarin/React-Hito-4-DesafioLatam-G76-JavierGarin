import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ms-3">Pizzería Mamma Mía</a>
      <div className="d-flex">
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
      <div className="ms-auto">
        <button className="btn btn-dark border border-warning me-3">🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
  );
};

export default Navbar;




