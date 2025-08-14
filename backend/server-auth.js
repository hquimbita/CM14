require('dotenv').config();

// server-auth.js - Copa Maracaná 14ED con autenticación + logos por posición
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'partidos-data.json');
const USERS_FILE = path.join(__dirname, 'users-data.json');

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
  totalEquipos: 28,
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
  // GRUPO A (9)
  { id: 1, nombre: 'COMPA JR.', grupo: 'A', logo: null, activo: true },
  { id: 2, nombre: 'LOS LAGARTOS', grupo: 'A', logo: null, activo: true },
  { id: 3, nombre: 'ALMA MARCE FC.', grupo: 'A', logo: null, activo: true },
  { id: 4, nombre: 'REAL VENEZUELA', grupo: 'A', logo: null, activo: true },
  { id: 5, nombre: 'THE FAMILY SPORTING CLUB', grupo: 'A', logo: null, activo: true },
  { id: 6, nombre: 'FC DESIRE', grupo: 'A', logo: null, activo: true },
  { id: 7, nombre: 'MILLENIUM JR', grupo: 'A', logo: null, activo: true },
  { id: 8, nombre: 'NEXT FC.', grupo: 'A', logo: null, activo: true },
  { id: 9, nombre: 'CHELSEA', grupo: 'A', logo: null, activo: true },

  // GRUPO B (9)
  { id: 10, nombre: 'SPORT TU ÑAÑA', grupo: 'B', logo: null, activo: true },
  { id: 11, nombre: 'CLUB LB', grupo: 'B', logo: null, activo: true },
  { id: 12, nombre: 'ESPARTANOS FC', grupo: 'B', logo: null, activo: true },
  { id: 13, nombre: 'REALCOHOLICOS', grupo: 'B', logo: null, activo: true },
  { id: 14, nombre: 'IRRESPONSABLESFC', grupo: 'B', logo: null, activo: true },
  { id: 15, nombre: 'ALLIEN BIRDS', grupo: 'B', logo: null, activo: true },
  { id: 16, nombre: 'MANABA JIRETH FC', grupo: 'B', logo: null, activo: true },
  { id: 17, nombre: 'LEONES FC', grupo: 'B', logo: null, activo: true },
  { id: 18, nombre: 'GALACTICOS', grupo: 'B', logo: null, activo: true },

  // GRUPO C (10 con VELPACK)
  { id: 19, nombre: 'BAMBINOS FC', grupo: 'C', logo: null, activo: true },
  { id: 20, nombre: 'SOCXER FC', grupo: 'C', logo: null, activo: true },
  { id: 21, nombre: 'NEW GENERATION', grupo: 'C', logo: null, activo: true },
  { id: 22, nombre: 'ALFHA', grupo: 'C', logo: null, activo: true },
  { id: 23, nombre: 'CEBOLLITAS FOOTBALL CLUB', grupo: 'C', logo: null, activo: true },
  { id: 24, nombre: '11 DE ORO', grupo: 'C', logo: null, activo: true },
  { id: 25, nombre: 'AD. GUAGRACEO', grupo: 'C', logo: null, activo: true },
  { id: 26, nombre: 'AUTONIC', grupo: 'C', logo: null, activo: true },
  { id: 27, nombre: 'LOS DE SIEMPRE', grupo: 'C', logo: null, activo: true },
  { id: 28, nombre: 'VELPACK A& F', grupo: 'C', logo: null, activo: true },
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
// USUARIOS Y AUTENTICACIÓN
// ====================================
let users = [];
let sessions = new Map(); // sessionId -> userId

const defaultUsers = [
  { id: 1, username: 'admin', email: 'admin@copamaracana.com', password: hashPassword('admin123'), role: 'admin', nombre: 'Administrador', createdAt: new Date().toISOString(), lastLogin: null, activo: true },
  { id: 2, username: 'organizador', email: 'organizador@beaver.com', password: hashPassword('beaver2024'), role: 'admin', nombre: 'BEAVER INGENIERÍA', createdAt: new Date().toISOString(), lastLogin: null, activo: true },
  { id: 3, username: 'viewer', email: 'viewer@copamaracana.com', password: hashPassword('viewer123'), role: 'viewer', nombre: 'Usuario Viewer', createdAt: new Date().toISOString(), lastLogin: null, activo: true },
];

function hashPassword(password) {
  return crypto.createHash('sha256').update(password + 'copa-maracana-salt').digest('hex');
}
function generateSessionId() { return crypto.randomBytes(32).toString('hex'); }

function saveUsers() {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify({ users, sessions: Array.from(sessions.entries()) }, null, 2));
    console.log('👤 Usuarios guardados');
    return true;
  } catch (e) { console.error('❌ Error guardando usuarios:', e); return false; }
}
function loadUsers() {
  try {
    if (fs.existsSync(USERS_FILE)) {
      const data = fs.readFileSync(USERS_FILE, 'utf8');
      const parsed = JSON.parse(data);
      users = parsed.users || [];
      sessions = new Map(parsed.sessions || []);
      console.log('👤 Usuarios cargados:', users.length);
      return true;
    }
  } catch (e) { console.error('❌ Error cargando usuarios:', e); }
  return false;
}

function authenticateUser(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return null;
  const token = auth.substring(7);
  const userId = sessions.get(token);
  if (!userId) return null;
  return users.find(u => u.id === userId) || null;
}
function requireAuth(req, res, fn) {
  const user = authenticateUser(req);
  if (!user) { sendResponse(res, 401, { success:false, message:'Token de autenticación requerido o inválido', code:'UNAUTHORIZED' }); return false; }
  return fn(user);
}
function requireAdmin(req, res, fn) {
  const user = authenticateUser(req);
  if (!user) { sendResponse(res, 401, { success:false, message:'Token de autenticación requerido', code:'UNAUTHORIZED' }); return false; }
  if (user.role !== 'admin') { sendResponse(res, 403, { success:false, message:'Permisos de administrador requeridos', code:'FORBIDDEN' }); return false; }
  return fn(user);
}

// ====================================
// FIXTURE
// ====================================
function generateRoundRobin(equiposGrupo) {
  const teams = [...equiposGrupo];
  if (teams.length % 2 === 1) teams.push(null);
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
      if (match === 0) { homeTeam = teams[numTeams - 1]; awayTeam = teams[away]; }
      else { homeTeam = teams[home]; awayTeam = teams[away]; }
      if (homeTeam !== null && awayTeam !== null) roundMatches.push([homeTeam, awayTeam]);
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

  const horariosBase = ['17:00', '17:00', '18:00', '18:00', '19:00', '19:00', '20:00', '20:00', '21:00', '21:00', '22:00', '22:00'];
  const canchas = ['NORTE', 'SUR'];

  for (let fechaId = 1; fechaId <= 9; fechaId++) {
    const fechaIndex = fechaId - 1;
    let horarioIndex = 0;
    const partidosFecha = [];

    [['A', fixtureA], ['B', fixtureB], ['C', fixtureC]].forEach(([grupo, fixture]) => {
      if (fixture[fechaIndex]) {
        fixture[fechaIndex].forEach(([localId, visitanteId]) => {
          partidosFecha.push({
            id: matchId++,
            fechaId,
            hora: horariosBase[horarioIndex % horariosBase.length],
            grupo,
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
    });

    partidosFecha.sort((a, b) => a.hora.localeCompare(b.hora));
    allMatches.push(...partidosFecha);
  }
  console.log(`✅ Fixture generado: ${allMatches.length} partidos`);
  return allMatches;
}

// ====================================
// NUEVO SISTEMA DE LOGOS POR POSICIÓN
// ====================================
const LOGOS_DIR = path.join(__dirname, 'uploads', 'logos');

// Mapeo de equipos a su posición en el grupo (según orden original)
const EQUIPO_POSICIONES = {
  // GRUPO A (9 equipos)
  1: { grupo: 'a', posicion: 1 },   // COMPA JR.
  2: { grupo: 'a', posicion: 2 },   // LOS LAGARTOS
  3: { grupo: 'a', posicion: 3 },   // ALMA MARCE FC.
  4: { grupo: 'a', posicion: 4 },   // REAL VENEZUELA
  5: { grupo: 'a', posicion: 5 },   // THE FAMILY SPORTING CLUB
  6: { grupo: 'a', posicion: 6 },   // FC DESIRE
  7: { grupo: 'a', posicion: 7 },   // MILLENIUM JR
  8: { grupo: 'a', posicion: 8 },   // NEXT FC.
  9: { grupo: 'a', posicion: 9 },   // CHELSEA

  // GRUPO B (9 equipos)
  10: { grupo: 'b', posicion: 1 },  // SPORT TU ÑAÑA
  11: { grupo: 'b', posicion: 2 },  // CLUB LB
  12: { grupo: 'b', posicion: 3 },  // ESPARTANOS FC
  13: { grupo: 'b', posicion: 4 },  // REALCOHOLICOS
  14: { grupo: 'b', posicion: 5 },  // IRRESPONSABLESFC
  15: { grupo: 'b', posicion: 6 },  // ALLIEN BIRDS
  16: { grupo: 'b', posicion: 7 },  // MANABA JIRETH FC
  17: { grupo: 'b', posicion: 8 },  // LEONES FC
  18: { grupo: 'b', posicion: 9 },  // GALACTICOS

  // GRUPO C (10 equipos)
  19: { grupo: 'c', posicion: 1 },  // BAMBINOS FC
  20: { grupo: 'c', posicion: 2 },  // SOCXER FC
  21: { grupo: 'c', posicion: 3 },  // NEW GENERATION
  22: { grupo: 'c', posicion: 4 },  // ALFHA
  23: { grupo: 'c', posicion: 5 },  // CEBOLLITAS FOOTBALL CLUB
  24: { grupo: 'c', posicion: 6 },  // 11 DE ORO
  25: { grupo: 'c', posicion: 7 },  // AD. GUAGRACEO
  26: { grupo: 'c', posicion: 8 },  // AUTONIC
  27: { grupo: 'c', posicion: 9 },  // LOS DE SIEMPRE
  28: { grupo: 'c', posicion: 10 }, // VELPACK A& F
};

/**
 * Busca el logo de un equipo por su posición en el grupo
 * @param {number} equipoId - ID del equipo
 * @returns {string|null} - Ruta del logo o null si no existe
 */
function findLogoByPosition(equipoId) {
  const posicionData = EQUIPO_POSICIONES[equipoId];
  if (!posicionData) return null;

  const { grupo, posicion } = posicionData;
  const extensions = ['webp', 'png', 'jpg', 'jpeg'];
  
  for (const ext of extensions) {
    const filename = `${grupo}${posicion}.${ext}`;
    const logoPath = path.join(LOGOS_DIR, filename);
    
    if (fs.existsSync(logoPath)) {
      return `/uploads/logos/${filename}`;
    }
  }
  
  return null;
}

/**
 * Asigna logos a todos los equipos usando el nuevo sistema
 */
function attachLogosFromDisk() {
  if (!fs.existsSync(LOGOS_DIR)) {
    console.log('⚠️  Carpeta de logos no encontrada:', LOGOS_DIR);
    return;
  }

  let logosEncontrados = 0;
  let logosFaltantes = 0;

  for (const equipo of equipos) {
    // Solo asignar si no tiene logo ya
    const logoPath = findLogoByPosition(equipo.id);
    
    if (logoPath) {
      equipo.logo = logoPath;
      logosEncontrados++;
      console.log(`✅ Logo asignado: ${equipo.nombre} → ${logoPath}`);
    } else {
      logosFaltantes++;
      console.log(`⚠️  Logo no encontrado para: ${equipo.nombre} (ID: ${equipo.id})`);
    }
  }

  console.log(`📊 Logos procesados: ${logosEncontrados} encontrados, ${logosFaltantes} faltantes`);
}

/**
 * Obtiene información de logo de un equipo específico
 * @param {number} equipoId - ID del equipo
 * @returns {object} - Información del logo
 */
function getLogoInfo(equipoId) {
  const posicionData = EQUIPO_POSICIONES[equipoId];
  if (!posicionData) {
    return { 
      exists: false, 
      expectedFilename: null, 
      error: 'Equipo no encontrado en mapeo de posiciones' 
    };
  }

  const { grupo, posicion } = posicionData;
  const expectedFilename = `${grupo}${posicion}.webp`;
  const logoPath = path.join(LOGOS_DIR, expectedFilename);
  const exists = fs.existsSync(logoPath);

  return {
    exists,
    expectedFilename,
    fullPath: logoPath,
    webPath: exists ? `/uploads/logos/${expectedFilename}` : null,
    grupo: grupo.toUpperCase(),
    posicion
  };
}

// copia base para normalización de JSON antiguos
const BASE_EQUIPOS = equipos.map(e => ({ ...e }));

function normalizeEquiposFromSaved(savedArr) {
  const baseById = new Map(BASE_EQUIPOS.map(e => [e.id, e]));
  return savedArr.map(r => {
    const base = baseById.get(Number(r.id)) || {};
    return {
      id: Number(r.id ?? base.id),
      nombre: (r.nombre ?? base.nombre ?? '').trim(),
      grupo: (r.grupo ?? base.grupo ?? 'A').toUpperCase(),
      logo: typeof r.logo === 'string' ? r.logo : null,
      activo: typeof r.activo === 'boolean' ? r.activo : (base.activo ?? true),
    };
  });
}

// ====================================
// PERSISTENCIA Y DATOS
// ====================================
let partidos = [];

function saveData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    console.log('💾 Datos guardados');
    return true;
  } catch (e) { console.error('❌ Error guardando datos:', e); return false; }
}
function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(data);
      console.log('📂 Datos cargados');
      return parsed;
    }
  } catch (e) { console.error('❌ Error cargando datos:', e); }
  return null;
}

function initializeData() {
  // 1) Usuarios
  if (!loadUsers()) {
    users = [...defaultUsers];
    saveUsers();
    console.log('👤 Usuarios iniciales creados');
  }

  // 2) Cargar persistencia si existe
  const saved = loadData();
  if (saved) {
    // Equipos desde JSON (normalizados para asegurar logo/activo)
    if (Array.isArray(saved.equipos) && saved.equipos.length) {
      equipos.length = 0;
      equipos.push(...normalizeEquiposFromSaved(saved.equipos));
    }
    // Partidos
    if (Array.isArray(saved.partidos) && saved.partidos.length) {
      partidos = saved.partidos;
    } else {
      partidos = generateAllMatches();
    }
  } else {
    // Primera vez
    partidos = generateAllMatches();
  }

  // 3) Auto-asignar logos que falten y persistir
  const before = JSON.stringify(equipos);
  attachLogosFromDisk();
  const after = JSON.stringify(equipos);
  if (!saved || before !== after) {
    saveData({
      partidos,
      equipos,
      fechas,
      version: '4.1.0',
      timestamp: new Date().toISOString()
    });
  }
}

// ====================================
// AUXILIARES
// ====================================
const encontrarEquipoPorId = (id) => equipos.find(equipo => equipo.id === parseInt(id, 10));

const calcularPosiciones = (grupo) => {
  const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
  const partidosGrupo = partidos.filter(p =>
    p.grupo === grupo &&
    p.golesLocal !== null &&
    p.golesVisitante !== null &&
    !isNaN(p.golesLocal) &&
    !isNaN(p.golesVisitante)
  );

  const stats = {};
  equiposGrupo.forEach(eq => {
    stats[eq.id] = { equipo: eq, partidosJugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0, diferenciaGoles: 0, puntos: 0 };
  });

  partidosGrupo.forEach(p => {
    const l = p.equipoLocalId, v = p.equipoVisitanteId;
    const gl = parseInt(p.golesLocal, 10), gv = parseInt(p.golesVisitante, 10);

    if (stats[l]) {
      stats[l].partidosJugados++; stats[l].golesFavor += gl; stats[l].golesContra += gv;
      if (gl > gv) { stats[l].ganados++; stats[l].puntos += 3; }
      else if (gl === gv) { stats[l].empatados++; stats[l].puntos += 1; }
      else { stats[l].perdidos++; }
    }
    if (stats[v]) {
      stats[v].partidosJugados++; stats[v].golesFavor += gv; stats[v].golesContra += gl;
      if (gv > gl) { stats[v].ganados++; stats[v].puntos += 3; }
      else if (gv === gl) { stats[v].empatados++; stats[v].puntos += 1; }
      else { stats[v].perdidos++; }
    }
  });

  Object.values(stats).forEach(s => s.diferenciaGoles = s.golesFavor - s.golesContra);

  const posiciones = Object.values(stats).sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    if (b.diferenciaGoles !== a.diferenciaGoles) return b.diferenciaGoles - a.diferenciaGoles;
    return b.golesFavor - a.golesFavor;
  });
  posiciones.forEach((s, i) => s.posicion = i + 1);
  return posiciones;
};

/**
 * Maneja el endpoint de información de logos para debugging
 */
function handleLogosInfo(req, res) {
  return requireAdmin(req, res, (user) => {
    const logosInfo = equipos.map(equipo => {
      const info = getLogoInfo(equipo.id);
      return {
        id: equipo.id,
        nombre: equipo.nombre,
        grupo: equipo.grupo,
        logoActual: equipo.logo,
        logoEsperado: info.expectedFilename,
        existe: info.exists,
        ruta: info.webPath
      };
    });

    const stats = {
      total: equipos.length,
      conLogo: logosInfo.filter(info => info.existe).length,
      sinLogo: logosInfo.filter(info => !info.existe).length
    };

    sendResponse(res, 200, {
      success: true,
      message: 'Información de logos obtenida',
      data: {
        estadisticas: stats,
        equipos: logosInfo
      }
    });
  });
}

const sendResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  });
  res.end(JSON.stringify(data, null, 2));
};

// ====================================
// SERVIDOR HTTP
// ====================================
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    });
    res.end();
    return;
  }

  // ============ RUTAS AUTH ============
  if (pathname === '/api/auth/login' && method === 'POST') {
    let body = ''; req.on('data', c => (body += c));
    req.on('end', () => {
      try {
        const { username, password } = JSON.parse(body || '{}');
        if (!username || !password) return sendResponse(res, 400, { success:false, message:'Username y password son requeridos' });

        const user = users.find(u =>
          (u.username === username || u.email === username) &&
          u.password === hashPassword(password) &&
          u.activo
        );
        if (!user) return sendResponse(res, 401, { success:false, message:'Credenciales inválidas' });

        const sessionId = generateSessionId();
        sessions.set(sessionId, user.id);
        user.lastLogin = new Date().toISOString();
        saveUsers();

        sendResponse(res, 200, { success:true, message:'Login exitoso', data:{ token: sessionId, user:{ id:user.id, username:user.username, email:user.email, role:user.role, nombre:user.nombre } } });
      } catch { sendResponse(res, 400, { success:false, message:'JSON inválido' }); }
    });
    return;
  }

  if (pathname === '/api/auth/register' && method === 'POST') {
    let body = ''; req.on('data', c => (body += c));
    req.on('end', () => {
      try {
        const { username, email, password, nombre } = JSON.parse(body || '{}');
        if (!username || !email || !password || !nombre) return sendResponse(res, 400, { success:false, message:'Todos los campos son requeridos' });

        const existing = users.find(u => u.username === username || u.email === email);
        if (existing) return sendResponse(res, 409, { success:false, message:'Usuario o email ya existe' });

        const newUser = { id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1, username, email, password: hashPassword(password), role:'viewer', nombre, createdAt:new Date().toISOString(), lastLogin:null, activo:true };
        users.push(newUser); saveUsers();
        sendResponse(res, 201, { success:true, message:'Usuario creado exitosamente', data:{ user:{ id:newUser.id, username:newUser.username, email:newUser.email, role:newUser.role, nombre:newUser.nombre } } });
      } catch { sendResponse(res, 400, { success:false, message:'JSON inválido' }); }
    });
    return;
  }

  if (pathname === '/api/auth/logout' && method === 'POST') {
    const auth = req.headers.authorization;
    if (auth && auth.startsWith('Bearer ')) { const t = auth.substring(7); sessions.delete(t); saveUsers(); }
    sendResponse(res, 200, { success:true, message:'Logout exitoso' });
    return;
  }

  if (pathname === '/api/auth/me' && method === 'GET') {
    return requireAuth(req, res, (user) => {
      sendResponse(res, 200, { success:true, data:{ user:{ id:user.id, username:user.username, email:user.email, role:user.role, nombre:user.nombre, lastLogin:user.lastLogin } } });
    });
  }

  // ============ RUTAS PÚBLICAS ============
  if (pathname === '/' && method === 'GET') {
    sendResponse(res, 200, {
      success: true,
      message: '🏆 Copa Maracaná 14ED - API con autenticación',
      torneo: TOURNAMENT_CONFIG,
      version: '4.1.0 - Sistema de Logos por Posición',
      endpoints: {
        auth: { login:'POST /api/auth/login', register:'POST /api/auth/register', logout:'POST /api/auth/logout', me:'GET /api/auth/me' },
        public: { equipos:'GET /api/equipos', partidos:'GET /api/partidos', posiciones:'GET /api/posiciones', fechas:'GET /api/fechas' },
        protected: { admin:'GET /api/admin/* (requiere role admin)', logosInfo:'GET /api/admin/logos-info' }
      }
    });
    return;
  }

  if (pathname === '/api/equipos' && method === 'GET') {
    sendResponse(res, 200, { success: true, data: equipos, total: equipos.length });
    return;
  }

  if (pathname.startsWith('/api/equipos/grupo/') && method === 'GET') {
    const grupo = pathname.split('/')[4]?.toUpperCase();
    if (!['A','B','C'].includes(grupo)) { sendResponse(res, 400, { success:false, message:'Grupo debe ser A, B o C' }); return; }
    const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
    sendResponse(res, 200, { success:true, data:equiposGrupo, total:equiposGrupo.length });
    return;
  }

  if (pathname === '/api/partidos' && method === 'GET') {
    const partidosConEquipos = partidos.map(p => ({ ...p, equipoLocal: encontrarEquipoPorId(p.equipoLocalId), equipoVisitante: encontrarEquipoPorId(p.equipoVisitanteId) }));
    sendResponse(res, 200, { success:true, data:partidosConEquipos, total:partidosConEquipos.length });
    return;
  }

  // ✅ RUTA CORREGIDA - PARTIDOS POR FECHA (SIN DUPLICACIÓN)
  if (pathname.startsWith('/api/partidos/fecha/') && method === 'GET') {
    const fechaId = parseInt(pathname.split('/')[4], 10);
    const fecha = fechas.find(f => f.id === fechaId);
    if (!fecha) { 
      sendResponse(res, 404, { success: false, message: 'Fecha no encontrada' }); 
      return; 
    }

    const partidosFecha = partidos
      .filter(p => p.fechaId === fechaId)
      .map(p => ({ 
        ...p, 
        equipoLocal: encontrarEquipoPorId(p.equipoLocalId), 
        equipoVisitante: encontrarEquipoPorId(p.equipoVisitanteId) 
      }));

    // ✅ CALCULAR EQUIPOS QUE DESCANSAN POR GRUPO (LÓGICA CORREGIDA)
    const equiposDescansan = [];
    
    ['A', 'B', 'C'].forEach(grupo => {
      const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
      const partidosGrupo = partidosFecha.filter(p => p.grupo === grupo);
      const equiposJueganGrupo = partidosGrupo.flatMap(p => [p.equipoLocalId, p.equipoVisitanteId]);
      const equiposDescansanGrupo = equiposGrupo.filter(eq => !equiposJueganGrupo.includes(eq.id));
      equiposDescansan.push(...equiposDescansanGrupo);
    });

    sendResponse(res, 200, { 
      success: true, 
      data: { 
        fecha, 
        partidos: partidosFecha, 
        equiposDescansan 
      } 
    });
    return;
  }

  if (pathname === '/api/posiciones' && method === 'GET') {
    sendResponse(res, 200, { success:true, data:{ grupoA: calcularPosiciones('A'), grupoB: calcularPosiciones('B'), grupoC: calcularPosiciones('C') } });
    return;
  }

  if (pathname === '/api/fechas' && method === 'GET') {
    sendResponse(res, 200, { success:true, data:fechas, total:fechas.length });
    return;
  }

  // ============ RUTAS PROTEGIDAS (ADMIN) ============
  if (pathname.startsWith('/api/partidos/') && method === 'PUT') {
    const id = parseInt(pathname.split('/')[3], 10);
    return requireAdmin(req, res, (user) => {
      let body = ''; req.on('data', c => (body += c));
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          const idx = partidos.findIndex(p => p.id === id);
          if (idx === -1) return sendResponse(res, 404, { success:false, message:'Partido no encontrado' });

          const p = partidos[idx];
          partidos[idx] = {
            ...p,
            hora: data.hora ?? p.hora,
            cancha: data.cancha ?? p.cancha,
            estado: data.estado ?? p.estado,
            golesLocal: data.golesLocal ?? p.golesLocal,
            golesVisitante: data.golesVisitante ?? p.golesVisitante,
          };

          saveData({ partidos, equipos, fechas, version: '4.1.0', lastUpdate: new Date().toISOString(), updatedBy: user.username });
          return sendResponse(res, 200, { success:true, message:`Partido actualizado por ${user.nombre}`, data: partidos[idx] });
        } catch { return sendResponse(res, 400, { success:false, message:'JSON inválido' }); }
      });
    });
  }

  if (pathname === '/api/admin/users' && method === 'GET') {
    return requireAdmin(req, res, () => {
      const safe = users.map(u => ({ id:u.id, username:u.username, email:u.email, role:u.role, nombre:u.nombre, createdAt:u.createdAt, lastLogin:u.lastLogin, activo:u.activo }));
      sendResponse(res, 200, { success:true, data:safe, total:safe.length });
    });
  }

  if (pathname.startsWith('/api/admin/users/') && pathname.endsWith('/role') && method === 'PUT') {
    const userId = parseInt(pathname.split('/')[4], 10);
    return requireAdmin(req, res, () => {
      let body = ''; req.on('data', c => (body += c));
      req.on('end', () => {
        try {
          const { role } = JSON.parse(body || '{}');
          if (!['admin','viewer'].includes(role)) return sendResponse(res, 400, { success:false, message:'Role debe ser admin o viewer' });

          const idx = users.findIndex(u => u.id === userId);
          if (idx === -1) return sendResponse(res, 404, { success:false, message:'Usuario no encontrado' });

          users[idx].role = role; saveUsers();
          sendResponse(res, 200, { success:true, message:`Role actualizado a ${role}`, data:{ id:users[idx].id, username:users[idx].username, role:users[idx].role } });
        } catch { sendResponse(res, 400, { success:false, message:'JSON inválido' }); }
      });
    });
  }

  // PUT /api/admin/equipos/:id/logo-url  (asigna ruta de logo a mano)
  if (pathname.startsWith('/api/admin/equipos/') && pathname.endsWith('/logo-url') && method === 'PUT') {
    const id = parseInt(pathname.split('/')[4], 10);
    return requireAdmin(req, res, (user) => {
      let body = ''; req.on('data', c => (body += c));
      req.on('end', () => {
        try {
          const { logo } = JSON.parse(body || '{}');
          if (!logo || typeof logo !== 'string') return sendResponse(res, 400, { success:false, message:'Debes enviar { "logo": "/uploads/logos/archivo.ext" }' });

          const equipo = equipos.find(e => e.id === id);
          if (!equipo) return sendResponse(res, 404, { success:false, message:'Equipo no encontrado' });

          equipo.logo = logo;
          saveData({ partidos, equipos, fechas, version:'4.1.0', lastUpdate:new Date().toISOString(), updatedBy:user.username });
          return sendResponse(res, 200, { success:true, message:'Logo asignado', data:{ id:equipo.id, logo:equipo.logo } });
        } catch { return sendResponse(res, 400, { success:false, message:'JSON inválido' }); }
      });
    });
  }

  if (pathname.startsWith('/api/admin/users/') && method === 'DELETE') {
    const userId = parseInt(pathname.split('/')[4], 10);
    return requireAdmin(req, res, (adminUser) => {
      if (userId === adminUser.id) return sendResponse(res, 400, { success:false, message:'No puedes eliminar tu propia cuenta' });

      const idx = users.findIndex(u => u.id === userId);
      if (idx === -1) return sendResponse(res, 404, { success:false, message:'Usuario no encontrado' });

      for (const [sid, uid] of sessions.entries()) if (uid === userId) sessions.delete(sid);
      users.splice(idx, 1); saveUsers();
      sendResponse(res, 200, { success:true, message:'Usuario eliminado exitosamente' });
    });
  }

  if (pathname === '/api/admin/stats' && method === 'GET') {
    return requireAdmin(req, res, () => {
      const partidosCompletados = partidos.filter(p => p.estado === 'finalizado').length;
      const activeSessions = sessions.size;
      const adminUsers = users.filter(u => u.role === 'admin' && u.activo).length;
      const viewerUsers = users.filter(u => u.role === 'viewer' && u.activo).length;

      sendResponse(res, 200, {
        success:true,
        data: {
          torneo: TOURNAMENT_CONFIG,
          equipos: { total: equipos.length },
          partidos: { total: partidos.length, completados: partidosCompletados, pendientes: partidos.length - partidosCompletados },
          usuarios: { total: users.length, admins: adminUsers, viewers: viewerUsers, sesionesActivas: activeSessions },
          fechas: { total: fechas.length }
        }
      });
    });
  }

  // ============ NUEVO ENDPOINT DE LOGOS INFO ============
  if (pathname === '/api/admin/logos-info' && method === 'GET') {
    return handleLogosInfo(req, res);
  }

  // ============ SERVIDO ESTÁTICO /uploads ============
  if (pathname.startsWith('/uploads/') && method === 'GET') {
    const filePath = path.join(__dirname, pathname);
    if (fs.existsSync(filePath)) {
      const ext = (filePath.split('.').pop() || '').toLowerCase();
      const mime = ext === 'png' ? 'image/png' :
                   ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' :
                   ext === 'webp' ? 'image/webp' : 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime, 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
    return sendResponse(res, 404, { success:false, message:'Archivo no encontrado' });
  }

  // 404
  sendResponse(res, 404, {
    success: false,
    message: `Ruta ${pathname} no encontrada`,
    rutasDisponibles: [
      'POST /api/auth/login',
      'POST /api/auth/register',
      'GET /api/equipos',
      'GET /api/partidos',
      'GET /api/posiciones',
      'PUT /api/partidos/:id (requiere admin)',
      'GET /api/admin/* (requiere admin)',
      'GET /api/admin/logos-info (requiere admin)'
    ]
  });
});

// ====================================
// INICIAR SERVIDOR
// ====================================
initializeData();

server.listen(PORT, () => {
  console.log('\n🚀 =====================================');
  console.log('🏆   COPA MARACANÁ 14ED - API v4.1');
  console.log('   🖼️  SISTEMA DE LOGOS POR POSICIÓN');
  console.log('=====================================');
  console.log(`📡 Servidor: http://localhost:${PORT}`);
  console.log('👤 Usuarios por defecto:');
  console.log('   👤 admin / admin123 (admin)');
  console.log('   👤 organizador / beaver2024 (admin)');
  console.log('   👤 viewer / viewer123 (viewer)');
  console.log('=====================================');
  console.log(`👥 Usuarios activos: ${users.length}`);
  console.log(`🟢 Partidos: ${partidos.length} cargados`);
  console.log(`📊 Sesiones activas: ${sessions.size}`);
  console.log('=====================================');
  console.log('🔧 CARACTERÍSTICAS v4.1:');
  console.log('   • Login/register con tokens y roles');
  console.log('   • Rutas protegidas y gestión de usuarios');
  console.log('   • Sesiones persistentes');
  console.log('   • 🆕 LOGOS POR POSICIÓN: a1.webp, b3.webp, c10.webp');
  console.log('   • 🆕 Endpoint debug: GET /api/admin/logos-info');
  console.log('=====================================');
  console.log('🖼️  MAPEO DE LOGOS:');
  console.log('   • Grupo A: a1.webp - a9.webp (9 equipos)');
  console.log('   • Grupo B: b1.webp - b9.webp (9 equipos)');  
  console.log('   • Grupo C: c1.webp - c10.webp (10 equipos)');
  console.log(`📁 Carpeta logos: ${LOGOS_DIR}`);
  console.log('\n✨ ¡API lista con sistema de logos actualizado! ✨\n');
});