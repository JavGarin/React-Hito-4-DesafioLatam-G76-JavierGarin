import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className="position-relative">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" 
                alt="Pizzas" 
                className="img-fluid w-100" 
                style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1>Pizzería Mamma Mía</h1>
                <p>Las mejores pizzas de la ciudad.</p>
            </div>
        </header>
    );
};

export default Header;

