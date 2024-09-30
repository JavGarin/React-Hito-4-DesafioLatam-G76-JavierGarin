import React, { useState } from 'react';

const Register = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // validaciones
    if (!email || !password || !confirmPassword) {
    setError('Todos los campos son obligatorios.');
    return;
    }
    
    if (password.length < 6) {
    setError('La contraseña debe tener al menos 6 caracteres.');
    return;
    }

    if (password !== confirmPassword) {
    setError('Las contraseñas no coinciden.');
    return;
    }

    setSuccess('¡Registro exitoso!');
};

return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 w-50">
        <h2 className="text-center mb-4">Formulario de Registro</h2>
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
        <div className="form-group mb-3">
            <label>Confirmar Contraseña</label>
            <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
        {error && <p className="text-danger mt-3">{error}</p>}
        {success && <p className="text-success mt-3">{success}</p>}
    </div>
    </div>
);
};

export default Register;

