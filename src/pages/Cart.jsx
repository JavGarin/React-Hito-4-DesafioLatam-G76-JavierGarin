import React from 'react';

const Cart = ({ cart, setCart }) => {
    const handleIncrease = (id) => {
        setCart(cart.map(pizza => 
            pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        ));
    };

    const handleDecrease = (id) => {
        setCart(cart.map(pizza => 
            pizza.id === id && pizza.quantity > 1 ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        ));
    };

    const handleRemove = (id) => {
        setCart(cart.filter(pizza => pizza.id !== id));
    };

    const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Carrito de Compras</h2>
            <div className="row">
                {cart.map((pizza) => (
                    <div key={pizza.id} className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <img src={pizza.img} alt={`Imagen de ${pizza.name}`} className="card-img-top img-fluid" />
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
                                <button 
                                    className="btn btn-danger mt-3" 
                                    onClick={() => handleRemove(pizza.id)}
                                >
                                    Eliminar
                                </button>
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


