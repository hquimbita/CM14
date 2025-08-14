// src/components/ProtectedRoute.jsx - Componente para proteger rutas
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        <h2>Verificando autenticación...</h2>
      </div>
    );
  }

  // Si no está autenticado, redirigir a login
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si requiere admin y no es admin, mostrar acceso denegado
  if (requireAdmin && !isAdmin()) {
    return (
      <div className="access-denied">
        <div className="access-denied-card">
          <div className="access-denied-icon">🚫</div>
          <h2>Acceso Denegado</h2>
          <p>No tienes permisos suficientes para acceder a esta página.</p>
          <p>Se requieren permisos de administrador.</p>
          <button 
            className="btn btn-secondary"
            onClick={() => window.history.back()}
          >
            Volver Atrás
          </button>
        </div>

        <style jsx>{`
          .access-denied {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .access-denied-card {
            background: rgba(220, 53, 69, 0.1);
            border: 2px solid #dc3545;
            border-radius: 15px;
            padding: 3rem 2rem;
            text-align: center;
            max-width: 500px;
            backdrop-filter: blur(10px);
          }

          .access-denied-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          .access-denied-card h2 {
            color: #dc3545;
            margin-bottom: 1rem;
            font-size: 1.8rem;
          }

          .access-denied-card p {
            color: var(--text-color);
            margin-bottom: 1rem;
            opacity: 0.9;
          }

          .access-denied-card button {
            margin-top: 1rem;
          }
        `}</style>
      </div>
    );
  }

  // Si todo está bien, mostrar el contenido
  return children;
};

export default ProtectedRoute;