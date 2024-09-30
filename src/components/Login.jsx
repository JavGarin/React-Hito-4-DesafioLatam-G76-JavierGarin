import React, { useState } from 'react';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // validaciones
    if (!email || !password) {
    setError('Todos los campos son obligatorios.');
    return;
    }
    // el password debe tener mínimo 6 caracteres
    if (password.length < 6) {
    setError('La contraseña debe tener al menos 6 caracteres.');
    return;
    }

    // si los datos son correctos
    setSuccess('¡Inicio de sesión exitoso!');
};

return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 w-50">
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
            <label>Email</label>
            <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="form-group mb-3">
            <label>Contraseña</label>
            <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
        </form>
        {error && <p className="text-danger mt-3">{error}</p>}
        {success && <p className="text-success mt-3">{success}</p>}
    </div>
    </div>
);
};

export default Login;
