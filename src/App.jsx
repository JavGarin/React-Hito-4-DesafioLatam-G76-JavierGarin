import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './components/Home';
// import Register from './components/Register'; //
// import Login from './components/Login'; //

const App = () => {
    const [cart, setCart] = useState([]);

    // Función para agregar pizzas al carrito
    const addToCart = (pizza) => {
        // Verificar si la pizza ya está en el carrito
        const existingPizza = cart.find(item => item.id === pizza.id);

        if (existingPizza) {
            // Si ya está, solo incrementa la cantidad
            setCart(cart.map(item =>
                item.id === pizza.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            // Si no está, la añade al carrito con cantidad inicial 1
            setCart([...cart, { ...pizza, quantity: 1 }]);
        }
    };

    return (
        <div>
            <Navbar />
            <Home addToCart={addToCart} />
            {/* 
            <Register />
            <Login /> 
            */}
            <Cart cart={cart} setCart={setCart} />
            <Footer />
        </div>
    );
};

export default App;

