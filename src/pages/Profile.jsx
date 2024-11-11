import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { getProfile, logout } = useUser();
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const profile = await getProfile();
            if (profile && profile.email) { // verifica si profile existe y si tiene email
                setUserEmail(profile.email);
            } else {
                console.error('Error al cargar el perfil o el perfil no contiene email');
                navigate('/login'); // redirige al login si el perfil no es válido
            }
        };
        fetchProfile();
    }, [getProfile, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/login'); // redirige al login después del logout
    };

    return (
        <div className="container mt-5">
            <h2>Perfil 🍕</h2>
            {userEmail ? (
                <>
                    <p><strong>Nick:</strong> Javier Garin <strong>G-76</strong></p>
                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Nivel:</strong> ⭐⭐⭐⭐⭐</p>
                    <p><strong>Puntos acumulados:</strong> 1934/2000⚡</p>
                    <p><strong>Descuento:</strong> 15% 😉</p>
                    <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
                </>
            ) : (
                <p>Cargando perfil...</p>
            )}
        </div>
    );
};

export default Profile;