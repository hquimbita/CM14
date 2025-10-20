import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../services/api';
import { Trophy, Target, Zap, Save, Calendar, Medal } from 'lucide-react';

const AdminPanel = () => {
  const [fechas, setFechas] = useState([]);
  const [fechaSel, setFechaSel] = useState(null);
  const [faseSeleccionada, setFaseSeleccionada] = useState(null); // 'repechaje', 'octavos', etc.
  const [partidos, setPartidos] = useState([]);
  const [partidosFaseFinal, setPartidosFaseFinal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarFechas = async () => {
      try {
        const res = await apiService.getFechas();
        const fs = res.data || [];
        setFechas(fs);
        if (fs.length) setFechaSel(fs[0].id);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar las fechas');
      }
    };
    cargarFechas();
  }, []);

  useEffect(() => {
    if (faseSeleccionada) {
      cargarPartidosFaseFinal();
    } else if (fechaSel) {
      cargarPartidosFase1();
    }
  }, [fechaSel, faseSeleccionada]);

  const cargarPartidosFase1 = async () => {
    if (!fechaSel) return;
    try {
      setLoading(true);
      const res = await apiService.getPartidosPorFecha(fechaSel);
      const data = res.data?.partidos || [];
      data.sort((a, b) => {
        const h1 = a.hora ? a.hora : '99:99';
        const h2 = b.hora ? b.hora : '99:99';
        return h1.localeCompare(h2);
      });
      setPartidos(data);
      setPartidosFaseFinal([]);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('No se pudieron cargar los partidos');
    } finally {
      setLoading(false);
    }
  };

  const cargarPartidosFaseFinal = async () => {
    try {
      setLoading(true);
      const res = await apiService.getPartidosFaseFinal();
      const data = res.data?.data || res.data || [];
      
      // Filtrar según la fase seleccionada
      let partidosFiltrados = [];
      switch(faseSeleccionada) {
        case 'repechaje':
          partidosFiltrados = data.filter(p => p.id >= 118 && p.id <= 121);
          break;
        case 'octavos':
          partidosFiltrados = data.filter(p => p.id >= 122 && p.id <= 129);
          break;
        case 'cuartos':
          partidosFiltrados = data.filter(p => p.id >= 130 && p.id <= 133);
          break;
        case 'semifinales':
          partidosFiltrados = data.filter(p => p.id >= 134 && p.id <= 135);
          break;
        case 'final':
          partidosFiltrados = data.filter(p => p.id >= 136 && p.id <= 137);
          break;
        default:
          partidosFiltrados = [];
      }
      
      setPartidosFaseFinal(partidosFiltrados);
      setPartidos([]);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('No se pudieron cargar los partidos de fase final');
    } finally {
      setLoading(false);
    }
  };

  const seleccionarFecha = (fechaId) => {
    setFechaSel(fechaId);
    setFaseSeleccionada(null);
  };

  const seleccionarFase = (fase) => {
    setFaseSeleccionada(fase);
    setFechaSel(null);
  };

  const actualizarCampo = (id, campo, valor) => {
    if (faseSeleccionada) {
      setPartidosFaseFinal(prev => prev.map(p => p.id === id ? { ...p, [campo]: valor } : p));
    } else {
      setPartidos(prev => prev.map(p => p.id === id ? { ...p, [campo]: valor } : p));
    }
  };

  const guardar = async (p) => {
    try {
      setSaving(true);
      const payload = {
        fecha: p.fecha || null,
        hora: p.hora || null,
        cancha: p.cancha || null,
        estado: p.estado || 'programado',
        golesLocal: p.golesLocal ?? null,
        golesVisitante: p.golesVisitante ?? null,
      };
      await apiService.actualizarPartido(p.id, payload);
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  const fasesFinales = [
    { id: 'repechaje', nombre: 'Repechaje', icon: Target, color: '#667eea', partidos: '118-121' },
    { id: 'octavos', nombre: 'Octavos', icon: Zap, color: '#f093fb', partidos: '122-129' },
    { id: 'cuartos', nombre: 'Cuartos', icon: Zap, color: '#4facfe', partidos: '130-133' },
    { id: 'semifinales', nombre: 'Semifinales', icon: Zap, color: '#43e97b', partidos: '134-135' },
    { id: 'final', nombre: 'Final', icon: Trophy, color: '#ffd700', partidos: '136-137' }
  ];

  const partidosActuales = faseSeleccionada ? partidosFaseFinal : partidos;

  return (
    <div className="page">
      <h1 className="page-title">⚙️ Panel de Administración</h1>

      {/* Selector de fecha y fases finales */}
      <div className="glass-card" style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '1rem',
        padding: '1.5rem'
      }}>
        {/* Fechas regulares */}
        <div>
          <h3 style={{ 
            margin: '0 0 0.75rem 0', 
            fontSize: '0.9rem', 
            opacity: 0.7,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Fase Regular
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {fechas.map(f => (
              <button
                key={f.id}
                className={`btn btn-small ${fechaSel === f.id && !faseSeleccionada ? '' : 'btn-secondary'}`}
                onClick={() => seleccionarFecha(f.id)}
                style={{
                  background: fechaSel === f.id && !faseSeleccionada ? 'var(--primary-color)' : undefined
                }}
              >
                Fecha {f.numero}
                {f.fecha && <span style={{ opacity: 0.7, marginLeft: '4px' }}>({f.fecha})</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Fases finales */}
        <div>
          <h3 style={{ 
            margin: '0 0 0.75rem 0', 
            fontSize: '0.9rem', 
            opacity: 0.7,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            🏆 Fase Final
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {fasesFinales.map(fase => {
              const Icon = fase.icon;
              const isActive = faseSeleccionada === fase.id;
              return (
                <motion.button
                  key={fase.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => seleccionarFase(fase.id)}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    border: isActive ? `2px solid ${fase.color}` : '2px solid rgba(255,255,255,0.1)',
                    background: isActive ? `${fase.color}` : 'rgba(255,255,255,0.05)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 500,
                    transition: 'all 0.2s ease',
                    color: isActive ? '#000' : 'inherit'
                  }}
                >
                  <Icon size={16} color={isActive ? '#000' : fase.color} />
                  <span>{fase.nombre}</span>
                  <span style={{ 
                    opacity: 0.6, 
                    fontSize: '0.75rem',
                    marginLeft: '4px'
                  }}>
                    ({fase.partidos})
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {loading && (
        <div className="loading">
          <div className="loading-spinner" />
          <h2>Cargando partidos...</h2>
        </div>
      )}
      
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                {!faseSeleccionada && <th>Grupo</th>}
                <th>Local</th>
                <th>Visitante</th>
                {faseSeleccionada && <th>Fecha</th>}
                <th>Hora</th>
                <th>Cancha</th>
                <th>Estado</th>
                <th>GL</th>
                <th>GV</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {partidosActuales.map(p => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    background: p.estado === 'finalizado' ? 'rgba(0,221,76,0.05)' : 
                               p.estado === 'en-curso' ? 'rgba(255,107,53,0.05)' : 'transparent'
                  }}
                >
                  <td style={{ fontWeight: 700, color: 'var(--primary-color)' }}>{p.id}</td>
                  {!faseSeleccionada && <td>{p.grupo}</td>}
                  <td>{p.equipoLocal?.nombre || 'Por definir'}</td>
                  <td>{p.equipoVisitante?.nombre || 'Por definir'}</td>
                  {faseSeleccionada && (
                    <td>
                      <input
                        type="date"
                        value={p.fecha || ''}
                        onChange={e => actualizarCampo(p.id, 'fecha', e.target.value)}
                        style={{
                          background: 'transparent',
                          color: 'var(--text-color)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 6,
                          padding: '6px 8px',
                          width: '140px'
                        }}
                      />
                    </td>
                  )}
                  <td>
                    <input
                      type="time"
                      value={p.hora || ''}
                      onChange={e => actualizarCampo(p.id, 'hora', e.target.value)}
                      style={{
                        background: 'transparent',
                        color: 'var(--text-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 6,
                        padding: '6px 8px',
                        width: '100px'
                      }}
                    />
                  </td>
                  <td>
                    <select
                      value={p.cancha || ''}
                      onChange={e => actualizarCampo(p.id, 'cancha', e.target.value)}
                      style={{
                        background: 'transparent',
                        color: 'var(--text-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 6,
                        padding: '6px 8px'
                      }}
                    >
                      <option value="">—</option>
                      <option value="NORTE">NORTE</option>
                      <option value="SUR">SUR</option>
                    </select>
                  </td>
                  <td>
                    <select
                      value={p.estado || 'programado'}
                      onChange={e => actualizarCampo(p.id, 'estado', e.target.value)}
                      style={{
                        background: 'transparent',
                        color: 'var(--text-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 6,
                        padding: '6px 8px'
                      }}
                    >
                      <option value="programado">programado</option>
                      <option value="en-curso">en-curso</option>
                      <option value="finalizado">finalizado</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={p.golesLocal ?? ''}
                      onChange={e => actualizarCampo(p.id, 'golesLocal', e.target.value === '' ? null : parseInt(e.target.value))}
                      style={{
                        width: 70,
                        background: 'transparent',
                        color: 'var(--text-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 6,
                        padding: '6px 8px',
                        textAlign: 'center',
                        fontWeight: 700
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={p.golesVisitante ?? ''}
                      onChange={e => actualizarCampo(p.id, 'golesVisitante', e.target.value === '' ? null : parseInt(e.target.value))}
                      style={{
                        width: 70,
                        background: 'transparent',
                        color: 'var(--text-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 6,
                        padding: '6px 8px',
                        textAlign: 'center',
                        fontWeight: 700
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-small"
                      onClick={() => guardar(p)}
                      disabled={saving}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: 'center'
                      }}
                    >
                      <Save size={14} />
                      Guardar
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;