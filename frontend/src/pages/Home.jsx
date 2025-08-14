// src/pages/Home.jsx - Página Principal Copa Maracaná 14ED
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const Home = () => {
  const [torneoInfo, setTorneoInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await apiService.getTorneoInfo();
        setTorneoInfo(data);
      } catch (error) {
        console.error('Error cargando datos:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <h2>Cargando Copa Maracaná 14ED...</h2>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content glass-card">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="hero-logo"
          >
            <div className="logo-container">
              <motion.span
                className="logo-emoji"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ⚽
              </motion.span>
            </div>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {torneoInfo?.torneo?.nombre || 'Copa Maracaná 14ED'}
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {torneoInfo?.torneo?.tipo === 'futbol-7' ? 'El torneo más emocionante de fútbol 7' : 'Torneo deportivo'}
          </motion.p>

          <motion.div 
            className="hero-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className="info-item">
              🏢 {torneoInfo?.torneo?.organizador}
            </span>
            <span className="info-item">
              🏟️ {torneoInfo?.torneo?.complejo}, {torneoInfo?.torneo?.ciudad}
            </span>
            <span className="info-item">
              📅 {torneoInfo?.torneo?.año} - {torneoInfo?.torneo?.temporada}
            </span>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Link to="/partidos" className="btn btn-large">
              🏟️ Ver Partidos
            </Link>
            <Link to="/posiciones" className="btn btn-secondary btn-large">
              🏆 Posiciones
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Estadísticas rápidas */}
      {torneoInfo?.estadisticas && (
        <motion.section 
          className="stats-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <h2 className="section-title">Estadísticas del Torneo</h2>
          
          <div className="grid-container grid-4">
            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon">⚽</div>
              <h3>{torneoInfo.estadisticas.totalEquipos}</h3>
              <p>Equipos Participantes</p>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon">🏟️</div>
              <h3>{torneoInfo.estadisticas.totalPartidos}</h3>
              <p>Partidos Programados</p>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon">📅</div>
              <h3>{torneoInfo.estadisticas.totalFechas}</h3>
              <p>Fechas del Torneo</p>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon">🏆</div>
              <h3>{torneoInfo.torneo?.grupos?.length || 3}</h3>
              <p>Grupos</p>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Enlaces rápidos */}
      <motion.section 
        className="quick-links"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <h2 className="section-title">Navegación Rápida</h2>
        
        <div className="grid-container grid-2">
          <motion.div 
            className="glass-card quick-link-card"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0, 221, 76, 0.3)"
            }}
          >
            <h3>⚽ Equipos por Grupo</h3>
            <p>Explora todos los equipos organizados por grupos A, B y C</p>
            <Link to="/equipos" className="btn">Ver Equipos</Link>
          </motion.div>

          <motion.div 
            className="glass-card quick-link-card"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0, 102, 204, 0.3)"
            }}
          >
            <h3>🏟️ Calendario de Partidos</h3>
            <p>Consulta horarios, canchas y resultados de todos los partidos</p>
            <Link to="/partidos" className="btn btn-secondary">Ver Calendario</Link>
          </motion.div>

          <motion.div 
            className="glass-card quick-link-card"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(255, 193, 7, 0.3)"
            }}
          >
            <h3>🏆 Tabla de Posiciones</h3>
            <p>Rankings actualizados de todos los grupos del torneo</p>
            <Link to="/posiciones" className="btn" style={{backgroundColor: '#ffc107'}}>Ver Posiciones</Link>
          </motion.div>

          <motion.div 
            className="glass-card quick-link-card"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(220, 53, 69, 0.3)"
            }}
          >
            <h3>⚙️ Panel de Admin</h3>
            <p>Gestiona resultados, equipos y configuración del torneo</p>
            <Link to="/admin" className="btn" style={{backgroundColor: '#dc3545', color: 'white'}}>Administrar</Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;