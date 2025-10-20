// backend/controllers/faseFinalController.js

const fs = require('fs');
const path = require('path');

const PARTIDOS_PATH = path.join(__dirname, '../partidos-data.json');
const EQUIPOS_PATH = path.join(__dirname, '../equipos-data.json');

// ============================================
// UTILIDADES
// ============================================

function leerPartidos() {
  const data = fs.readFileSync(PARTIDOS_PATH, 'utf8');
  return JSON.parse(data);
}

function guardarPartidos(partidos) {
  fs.writeFileSync(PARTIDOS_PATH, JSON.stringify(partidos, null, 2));
}

function leerEquipos() {
  const data = fs.readFileSync(EQUIPOS_PATH, 'utf8');
  return JSON.parse(data);
}

function calcularPosiciones() {
  const partidos = leerPartidos();
  const equipos = leerEquipos();
  
  // Filtrar solo partidos de fase de grupos (A, B, C)
  const partidosGrupos = partidos.filter(p => 
    ['A', 'B', 'C'].includes(p.grupo) && p.estado === 'finalizado'
  );
  
  const posiciones = {};
  
  equipos.forEach(equipo => {
    posiciones[equipo.id] = {
      equipoId: equipo.id,
      equipo: equipo.nombre,
      grupo: equipo.grupo,
      pj: 0,
      pg: 0,
      pe: 0,
      pp: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      puntos: 0
    };
  });
  
  // Calcular estadísticas
  partidosGrupos.forEach(partido => {
    const local = posiciones[partido.equipoLocalId];
    const visitante = posiciones[partido.equipoVisitanteId];
    
    if (!local || !visitante) return;
    
    local.pj++;
    visitante.pj++;
    local.gf += partido.golesLocal;
    local.gc += partido.golesVisitante;
    visitante.gf += partido.golesVisitante;
    visitante.gc += partido.golesLocal;
    
    if (partido.golesLocal > partido.golesVisitante) {
      local.pg++;
      local.puntos += 3;
      visitante.pp++;
    } else if (partido.golesLocal < partido.golesVisitante) {
      visitante.pg++;
      visitante.puntos += 3;
      local.pp++;
    } else {
      local.pe++;
      visitante.pe++;
      local.puntos += 1;
      visitante.puntos += 1;
    }
    
    local.dg = local.gf - local.gc;
    visitante.dg = visitante.gf - visitante.gc;
  });
  
  // Ordenar por grupo y posición
  const grupos = { A: [], B: [], C: [] };
  
  Object.values(posiciones).forEach(pos => {
    if (grupos[pos.grupo]) {
      grupos[pos.grupo].push(pos);
    }
  });
  
  // Ordenar cada grupo
  ['A', 'B', 'C'].forEach(grupo => {
    grupos[grupo].sort((a, b) => {
      if (b.puntos !== a.puntos) return b.puntos - a.puntos;
      if (b.dg !== a.dg) return b.dg - a.dg;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return 0;
    });
    
    // Asignar posiciones
    grupos[grupo].forEach((pos, idx) => {
      pos.posicion = idx + 1;
    });
  });
  
  return grupos;
}

function compararSeptimos(septimos) {
  return septimos.sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return 0;
  });
}

// ============================================
// GENERAR FASE FINAL
// ============================================

exports.generarFaseFinal = (req, res) => {
  try {
    const posiciones = calcularPosiciones();
    const partidos = leerPartidos();
    
    // Obtener clasificados
    const clasificadosDirectos = [
      ...posiciones.A.slice(0, 4),
      ...posiciones.B.slice(0, 4),
      ...posiciones.C.slice(0, 4)
    ];
    
    // Repechaje
    const quintos = [
      posiciones.A[4],
      posiciones.B[4],
      posiciones.C[4]
    ];
    
    const sextos = [
      posiciones.A[5],
      posiciones.B[5],
      posiciones.C[5]
    ];
    
    const septimos = [
      posiciones.A[6],
      posiciones.B[6],
      posiciones.C[6]
    ];
    
    const mejoresSeptimos = compararSeptimos(septimos).slice(0, 2);
    
    // Obtener el último ID de partido
    let ultimoId = Math.max(...partidos.map(p => p.id), 0);
    
    const nuevosPartidos = [];
    
    // ===== REPECHAJE (4 partidos) =====
    const repechaje = [
      { local: quintos[0], visitante: mejoresSeptimos[0], nombre: "R1" },
      { local: quintos[1], visitante: mejoresSeptimos[1], nombre: "R2" },
      { local: quintos[2], visitante: sextos[0], nombre: "R3" },
      { local: sextos[1], visitante: sextos[2], nombre: "R4" }
    ];
    
    repechaje.forEach((partido, idx) => {
      nuevosPartidos.push({
        id: ++ultimoId,
        fechaId: 10,
        hora: "",
        grupo: "REPECHAJE",
        equipoLocalId: partido.local.equipoId,
        equipoVisitanteId: partido.visitante.equipoId,
        cancha: "",
        golesLocal: null,
        golesVisitante: null,
        estado: "pendiente"
      });
    });
    
    // ===== OCTAVOS (8 partidos) =====
    // Los 12 clasificados directos + 4 de repechaje (por ahora TBD)
    for (let i = 0; i < 8; i++) {
      nuevosPartidos.push({
        id: ++ultimoId,
        fechaId: 11,
        hora: "",
        grupo: "OCTAVOS",
        equipoLocalId: null, // Se asigna después del repechaje
        equipoVisitanteId: null,
        cancha: "",
        golesLocal: null,
        golesVisitante: null,
        estado: "pendiente"
      });
    }
    
    // ===== CUARTOS (4 partidos) =====
    for (let i = 0; i < 4; i++) {
      nuevosPartidos.push({
        id: ++ultimoId,
        fechaId: 12,
        hora: "",
        grupo: "CUARTOS",
        equipoLocalId: null,
        equipoVisitanteId: null,
        cancha: "",
        golesLocal: null,
        golesVisitante: null,
        estado: "pendiente"
      });
    }
    
    // ===== SEMIFINALES (2 partidos) =====
    for (let i = 0; i < 2; i++) {
      nuevosPartidos.push({
        id: ++ultimoId,
        fechaId: 13,
        hora: "",
        grupo: "SEMIFINAL",
        equipoLocalId: null,
        equipoVisitanteId: null,
        cancha: "",
        golesLocal: null,
        golesVisitante: null,
        estado: "pendiente"
      });
    }
    
    // ===== TERCER LUGAR (1 partido) =====
    nuevosPartidos.push({
      id: ++ultimoId,
      fechaId: 14,
      hora: "",
      grupo: "TERCER_LUGAR",
      equipoLocalId: null,
      equipoVisitanteId: null,
      cancha: "",
      golesLocal: null,
      golesVisitante: null,
      estado: "pendiente"
    });
    
    // ===== FINAL (1 partido) =====
    nuevosPartidos.push({
      id: ++ultimoId,
      fechaId: 14,
      hora: "",
      grupo: "FINAL",
      equipoLocalId: null,
      equipoVisitanteId: null,
      cancha: "",
      golesLocal: null,
      golesVisitante: null,
      estado: "pendiente"
    });
    
    // Eliminar partidos de fase final existentes
    const partidosSinFaseFinal = partidos.filter(p => 
      !['REPECHAJE', 'OCTAVOS', 'CUARTOS', 'SEMIFINAL', 'TERCER_LUGAR', 'FINAL'].includes(p.grupo)
    );
    
    // Agregar nuevos partidos
    const todosPartidos = [...partidosSinFaseFinal, ...nuevosPartidos];
    guardarPartidos(todosPartidos);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      message: 'Fase final generada correctamente',
      partidos: nuevosPartidos.length,
      clasificados: {
        directos: clasificadosDirectos.length,
        repechaje: repechaje.length * 2
      }
    }));
    
  } catch (error) {
    console.error('Error generando fase final:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: false,
      message: 'Error al generar fase final',
      error: error.message
    }));
  }
};

// ============================================
// OBTENER PARTIDOS DE FASE FINAL
// ============================================

exports.obtenerFaseFinal = (req, res) => {
  try {
    const partidos = leerPartidos();
    const equipos = leerEquipos();
    
    const fases = {
      repechaje: [],
      octavos: [],
      cuartos: [],
      semifinales: [],
      tercerLugar: null,
      final: null
    };
    
    partidos.forEach(partido => {
      if (partido.grupo === 'REPECHAJE') {
        fases.repechaje.push({
          ...partido,
          equipoLocal: equipos.find(e => e.id === partido.equipoLocalId),
          equipoVisitante: equipos.find(e => e.id === partido.equipoVisitanteId)
        });
      } else if (partido.grupo === 'OCTAVOS') {
        fases.octavos.push({
          ...partido,
          equipoLocal: equipos.find(e => e.id === partido.equipoLocalId),
          equipoVisitante: equipos.find(e => e.id === partido.equipoVisitanteId)
        });
      } else if (partido.grupo === 'CUARTOS') {
        fases.cuartos.push({
          ...partido,
          equipoLocal: equipos.find(e => e.id === partido.equipoLocalId),
          equipoVisitante: equipos.find(e => e.id === partido.equipoVisitanteId)
        });
      } else if (partido.grupo === 'SEMIFINAL') {
        fases.semifinales.push({
          ...partido,
          equipoLocal: equipos.find(e => e.id === partido.equipoLocalId),
          equipoVisitante: equipos.find(e => e.id === partido.equipoVisitanteId)
        });
      } else if (partido.grupo === 'TERCER_LUGAR') {
        fases.tercerLugar = {
          ...partido,
          equipoLocal: equipos.find(e => e.id === partido.equipoLocalId),
          equipoVisitante: equipos.find(e => e.id === partido.equipoVisitanteId)
        };
      } else if (partido.grupo === 'FINAL') {
        fases.final = {
          ...partido,
          equipoLocal: equipos.find(e => e.id === partido.equipoLocalId),
          equipoVisitante: equipos.find(e => e.id === partido.equipoVisitanteId)
        };
      }
    });
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      data: fases
    }));
    
  } catch (error) {
    console.error('Error obteniendo fase final:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: false,
      message: 'Error al obtener fase final',
      error: error.message
    }));
  }
};

// ============================================
// OBTENER CLASIFICADOS
// ============================================

exports.obtenerClasificados = (req, res) => {
  try {
    const posiciones = calcularPosiciones();
    
    const clasificados = {
      directos: {
        grupoA: posiciones.A.slice(0, 4),
        grupoB: posiciones.B.slice(0, 4),
        grupoC: posiciones.C.slice(0, 4)
      },
      repechaje: {
        quintos: [posiciones.A[4], posiciones.B[4], posiciones.C[4]],
        sextos: [posiciones.A[5], posiciones.B[5], posiciones.C[5]],
        septimos: compararSeptimos([posiciones.A[6], posiciones.B[6], posiciones.C[6]])
      }
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      data: clasificados
    }));
    
  } catch (error) {
    console.error('Error obteniendo clasificados:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: false,
      message: 'Error al obtener clasificados',
      error: error.message
    }));
  }
};