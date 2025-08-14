// server-persistent.js - Copa Maracaná 14ED con persistencia JSON
// 🏆 Genera fixture completo + guarda resultados en archivo JSON

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'partidos-data.json');

// ====================================
// CONFIGURACIÓN DEL TORNEO
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

// ====================================
// DATOS BASE
// ====================================

const equipos = [
  // GRUPO A (9 equipos)
  { id: 1, nombre: 'COMPA JR.', grupo: 'A', logo: null, activo: true },
  { id: 2, nombre: 'LOS LAGARTOS', grupo: 'A', logo: null, activo: true },
  { id: 3, nombre: 'ALMA MARCE FC.', grupo: 'A', logo: null, activo: true },
  { id: 4, nombre: 'REAL VENEZUELA', grupo: 'A', logo: null, activo: true },
  { id: 5, nombre: 'THE FAMILY SPORTING CLUB', grupo: 'A', logo: null, activo: true },
  { id: 6, nombre: 'FC DESIRE', grupo: 'A', logo: null, activo: true },
  { id: 7, nombre: 'MILLENIUM JR', grupo: 'A', logo: null, activo: true },
  { id: 8, nombre: 'NEXT FC.', grupo: 'A', logo: null, activo: true },
  { id: 9, nombre: 'CHELSEA', grupo: 'A', logo: null, activo: true },
  
  // GRUPO B (9 equipos)
  { id: 10, nombre: 'SPORT TU ÑAÑA', grupo: 'B', logo: null, activo: true },
  { id: 11, nombre: 'CLUB LB', grupo: 'B', logo: null, activo: true },
  { id: 12, nombre: 'ESPARTANOS FC', grupo: 'B', logo: null, activo: true },
  { id: 13, nombre: 'REALCOHOLICOS', grupo: 'B', logo: null, activo: true },
  { id: 14, nombre: 'IRRESPONSABLESFC', grupo: 'B', logo: null, activo: true },
  { id: 15, nombre: 'ALLIEN BIRDS', grupo: 'B', logo: null, activo: true },
  { id: 16, nombre: 'MANABA JIRETH FC', grupo: 'B', logo: null, activo: true },
  { id: 17, nombre: 'LEONES FC', grupo: 'B', logo: null, activo: true },
  { id: 18, nombre: 'GALACTICOS', grupo: 'B', logo: null, activo: true },
  
  // GRUPO C (9 equipos)
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

// ====================================
// PERSISTENCIA JSON
// ====================================

function saveData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    console.log('💾 Datos guardados en:', DATA_FILE);
    return true;
  } catch (error) {
    console.error('❌ Error guardando datos:', error);
    return false;
  }
}

function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(data);
      console.log('📂 Datos cargados desde:', DATA_FILE);
      console.log(`📊 ${parsed.partidos?.length || 0} partidos cargados`);
      return parsed;
    }
  } catch (error) {
    console.error('❌ Error cargando datos:', error);
  }
  return null;
}

// ====================================
// GENERADOR DE FIXTURE ROUND-ROBIN
// ====================================

function generateRoundRobin(equiposGrupo) {
  const teams = [...equiposGrupo];
  
  if (teams.length % 2 === 1) {
    teams.push(null);
  }
  
  const numTeams = teams.length;
  const numRounds = numTeams - 1;
  const matchesPerRound = numTeams / 2;
  
  const schedule = [];
  
  for (let round = 0; round < numRounds; round++) {
    const roundMatches = [];
    
    for (let match = 0; match < matchesPerRound; match++) {
      const home = (round + match) % (numTeams - 1);
      const away = (numTeams - 1 - match + round) % (numTeams - 1);
      
      let homeTeam, awayTeam;
      if (match === 0) {
        homeTeam = teams[numTeams - 1];
        awayTeam = teams[away];
      } else {
        homeTeam = teams[home];
        awayTeam = teams[away];
      }
      
      if (homeTeam !== null && awayTeam !== null) {
        roundMatches.push([homeTeam, awayTeam]);
      }
    }
    
    schedule.push(roundMatches);
  }
  
  return schedule;
}

function generateAllMatches() {
  console.log('🔄 Generando fixture completo...');
  
  const allMatches = [];
  let matchId = 1;
  
  const grupoA = equipos.filter(eq => eq.grupo === 'A').map(eq => eq.id);
  const grupoB = equipos.filter(eq => eq.grupo === 'B').map(eq => eq.id);
  const grupoC = equipos.filter(eq => eq.grupo === 'C').map(eq => eq.id);
  
  const fixtureA = generateRoundRobin(grupoA);
  const fixtureB = generateRoundRobin(grupoB);
  const fixtureC = generateRoundRobin(grupoC);
  
  const horariosBase = [
    '17:00', '17:00', '18:00', '18:00', 
    '19:00', '19:00', '20:00', '20:00', 
    '21:00', '21:00', '22:00', '22:00'
  ];
  
  const canchas = ['NORTE', 'SUR'];
  
  for (let fechaId = 1; fechaId <= 9; fechaId++) {
    const fechaIndex = fechaId - 1;
    let horarioIndex = 0;
    
    const partidosFecha = [];
    
    // Grupo A
    if (fixtureA[fechaIndex]) {
      fixtureA[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosFecha.push({
          id: matchId++,
          fechaId: fechaId,
          hora: horariosBase[horarioIndex % horariosBase.length],
          grupo: 'A',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: canchas[horarioIndex % 2],
          golesLocal: null,
          golesVisitante: null,
          estado: 'programado'
        });
        horarioIndex++;
      });
    }
    
    // Grupo B
    if (fixtureB[fechaIndex]) {
      fixtureB[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosFecha.push({
          id: matchId++,
          fechaId: fechaId,
          hora: horariosBase[horarioIndex % horariosBase.length],
          grupo: 'B',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: canchas[horarioIndex % 2],
          golesLocal: null,
          golesVisitante: null,
          estado: 'programado'
        });
        horarioIndex++;
      });
    }
    
    // Grupo C
    if (fixtureC[fechaIndex]) {
      fixtureC[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosFecha.push({
          id: matchId++,
          fechaId: fechaId,
          hora: horariosBase[horarioIndex % horariosBase.length],
          grupo: 'C',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: canchas[horarioIndex % 2],
          golesLocal: null,
          golesVisitante: null,
          estado: 'programado'
        });
        horarioIndex++;
      });
    }
    
    partidosFecha.sort((a, b) => a.hora.localeCompare(b.hora));
    allMatches.push(...partidosFecha);
  }
  
  console.log(`✅ Fixture generado: ${allMatches.length} partidos`);
  return allMatches;
}

// ====================================
// INICIALIZACIÓN DE DATOS
// ====================================

let partidos = [];

function initializeData() {
  const savedData = loadData();
  
  if (savedData && savedData.partidos && savedData.partidos.length > 0) {
    console.log('📂 Usando datos guardados');
    partidos = savedData.partidos;
  } else {
    console.log('🆕 Generando fixture inicial');
    partidos = generateAllMatches();
    saveData({ partidos, equipos, fechas, version: '1.0.0', timestamp: new Date().toISOString() });
  }
}

// ====================================
// FUNCIONES AUXILIARES
// ====================================

const encontrarEquipoPorId = (id) => {
  return equipos.find(equipo => equipo.id === parseInt(id));
};

// Función calcularPosiciones CORREGIDA
// Reemplaza esta función en tu server-complete.js

const calcularPosiciones = (grupo) => {
  console.log(`🔄 Calculando posiciones para grupo ${grupo}...`);
  
  const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
  
  // CAMBIO CLAVE: Contar partidos con goles VÁLIDOS, no solo "finalizado"
  const partidosGrupo = partidos.filter(p => 
    p.grupo === grupo && 
    p.golesLocal !== null && 
    p.golesVisitante !== null &&
    !isNaN(p.golesLocal) &&
    !isNaN(p.golesVisitante)
  );
  
  console.log(`👥 Equipos grupo ${grupo}:`, equiposGrupo.length);
  console.log(`🏟️ Partidos con resultados grupo ${grupo}:`, partidosGrupo.length);
  
  // Inicializar estadísticas
  const stats = {};
  equiposGrupo.forEach(eq => {
    stats[eq.id] = {
      equipo: eq,
      partidosJugados: 0,
      ganados: 0,
      empatados: 0,
      perdidos: 0,
      golesFavor: 0,
      golesContra: 0,
      diferenciaGoles: 0,
      puntos: 0
    };
  });
  
  // Procesar cada partido con resultado válido
  partidosGrupo.forEach(partido => {
    const localId = partido.equipoLocalId;
    const visitanteId = partido.equipoVisitanteId;
    
    const golesLocal = parseInt(partido.golesLocal);
    const golesVisitante = parseInt(partido.golesVisitante);
    
    console.log(`⚽ Partido: ${localId} vs ${visitanteId} = ${golesLocal}-${golesVisitante}`);
    
    // Actualizar estadísticas del equipo local
    if (stats[localId]) {
      stats[localId].partidosJugados++;
      stats[localId].golesFavor += golesLocal;
      stats[localId].golesContra += golesVisitante;
      
      if (golesLocal > golesVisitante) {
        stats[localId].ganados++;
        stats[localId].puntos += 3;
        console.log(`✅ Equipo ${localId} ganó (+3 pts)`);
      } else if (golesLocal === golesVisitante) {
        stats[localId].empatados++;
        stats[localId].puntos += 1;
        console.log(`🤝 Equipo ${localId} empató (+1 pt)`);
      } else {
        stats[localId].perdidos++;
        console.log(`❌ Equipo ${localId} perdió (+0 pts)`);
      }
    }
    
    // Actualizar estadísticas del equipo visitante
    if (stats[visitanteId]) {
      stats[visitanteId].partidosJugados++;
      stats[visitanteId].golesFavor += golesVisitante;
      stats[visitanteId].golesContra += golesLocal;
      
      if (golesVisitante > golesLocal) {
        stats[visitanteId].ganados++;
        stats[visitanteId].puntos += 3;
        console.log(`✅ Equipo ${visitanteId} ganó (+3 pts)`);
      } else if (golesVisitante === golesLocal) {
        stats[visitanteId].empatados++;
        stats[visitanteId].puntos += 1;
        console.log(`🤝 Equipo ${visitanteId} empató (+1 pt)`);
      } else {
        stats[visitanteId].perdidos++;
        console.log(`❌ Equipo ${visitanteId} perdió (+0 pts)`);
      }
    }
  });
  
  // Calcular diferencia de goles
  Object.values(stats).forEach(stat => {
    stat.diferenciaGoles = stat.golesFavor - stat.golesContra;
  });
  
  // Ordenar por: 1) puntos, 2) diferencia de goles, 3) goles a favor
  const posiciones = Object.values(stats).sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    if (b.diferenciaGoles !== a.diferenciaGoles) return b.diferenciaGoles - a.diferenciaGoles;
    return b.golesFavor - a.golesFavor;
  });
  
  // Asignar posiciones
  posiciones.forEach((stat, index) => {
    stat.posicion = index + 1;
  });
  
  console.log(`📊 Posiciones grupo ${grupo}:`);
  posiciones.forEach(p => {
    if (p.partidosJugados > 0) {
      console.log(`${p.posicion}. ${p.equipo.nombre}: ${p.puntos} pts (${p.partidosJugados} PJ, ${p.ganados}-${p.empatados}-${p.perdidos})`);
    }
  });
  
  return posiciones;
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
      message: '🏆 Copa Maracaná 14ED - API con persistencia JSON',
      torneo: TOURNAMENT_CONFIG,
      estadisticas: {
        totalEquipos: equipos.length,
        totalPartidos: partidos.length,
        totalFechas: fechas.length,
        partidosCompletados: partidos.filter(p => p.estado === 'finalizado').length,
        partidosPendientes: partidos.filter(p => p.estado === 'programado').length,
        archivoGuardado: DATA_FILE
      },
      endpoints: {
        equipos: '/api/equipos',
        partidos: '/api/partidos',
        posiciones: '/api/posiciones',
        fechas: '/api/fechas'
      },
      version: '3.0.0 - Persistencia JSON',
      timestamp: new Date().toISOString()
    });
    return;
  }

  // API Equipos
  if (path === '/api/equipos' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: 'Lista de equipos',
      data: equipos,
      total: equipos.length
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
      total: equiposGrupo.length
    });
    return;
  }

  // API Partidos
  if (path === '/api/partidos' && method === 'GET') {
    const partidosConEquipos = partidos.map(partido => ({
      ...partido,
      equipoLocal: encontrarEquipoPorId(partido.equipoLocalId),
      equipoVisitante: encontrarEquipoPorId(partido.equipoVisitanteId)
    }));
    sendResponse(res, 200, {
      success: true,
      message: 'Lista de partidos',
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
      }))
      .sort((a, b) => a.hora?.localeCompare(b.hora) || 0);
    
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

  // API Actualizar Partido (CON PERSISTENCIA)
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

        const p = partidos[idx];
        partidos[idx] = {
          ...p,
          hora: data.hora ?? p.hora,
          cancha: data.cancha ?? p.cancha,
          estado: data.estado ?? p.estado,
          golesLocal: data.golesLocal ?? p.golesLocal,
          golesVisitante: data.golesVisitante ?? p.golesVisitante,
        };

        // GUARDAR INMEDIATAMENTE
        const saved = saveData({ 
          partidos, 
          equipos, 
          fechas, 
          version: '3.0.0',
          lastUpdate: new Date().toISOString() 
        });

        return sendResponse(res, 200, { 
          success: true, 
          message: 'Partido actualizado y guardado', 
          data: partidos[idx],
          saved: saved
        });
      } catch (e) {
        return sendResponse(res, 400, { success: false, message: 'JSON inválido' });
      }
    });
    return;
  }

  // API Posiciones
  if (path === '/api/posiciones' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: 'Tabla de posiciones',
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
      data: calcularPosiciones(grupo)
    });
    return;
  }

  // API Fechas
  if (path === '/api/fechas' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: 'Fechas del torneo',
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
      message: 'Estadísticas del torneo',
      data: {
        torneo: TOURNAMENT_CONFIG,
        equipos: { total: equipos.length },
        partidos: { 
          total: partidos.length,
          completados: partidosCompletados,
          pendientes: partidosPendientes,
          porcentaje: partidosCompletados > 0 ? 
            ((partidosCompletados / partidos.length) * 100).toFixed(1) + '%' : '0%'
        },
        fechas: { total: fechas.length }
      }
    });
    return;
  }

  // 404
  sendResponse(res, 404, {
    success: false,
    message: `Ruta ${path} no encontrada`
  });
});

// ====================================
// INICIAR SERVIDOR
// ====================================

// Inicializar datos al arrancar
initializeData();

server.listen(PORT, () => {
  console.log('\n🚀 =====================================');
  console.log('🏆   COPA MARACANÁ 14ED - API v3.0');
  console.log('   💾 CON PERSISTENCIA JSON');
  console.log('=====================================');
  console.log(`📡 Servidor: http://localhost:${PORT}`);
  console.log(`💾 Archivo de datos: ${DATA_FILE}`);
  console.log(`🏟️  Partidos: ${partidos.length} cargados`);
  console.log(`✅ Partidos completados: ${partidos.filter(p => p.estado === 'finalizado').length}`);
  console.log('=====================================');
  console.log('💡 CARACTERÍSTICAS v3.0:');
  console.log('   ✅ Persistencia automática en JSON');
  console.log('   ✅ Resultados se guardan inmediatamente');
  console.log('   ✅ Posiciones calculadas en tiempo real');
  console.log('   ✅ Datos recuperables al reiniciar');
  console.log('   ✅ Backup automático de partidos');
  console.log('\n✨ ¡Todo listo para registrar resultados! ✨\n');
});