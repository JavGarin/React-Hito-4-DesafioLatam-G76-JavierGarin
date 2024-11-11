import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // método para iniciar sesión para consumir la ruta /api/auth/login requerido para el hito
    const login = useCallback(async (email, password) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login fallido: verifica tus credenciales.');
            }

            const data = await response.json();
            setToken(data.token); // guarda el token obtenido de la respuesta
            setEmail(data.email); // guarda el email obtenido de la respuesta
            navigate('/profile'); // redirige al perfil después del login
        } catch (error) {
            console.error('Error en login:', error);
        }
    }, [navigate]);

    // método para registrar un usuario y consumir la ruta /api/auth/register del hito 8
    const register = useCallback(async (email, password) => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Registro fallido.');
            }

            const data = await response.json();
            setToken(data.token);
            setEmail(data.email);
            navigate('/profile');
        } catch (error) {
            console.error('Error en registro:', error);
        }
    }, [navigate]);

    // método para el cierre de sesión
    const logout = useCallback(() => {
        setToken(null);
        setEmail('');
        navigate('/'); // se redirige a la página de inicio, después de cerrar sesión
    }, [navigate]);

    // método para obtener el perfil del usuario autenticado y consume la ruta /api/auth/me
    const getProfile = useCallback(async () => {
        if (!token) return null; // si no hay token, se retorna null

        try {
            const response = await fetch('/api/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Error al obtener el perfil.');
            }

            const profileData = await response.json();
            setEmail(profileData.email); // se actualiza el email en el contexto
            return profileData;
        } catch (error) {
            console.error('Error al obtener el perfil:', error);
            logout(); // se cierra sesión si hay un error de autenticación
            return null;
        }
    }, [token, logout]);

    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);