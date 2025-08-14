// src/pages/Posiciones.jsx - Con visualización mejorada
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const TablaGrupo = ({ titulo, filas }) => {
  return (
    <motion.div 
      className="grupo-posiciones-card" 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{titulo}</h3>
      <div className="posiciones-table-container">
        <table className="posiciones-table" role="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((r, i) => (
              <motion.tr 
                key={`${r.equipo.id}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <td className="posicion">{r.posicion}</td>
                <td style={{ fontWeight: '600' }}>{r.equipo.nombre}</td>
                <td>{r.partidosJugados}</td>
                <td style={{ color: r.ganados > 0 ? '#28a745' : 'inherit' }}>{r.ganados}</td>
                <td style={{ color: r.empatados > 0 ? '#ffc107' : 'inherit' }}>{r.empatados}</td>
                <td style={{ color: r.perdidos > 0 ? '#dc3545' : 'inherit' }}>{r.perdidos}</td>
                <td>{r.golesFavor}</td>
                <td>{r.golesContra}</td>
                <td style={{ 
                  color: r.diferenciaGoles > 0 ? '#28a745' : 
                         r.diferenciaGoles < 0 ? '#dc3545' : 'inherit',
                  fontWeight: '600'
                }}>
                  {r.diferenciaGoles > 0 ? '+' : ''}{r.diferenciaGoles}
                </td>
                <td style={{ fontSize: '1.1rem' }}>{r.puntos}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const Posiciones = () => {
  const [pos, setPos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  const cargarPosiciones = async () => {
    try {
      setLoading(true);
      const res = await apiService.getPosiciones();
      setPos(res.data);
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      console.error(err);
      setError('No se pudo cargar la tabla de posiciones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPosiciones();
  }, []);

  // Auto-refresh cada 10 segundos si está activado
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      cargarPosiciones();
    }, 10000); // 10 segundos

    return () => clearInterval(interval);
  }, [autoRefresh]);

  // Refresh manual
  const handleRefresh = () => {
    cargarPosiciones();
  };

  if (loading && !pos) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        <h2>Cargando posiciones...</h2>
      </div>
    );
  }

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="page">
      <motion.div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="page-title" style={{ margin: 0 }}>🏆 Posiciones</h1>
        
        {/* Controles de actualización */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            background: 'rgba(0, 221, 76, 0.1)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            border: '1px solid rgba(0, 221, 76, 0.3)'
          }}>
            <input
              type="checkbox"
              id="auto-refresh"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              style={{ transform: 'scale(1.2)', accentColor: 'var(--primary-color)' }}
            />
            <label htmlFor="auto-refresh" style={{ 
              color: 'var(--primary-color)', 
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Auto-actualizar (10s)
            </label>
          </div>
          
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="btn btn-small"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              opacity: loading ? 0.6 : 1,
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            <span style={{ 
              display: 'inline-block',
              animation: loading ? 'spin 1s linear infinite' : 'none'
            }}>
              🔄
            </span>
            {loading ? 'Actualizando...' : 'Actualizar'}
          </button>
        </div>
      </motion.div>

      {/* Información de última actualización */}
      <motion.div 
        className="glass-card" 
        style={{ 
          padding: '1rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          background: 'rgba(0, 221, 76, 0.1)',
          border: '1px solid rgba(0, 221, 76, 0.3)'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
          📊 Última actualización: {lastUpdate.toLocaleTimeString()}
        </span>
        {autoRefresh && (
          <span style={{ marginLeft: '1rem', opacity: 0.8 }}>
            • Auto-actualización activa ✅
          </span>
        )}
      </motion.div>

      {/* Grid de tablas mejorado */}
      <div className="grid-posiciones">
        <TablaGrupo titulo="🏆 Grupo A" filas={pos?.grupoA || []} />
        <TablaGrupo titulo="🏆 Grupo B" filas={pos?.grupoB || []} />
        <TablaGrupo titulo="🏆 Grupo C" filas={pos?.grupoC || []} />
      </div>

      {/* Estilos adicionales para animaciones */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Posiciones;