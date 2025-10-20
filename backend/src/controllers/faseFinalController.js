// backend/controllers/faseFinalController.js
const fs = require('fs').promises;
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data/partidos-data.json');

// Función para leer datos
async function leerDatos() {
  const data = await fs.readFile(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

// Función para escribir datos
async function escribirDatos(datos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(datos, null, 2), 'utf8');
}

// Función para comparar equipos por posiciones
function compararEquipos(a, b) {
  // Ordena por puntos desc, diferencia de goles desc, goles a favor desc
  if (b.puntos !== a.puntos) return b.puntos - a.puntos;
  
  const dgA = a.diferenciaGoles ?? (a.golesFavor - a.golesContra);
  const dgB = b.diferenciaGoles ?? (b.golesFavor - b.golesContra);
  if (dgB !== dgA) return dgB - dgA;
  
  const gfA = a.golesFavor ?? 0;
  const gfB = b.golesFavor ?? 0;
  if (gfB !== gfA) return gfB - gfA;
  
  return 0;
}

// Función para calcular posiciones de cada grupo
function calcularPosiciones(partidos, equipos) {
  const posiciones = {
    A: [],
    B: [],
    C: []
  };

  // Inicializar estadísticas para cada equipo
  equipos.forEach(equipo => {
    if (!equipo.grupo) return;
    
    posiciones[equipo.grupo].push({
      equipoId: equipo.id,
      equipo: equipo,
      nombre: equipo.nombre,
      grupo: equipo.grupo,
      puntos: 0,
      jugados: 0,
      ganados: 0,
      empatados: 0,
      perdidos: 0,
      golesFavor: 0,
      golesContra: 0,
      diferenciaGoles: 0
    });
  });

  // Procesar todos los partidos finalizados de la fase 1 (IDs 1-117)
  partidos
    .filter(p => p.id <= 117 && p.estado === 'finalizado' && p.golesLocal !== null && p.golesVisitante !== null)
    .forEach(partido => {
      const equipoLocal = posiciones[partido.grupo]?.find(e => e.equipoId === partido.equipoLocalId);
      const equipoVisitante = posiciones[partido.grupo]?.find(e => e.equipoId === partido.equipoVisitanteId);

      if (!equipoLocal || !equipoVisitante) return;

      // Actualizar estadísticas
      equipoLocal.jugados++;
      equipoVisitante.jugados++;
      
      equipoLocal.golesFavor += partido.golesLocal;
      equipoLocal.golesContra += partido.golesVisitante;
      equipoVisitante.golesFavor += partido.golesVisitante;
      equipoVisitante.golesContra += partido.golesLocal;

      if (partido.golesLocal > partido.golesVisitante) {
        equipoLocal.ganados++;
        equipoLocal.puntos += 3;
        equipoVisitante.perdidos++;
      } else if (partido.golesLocal < partido.golesVisitante) {
        equipoVisitante.ganados++;
        equipoVisitante.puntos += 3;
        equipoLocal.perdidos++;
      } else {
        equipoLocal.empatados++;
        equipoVisitante.empatados++;
        equipoLocal.puntos += 1;
        equipoVisitante.puntos += 1;
      }

      equipoLocal.diferenciaGoles = equipoLocal.golesFavor - equipoLocal.golesContra;
      equipoVisitante.diferenciaGoles = equipoVisitante.golesFavor - equipoVisitante.golesContra;
    });

  // Ordenar cada grupo
  Object.keys(posiciones).forEach(grupo => {
    posiciones[grupo].sort(compararEquipos);
    // Asignar posiciones
    posiciones[grupo].forEach((equipo, index) => {
      equipo.posicion = index + 1;
    });
  });

  return posiciones;
}

// ============================================
// CALCULAR Y ASIGNAR FASE FINAL
// ============================================
exports.calcularFaseFinal = async (req, res) => {
  try {
    const datos = await leerDatos();
    
    // Calcular posiciones actuales
    const posiciones = calcularPosiciones(datos.partidos, datos.equipos);
    
    const grupoA = posiciones.A;
    const grupoB = posiciones.B;
    const grupoC = posiciones.C;

    // Verificar que todos los grupos tengan al menos 7 equipos
    if (grupoA.length < 7 || grupoB.length < 7 || grupoC.length < 7) {
      return res.status(400).json({
        success: false,
        message: 'Faltan equipos en algunos grupos para calcular la fase final'
      });
    }

    // ========== CLASIFICADOS DIRECTOS (Top 4 de cada grupo) ==========
    const clasificados = [
      ...grupoA.slice(0, 4),
      ...grupoB.slice(0, 4),
      ...grupoC.slice(0, 4)
    ];

    // ========== EQUIPOS PARA REPECHAJE ==========
    const quintos = [grupoA[4], grupoB[4], grupoC[4]];
    const sextos = [grupoA[5], grupoB[5], grupoC[5]];
    const septimos = [grupoA[6], grupoB[6], grupoC[6]];

    // Ordenar séptimos para encontrar los mejores
    const septimosOrdenados = [...septimos].sort(compararEquipos);
    const mejorSeptimo = septimosOrdenados[0];
    const segundoMejorSeptimo = septimosOrdenados[1];

    // ========== ASIGNAR REPECHAJE (Partidos 118-121) ==========
    const actualizaciones = [];

    // Partido 118: 5º Grupo A vs Mejor 7º
    actualizaciones.push({
      id: 118,
      equipoLocalId: quintos[0].equipoId,
      equipoVisitanteId: mejorSeptimo.equipoId
    });

    // Partido 119: 5º Grupo B vs Segundo Mejor 7º
    actualizaciones.push({
      id: 119,
      equipoLocalId: quintos[1].equipoId,
      equipoVisitanteId: segundoMejorSeptimo.equipoId
    });

    // Partido 120: 5º Grupo C vs 6º Grupo A
    actualizaciones.push({
      id: 120,
      equipoLocalId: quintos[2].equipoId,
      equipoVisitanteId: sextos[0].equipoId
    });

    // Partido 121: 6º Grupo B vs 6º Grupo C
    actualizaciones.push({
      id: 121,
      equipoLocalId: sextos[1].equipoId,
      equipoVisitanteId: sextos[2].equipoId
    });

    // ========== ASIGNAR OCTAVOS DE FINAL (Partidos 122-129) ==========
    // Según el reglamento del PDF
    
    // OF1 (122): 1º Grupo A vs Ganador 16º (repechaje)
    actualizaciones.push({
      id: 122,
      equipoLocalId: grupoA[0].equipoId,
      equipoVisitanteId: null, // Se define después del repechaje
      observacion: "Ganador partido 121"
    });

    // OF2 (123): 3º Grupo B vs 3º Grupo C
    actualizaciones.push({
      id: 123,
      equipoLocalId: grupoB[2].equipoId,
      equipoVisitanteId: grupoC[2].equipoId
    });

    // OF3 (124): 2º Grupo A vs Ganador 13º (repechaje)
    actualizaciones.push({
      id: 124,
      equipoLocalId: grupoA[1].equipoId,
      equipoVisitanteId: null, // Se define después del repechaje
      observacion: "Ganador partido 120"
    });

    // OF4 (125): 2º Grupo B vs 4º Grupo C
    actualizaciones.push({
      id: 125,
      equipoLocalId: grupoB[1].equipoId,
      equipoVisitanteId: grupoC[3].equipoId
    });

    // OF5 (126): 1º Grupo B vs Ganador 15º (repechaje)
    actualizaciones.push({
      id: 126,
      equipoLocalId: grupoB[0].equipoId,
      equipoVisitanteId: null, // Se define después del repechaje
      observacion: "Ganador partido 119"
    });

    // OF6 (127): 3º Grupo A vs 4º Grupo A
    actualizaciones.push({
      id: 127,
      equipoLocalId: grupoA[2].equipoId,
      equipoVisitanteId: grupoA[3].equipoId
    });

    // OF7 (128): 1º Grupo C vs Ganador 14º (repechaje)
    actualizaciones.push({
      id: 128,
      equipoLocalId: grupoC[0].equipoId,
      equipoVisitanteId: null, // Se define después del repechaje
      observacion: "Ganador partido 118"
    });

    // OF8 (129): 2º Grupo C vs 4º Grupo B
    actualizaciones.push({
      id: 129,
      equipoLocalId: grupoC[1].equipoId,
      equipoVisitanteId: grupoB[3].equipoId
    });

    // Actualizar los partidos en el JSON
    actualizaciones.forEach(actualizacion => {
      const partidoIndex = datos.partidos.findIndex(p => p.id === actualizacion.id);
      if (partidoIndex !== -1) {
        datos.partidos[partidoIndex].equipoLocalId = actualizacion.equipoLocalId;
        datos.partidos[partidoIndex].equipoVisitanteId = actualizacion.equipoVisitanteId;
        if (actualizacion.observacion) {
          datos.partidos[partidoIndex].observacion = actualizacion.observacion;
        }
      }
    });

    // Guardar cambios
    await escribirDatos(datos);

    res.json({
      success: true,
      message: 'Fase final calculada correctamente',
      data: {
        clasificadosDirectos: clasificados.map(c => ({
          nombre: c.nombre,
          grupo: c.grupo,
          posicion: c.posicion,
          puntos: c.puntos
        })),
        repechaje: {
          quintos: quintos.map(q => ({ nombre: q.nombre, grupo: q.grupo })),
          sextos: sextos.map(s => ({ nombre: s.nombre, grupo: s.grupo })),
          mejoresSeptimos: [
            { nombre: mejorSeptimo.nombre, grupo: mejorSeptimo.grupo },
            { nombre: segundoMejorSeptimo.nombre, grupo: segundoMejorSeptimo.grupo }
          ]
        },
        partidosAsignados: actualizaciones.length
      }
    });

  } catch (error) {
    console.error('Error al calcular fase final:', error);
    res.status(500).json({
      success: false,
      message: 'Error al calcular fase final',
      error: error.message
    });
  }
};

// ============================================
// ACTUALIZAR OCTAVOS CON GANADORES DE REPECHAJE
// ============================================
exports.actualizarOctavosConRepechaje = async (req, res) => {
  try {
    const datos = await leerDatos();

    // Verificar que todos los partidos de repechaje estén finalizados
    const repechaje = datos.partidos.filter(p => p.id >= 118 && p.id <= 121);
    const todosFinalizados = repechaje.every(p => p.estado === 'finalizado' && p.golesLocal !== null && p.golesVisitante !== null);

    if (!todosFinalizados) {
      return res.status(400).json({
        success: false,
        message: 'Todos los partidos de repechaje deben estar finalizados primero'
      });
    }

    // Obtener ganadores del repechaje
    const ganadores = repechaje.map(p => {
      const ganadorId = p.golesLocal > p.golesVisitante ? p.equipoLocalId : p.equipoVisitanteId;
      return { partidoId: p.id, ganadorId };
    });

    // Asignar ganadores a octavos
    // OF1 (122): vs Ganador partido 121
    const partido122 = datos.partidos.find(p => p.id === 122);
    if (partido122) {
      const ganador121 = ganadores.find(g => g.partidoId === 121);
      partido122.equipoVisitanteId = ganador121.ganadorId;
      delete partido122.observacion;
    }

    // OF3 (124): vs Ganador partido 120
    const partido124 = datos.partidos.find(p => p.id === 124);
    if (partido124) {
      const ganador120 = ganadores.find(g => g.partidoId === 120);
      partido124.equipoVisitanteId = ganador120.ganadorId;
      delete partido124.observacion;
    }

    // OF5 (126): vs Ganador partido 119
    const partido126 = datos.partidos.find(p => p.id === 126);
    if (partido126) {
      const ganador119 = ganadores.find(g => g.partidoId === 119);
      partido126.equipoVisitanteId = ganador119.ganadorId;
      delete partido126.observacion;
    }

    // OF7 (128): vs Ganador partido 118
    const partido128 = datos.partidos.find(p => p.id === 128);
    if (partido128) {
      const ganador118 = ganadores.find(g => g.partidoId === 118);
      partido128.equipoVisitanteId = ganador118.ganadorId;
      delete partido128.observacion;
    }

    await escribirDatos(datos);

    res.json({
      success: true,
      message: 'Octavos actualizados con ganadores de repechaje',
      ganadores: ganadores.map(g => ({
        partido: g.partidoId,
        equipoId: g.ganadorId
      }))
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar octavos'
    });
  }
};

// ============================================
// OBTENER RESUMEN DE FASE FINAL
// ============================================
exports.getResumenFaseFinal = async (req, res) => {
  try {
    const datos = await leerDatos();
    const posiciones = calcularPosiciones(datos.partidos, datos.equipos);

    res.json({
      success: true,
      data: {
        posiciones: {
          grupoA: posiciones.A.slice(0, 7),
          grupoB: posiciones.B.slice(0, 7),
          grupoC: posiciones.C.slice(0, 7)
        },
        partidosRepechaje: datos.partidos.filter(p => p.id >= 118 && p.id <= 121),
        partidosOctavos: datos.partidos.filter(p => p.id >= 122 && p.id <= 129)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener resumen' });
  }
};