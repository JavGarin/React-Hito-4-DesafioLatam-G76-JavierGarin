import React from 'react';
import { pizzas } from '../data/pizzas'; // Importamos el array de pizzas
import Header from './Header';
import CardPizza from './CardPizza';

const Home = ({ addToCart }) => {
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
                                ingredients={pizza.description.split(", ")} // Dividir los ingredientes en un array
                                img={pizza.image}
                                onAddToCart={() => addToCart(pizza)} // Pasamos la pizza seleccionada al carrito
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
