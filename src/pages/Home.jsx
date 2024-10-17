import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = ({ addToCart }) => {
    const [pizzas, setPizzas] = useState([]); // estado para almacenar las pizzas

    // useEffect para consumir la API
    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas');
                const data = await response.json();
                setPizzas(data);
            } catch (error) {
                console.error('Error fetching pizzas:', error);
            }
        };

        fetchPizzas();
    }, []);

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="col-md-4 d-flex justify-content-center mb-4">
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                onAddToCart={() => addToCart(pizza)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
