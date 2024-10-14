import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Cart from './components/Cart'; //
// import Home from './components/Home'; //
import Pizza from './components/Pizza';
// import Register from './components/Register'; //
// import Login from './components/Login'; //

const App = () => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (pizza) => {
        const existingPizza = cart.find(item => item.id === pizza.id);

        if (existingPizza) {
            setCart(cart.map(item =>
                item.id === pizza.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...pizza, quantity: 1 }]);
        }
    };

    return (
        <div>
            <Navbar />
            {/*<Home addToCart={addToCart} />
            <Register />
            <Login />
            <Cart cart={cart} setCart={setCart} />
            */}
            <Pizza />
            <Footer />
        </div>
    );
};

export default App;

