// src/pages/FaseFinal.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';
import { Trophy } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE || '';

// Iniciales si no hay logo
function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

const EstadoBadge = ({ estado }) => {
  const cls =
    estado === 'finalizado'
      ? 'estado-badge estado-finalizado'
      : estado === 'en-curso'
      ? 'estado-badge estado-en-curso'
      : 'estado-badge estado-programado';
  const label =
    estado === 'finalizado' ? 'Finalizado' : estado === 'en-curso' ? 'En curso' : 'Programado';
  return <span className={cls}>{label}</span>;
};

const EquipoLogo = ({ equipo, size = 56 }) => {
  const hasLogo = Boolean(equipo?.logo);
  const logoSrc = hasLogo ? `${API_BASE}${equipo.logo}` : null;
  return (
    <div className="logo-shell" style={{ width: size, height: size }}>
      {hasLogo ? (
        <img
          src={logoSrc}
          alt={equipo?.nombre || 'Equipo'}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          loading="lazy"
        />
      ) : (
        <span className="logo-initials">{initials(equipo?.nombre || '')}</span>
      )}
    </div>
  );
};

const PartidoFaseFinal = ({ partido, index }) => {
  const { equipoLocal, equipoVisitante, hora, cancha, estado, golesLocal, golesVisitante, descripcion } = partido;
  const mostrarResultado = estado === 'finalizado' || estado === 'en-curso';
  const tieneGoles = golesLocal !== null && golesVisitante !== null;

  // Si no tiene equipos asignados, mostrar descripción
  const equipoLocalNombre = equipoLocal?.nombre || descripcion?.split(' vs ')[0] || 'TBD';
  const equipoVisitanteNombre = equipoVisitante?.nombre || descripcion?.split(' vs ')[1] || 'TBD';

  return (
    <motion.div
      className="partido-card-ff"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.02 * index }}
    >
      {/* Header */}
      <div className="partido-header-ff">
        <div className="partido-info-top-ff">
          {hora && <span className="partido-hora-ff">{hora}</span>}
          {cancha && <span className="partido-cancha-ff">Cancha {cancha}</span>}
        </div>
        <EstadoBadge estado={estado} />
      </div>

      {/* Descripción del partido */}
      {descripcion && (
        <div className="partido-descripcion">
          <span>{descripcion}</span>
        </div>
      )}

      {/* Enfrentamiento */}
      <div className="partido-enfrentamiento-ff">
        {/* Equipo Local */}
        <div className="equipo-ff">
          {equipoLocal ? (
            <EquipoLogo equipo={equipoLocal} size={48} />
          ) : (
            <div className="logo-placeholder">?</div>
          )}
          <span className="equipo-nombre-ff">{equipoLocalNombre}</span>
        </div>

        {/* VS / Resultado */}
        <div className="resultado-center-ff">
          {mostrarResultado && tieneGoles ? (
            <div className="resultado-ff">
              <span className="goles-ff">{golesLocal}</span>
              <span className="sep-ff">-</span>
              <span className="goles-ff">{golesVisitante}</span>
            </div>
          ) : (
            <span className="vs-pill-ff">VS</span>
          )}
        </div>

        {/* Equipo Visitante */}
        <div className="equipo-ff">
          {equipoVisitante ? (
            <EquipoLogo equipo={equipoVisitante} size={48} />
          ) : (
            <div className="logo-placeholder">?</div>
          )}
          <span className="equipo-nombre-ff">{equipoVisitanteNombre}</span>
        </div>
      </div>
    </motion.div>
  );
};

const FaseFinal = () => {
  const [fechas, setFechas] = useState([]);
  const [fechaSel, setFechaSel] = useState(null);
  const [partidos, setPartidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar fechas
  useEffect(() => {
    (async () => {
      try {
        const res = await apiService.getFechas();
        const fs = res.data || [];
        // Filtrar solo fechas de fase final (10-14)
        const fechasFaseFinal = fs.filter(f => f.id >= 10 && f.id <= 14);
        setFechas(fechasFaseFinal);
        if (fechasFaseFinal.length) setFechaSel(fechasFaseFinal[0].id);
      } catch {
        setError('No se pudieron cargar las fechas');
      }
    })();
  }, []);

  // Cargar partidos de la fecha seleccionada
  useEffect(() => {
    if (!fechaSel) return;
    (async () => {
      try {
        setLoading(true);
        const res = await apiService.getPartidosPorFecha(fechaSel);
        const data = res.data;
        setPartidos(data?.partidos || []);
        setError(null);
      } catch {
        setError('No se pudieron cargar los partidos');
      } finally {
        setLoading(false);
      }
    })();
  }, [fechaSel]);

  // Obtener el nombre de la fase actual
  const faseActual = useMemo(() => {
    const fecha = fechas.find(f => f.id === fechaSel);
    return fecha?.descripcion || '';
  }, [fechas, fechaSel]);

  // Obtener el grupo/fase de los partidos
  const grupoFase = useMemo(() => {
    if (partidos.length === 0) return '';
    return partidos[0]?.grupo || '';
  }, [partidos]);

  return (
    <div className="page">
      {/* Header */}
      <div className="fase-final-header">
        <Trophy size={40} className="trophy-icon" />
        <div>
          <h1 className="page-title">🏆 Fase Final</h1>
          <p className="subtitle">Copa Maracaná 14ED • Eliminación Directa</p>
        </div>
      </div>

      {/* Tabs Fechas */}
      <div className="glass-card tabs-fechas-ff">
        {fechas.map(f => {
          const active = fechaSel === f.id;
          return (
            <button
              key={f.id}
              className={`btn-fecha-ff ${active ? 'active' : ''}`}
              onClick={() => setFechaSel(f.id)}
              aria-pressed={active}
            >
              <span className="fecha-numero">{f.descripcion}</span>
              {f.fecha && <span className="fecha-date">{f.fecha}</span>}
            </button>
          );
        })}
      </div>

      {/* Título de la fase */}
      {faseActual && (
        <div className="fase-titulo">
          <h2>{faseActual}</h2>
          <span className="partidos-count-ff">{partidos.length} partidos</span>
        </div>
      )}

      {loading && (
        <div className="loading">
          <div className="loading-spinner" />
          <h2>Cargando partidos...</h2>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {/* Partidos */}
      {!loading && !error && partidos.length > 0 && (
        <div className="partidos-fase-final">
          {partidos.map((partido, idx) => (
            <PartidoFaseFinal key={partido.id} partido={partido} index={idx} />
          ))}
        </div>
      )}

      {!loading && !error && partidos.length === 0 && (
        <div className="no-partidos-ff">
          <p>No hay partidos programados para esta fecha</p>
        </div>
      )}

      <style jsx>{`
        .fase-final-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .trophy-icon {
          color: var(--primary-color);
        }

        .page-title {
          margin: 0;
          font-size: 2.5rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          margin: 0.5rem 0 0;
          opacity: 0.7;
          font-size: 1rem;
        }

        /* Tabs de fechas */
        .tabs-fechas-ff {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
          padding: 1.5rem;
        }

        .btn-fecha-ff {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          color: var(--text-color);
        }

        .btn-fecha-ff:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .btn-fecha-ff.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: #000;
        }

        .fecha-numero {
          font-weight: 700;
          font-size: 1rem;
        }

        .fecha-date {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        /* Título de la fase */
        .fase-titulo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .fase-titulo h2 {
          margin: 0;
          font-size: 1.75rem;
          color: var(--primary-color);
          font-weight: 700;
        }

        .partidos-count-ff {
          background: rgba(0, 221, 76, 0.15);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Grid de partidos */
        .partidos-fase-final {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        /* Card de partido */
        .partido-card-ff {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .partido-card-ff:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        /* Header del partido */
        .partido-header-ff {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .partido-info-top-ff {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .partido-hora-ff {
          font-weight: 800;
          color: var(--primary-color);
          font-size: 1rem;
        }

        .partido-cancha-ff {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.08);
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
        }

        /* Descripción */
        .partido-descripcion {
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        /* Enfrentamiento */
        .partido-enfrentamiento-ff {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
        }

        .equipo-ff {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .equipo-nombre-ff {
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          line-height: 1.2;
          color: var(--text-color);
        }

        /* Logo placeholder */
        .logo-placeholder {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(0, 221, 76, 0.12), rgba(0, 102, 204, 0.12));
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: grid;
          place-items: center;
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.5);
        }

        .logo-shell {
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(0, 221, 76, 0.12), rgba(0, 102, 204, 0.12));
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .logo-initials {
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.5px;
          color: var(--text-color);
        }

        /* Resultado central */
        .resultado-center-ff {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
        }

        .vs-pill-ff {
          font-size: 1.1rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.12);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }

        .resultado-ff {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(0, 221, 76, 0.12);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(0, 221, 76, 0.35);
        }

        .goles-ff {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-color);
          min-width: 1.5rem;
          text-align: center;
        }

        .sep-ff {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 700;
        }

        /* Estado badge */
        .estado-badge {
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .estado-finalizado {
          background: rgba(0, 221, 76, 0.15);
          color: var(--primary-color);
          border: 1px solid rgba(0, 221, 76, 0.35);
        }

        .estado-en-curso {
          background: rgba(255, 165, 0, 0.15);
          color: #ffa500;
          border: 1px solid rgba(255, 165, 0, 0.35);
        }

        .estado-programado {
          background: rgba(0, 102, 204, 0.15);
          color: var(--secondary-color);
          border: 1px solid rgba(0, 102, 204, 0.35);
        }

        /* No partidos */
        .no-partidos-ff {
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .fase-final-header {
            flex-direction: column;
            text-align: center;
          }

          .page-title {
            font-size: 2rem;
          }

          .partidos-fase-final {
            grid-template-columns: 1fr;
          }

          .fase-titulo {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .tabs-fechas-ff {
            flex-direction: column;
          }

          .btn-fecha-ff {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default FaseFinal;