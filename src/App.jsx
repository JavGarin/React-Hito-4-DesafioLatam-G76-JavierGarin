import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Cart from "./components/Cart";

const App = () => {
    return (
    <div>
        <Navbar />
        <Home />
        {/* <Register /> */}
        {/* <Login /> */}
        <Cart />
        <Footer />
    </div>
    );
};

export default App;




