import React, { useState, useEffect } from 'react';

const Pizza = () => {
    const [pizza, setPizza] = useState(null); // estado para almacenar la pizza

    useEffect(() => {

        fetch('http://localhost:5000/api/pizzas/p001')
            .then(response => response.json())
            .then(data => setPizza(data))
            .catch(error => console.error('Error fetching pizza:', error));
    }, []); // con array vacío aseguro que la petición se haga una sola vez al montar el componente

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
                            <li key={index}>{ingredient}</li> // mostrar cada ingrediente
                        ))}
                    </ul>
                    <h6 className="mt-3">Precio: ${pizza.price}</h6>
                    <button className="btn btn-primary w-100 mt-3">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;

