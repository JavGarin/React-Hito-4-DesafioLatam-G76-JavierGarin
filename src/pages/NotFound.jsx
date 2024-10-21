import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe 😢</p>

            <div className="pizza-animation">
                <img 
                    src="/img/PizzaSteve.jpg"
                    alt="Pizza Steve"
                    width="200"
                />
            </div>

            <Link to="/" className="back-home-btn">
                Regresar a Home
            </Link>
        </div>
    );
};

export default NotFound;



