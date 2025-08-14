// src/pages/Register.jsx - Página de registro
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nombre: ''
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword, nombre } = formData;

    if (!username || !email || !password || !confirmPassword || !nombre) {
      toast.error('Por favor completa todos los campos');
      return false;
    }

    if (username.length < 3) {
      toast.error('El usuario debe tener al menos 3 caracteres');
      return false;
    }

    if (!email.includes('@')) {
      toast.error('Por favor ingresa un email válido');
      return false;
    }

    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      const { confirmPassword, ...registerData } = formData;
      const result = await register(registerData);
      
      if (result.success) {
        toast.success('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión');
        navigate('/login');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <motion.div
          className="auth-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="auth-header">
            <motion.div
              className="auth-logo"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              ⚽
            </motion.div>
            <h1>Crear Cuenta</h1>
            <p>Únete a Copa Maracaná 14ED</p>
          </div>

          {/* Formulario */}
          <form className="auth-form" onSubmit={handleSubmit}>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Elige un nombre de usuario"
                required
                minLength={3}
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                required
                minLength={6}
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repite tu contraseña"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="auth-button"
              disabled={loading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <span className="loading-text">
                  <span className="spinner"></span>
                  Creando cuenta...
                </span>
              ) : (
                'Crear Cuenta'
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <motion.div
            className="auth-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <p>
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="auth-link">
                Inicia sesión aquí
              </Link>
            </p>
          </motion.div>

          {/* Información sobre roles */}
          <motion.div
            className="role-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h4>ℹ️ Información de cuenta</h4>
            <div className="info-list">
              <div className="info-item">
                📖 <strong>Rol inicial:</strong> Viewer (solo lectura)
              </div>
              <div className="info-item">
                👑 <strong>Para ser Admin:</strong> Contacta al organizador
              </div>
              <div className="info-item">
                🔒 <strong>Datos seguros:</strong> Tu información está protegida
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Estilos específicos para registro */}
      <style jsx>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #1e0a3c, #12121c, #0a2c3c);
        }

        .auth-container {
          width: 100%;
          max-width: 500px;
        }

        .auth-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 2.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-logo {
          font-size: 4rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 20px rgba(0, 221, 76, 0.5));
        }

        .auth-header h1 {
          color: var(--primary-color);
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
        }

        .auth-form {
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-group input {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(0, 221, 76, 0.1);
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .form-group input:invalid {
          border-color: rgba(220, 53, 69, 0.5);
        }

        .form-group input:valid {
          border-color: rgba(0, 221, 76, 0.3);
        }

        .auth-button {
          width: 100%;
          padding: 1rem;
          background: var(--primary-color);
          color: #000;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .auth-button:hover:not(:disabled) {
          background: rgba(0, 221, 76, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 221, 76, 0.3);
        }

        .auth-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .auth-footer {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-footer p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .auth-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .auth-link:hover {
          color: rgba(0, 221, 76, 0.8);
          text-decoration: underline;
        }

        .role-info {
          background: rgba(0, 102, 204, 0.1);
          border: 1px solid rgba(0, 102, 204, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
        }

        .role-info h4 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-item {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          text-align: left;
        }

        .info-item strong {
          color: var(--secondary-color);
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 2rem 1.5rem;
          }
          
          .auth-logo {
            font-size: 3rem;
          }
          
          .auth-header h1 {
            font-size: 1.5rem;
          }

          .form-group {
            margin-bottom: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;