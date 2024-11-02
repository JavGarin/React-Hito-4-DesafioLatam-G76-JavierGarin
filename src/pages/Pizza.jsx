import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams requerido

const Pizza = ({ addToCart }) => {
    const { pizzaId } = useParams(); // el ID de la pizza de los parámetros de la URL, useParams 
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null); // agrego estado para manejar los errores

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);

                // manejo del estado de la respuesta, ocupo el try catch por una buena práctica 
                if (!response.ok) {
                    throw new Error('Pizza no encontrada');
                }

                const data = await response.json();
                setPizza(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching pizza:', error);
            }
        };

        fetchPizza();
    }, [pizzaId]);

    if (error) {
        return <div className="alert alert-danger">Error: {error}</div>; // para el mensaje de error
    }

    if (!pizza) {
        return <div>Cargando pizza...</div>; // mensaje de carga
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
                        onClick={() => addToCart(pizza)} // añado la pizza al carrito
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
