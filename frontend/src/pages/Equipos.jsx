// src/pages/Posiciones.jsx - Estilo El Universo con logos
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const API_BASE = import.meta.env.VITE_API_BASE || '';

function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

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
        <table className="posiciones-table">
          <thead>
            <tr>
              <th className="pos-col">#</th>
              <th className="equipo-col">EQUIPO</th>
              <th className="pts-col">PTS</th>
              <th className="num-col">PJ</th>
              <th className="num-col">G</th>
              <th className="num-col">E</th>
              <th className="num-col">P</th>
              <th className="num-col">GF</th>
              <th className="num-col">GC</th>
              <th className="num-col">DG</th>
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
                <td className="pos-col posicion">{r.posicion}</td>
                <td className="equipo-col">
                  <div className="equipo-row">
                    <div className="logo-container">
                      {r.equipo.logo ? (
                        <img
                          src={`${API_BASE}${r.equipo.logo}`}
                          alt={r.equipo.nombre}
                          className="equipo-logo"
                        />
                      ) : (
                        <div className="logo-placeholder">
                          {initials(r.equipo.nombre)}
                        </div>
                      )}
                    </div>
                    <span className="equipo-nombre">{r.equipo.nombre}</span>
                  </div>
                </td>
                <td className="pts-col puntos">{r.puntos}</td>
                <td className="num-col">{r.partidosJugados}</td>
                <td className="num-col">{r.ganados}</td>
                <td className="num-col">{r.empatados}</td>
                <td className="num-col">{r.perdidos}</td>
                <td className="num-col">{r.golesFavor}</td>
                <td className="num-col">{r.golesContra}</td>
                <td className="num-col diferencia">
                  {r.diferenciaGoles > 0 ? '+' : ''}{r.diferenciaGoles}
                </td>
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
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
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
      </motion.div>

      <div className="grupos-container">
        <TablaGrupo titulo="🏆 Grupo A" filas={pos?.grupoA || []} />
        <TablaGrupo titulo="🏆 Grupo B" filas={pos?.grupoB || []} />
        <TablaGrupo titulo="🏆 Grupo C" filas={pos?.grupoC || []} />
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ==============================================
           ESTILO EL UNIVERSO - TABLA COMPACTA
           ============================================== */

        .grupos-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .grupo-posiciones-card {
          background: var(--card-bg-color);
          border-radius: 15px;
          border: 1px solid var(--border-color);
          padding: 1.5rem;
          box-shadow: 0 4px 20px 0 var(--shadow-color);
        }

        .grupo-posiciones-card h3 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
          font-size: 1.6rem;
          font-weight: 700;
        }

        .posiciones-table-container {
          overflow-x: auto;
          border-radius: 10px;
          background: rgba(52, 58, 64, 0.3);
        }

        .posiciones-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          background: transparent;
        }

        /* ================================
           COLUMNAS ESTILO EL UNIVERSO
           ================================ */
        
        .pos-col {
          width: 40px;
          text-align: center;
        }
        
        .equipo-col {
          width: 200px;
          text-align: left;
        }
        
        .pts-col {
          width: 60px;
          text-align: center;
          font-weight: bold;
        }
        
        .num-col {
          width: 45px;
          text-align: center;
        }

        /* ===============================
           HEADER ESTILO EL UNIVERSO
           =============================== */

        .posiciones-table th {
          background: rgba(52, 58, 64, 0.9);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 1rem 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .posiciones-table td {
          padding: 0.8rem 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          vertical-align: middle;
        }

        /* ===============================
           EQUIPO CON LOGO
           =============================== */

        .equipo-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .logo-container {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .equipo-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .logo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary-color);
          background: linear-gradient(135deg, rgba(0,221,76,.2), rgba(0,102,204,.2));
        }

        .equipo-nombre {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.85rem;
          line-height: 1.2;
        }

        /* ===============================
           ESTILOS DE DATOS
           =============================== */

        .posicion {
          font-weight: bold;
          color: var(--primary-color);
          font-size: 0.9rem;
        }

        .puntos {
          font-weight: 900;
          color: var(--primary-color);
          font-size: 1.1rem;
          background: rgba(0, 221, 76, 0.1);
          border-radius: 6px;
          padding: 0.3rem 0.5rem;
        }

        .diferencia {
          font-weight: 600;
          color: #ffffff;
        }

        /* ===============================
           FILAS
           =============================== */

        .posiciones-table tbody tr {
          transition: background-color 0.2s ease;
          background: rgba(255, 255, 255, 0.02);
        }

        .posiciones-table tbody tr:hover {
          background: rgba(0, 221, 76, 0.05);
        }

        .posiciones-table tbody tr:nth-child(even) {
          background: rgba(255, 255, 255, 0.04);
        }

        .posiciones-table tbody tr:nth-child(even):hover {
          background: rgba(0, 221, 76, 0.05);
        }

        .posiciones-table tbody tr:last-child td {
          border-bottom: none;
        }

        /* =======================
           RESPONSIVE
           ======================= */

        @media (max-width: 768px) {
          .grupos-container {
            max-width: 100%;
          }
          
          .grupo-posiciones-card {
            padding: 1rem;
          }
          
          .grupo-posiciones-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }
          
          .posiciones-table {
            font-size: 0.75rem;
          }
          
          .posiciones-table th,
          .posiciones-table td {
            padding: 0.6rem 0.3rem;
          }
          
          .logo-container {
            width: 24px;
            height: 24px;
          }
          
          .equipo-row {
            gap: 0.4rem;
          }
          
          .equipo-nombre {
            font-size: 0.75rem;
          }
          
          .logo-placeholder {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .posiciones-table {
            font-size: 0.7rem;
          }
          
          .posiciones-table th,
          .posiciones-table td {
            padding: 0.5rem 0.2rem;
          }
          
          .logo-container {
            width: 20px;
            height: 20px;
          }
          
          .equipo-nombre {
            font-size: 0.7rem;
          }
          
          .logo-placeholder {
            font-size: 0.55rem;
          }
          
          .puntos {
            font-size: 1rem;
            padding: 0.2rem 0.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Posiciones;