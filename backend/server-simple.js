// server-simple.js - Node.js puro sin Express
// 🏆 Copa Maracaná 14ED - API con Node.js nativo

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const PORT = 3001;

// ====================================
// DATOS DEL TORNEO
// ====================================
const TOURNAMENT_CONFIG = {
  nombre: "Copa Maracaná 14ED",
  organizador: "BEAVER INGENIERÍA SAS",
  año: 2024,
  temporada: "14ED",
  tipo: "futbol-7",
  complejo: "Complejo Maracaná",
  ciudad: "Quito",
  pais: "Ecuador",
  grupos: ["A", "B", "C"],
  totalEquipos: 27,
  colores: {
    primario: "#00dd4c",
    secundario: "#0066cc",
    fondo: "#12121c"
  }
};

// Equipos
const equipos = [
  // GRUPO A
  { id: 1, nombre: 'COMPA JR.', grupo: 'A', logo: null, activo: true },
  { id: 2, nombre: 'LOS LAGARTOS', grupo: 'A', logo: null, activo: true },
  { id: 3, nombre: 'ALMA MARCE FC.', grupo: 'A', logo: null, activo: true },
  { id: 4, nombre: 'REAL VENEZUELA', grupo: 'A', logo: null, activo: true },
  { id: 5, nombre: 'THE FAMILY SPORTING CLUB', grupo: 'A', logo: null, activo: true },
  { id: 6, nombre: 'FC DESIRE', grupo: 'A', logo: null, activo: true },
  { id: 7, nombre: 'MILLENIUM JR', grupo: 'A', logo: null, activo: true },
  { id: 8, nombre: 'NEXT FC.', grupo: 'A', logo: null, activo: true },
  { id: 9, nombre: 'CHELSEA', grupo: 'A', logo: null, activo: true },
  
  // GRUPO B
  { id: 10, nombre: 'SPORT TU ÑAÑA', grupo: 'B', logo: null, activo: true },
  { id: 11, nombre: 'CLUB LB', grupo: 'B', logo: null, activo: true },
  { id: 12, nombre: 'ESPARTANOS FC', grupo: 'B', logo: null, activo: true },
  { id: 13, nombre: 'REALCOHOLICOS', grupo: 'B', logo: null, activo: true },
  { id: 14, nombre: 'IRRESPONSABLESFC', grupo: 'B', logo: null, activo: true },
  { id: 15, nombre: 'ALLIEN BIRDS', grupo: 'B', logo: null, activo: true },
  { id: 16, nombre: 'MANABA JIRETH FC', grupo: 'B', logo: null, activo: true },
  { id: 17, nombre: 'LEONES FC', grupo: 'B', logo: null, activo: true },
  { id: 18, nombre: 'GALACTICOS', grupo: 'B', logo: null, activo: true },
  
  // GRUPO C
  { id: 19, nombre: 'BAMBINOS FC', grupo: 'C', logo: null, activo: true },
  { id: 20, nombre: 'SOCXER FC', grupo: 'C', logo: null, activo: true },
  { id: 21, nombre: 'NEW GENERATION', grupo: 'C', logo: null, activo: true },
  { id: 22, nombre: 'ALFHA', grupo: 'C', logo: null, activo: true },
  { id: 23, nombre: 'CEBOLLITAS FOOTBALL CLUB', grupo: 'C', logo: null, activo: true },
  { id: 24, nombre: '11 DE ORO', grupo: 'C', logo: null, activo: true },
  { id: 25, nombre: 'AD. GUAGRACEO', grupo: 'C', logo: null, activo: true },
  { id: 26, nombre: 'AUTONIC', grupo: 'C', logo: null, activo: true },
  { id: 27, nombre: 'LOS DE SIEMPRE', grupo: 'C', logo: null, activo: true }
];

// Fechas
const fechas = [
  { id: 1, numero: 1, fecha: '2024-08-09', descripcion: 'Primera Fecha' },
  { id: 2, numero: 2, fecha: '2024-08-16', descripcion: 'Segunda Fecha' },
  { id: 3, numero: 3, fecha: '2024-08-23', descripcion: 'Tercera Fecha' },
  { id: 4, numero: 4, fecha: '2024-08-30', descripcion: 'Cuarta Fecha' },
  { id: 5, numero: 5, fecha: '2024-09-06', descripcion: 'Quinta Fecha' },
  { id: 6, numero: 6, fecha: '2024-09-13', descripcion: 'Sexta Fecha' },
  { id: 7, numero: 7, fecha: '2024-09-20', descripcion: 'Séptima Fecha' },
  { id: 8, numero: 8, fecha: '2024-09-27', descripcion: 'Octava Fecha' },
  { id: 9, numero: 9, fecha: '2024-10-04', descripcion: 'Fecha Final' }
];

// Partidos (Fecha 1 ya jugada / definida)
let partidos = [
  {
    id: 1, fechaId: 1, hora: '17:00', grupo: 'A',
    equipoLocalId: 5, equipoVisitanteId: 6,
    cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 2, fechaId: 1, hora: '17:00', grupo: 'B',
    equipoLocalId: 12, equipoVisitanteId: 11,
    cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 3, fechaId: 1, hora: '18:00', grupo: 'C',
    equipoLocalId: 19, equipoVisitanteId: 20,
    cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 4, fechaId: 1, hora: '18:00', grupo: 'C',
    equipoLocalId: 23, equipoVisitanteId: 25,
    cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 5, fechaId: 1, hora: '19:00', grupo: 'A',
    equipoLocalId: 1, equipoVisitanteId: 2,
    cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 6, fechaId: 1, hora: '19:00', grupo: 'C',
    equipoLocalId: 24, equipoVisitanteId: 21,
    cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 7, fechaId: 1, hora: '20:00', grupo: 'B',
    equipoLocalId: 14, equipoVisitanteId: 15,
    cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 8, fechaId: 1, hora: '20:00', grupo: 'C',
    equipoLocalId: 26, equipoVisitanteId: 27,
    cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 9, fechaId: 1, hora: '21:00', grupo: 'A',
    equipoLocalId: 3, equipoVisitanteId: 4,
    cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 10, fechaId: 1, hora: '21:00', grupo: 'B',
    equipoLocalId: 10, equipoVisitanteId: 13,
    cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 11, fechaId: 1, hora: '22:00', grupo: 'A',
    equipoLocalId: 8, equipoVisitanteId: 9,
    cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
  },
  {
    id: 12, fechaId: 1, hora: '22:00', grupo: 'B',
    equipoLocalId: 16, equipoVisitanteId: 17,
    cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
  }
];

// ====================================
// FIXTURE: Round-robin auto (respeta Fecha 1) SIN horas/canchas
// ====================================
(() => {
  // Helpers
  const encontrarEquipoPorId = (id) => equipos.find(e => e.id === parseInt(id));

  function roundPairsFromOrder(order) {
    const arr = order.slice();
    arr.push(null); // dummy
    const half = arr.length / 2; // 5
    const first = arr.slice(0, half);
    const second = arr.slice(half).reverse();
    const pairs = [];
    for (let i = 0; i < half; i++) {
      const a = first[i], b = second[i];
      if (a == null || b == null) continue;
      pairs.push([a, b]);
    }
    return pairs;
  }

  function generateRounds(order) {
    const rounds = [];
    let cur = order.slice();
    cur.push(null); // dummy
    const m = cur.length; // 10
    const half = m / 2;
    for (let r = 0; r < m - 1; r++) { // 9 rondas
      const first = cur.slice(0, half);
      const second = cur.slice(half).slice().reverse();
      const pairs = [];
      for (let i = 0; i < half; i++) {
        const a = first[i], b = second[i];
        if (a == null || b == null) continue;
        pairs.push([a, b]);
      }
      rounds.push(pairs);
      // rotación (primer elemento fijo)
      cur = [cur[0]].concat([cur[cur.length - 1]], cur.slice(1, cur.length - 1));
    }
    return rounds;
  }

  // Encuentra un orden que reproduzca EXACTO la fecha 1 existente
  function findOrder(ids, desiredPairs) {
    const desiredSets = desiredPairs.map(([a, b]) => new Set([a, b]));
    const slots = [[1, 8], [2, 7], [3, 6], [4, 5]]; // parejas de ronda1 (con dummy en pos 0)

    function permutations(arr) {
      if (arr.length <= 1) return [arr];
      const out = [];
      for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        for (const p of permutations(rest)) out.push([arr[i], ...p]);
      }
      return out;
    }

    for (const perm of permutations(desiredSets)) {
      const pos = new Array(9).fill(null);
      const used = new Set();
      let ok = true;
      for (let k = 0; k < slots.length; k++) {
        const [i, j] = slots[k];
        const pair = Array.from(perm[k]);
        const a = pair[0], b = pair[1];
        if (used.has(a) || used.has(b)) { ok = false; break; }
        pos[i] = a; pos[j] = b;
        used.add(a); used.add(b);
      }
      if (!ok) continue;
      const remaining = ids.filter(id => !used.has(id));
      if (remaining.length !== 1) continue;
      pos[0] = remaining[0]; // bye en ronda 1

      // validar
      const got = roundPairsFromOrder(pos).map(pr => new Set(pr));
      const norm = arr => new Set(arr.map(s => JSON.stringify(Array.from(s).sort((x, y) => x - y))));
      const eq = norm(got), want = norm(desiredSets);
      let same = eq.size === want.size;
      if (same) for (const v of eq) if (!want.has(v)) { same = false; break; }
      if (same) return pos;
    }
    return null;
  }

  const gruposIds = {
    A: equipos.filter(e => e.grupo === 'A').map(e => e.id),
    B: equipos.filter(e => e.grupo === 'B').map(e => e.id),
    C: equipos.filter(e => e.grupo === 'C').map(e => e.id),
  };

  const fecha1 = partidos.filter(p => p.fechaId === 1);
  const pairsF1 = { A: [], B: [], C: [] };
  for (const p of fecha1) pairsF1[p.grupo].push([p.equipoLocalId, p.equipoVisitanteId]);

  const orderA = findOrder(gruposIds.A, pairsF1.A);
  const orderB = findOrder(gruposIds.B, pairsF1.B);
  const orderC = findOrder(gruposIds.C, pairsF1.C);

  if (!orderA || !orderB || !orderC) {
    console.warn('No se pudo derivar un orden inicial para algún grupo. Se omite autogeneración.');
  } else {
    const roundsA = generateRounds(orderA);
    const roundsB = generateRounds(orderB);
    const roundsC = generateRounds(orderC);

    let nextId = partidos.length + 1;
    // Generar Fechas 2..9 (sin hora/cancha)
    for (let fechaId = 2; fechaId <= 9; fechaId++) {
      const idx = fechaId - 1; // 1..8
      const bloques = [
        ['A', roundsA[idx]],
        ['B', roundsB[idx]],
        ['C', roundsC[idx]],
      ];
      for (const [grupo, pares] of bloques) {
        for (const [localId, visitanteId] of pares) {
          partidos.push({
            id: nextId++,
            fechaId,
            hora: null,            // ← se define en Admin
            grupo,
            equipoLocalId: localId,
            equipoVisitanteId: visitanteId,
            cancha: null,          // ← se define en Admin
            golesLocal: null,
            golesVisitante: null,
            estado: 'programado'
          });
        }
      }
    }
  }
})();

// ====================================
// FUNCIONES AUXILIARES
// ====================================
const encontrarEquipoPorId = (id) => {
  return equipos.find(equipo => equipo.id === parseInt(id));
};

const calcularPosiciones = (grupo) => {
  const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
  return equiposGrupo.map((equipo, index) => ({
    posicion: index + 1,
    equipo: equipo,
    partidosJugados: 0,
    ganados: 0,
    empatados: 0,
    perdidos: 0,
    golesFavor: 0,
    golesContra: 0,
    diferenciaGoles: 0,
    puntos: 0
  }));
};

const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
  res.end(JSON.stringify(data, null, 2));
};

// ====================================
// SERVIDOR HTTP
// ====================================
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    res.end();
    return;
  }

  // Ruta principal
  if (path === '/' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: '🏆 Copa Maracaná 14ED - API funcionando con Node.js puro!',
      torneo: TOURNAMENT_CONFIG,
      estadisticas: {
        totalEquipos: equipos.length,
        totalPartidos: partidos.length,
        totalFechas: fechas.length
      },
      endpoints: {
        equipos: '/api/equipos',
        equiposPorGrupo: '/api/equipos/grupo/A',
        partidos: '/api/partidos',
        partidosPorFecha: '/api/partidos/fecha/1',
        posiciones: '/api/posiciones',
        fechas: '/api/fechas'
      },
      version: '1.0.0 - Node.js Puro',
      timestamp: new Date().toISOString()
    });
    return;
  }

  // API Equipos - Todos
  if (path === '/api/equipos' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: 'Lista de equipos obtenida exitosamente',
      data: equipos,
      total: equipos.length,
      porGrupo: {
        A: equipos.filter(eq => eq.grupo === 'A').length,
        B: equipos.filter(eq => eq.grupo === 'B').length,
        C: equipos.filter(eq => eq.grupo === 'C').length
      }
    });
    return;
  }

  // API Equipos por Grupo
  if (path.startsWith('/api/equipos/grupo/') && method === 'GET') {
    const grupo = path.split('/')[4]?.toUpperCase();
    if (!['A', 'B', 'C'].includes(grupo)) {
      sendResponse(res, 400, { success: false, message: 'Grupo debe ser A, B o C' });
      return;
    }
    const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
    sendResponse(res, 200, {
      success: true,
      message: `Equipos del grupo ${grupo}`,
      data: equiposGrupo,
      total: equiposGrupo.length,
      grupo: grupo
    });
    return;
  }

  // API Partidos - Todos
  if (path === '/api/partidos' && method === 'GET') {
    const partidosConEquipos = partidos.map(partido => ({
      ...partido,
      equipoLocal: encontrarEquipoPorId(partido.equipoLocalId),
      equipoVisitante: encontrarEquipoPorId(partido.equipoVisitanteId)
    }));
    sendResponse(res, 200, {
      success: true,
      message: 'Lista de partidos obtenida exitosamente',
      data: partidosConEquipos,
      total: partidosConEquipos.length
    });
    return;
  }

  // API Partidos por Fecha
  if (path.startsWith('/api/partidos/fecha/') && method === 'GET') {
    const fechaId = parseInt(path.split('/')[4]);
    const fecha = fechas.find(f => f.id === fechaId);
    if (!fecha) {
      sendResponse(res, 404, { success: false, message: 'Fecha no encontrada' });
      return;
    }
    const partidosFecha = partidos
      .filter(p => p.fechaId === fechaId)
      .map(partido => ({
        ...partido,
        equipoLocal: encontrarEquipoPorId(partido.equipoLocalId),
        equipoVisitante: encontrarEquipoPorId(partido.equipoVisitanteId)
      }));
    const equiposJuegan = partidosFecha.flatMap(p => [p.equipoLocalId, p.equipoVisitanteId]);
    const equiposDescansan = equipos.filter(eq => !equiposJuegan.includes(eq.id));
    sendResponse(res, 200, {
      success: true,
      message: `Partidos de la ${fecha.descripcion}`,
      data: {
        fecha: fecha,
        partidos: partidosFecha,
        equiposDescansan: equiposDescansan
      }
    });
    return;
  }

  // API Actualizar Partido (hora/cancha/estado/goles)
  if (path.startsWith('/api/partidos/') && method === 'PUT') {
    const id = parseInt(path.split('/')[3]);
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const idx = partidos.findIndex(p => p.id === id);
        if (idx === -1) return sendResponse(res, 404, { success: false, message: 'Partido no encontrado' });

        const allowedEstados = ['programado', 'en-curso', 'finalizado'];
        if (data.estado && !allowedEstados.includes(data.estado)) {
          return sendResponse(res, 400, { success: false, message: 'Estado inválido' });
        }
        if (data.hora && !/^\d{2}:\d{2}$/.test(data.hora)) {
          return sendResponse(res, 400, { success: false, message: 'Hora inválida (formato HH:mm)' });
        }
        if (data.cancha && !['NORTE', 'SUR'].includes(data.cancha)) {
          return sendResponse(res, 400, { success: false, message: 'Cancha inválida (NORTE|SUR)' });
        }

        const p = partidos[idx];
        partidos[idx] = {
          ...p,
          hora: data.hora ?? p.hora,
          cancha: data.cancha ?? p.cancha,
          estado: data.estado ?? p.estado,
          golesLocal: data.golesLocal ?? p.golesLocal,
          golesVisitante: data.golesVisitante ?? p.golesVisitante,
        };

        return sendResponse(res, 200, { success: true, message: 'Partido actualizado', data: partidos[idx] });
      } catch (e) {
        return sendResponse(res, 400, { success: false, message: 'JSON inválido' });
      }
    });
    return;
  }

  // API Posiciones - General
  if (path === '/api/posiciones' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: 'Tabla de posiciones obtenida exitosamente',
      data: {
        grupoA: calcularPosiciones('A'),
        grupoB: calcularPosiciones('B'),
        grupoC: calcularPosiciones('C')
      }
    });
    return;
  }

  // API Posiciones por Grupo
  if (path.startsWith('/api/posiciones/grupo/') && method === 'GET') {
    const grupo = path.split('/')[4]?.toUpperCase();
    if (!['A', 'B', 'C'].includes(grupo)) {
      sendResponse(res, 400, { success: false, message: 'Grupo debe ser A, B o C' });
      return;
    }
    sendResponse(res, 200, {
      success: true,
      message: `Posiciones del grupo ${grupo}`,
      data: calcularPosiciones(grupo),
      grupo: grupo
    });
    return;
  }

  // API Fechas
  if (path === '/api/fechas' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: 'Fechas del torneo obtenidas exitosamente',
      data: fechas,
      total: fechas.length
    });
    return;
  }

  // API Stats
  if (path === '/api/stats' && method === 'GET') {
    const partidosCompletados = partidos.filter(p => p.estado === 'finalizado').length;
    const partidosPendientes = partidos.filter(p => p.estado === 'programado').length;
    sendResponse(res, 200, {
      success: true,
      message: 'Estadísticas del torneo obtenidas exitosamente',
      data: {
        torneo: TOURNAMENT_CONFIG,
        equipos: {
          total: equipos.length,
          porGrupo: {
            A: equipos.filter(eq => eq.grupo === 'A').length,
            B: equipos.filter(eq => eq.grupo === 'B').length,
            C: equipos.filter(eq => eq.grupo === 'C').length
          }
        },
        partidos: {
          total: partidos.length,
          completados: partidosCompletados,
          pendientes: partidosPendientes,
          porcentajeAvance: ((partidosCompletados / partidos.length) * 100).toFixed(1) + '%'
        },
        fechas: {
          total: fechas.length
        }
      }
    });
    return;
  }

  // 404 - Ruta no encontrada
  sendResponse(res, 404, {
    success: false,
    message: `Ruta ${path} no encontrada`,
    rutasDisponibles: [
      'GET /',
      'GET /api/equipos',
      'GET /api/equipos/grupo/A',
      'GET /api/partidos',
      'GET /api/partidos/fecha/1',
      'PUT /api/partidos/:id',
      'GET /api/posiciones',
      'GET /api/posiciones/grupo/A',
      'GET /api/fechas',
      'GET /api/stats'
    ]
  });
});

// Iniciar servidor
server.listen(PORT, () => {
  console.log('\n🚀 =====================================');
  console.log('🏆   COPA MARACANÁ 14ED - API');
  console.log('   📟 Node.js Puro (Sin Express)');
  console.log('=====================================');
  console.log(`📡 Servidor: http://localhost:${PORT}`);
  console.log(`⚽ Equipos: http://localhost:${PORT}/api/equipos`);
  console.log(`🏟️  Partidos: http://localhost:${PORT}/api/partidos`);
  console.log(`🏆 Posiciones: http://localhost:${PORT}/api/posiciones`);
  console.log(`📊 Estadísticas: http://localhost:${PORT}/api/stats`);
  console.log('=====================================');
  console.log(`🎯 Torneo: ${TOURNAMENT_CONFIG.nombre}`);
  console.log(`🏢 Organizador: ${TOURNAMENT_CONFIG.organizador}`);
  console.log(`📅 Año: ${TOURNAMENT_CONFIG.año} - ${TOURNAMENT_CONFIG.temporada}`);
  console.log(`👥 Equipos: ${equipos.length} (${TOURNAMENT_CONFIG.grupos.length} grupos)`);
  console.log(`🏟️  Partidos: ${partidos.length} programados`);
  console.log('=====================================\n');
  console.log('💡 Ventajas de Node.js puro:');
  console.log('   ✅ Sin dependencias problemáticas');
  console.log('   ✅ Máximo rendimiento');
  console.log('   ✅ Compatible con cualquier versión de Node');
  console.log('   ✅ Cero conflictos de librerías');
  console.log('\n✨ ¡Copa Maracaná 14ED funcionando! ✨\n');
});
