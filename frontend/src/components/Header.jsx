// src/components/Header.jsx - Header compacto para vista horizontal
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  // Detectar orientación horizontal
  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerHeight < 500 && window.innerWidth > window.innerHeight);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Inicio', icon: '🏠', public: true },
    { path: '/equipos', label: 'Equipos', icon: '⚽', public: true },
    { path: '/partidos', label: 'Partidos', icon: '🟢', public: true },
    { path: '/posiciones', label: 'Posiciones', icon: '🏆', public: true },
    { path: '/fase-final', label: 'Fase Final', icon: '🥇', public: true },
    { path: '/admin', label: 'Admin', icon: '⚙️', adminOnly: true },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
      toast.success('👋 Sesión cerrada exitosamente');
      navigate('/');
    } catch (error) {
      toast.error('Error al cerrar sesión');
    }
  };

  const filteredNavItems = navItems.filter(item => {
    if (item.adminOnly) {
      return isAuthenticated() && isAdmin();
    }
    return true;
  });

  return (
    <motion.header 
      className={`header ${isLandscape ? 'header-landscape' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <nav className="nav">
          {/* Logo adaptativo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="logo">
              <motion.span
                animate={{ 
                  textShadow: [
                    '0 0 10px #00dd4c',
                    '0 0 20px #00dd4c',
                    '0 0 10px #00dd4c'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ⚽
              </motion.span>
              <span className="logo-text">
                {isLandscape ? 'CM14ED' : 'COPA MARACANÁ 14ED'}
              </span>
            </Link>
          </motion.div>

          {/* Enlaces de navegación - Ocultos en landscape móvil */}
          {!isLandscape && (
            <ul className="nav-links">
              {filteredNavItems.map((item, index) => (
                <motion.li 
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <motion.div
                      className="nav-item"
                      whileHover={{ 
                        scale: 1.1,
                        textShadow: "0 0 8px #00dd4c"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-text">{item.label}</span>
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Sección de usuario compacta */}
          <div className="user-section">
            {isAuthenticated() ? (
              <motion.div 
                className="user-menu-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className={`user-button ${isLandscape ? 'user-button-compact' : ''}`}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="user-avatar">
                    {user?.role === 'admin' ? '👑' : '👤'}
                  </div>
                  {!isLandscape && (
                    <div className="user-info">
                      <span className="user-name">{user?.nombre}</span>
                      <span className="user-role">{user?.role}</span>
                    </div>
                  )}
                  <span className="dropdown-arrow">
                    {showUserMenu ? '▲' : '▼'}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      className="user-dropdown"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="dropdown-header">
                        <strong>{user?.username}</strong>
                        <span>{user?.email}</span>
                      </div>
                      <div className="dropdown-divider"></div>
                      <button 
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        🚪 Cerrar Sesión
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                className={`auth-buttons ${isLandscape ? 'auth-buttons-compact' : ''}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/login" className="btn btn-secondary btn-small">
                    {isLandscape ? 'Login' : 'Iniciar Sesión'}
                  </Link>
                </motion.div>
                {!isLandscape && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/register" className="btn btn-small">
                      Registrarse
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </nav>
      </div>

      {/* Overlay para cerrar menú */}
      {showUserMenu && (
        <div 
          className="menu-overlay" 
          onClick={() => setShowUserMenu(false)}
        />
      )}

      {/* Estilos optimizados para landscape */}
      <style jsx>{`
        .user-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-menu-container {
          position: relative;
        }

        .user-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 0.5rem 1rem;
          color: var(--text-color);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .user-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary-color);
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .user-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .user-role {
          font-size: 0.75rem;
          color: var(--primary-color);
          text-transform: uppercase;
          font-weight: 500;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          color: var(--primary-color);
          transition: transform 0.3s ease;
        }

        .user-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          min-width: 200px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 1000;
        }

        .dropdown-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .dropdown-header strong {
          color: var(--primary-color);
          font-size: 0.9rem;
        }

        .dropdown-header span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
        }

        .dropdown-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0.75rem 0;
        }

        .dropdown-item {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          color: var(--text-color);
          padding: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .dropdown-item:hover {
          background: rgba(220, 53, 69, 0.2);
          color: #dc3545;
        }

        .auth-buttons {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999;
          background: transparent;
        }

        .logo-text {
          margin-left: 0.5rem;
        }

        /* ====================================
           ESTILOS PARA VISTA HORIZONTAL
           ================================== */
        
        /* Header compacto en landscape */
        .header-landscape {
          padding: 5px 0 !important; /* Reducido drásticamente */
        }

        .header-landscape .nav {
          padding: 0.25rem 0; /* Padding mínimo */
        }

        .header-landscape .logo {
          font-size: 1rem; /* Logo más pequeño */
          line-height: 1;
        }

        .header-landscape .logo-text {
          font-size: 0.85rem;
          margin-left: 0.25rem;
        }

        /* Usuario compacto en landscape */
        .user-button-compact {
          padding: 0.25rem 0.5rem !important;
          border-radius: 20px;
          gap: 0.5rem;
        }

        .user-button-compact .user-avatar {
          width: 24px;
          height: 24px;
          font-size: 1rem;
        }

        .user-button-compact .dropdown-arrow {
          font-size: 0.6rem;
        }

        /* Auth buttons compactos */
        .auth-buttons-compact {
          gap: 0.5rem;
        }

        .auth-buttons-compact .btn {
          padding: 0.25rem 0.75rem;
          font-size: 0.8rem;
        }

        /* Responsive normal */
        @media (max-width: 768px) {
          .user-info {
            display: none;
          }
          
          .auth-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .user-dropdown {
            right: -1rem;
            min-width: 180px;
          }

          .nav-links {
            display: none;
          }
        }

        /* Optimización adicional para landscape móvil */
        @media (max-height: 500px) and (orientation: landscape) {
          .header {
            padding: 3px 0 !important;
          }
          
          .nav {
            padding: 0.2rem 0;
          }
          
          .logo {
            font-size: 0.9rem;
          }
          
          .logo-text {
            font-size: 0.8rem;
          }
          
          .user-button {
            padding: 0.2rem 0.4rem;
          }
          
          .user-avatar {
            width: 22px;
            height: 22px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .auth-buttons {
            gap: 0.25rem;
          }
          
          .btn-small {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;