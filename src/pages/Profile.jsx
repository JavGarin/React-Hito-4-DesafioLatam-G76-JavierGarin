import React from 'react';

const Profile = () => {
    const email = "javiergarin@example.com";

    const handleLogout = () => {

        console.log('Logout clicked');
    };

    return (
        <div className="container mt-5">
            <h2>Perfil 🍕</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Nivel:</strong> ⭐⭐⭐⭐⭐</p>
            <p><strong>Puntos acumulados:</strong> 1934/2000⚡</p>
            <p><strong>Descuento:</strong> 15% 😉</p>
            <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default Profile;

