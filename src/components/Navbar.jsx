import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext'; // importando hook del UserContext

const Navbar = () => {
    const { totalPrice } = useCart();
    const { token, logout } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand ms-3">Pizzería Mamma Mía</Link>
            <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <div className="d-flex flex-column flex-lg-row">
                    <Link to="/" className="btn btn-dark me-2 border border-warning">🍕 Home</Link>
                    {token ? ( // aplicando token
                        <>
                            <Link to="/profile" className="btn btn-dark me-2 border border-warning">🔓 Profile</Link>
                            <button className="btn btn-dark me-2 border border-warning" onClick={logout}>🔒 Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-dark me-2 border border-warning">🔐 Login</Link>
                            <Link to="/register" className="btn btn-dark me-2 border border-warning">🔐 Register</Link>
                        </>
                    )}
                </div>
                <div className="ms-auto mt-2 mt-lg-0">
                    <Link to="/cart" className="btn btn-dark border border-warning me-3">
                        🛒 Total: ${totalPrice.toLocaleString()}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;