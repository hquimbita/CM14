// src/pages/Equipos.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

//const API_BASE = import.meta.env.VITE_API_BASE || '';
//const API_BASE = 'http://localhost:3001';
const API_BASE = import.meta.env.VITE_API_BASE || '';

function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

function EquipoCard({ eq, idx }) {
  const hasLogo = Boolean(eq.logo);
  const logoSrc = hasLogo ? `${API_BASE}${eq.logo}` : null;

  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.02 * idx }}
      aria-label={`Equipo ${eq.nombre}, grupo ${eq.grupo}`}
      style={{ textAlign: 'center',
         minHeight: '160px', // ✅ AGREGAR ESTA LÍNEA
        display: 'flex',    // ✅ AGREGAR ESTA LÍNEA
        flexDirection: 'column', // ✅ AGREGAR ESTA LÍNEA
        justifyContent: 'space-between' // ✅ AGREGAR ESTA LÍNEA
       }}
    >
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          width: 72,
          height: 72,
          borderRadius: 14,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          margin: '0 auto 8px',
        }}
      >
        {hasLogo ? (
          <img
            src={logoSrc}
            alt={eq.nombre}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            loading="lazy"
          />
        ) : (
          <div
            aria-hidden="true"
            style={{
              display: 'grid',
              placeItems: 'center',
              width: '100%',
              height: '100%',
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: 18,
              color: 'var(--text-color, #eaeaea)',
              background: 'linear-gradient(135deg, rgba(0,221,76,.15), rgba(0,102,204,.15))',
            }}
            title="Sin logo"
          >
            {initials(eq.nombre)}
          </div>
        )}
      </div>

      <h3 style={{ marginBottom: 0,
         fontSize: '1rem', // ✅ TAMAÑO CONSISTENTE
          lineHeight: '1.2', // ✅ ESPACIADO CONSISTENTE
          minHeight: '2.4em' // ✅ ALTURA MÍNIMA PARA 2 LÍNEAS
       }}>{eq.nombre}</h3>
      {eq.activo === false && (
        <span className="estado-badge estado-programado" style={{ display: 'inline-block',   marginTop: '8px'  }}>
          Inactivo
        </span>
      )}
    </motion.div>
  );
}

const Equipos = () => {
  const [equipos, setEquipos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        setLoading(true);
        const res = await apiService.getEquipos();
        setEquipos(res.data || []);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los equipos');
      } finally {
        setLoading(false);
      }
    };
    cargar();
  }, []);

  const porGrupo = useMemo(() => {
    const sortById = (a, b) => a.id - b.id;
    return {
      A: equipos.filter(e => e.grupo === 'A').sort(sortById),
      B: equipos.filter(e => e.grupo === 'B').sort(sortById),
      C: equipos.filter(e => e.grupo === 'C').sort(sortById),
    };
  }, [equipos]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        <h2>Cargando equipos...</h2>
      </div>
    );
  }

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="page">
      <h1 className="page-title">⚽ Equipos</h1>

      {/* Tres columnas: A / B / C */}
      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '1rem',
        }}
      >
        {['A', 'B', 'C'].map((grupoClave, colIdx) => (
          <div key={grupoClave} className="glass-card" style={{ padding: '12px' }}>
            <h2 style={{ textAlign: 'center', marginTop: 0, marginBottom: 12 }}>
              Grupo {grupoClave}
            </h2>
            <div
              className="grid-col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {porGrupo[grupoClave].map((eq, idx) => (
                <EquipoCard key={eq.id} eq={eq} idx={colIdx * 0.06 + idx * 0.02} />
              ))}
              {porGrupo[grupoClave].length === 0 && (
                <div className="info-card" style={{ textAlign: 'center', opacity: 0.7 }}>
                  Sin equipos en este grupo
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipos;