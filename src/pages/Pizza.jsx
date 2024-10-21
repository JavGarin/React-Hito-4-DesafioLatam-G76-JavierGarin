import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = ({ addToCart }) => {
    const { pizzaId } = useParams(); // el ID de la pizza de los parámetros de la URL
    const [pizza, setPizza] = useState(null);

    useEffect(() => {

        const fetchPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error('Error fetching pizza:', error);
            }
        };

        fetchPizza();
    }, [pizzaId]);

    if (!pizza) {
        return <div>Cargando pizza...</div>;
    }

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card" style={{ width: '24rem' }}>
                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{pizza.name}</h5>
                    <p className="card-text" style={{ textAlign: 'justify' }}>{pizza.desc}</p>
                    <h6>Ingredientes:</h6>
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h6 className="mt-3">Precio: ${pizza.price.toLocaleString()}</h6>
                    <button 
                        className="btn btn-primary w-100 mt-3"
                        onClick={() => addToCart(pizza)} // Añado la pizza al carrito
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;