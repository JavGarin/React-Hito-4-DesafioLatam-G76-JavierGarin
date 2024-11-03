import React from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice } = useCart();
    const { token } = useUser();

    return (
        <div className="container mt-5 mb-5">
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
                                        onClick={() => decreaseQuantity(pizza.id)}
                                    >
                                        -
                                    </button>
                                    <button 
                                        className="btn btn-outline-dark me-2" 
                                        onClick={() => increaseQuantity(pizza.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    className="btn btn-danger mt-3" 
                                    onClick={() => removeFromCart(pizza.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <h3>Total: ${totalPrice.toLocaleString()}</h3>
                <button className="btn btn-success btn-lg" disabled={!token}>Pagar</button>
            </div>
        </div>
    );
};

export default Cart;
