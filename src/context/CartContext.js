import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext); // uso de useContext

export const CartProvider = ({ children }) => {
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

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0); // uso del .reduce para los valores del array

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
