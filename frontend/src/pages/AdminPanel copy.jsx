// src/pages/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const AdminPanel = () => {
  const [fechas, setFechas] = useState([]);
  const [fechaSel, setFechaSel] = useState(null);
  const [partidos, setPartidos] = useState([]);
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
    const cargarPartidos = async () => {
      if (!fechaSel) return;
      try {
        setLoading(true);
        const res = await apiService.getPartidosPorFecha(fechaSel);
        const data = res.data?.partidos || [];
        // Orden: hora definida primero; las sin hora al final
        data.sort((a,b) => {
          const h1 = a.hora ? a.hora : '99:99';
          const h2 = b.hora ? b.hora : '99:99';
          return h1.localeCompare(h2);
        });
        setPartidos(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los partidos');
      } finally {
        setLoading(false);
      }
    };
    cargarPartidos();
  }, [fechaSel]);

  const actualizarCampo = (id, campo, valor) => {
    setPartidos(prev => prev.map(p => p.id === id ? { ...p, [campo]: valor } : p));
  };

  const guardar = async (p) => {
    try {
      setSaving(true);
      // Solo enviamos campos relevantes para horarios/cancha/estado/goles
      const payload = {
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

  return (
    <div className="page">
      <h1 className="page-title">⚙️ Panel de Administración</h1>

      {/* Selector de fecha */}
      <div className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
        {fechas.map(f => (
          <button
            key={f.id}
            className={`btn btn-small ${fechaSel === f.id ? '' : 'btn-secondary'}`}
            onClick={() => setFechaSel(f.id)}
          >
            {`Fecha ${f.numero}`} {f.fecha && <span style={{ opacity: 0.7 }}>({f.fecha})</span>}
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
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Grupo</th>
                <th>Local</th>
                <th>Visitante</th>
                <th>Hora</th>
                <th>Cancha</th>
                <th>Estado</th>
                <th>GL</th>
                <th>GV</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {partidos.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.grupo}</td>
                  <td>{p.equipoLocal?.nombre}</td>
                  <td>{p.equipoVisitante?.nombre}</td>
                  <td>
                    <input
                      type="time"
                      value={p.hora || ''}
                      onChange={e => actualizarCampo(p.id, 'hora', e.target.value)}
                      style={{ background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--border-color)', borderRadius: 6, padding: '6px 8px' }}
                    />
                  </td>
                  <td>
                    <select
                      value={p.cancha || ''}
                      onChange={e => actualizarCampo(p.id, 'cancha', e.target.value)}
                      style={{ background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--border-color)', borderRadius: 6, padding: '6px 8px' }}
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
                      style={{ background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--border-color)', borderRadius: 6, padding: '6px 8px' }}
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
                      style={{ width: 70, background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--border-color)', borderRadius: 6, padding: '6px 8px' }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={p.golesVisitante ?? ''}
                      onChange={e => actualizarCampo(p.id, 'golesVisitante', e.target.value === '' ? null : parseInt(e.target.value))}
                      style={{ width: 70, background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--border-color)', borderRadius: 6, padding: '6px 8px' }}
                    />
                  </td>
                  <td>
                    <button className="btn btn-small" onClick={() => guardar(p)}>
                      Guardar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
