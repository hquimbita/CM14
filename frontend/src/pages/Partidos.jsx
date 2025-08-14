// src/pages/Partidos.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

//const API_BASE = 'http://localhost:3001';
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

const PartidoCard = ({ partido, index }) => {
  const { equipoLocal, equipoVisitante, hora, cancha, estado, golesLocal, golesVisitante, grupo } = partido;
  const mostrarResultado = estado === 'finalizado' || estado === 'en-curso';
  const tieneGoles = golesLocal !== null && golesVisitante !== null;

  return (
    <motion.div
      className="partido-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.02 * index }}
    >
      {/* Header */}
      <div className="partido-header">
        <div className="partido-info-top">
          <span className="partido-hora">{hora || 'Por programar'}</span>
          <span className="partido-grupo">Grupo {grupo}</span>
          <span className="partido-cancha">Cancha {cancha || 'TBD'}</span>
        </div>
        <EstadoBadge estado={estado} />
      </div>

      {/* Enfrentamiento */}
      <div className="partido-enfrentamiento">
        {/* Local */}
        <div className="equipo-side vertical">
          <EquipoLogo equipo={equipoLocal} size={48} />
          <span className="equipo-nombre">{equipoLocal?.nombre}</span>
        </div>

        {/* VS / Resultado */}
        <div className="resultado-block">
          {mostrarResultado && tieneGoles ? (
            <div className="resultado">
              <span className="goles">{golesLocal}</span>
              <span className="sep">-</span>
              <span className="goles">{golesVisitante}</span>
            </div>
          ) : (
            <span className="vs-pill">VS</span>
          )}
        </div>

        {/* Visitante */}
        <div className="equipo-side vertical">
          <EquipoLogo equipo={equipoVisitante} size={48} />
          <span className="equipo-nombre">{equipoVisitante?.nombre}</span>
        </div>
      </div>
    </motion.div>
  );
};

const GrupoColumn = ({ grupo, partidos, equiposDescansan }) => {
  const partidosGrupo = partidos.filter(p => p.grupo === grupo);
  const equiposDescansanGrupo = equiposDescansan.filter(eq => eq.grupo === grupo);

  return (
    <div className="grupo-column">
      <div className="grupo-header">
        <h3>Grupo {grupo}</h3>
        <span className="partidos-count">{partidosGrupo.length} partidos</span>
      </div>
      
      <div className="partidos-grupo">
        {partidosGrupo.map((partido, idx) => (
          <PartidoCard key={partido.id} partido={partido} index={idx} />
        ))}
      </div>

      {equiposDescansanGrupo.length > 0 && (
        <div className="equipos-descansan-grupo">
          <h4>⏸️ Descansan</h4>
          <div className="equipos-descansan-list">
            {equiposDescansanGrupo.map(eq => (
              <div key={eq.id} className="equipo-descansa-card">
                <EquipoLogo equipo={eq} size={24} />
                <span className="equipo-descansa-nombre">{eq.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CanchaColumn = ({ cancha, partidos }) => {
  return (
    <div className="cancha-column">
      <div className="cancha-header">
        <h3>Cancha {cancha}</h3>
        <span className="partidos-count">{partidos.length} partidos</span>
      </div>
      
      <div className="partidos-cancha">
        {partidos.map((partido, idx) => (
          <PartidoCard key={partido.id} partido={partido} index={idx} />
        ))}
        
        {partidos.length === 0 && (
          <div className="no-partidos">
            <span>Sin partidos programados</span>
          </div>
        )}
      </div>
    </div>
  );
};

const VistaPorCancha = ({ partidosPorCancha }) => {
  // Crear una matriz de horarios sincronizados
  const horariosDisponibles = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  const filasPorHorario = horariosDisponibles.map(horario => {
    const partidoNorte = partidosPorCancha.NORTE.find(p => p.hora === horario) || null;
    const partidoSur = partidosPorCancha.SUR.find(p => p.hora === horario) || null;
    
    return {
      horario,
      norte: partidoNorte,
      sur: partidoSur
    };
  });

  // Agregar partidos sin horario al final
  const partidosSinHorario = [
    ...partidosPorCancha.NORTE.filter(p => !p.hora || !horariosDisponibles.includes(p.hora)),
    ...partidosPorCancha.SUR.filter(p => !p.hora || !horariosDisponibles.includes(p.hora))
  ];

  return (
    <div className="vista-por-cancha">
      {/* Headers de canchas */}
      <div className="canchas-headers">
        <div className="cancha-header-col">
          <h3>Cancha NORTE</h3>
          <span className="partidos-count">{partidosPorCancha.NORTE.length} partidos</span>
        </div>
        <div className="cancha-header-col">
          <h3>Cancha SUR</h3>
          <span className="partidos-count">{partidosPorCancha.SUR.length} partidos</span>
        </div>
      </div>

      {/* Partidos sincronizados por horario */}
      <div className="partidos-sincronizados">
        {filasPorHorario.map(({ horario, norte, sur }) => (
          <div key={horario} className="fila-horario">
            <div className="horario-label">
              <span>{horario}</span>
            </div>
            <div className="partidos-fila">
              <div className="partido-slot">
                {norte ? (
                  <PartidoCard partido={norte} index={0} />
                ) : (
                  <div className="slot-vacio">
                    <span>Sin partido</span>
                  </div>
                )}
              </div>
              <div className="partido-slot">
                {sur ? (
                  <PartidoCard partido={sur} index={0} />
                ) : (
                  <div className="slot-vacio">
                    <span>Sin partido</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partidos sin horario definido */}
      {partidosSinHorario.length > 0 && (
        <div className="partidos-sin-horario">
          <h4>📅 Por programar</h4>
          <div className="partidos-sin-horario-grid">
            {partidosSinHorario.map((partido, idx) => (
              <PartidoCard key={partido.id} partido={partido} index={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Partidos = () => {
  const [fechas, setFechas] = useState([]);
  const [fechaSel, setFechaSel] = useState(null);
  const [dataFecha, setDataFecha] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vistaFiltro, setVistaFiltro] = useState('ALL');

  useEffect(() => {
    (async () => {
      try {
        const res = await apiService.getFechas();
        const fs = res.data || [];
        setFechas(fs);
        if (fs.length) setFechaSel(fs[0].id);
      } catch {
        setError('No se pudieron cargar las fechas');
      }
    })();
  }, []);

  useEffect(() => {
    if (!fechaSel) return;
    (async () => {
      try {
        setLoading(true);
        const res = await apiService.getPartidosPorFecha(fechaSel);
        setDataFecha(res.data);
        setError(null);
      } catch {
        setError('No se pudieron cargar los partidos de la fecha');
      } finally {
        setLoading(false);
      }
    })();
  }, [fechaSel]);

  const partidosPorGrupo = useMemo(() => {
    if (!dataFecha) return { A: [], B: [], C: [] };
    const ps = dataFecha.partidos || [];
    return {
      A: ps.filter(p => p.grupo === 'A'),
      B: ps.filter(p => p.grupo === 'B'),
      C: ps.filter(p => p.grupo === 'C')
    };
  }, [dataFecha]);

  const partidosPorCancha = useMemo(() => {
    if (!dataFecha) return { NORTE: [], SUR: [] };
    const ps = dataFecha.partidos || [];
    
    // Ordenar por hora
    const partidosOrdenados = [...ps].sort((a, b) => {
      // Si no tienen hora, van al final
      if (!a.hora && !b.hora) return 0;
      if (!a.hora) return 1;
      if (!b.hora) return 1;
      return a.hora.localeCompare(b.hora);
    });

    return {
      NORTE: partidosOrdenados.filter(p => p.cancha === 'NORTE'),
      SUR: partidosOrdenados.filter(p => p.cancha === 'SUR')
    };
  }, [dataFecha]);

  const equiposDescansanPorGrupo = useMemo(() => {
    if (!dataFecha?.equiposDescansan) return { A: [], B: [], C: [] };
    const equipos = dataFecha.equiposDescansan;
    return {
      A: equipos.filter(eq => eq.grupo === 'A'),
      B: equipos.filter(eq => eq.grupo === 'B'),
      C: equipos.filter(eq => eq.grupo === 'C')
    };
  }, [dataFecha]);

  return (
    <div className="page">
      <h1 className="page-title">🏟️ Partidos</h1>

      {/* Tabs Fechas */}
      <div className="glass-card tabs-fechas">
        {fechas.map(f => {
          const active = fechaSel === f.id;
          return (
            <button
              key={f.id}
              className={`btn btn-small ${active ? '' : 'btn-secondary'}`}
              onClick={() => setFechaSel(f.id)}
              aria-pressed={active}
              title={`Fecha ${f.numero}${f.fecha ? ` (${f.fecha})` : ''}`}
            >
              {`Fecha ${f.numero}`}
              {active && f.fecha && <span className="fecha-real">({f.fecha})</span>}
            </button>
          );
        })}
      </div>

      {/* Filtro de vista */}
      <div className="glass-card tabs-vista">
        {[
          { key: 'ALL', label: 'Todos los grupos' },
          { key: 'A', label: 'Grupo A' },
          { key: 'B', label: 'Grupo B' },
          { key: 'C', label: 'Grupo C' },
          { key: 'CANCHA', label: 'Por Cancha' }
        ].map(({ key, label }) => (
          <button
            key={key}
            className={`btn btn-small ${vistaFiltro === key ? '' : 'btn-secondary'}`}
            onClick={() => setVistaFiltro(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="loading">
          <div className="loading-spinner" />
          <h2>Cargando partidos...</h2>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <div className={`vista-container ${vistaFiltro === 'CANCHA' ? 'vista-cancha' : 'vista-grupos'}`}>
          {vistaFiltro === 'CANCHA' ? (
            // Vista por canchas sincronizada por horarios
            <VistaPorCancha partidosPorCancha={partidosPorCancha} />
          ) : vistaFiltro === 'ALL' ? (
            // Vista de 3 columnas con todos los grupos
            <>
              <GrupoColumn 
                grupo="A" 
                partidos={partidosPorGrupo.A} 
                equiposDescansan={equiposDescansanPorGrupo.A} 
              />
              <GrupoColumn 
                grupo="B" 
                partidos={partidosPorGrupo.B} 
                equiposDescansan={equiposDescansanPorGrupo.B} 
              />
              <GrupoColumn 
                grupo="C" 
                partidos={partidosPorGrupo.C} 
                equiposDescansan={equiposDescansanPorGrupo.C} 
              />
            </>
          ) : (
            // Vista de un solo grupo
            <div className="single-grupo-view">
              <GrupoColumn 
                grupo={vistaFiltro} 
                partidos={partidosPorGrupo[vistaFiltro]} 
                equiposDescansan={equiposDescansanPorGrupo[vistaFiltro]} 
              />
            </div>
          )}
        </div>
      )}

      {/* Equipos que descansan globalmente (solo en vista por cancha) */}
      {!loading && !error && vistaFiltro === 'CANCHA' && dataFecha?.equiposDescansan?.length > 0 && (
        <div className="equipos-descansan-global">
          <h3>⏸️ Equipos que descansan en esta fecha</h3>
          <div className="equipos-descansan-list-global">
            {dataFecha.equiposDescansan.map(eq => (
              <div key={eq.id} className="equipo-descansa-card-global">
                <EquipoLogo equipo={eq} size={32} />
                <div className="equipo-descansa-info">
                  <span className="equipo-descansa-nombre">{eq.nombre}</span>
                  <span className="equipo-descansa-grupo">Grupo {eq.grupo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        /* Tabs */
        .tabs-fechas, .tabs-vista {
          display: flex; flex-wrap: wrap; gap: .5rem;
          justify-content: center; margin-bottom: .5rem;
        }
        .fecha-real { opacity: .7; margin-left: 6px; }

        /* Container principal */
        .vista-container {
          margin: 1.25rem 0 2rem;
          align-items: start;
        }

        /* Vista por grupos */
        .vista-grupos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* Vista por cancha sincronizada */
        .vista-por-cancha {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .canchas-headers {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .cancha-header-col {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cancha-header-col h3 {
          color: var(--secondary-color);
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
        }

        /* Partidos sincronizados por horario */
        .partidos-sincronizados {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .fila-horario {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 1rem;
          align-items: start;
        }

        .horario-label {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,221,76,0.15);
          border: 1px solid rgba(0,221,76,0.35);
          border-radius: 8px;
          padding: 0.75rem 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary-color);
          min-height: 60px;
          position: sticky;
          top: 1rem;
        }

        .partidos-fila {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .partido-slot {
          min-height: 180px;
          display: flex;
          align-items: stretch;
        }

        .partido-slot .partido-card {
          width: 100%;
          margin: 0;
        }

        .slot-vacio {
          background: rgba(255,255,255,0.03);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          font-style: italic;
          font-size: 0.9rem;
          width: 100%;
          min-height: 180px;
        }

        /* Partidos sin horario */
        .partidos-sin-horario {
          margin-top: 2rem;
          text-align: center;
        }

        .partidos-sin-horario h4 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .partidos-sin-horario-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        /* Vista de un solo grupo */
        .single-grupo-view {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Columna de grupo */
        .grupo-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Columna de cancha */
        .cancha-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Header del grupo/cancha */
        .grupo-header, .cancha-header {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .grupo-header h3, .cancha-header h3 {
          color: var(--primary-color);
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .cancha-header h3 {
          color: var(--secondary-color);
        }

        .partidos-count {
          background: rgba(0,221,76,0.15);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Contenedor de partidos */
        .partidos-grupo, .partidos-cancha {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* No partidos */
        .no-partidos {
          background: rgba(255,255,255,0.05);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          color: rgba(255,255,255,0.6);
          font-style: italic;
        }

        /* Card de partido */
        .partido-card {
          background: var(--card-bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.875rem;
          display: flex;
          flex-direction: column;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .partido-card:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 6px 20px rgba(0,0,0,.25); 
        }

        /* Header del partido */
        .partido-header {
          display: flex; 
          justify-content: space-between; 
          align-items: center;
          margin-bottom: .75rem; 
          padding-bottom: .6rem;
          border-bottom: 1px solid var(--border-color);
        }
        .partido-info-top { 
          display: flex; 
          gap: 1rem; 
          align-items: center; 
          flex-wrap: wrap; 
        }
        .partido-hora { 
          font-weight: 800; 
          color: var(--primary-color); 
          font-size: 0.9rem;
        }
        .partido-grupo { 
          font-size: .9rem; 
          color: var(--secondary-color); 
          font-weight: 600; 
        }
        .partido-cancha { 
          font-size: .8rem; 
          color: rgba(255,255,255,.8); 
          background: rgba(255,255,255,.08); 
          padding: .2rem .6rem; 
          border-radius: 8px; 
        }

        /* Enfrentamiento */
        .partido-enfrentamiento {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0.75rem;
          align-items: center;
          min-height: 80px;
        }

        /* Equipo side */
        .equipo-side.vertical {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: .4rem;
        }

        .logo-shell {
          width: 48px; 
          height: 48px;
          display: grid; 
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(0,221,76,.12), rgba(0,102,204,.12));
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
        }
        .logo-initials { 
          font-size: 11px; 
          font-weight: 800; 
          letter-spacing: .5px; 
          color: var(--text-color); 
        }

        .equipo-nombre {
          font-weight: 600; 
          color: var(--text-color);
          font-size: .82rem; 
          line-height: 1.2;
          text-align: center;
          max-width: 100px;
          white-space: nowrap; 
          overflow: hidden; 
          text-overflow: ellipsis;
        }

        /* Resultado block */
        .resultado-block {
          display: flex; 
          align-items: center; 
          justify-content: center;
          min-width: 60px;
        }
        .vs-pill {
          font-size: 0.9rem; 
          font-weight: 800; 
          line-height: 1;
          color: rgba(255,255,255,.75);
          background: rgba(255,255,255,.12);
          padding: .4rem .7rem; 
          border-radius: 8px;
        }
        .resultado {
          display: flex; 
          align-items: center; 
          gap: .5rem;
          background: rgba(0,221,76,.12);
          padding: .4rem .7rem; 
          border-radius: 8px;
          border: 1px solid rgba(0,221,76,.35);
        }
        .goles { 
          font-size: 1rem; 
          font-weight: 800; 
          color: var(--primary-color); 
          min-width: 1rem; 
          text-align: center; 
        }
        .sep { 
          color: rgba(255,255,255,.7); 
          font-weight: 700; 
        }

        /* Equipos que descansan por grupo */
        .equipos-descansan-grupo {
          background: rgba(255,165,0,.08);
          border: 1px solid rgba(255,165,0,.25);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
        }

        .equipos-descansan-grupo h4 {
          color: #ffa500;
          margin: 0 0 0.75rem 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .equipos-descansan-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .equipo-descansa-card {
          display: flex; 
          align-items: center; 
          gap: .5rem;
          background: rgba(255,165,0,.15); 
          color: #ffa500;
          padding: .5rem .75rem; 
          border-radius: 8px; 
          border: 1px solid rgba(255,165,0,.35);
          justify-content: center;
        }
        .equipo-descansa-nombre { 
          font-weight: 600; 
          font-size: .85rem; 
        }

        /* Equipos que descansan globalmente (vista por cancha) */
        .equipos-descansan-global {
          margin: 2rem 0;
          text-align: center;
        }

        .equipos-descansan-global h3 {
          color: #ffa500;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .equipos-descansan-list-global {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .equipo-descansa-card-global {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,165,0,.15);
          border: 1px solid rgba(255,165,0,.35);
          padding: 0.75rem 1rem;
          border-radius: 12px;
          min-width: 180px;
        }

        .equipo-descansa-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .equipo-descansa-info .equipo-descansa-nombre {
          color: #ffa500;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .equipo-descansa-grupo {
          color: rgba(255,165,0,0.8);
          font-size: 0.8rem;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .vista-grupos {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .grupo-column, .cancha-column {
            max-width: 600px;
            margin: 0 auto;
          }

          .canchas-headers {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .fila-horario {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .horario-label {
            position: static;
            margin-bottom: 0.5rem;
          }

          .partidos-fila {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .partido-header { 
            flex-direction: column; 
            align-items: flex-start; 
            gap: .5rem; 
          }
          .equipo-nombre { 
            font-size: .8rem; 
            max-width: 90px; 
          }
          .vista-container {
            gap: 1.5rem;
          }
          
          .equipos-descansan-list-global {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .partido-enfrentamiento { 
            grid-template-columns: 1fr; 
            gap: 1rem; 
            text-align: center;
          }
          .resultado-block { 
            width: 100%; 
          }
        }
      `}</style>
    </div>
  );
};

export default Partidos;