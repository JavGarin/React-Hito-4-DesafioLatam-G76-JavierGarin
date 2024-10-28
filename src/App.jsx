import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        setCart(prevCart => {
            const existingPizza = prevCart.find(item => item.id === pizza.id);
            if (existingPizza) {
                return prevCart.map(item =>
                    item.id === pizza.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...pizza, quantity: 1 }];
            }
        });
    };

    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar total={totalPrice} />
            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                    <Route path="/pizza/:pizzaId" element={<Pizza addToCart={addToCart} />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
