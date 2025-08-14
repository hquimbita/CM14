// src/pages/Login.jsx - Versión FUNCIONAL y SEGURA
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // REAL: Tu función de autenticación
  const navigate = useNavigate(); // REAL: Para navegación

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    
    try {
      const result = await login(formData); // REAL: Tu función de login
      
      if (result.success) {
        toast.success(`¡Bienvenido ${result.user.nombre}!`);
        navigate('/'); // REAL: Redirige al home después del login
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
            <h1>Copa Maracaná 14ED</h1>
            <p>Inicia sesión para continuar</p>
          </div>

          {/* Formulario */}
          <form className="auth-form" onSubmit={handleSubmit}>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="username">Usuario o Email</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Ingresa tu usuario o email"
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="auth-button"
              disabled={loading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <span className="loading-text">
                  <span className="spinner"></span>
                  Iniciando sesión...
                </span>
              ) : (
                'Iniciar Sesión'
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <motion.div
            className="auth-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="auth-link">
                Regístrate aquí
              </Link>
            </p>
          </motion.div>

          {/* ELIMINADO: Toda la sección de cuentas demo */}
          {/* Ya no hay información sensible expuesta */}
        </motion.div>
      </div>

      {/* Estilos que ya tienes en tu CSS */}
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
          max-width: 450px;
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
        }
      `}</style>
    </div>
  );
};

export default Login;