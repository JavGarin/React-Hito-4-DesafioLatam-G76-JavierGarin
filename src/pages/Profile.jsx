import React from 'react';

const Profile = () => {
    const email = "usuario@example.com";

    const handleLogout = () => {

        console.log('Logout clicked');
    };

    return (
        <div className="container mt-5">
            <h2>Perfil</h2>
            <p>Email: {email}</p>
            <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default Profile;

