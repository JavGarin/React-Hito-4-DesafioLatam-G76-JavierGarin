import React, { useState } from 'react';
import { pizzas } from '../data/pizzas'; // Reutilizando el archivo de datos

const Cart = () => {
    // Simular estado del carrito
    const [cart, setCart] = useState(
        pizzas.map(pizza => ({
            ...pizza,
            quantity: 1 // Añadiendo cantidad inicial
        }))
    );

    // Función para aumentar la cantidad de pizzas
    const handleIncrease = (id) => {
        setCart(cart.map(pizza =>
            pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        ));
    };

    // Función para disminuir la cantidad de pizzas
    const handleDecrease = (id) => {
        setCart(cart.map(pizza =>
            pizza.id === id && pizza.quantity > 1 ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        ).filter(pizza => pizza.quantity > 0));
    };

    // Calcular el total del carrito
    const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Carrito de Compras</h2>
            <div className="row">
                {cart.map((pizza) => (
                    <div key={pizza.id} className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            {/* Reutilizando la imagen de pizzas.js */}
                            <img src={pizza.image} alt={pizza.name} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
                                <p className="card-text">Cantidad: {pizza.quantity}</p>
                                <div className="d-flex">
                                    <button 
                                        className="btn btn-outline-dark me-2" 
                                        onClick={() => handleDecrease(pizza.id)}
                                    >
                                        -
                                    </button>
                                    <button 
                                        className="btn btn-outline-dark me-2" 
                                        onClick={() => handleIncrease(pizza.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Total: ${total.toLocaleString()}</h3>
            <button className="btn btn-success">Pagar</button>
        </div>
    );
};

export default Cart;
