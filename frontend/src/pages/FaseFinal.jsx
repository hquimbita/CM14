import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { apiService } from "../services/api";

/**
 * FaseFinal.jsx – Vista de Fase Final (Repechaje → Octavos → Cuartos → Semis → Final)
 *
 * REGLAS (según reglamento CM14 2024 – 14ta edición):
 * - Participan 27 equipos (masculino) en 3 grupos de 9.
 * - Clasifican directo a Fase Final: TOP 4 de cada grupo (A, B, C) → 12 equipos.
 * - Repechaje: 5º y 6º de cada grupo + 2 mejores 7º → 8 equipos → 4 llaves.
 *   • 5º A vs Mejor 7º
 *   • 5º B vs Segundo Mejor 7º
 *   • 5º C vs 6º A
 *   • 6º B vs 6º C
 * - Los 4 ganadores de Repechaje se suman a los 12 clasificados → Octavos (16).
 * - Luego: Cuartos, Semifinales y Final.
 *
 * NOTA sobre ordenamiento de los 12 clasificados directos:
 *   El reglamento menciona un ordenamiento específico, pero no está completo en el fragmento recibido.
 *   Aquí implementamos un seeding estándar: 1ros > 2dos > 3ros > 4tos (por puntos/DG/GF),
 *   y los 4 clasificados por Repechaje entran como seeds más bajos.
 *   Si el reglamento exige otro orden, basta ajustar la función `ordenarClasificadosDirectos`.
 */

// ================= Utilidades de posiciones =================
function compareStandings(a, b) {
  // Ordena por puntos desc, diferencia de goles desc, goles a favor desc, y si existe: posicion asc
  if (b.puntos !== a.puntos) return b.puntos - a.puntos;
  const dgA = a.diferenciaGoles ?? (a.golesFavor - a.golesContra);
  const dgB = b.diferenciaGoles ?? (b.golesFavor - b.golesContra);
  if (dgB !== dgA) return dgB - dgA;
  if ((b.golesFavor ?? 0) !== (a.golesFavor ?? 0)) return (b.golesFavor ?? 0) - (a.golesFavor ?? 0);
  if ((a.posicion ?? 99) !== (b.posicion ?? 99)) return (a.posicion ?? 99) - (b.posicion ?? 99);
  return 0;
}

function pickMejores(array, n) {
  return [...array].sort(compareStandings).slice(0, n);
}

// ================= Componentes UI =================
const Badge = ({ children }) => (
  <span style={{
    padding: "4px 10px",
    borderRadius: 999,
    background: "rgba(0,221,76,.12)",
    border: "1px solid rgba(0,221,76,.35)",
    color: "var(--primary-color)",
    fontSize: 12,
    fontWeight: 700
  }}>{children}</span>
);

const TeamChip = ({ r }) => (
  <div className="team-chip">
    <span className="team-name">{r?.equipo?.nombre || r?.equipoNombre || "TBD"}</span>
    <span className="team-meta">{r?.grupo ? `Grupo ${r.grupo}` : ""}{typeof r?.posicion === 'number' ? ` · ${r.posicion}º` : ""}</span>
  </div>
);

const MatchCard = ({ title, a, b, onSetWinner }) => {
  const [gA, setGA] = useState(0);
  const [gB, setGB] = useState(0);
  const winner = gA > gB ? a : gB > gA ? b : null;
  return (
    <motion.div className="glass-card" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
      <div className="match-header">
        <h4>{title}</h4>
        <Badge>90' + SO</Badge>
      </div>
      <div className="match-body">
        <div className="match-row">
          <TeamChip r={a} />
          <input type="number" min={0} value={gA} onChange={e=>setGA(parseInt(e.target.value||0))} />
        </div>
        <div className="match-row">
          <TeamChip r={b} />
          <input type="number" min={0} value={gB} onChange={e=>setGB(parseInt(e.target.value||0))} />
        </div>
      </div>
      <div className="match-footer">
        <button className="btn btn-small" onClick={()=> onSetWinner?.(winner)} disabled={!winner}>Confirmar ganador</button>
      </div>
    </motion.div>
  );
};

// ================= Página principal =================
export default function FaseFinal() {
  const [pos, setPos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await apiService.getPosiciones();
        setPos(res.data);
      } catch (e) {
        console.error(e);
        setError("No se pudo cargar posiciones");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const tablas = useMemo(() => {
    if (!pos) return null;
    const A = [...(pos.grupoA || [])].sort(compareStandings);
    const B = [...(pos.grupoB || [])].sort(compareStandings);
    const C = [...(pos.grupoC || [])].sort(compareStandings);
    return { A, B, C };
  }, [pos]);

  const repechaje = useMemo(() => {
    if (!tablas) return null;
    const { A, B, C } = tablas;
    const quintos = [A[4], B[4], C[4]].filter(Boolean);
    const sextos = [A[5], B[5], C[5]].filter(Boolean);
    const septimos = [A[6], B[6], C[6]].filter(Boolean);

    const [mejor7, segundo7] = pickMejores(septimos, 2);

    return [
      { code: "R1", a: quintos[0], b: mejor7, titulo: "5º A vs Mejor 7º" },
      { code: "R2", a: quintos[1], b: segundo7, titulo: "5º B vs 2º Mejor 7º" },
      { code: "R3", a: quintos[2], b: sextos[0], titulo: "5º C vs 6º A" },
      { code: "R4", a: sextos[1], b: sextos[2], titulo: "6º B vs 6º C" },
    ];
  }, [tablas]);

  const clasificadosDirectos = useMemo(() => {
    if (!tablas) return [];
    const tops = [
      ...tablas.A.slice(0, 4).map(r => ({ ...r, seedTag: "A" })),
      ...tablas.B.slice(0, 4).map(r => ({ ...r, seedTag: "B" })),
      ...tablas.C.slice(0, 4).map(r => ({ ...r, seedTag: "C" })),
    ];
    // Orden estándar 1ros > 2dos > 3ros > 4tos
    const buckets = [0,1,2,3].map(idx => [tablas.A[idx], tablas.B[idx], tablas.C[idx]].filter(Boolean));
    const ordenados = [
      ...buckets[0].sort(compareStandings),
      ...buckets[1].sort(compareStandings),
      ...buckets[2].sort(compareStandings),
      ...buckets[3].sort(compareStandings),
    ];
    return ordenados;
  }, [tablas]);

  // Estado mínimo para winners (solo UI local por ahora)
  const [ganadoresRepe, setGanadoresRepe] = useState({}); // { R1: row, R2: row, ... }

  const octavos = useMemo(() => {
    if (!repechaje || clasificadosDirectos.length !== 12) return [];
    const repe = ["R1","R2","R3","R4"].map(code => ganadoresRepe[code] || { equipoNombre: code });
    const seeds = [...clasificadosDirectos, ...repe]; // 16
    // Emparejar 1-16, 2-15, ...
    const pairs = [];
    for (let i = 0; i < 8; i++) {
      pairs.push({ title: `OF${i+1}`, a: seeds[i], b: seeds[15 - i] });
    }
    return pairs;
  }, [clasificadosDirectos, repechaje, ganadoresRepe]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        <h2>Cargando Fase Final...</h2>
      </div>
    );
  }

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="page">
      <h1 className="page-title">🏁 Fase Final</h1>

      {/* Repechaje */}
      <section className="glass-card" style={{marginBottom:"1.5rem"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, flexWrap:"wrap"}}>
          <h2 className="section-title" style={{margin:0}}>Repechaje (4 llaves)</h2>
          <Badge>Según Reglamento</Badge>
        </div>
        <div className="grid-container grid-2" style={{marginTop: "1rem"}}>
          {repechaje?.map((m) => (
            <MatchCard
              key={m.code}
              title={`${m.code} · ${m.titulo}`}
              a={m.a}
              b={m.b}
              onSetWinner={(w)=> setGanadoresRepe(prev=> ({...prev, [m.code]: w}))}
            />
          ))}
        </div>
      </section>

      {/* Octavos */}
      <section className="glass-card" style={{marginBottom:"1.5rem"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, flexWrap:"wrap"}}>
          <h2 className="section-title" style={{margin:0}}>Octavos de Final (16 equipos)</h2>
          <Badge>Seeds 1 vs 16, 2 vs 15, ...</Badge>
        </div>
        {octavos?.length === 0 ? (
          <p className="text-center" style={{opacity:.8}}>Primero confirma los ganadores del Repechaje</p>
        ) : (
          <div className="grid-container grid-2" style={{marginTop: "1rem"}}>
            {octavos.map(m => (
              <MatchCard key={m.title} title={m.title} a={m.a} b={m.b} onSetWinner={()=>{}} />
            ))}
          </div>
        )}
      </section>

      {/* TODO: Cuartos, Semis y Final → se alimentan con ganadores de Octavos */}
      <section className="glass-card">
        <h2 className="section-title">Siguientes rondas</h2>
        <ul style={{opacity:.85, lineHeight:1.8}}>
          <li>Cuartos de final: CF1–CF4</li>
          <li>Semifinales: SE1–SE2</li>
          <li>Final</li>
        </ul>
        <p style={{opacity:.75, marginTop:12}}>Estas fases se pueden encadenar fácilmente leyendo los ganadores de cada <em>MatchCard</em>.</p>
      </section>

      <style jsx>{`
      .team-chip{display:flex;flex-direction:column;gap:2px}
      .team-name{font-weight:700}
      .team-meta{opacity:.75;font-size:.85rem}
      .match-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem}
      .match-body{display:flex;flex-direction:column;gap:.5rem}
      .match-row{display:grid;grid-template-columns:1fr 80px;align-items:center;gap:12px}
      .match-footer{margin-top:.75rem;display:flex;justify-content:flex-end}
      input[type='number']{width:100%;background:transparent;color:var(--text-color);border:1px solid var(--border-color);border-radius:8px;padding:6px 10px}
      `}</style>
    </div>
  );
}

/*
 * 🔧 Cómo integrarlo:
 * 1) Guardar este archivo como src/pages/FaseFinal.jsx
 * 2) Agregar la ruta en src/App.jsx:
 *    import FaseFinal from './pages/FaseFinal';
 *    ...
 *    <Route path="/finales" element={<FaseFinal />} />
 * 3) (Opcional) Agregar un link en Header.jsx al path "/finales".
 *
 * 🧩 Futuras mejoras:
 * - Persistir resultados de cada llave con apiService (endpoints /api/fase-final/*)
 * - Bloquear cruces de mismo grupo en octavos si el reglamento lo exige.
 * - Mostrar horas/canchas y árbitros; activar Shootouts si hay empate.
 */
