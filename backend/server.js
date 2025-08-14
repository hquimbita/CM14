// server.js - Versión mínima sin dependencias problemáticas
// 🏆 Copa Maracaná 14ED - Backend API

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS manual (sin dependencia externa)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

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
// DATOS DEL TORNEO
// ====================================

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

// Partidos de la Primera Fecha
let partidos = [
    {
        id: 1, fechaId: 1, hora: '17:00', grupo: 'A',
        equipoLocalId: 5, equipoVisitanteId: 6, // THE FAMILY SPORTING CLUB vs FC DESIRE
        cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 2, fechaId: 1, hora: '17:00', grupo: 'B',
        equipoLocalId: 12, equipoVisitanteId: 11, // ESPARTANOS FC vs CLUB LB
        cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 3, fechaId: 1, hora: '18:00', grupo: 'C',
        equipoLocalId: 19, equipoVisitanteId: 20, // BAMBINOS FC vs SOCXER FC
        cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 4, fechaId: 1, hora: '18:00', grupo: 'C',
        equipoLocalId: 23, equipoVisitanteId: 25, // CEBOLLITAS FOOTBALL CLUB vs AD. GUAGRACEO
        cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 5, fechaId: 1, hora: '19:00', grupo: 'A',
        equipoLocalId: 1, equipoVisitanteId: 2, // COMPA JR. vs LOS LAGARTOS
        cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 6, fechaId: 1, hora: '19:00', grupo: 'C',
        equipoLocalId: 24, equipoVisitanteId: 21, // 11 DE ORO vs NEW GENERATION
        cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 7, fechaId: 1, hora: '20:00', grupo: 'B',
        equipoLocalId: 14, equipoVisitanteId: 15, // IRRESPONSABLESFC vs ALLIEN BIRDS
        cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 8, fechaId: 1, hora: '20:00', grupo: 'C',
        equipoLocalId: 26, equipoVisitanteId: 27, // AUTONIC vs LOS DE SIEMPRE
        cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 9, fechaId: 1, hora: '21:00', grupo: 'A',
        equipoLocalId: 3, equipoVisitanteId: 4, // ALMA MARCE FC. vs REAL VENEZUELA
        cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 10, fechaId: 1, hora: '21:00', grupo: 'B',
        equipoLocalId: 10, equipoVisitanteId: 13, // SPORT TU ÑAÑA vs REALCOHOLICOS
        cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 11, fechaId: 1, hora: '22:00', grupo: 'A',
        equipoLocalId: 8, equipoVisitanteId: 9, // NEXT FC. vs CHELSEA
        cancha: 'NORTE', golesLocal: null, golesVisitante: null, estado: 'programado'
    },
    {
        id: 12, fechaId: 1, hora: '22:00', grupo: 'B',
        equipoLocalId: 16, equipoVisitanteId: 17, // MANABA JIRETH FC vs LEONES FC
        cancha: 'SUR', golesLocal: null, golesVisitante: null, estado: 'programado'
    }
];

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

// ====================================
// RUTAS
// ====================================

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🏆 Copa Maracaná 14ED - API funcionando!',
        torneo: TOURNAMENT_CONFIG,
        estadisticas: {
            totalEquipos: equipos.length,
            totalPartidos: partidos.length,
            totalFechas: fechas.length
        },
        endpoints: {
            equipos: '/api/equipos',
            partidos: '/api/partidos',
            posiciones: '/api/posiciones',
            fechas: '/api/fechas'
        }
    });
});

// Equipos
app.get('/api/equipos', (req, res) => {
    res.json({
        success: true,
        message: 'Lista de equipos',
        data: equipos,
        total: equipos.length
    });
});

app.get('/api/equipos/grupo/:grupo', (req, res) => {
    const grupo = req.params.grupo.toUpperCase();
    if (!['A', 'B', 'C'].includes(grupo)) {
        return res.status(400).json({ success: false, message: 'Grupo debe ser A, B o C' });
    }
    
    const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
    res.json({
        success: true,
        message: `Equipos del grupo ${grupo}`,
        data: equiposGrupo,
        total: equiposGrupo.length
    });
});

// Partidos
app.get('/api/partidos', (req, res) => {
    const partidosConEquipos = partidos.map(partido => ({
        ...partido,
        equipoLocal: encontrarEquipoPorId(partido.equipoLocalId),
        equipoVisitante: encontrarEquipoPorId(partido.equipoVisitanteId)
    }));
    
    res.json({
        success: true,
        message: 'Lista de partidos',
        data: partidosConEquipos
    });
});

app.get('/api/partidos/fecha/:fechaId', (req, res) => {
    const fechaId = parseInt(req.params.fechaId);
    const fecha = fechas.find(f => f.id === fechaId);
    
    if (!fecha) {
        return res.status(404).json({ success: false, message: 'Fecha no encontrada' });
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
    
    res.json({
        success: true,
        message: `Partidos de la ${fecha.descripcion}`,
        data: {
            fecha: fecha,
            partidos: partidosFecha,
            equiposDescansan: equiposDescansan
        }
    });
});

// Actualizar partido
app.put('/api/partidos/:id', (req, res) => {
    const partidoId = parseInt(req.params.id);
    const { golesLocal, golesVisitante, observaciones } = req.body;
    
    const partidoIndex = partidos.findIndex(p => p.id === partidoId);
    
    if (partidoIndex === -1) {
        return res.status(404).json({ success: false, message: 'Partido no encontrado' });
    }
    
    // Actualizar datos
    if (golesLocal !== undefined) partidos[partidoIndex].golesLocal = parseInt(golesLocal);
    if (golesVisitante !== undefined) partidos[partidoIndex].golesVisitante = parseInt(golesVisitante);
    if (observaciones !== undefined) partidos[partidoIndex].observaciones = observaciones;
    
    // Cambiar estado
    if (partidos[partidoIndex].golesLocal !== null && partidos[partidoIndex].golesVisitante !== null) {
        partidos[partidoIndex].estado = 'finalizado';
    }
    
    res.json({
        success: true,
        message: 'Partido actualizado',
        data: partidos[partidoIndex]
    });
});

// Posiciones
app.get('/api/posiciones', (req, res) => {
    res.json({
        success: true,
        message: 'Tabla de posiciones',
        data: {
            grupoA: calcularPosiciones('A'),
            grupoB: calcularPosiciones('B'),
            grupoC: calcularPosiciones('C')
        }
    });
});

app.get('/api/posiciones/grupo/:grupo', (req, res) => {
    const grupo = req.params.grupo.toUpperCase();
    if (!['A', 'B', 'C'].includes(grupo)) {
        return res.status(400).json({ success: false, message: 'Grupo debe ser A, B o C' });
    }
    
    res.json({
        success: true,
        message: `Posiciones del grupo ${grupo}`,
        data: calcularPosiciones(grupo)
    });
});

// Fechas
app.get('/api/fechas', (req, res) => {
    res.json({
        success: true,
        message: 'Fechas del torneo',
        data: fechas
    });
});

// Estadísticas
app.get('/api/stats', (req, res) => {
    res.json({
        success: true,
        message: 'Estadísticas del torneo',
        data: {
            torneo: TOURNAMENT_CONFIG,
            equipos: { total: equipos.length },
            partidos: { total: partidos.length },
            fechas: { total: fechas.length }
        }
    });
});

// 404
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Ruta no encontrada',
        rutas: ['/', '/api/equipos', '/api/partidos', '/api/posiciones', '/api/fechas']
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('\n🚀 =====================================');
    console.log('🏆   COPA MARACANÁ 14ED - API');
    console.log('=====================================');
    console.log(`📡 Servidor: http://localhost:${PORT}`);
    console.log(`⚽ Equipos: http://localhost:${PORT}/api/equipos`);
    console.log(`🏟️  Partidos: http://localhost:${PORT}/api/partidos`);
    console.log(`🏆 Posiciones: http://localhost:${PORT}/api/posiciones`);
    console.log('=====================================');
    console.log(`🎯 Torneo: ${TOURNAMENT_CONFIG.nombre}`);
    console.log(`🏢 Organizador: ${TOURNAMENT_CONFIG.organizador}`);
    console.log(`👥 Equipos: ${equipos.length} equipos`);
    console.log(`🏟️  Partidos: ${partidos.length} partidos`);
    console.log('=====================================\n');
    console.log('✨ ¡Copa Maracaná 14ED funcionando! ✨\n');
});