#!/usr/bin/env node
/**
 * SCRIPT ASIGNADOR DE HORARIOS - FECHA 2
 * Copa Maracaná 14ED
 * 
 * 🎯 PROPÓSITO:
 * - Asignar horarios y canchas a los partidos de la Fecha 2
 * - Respetar restricciones específicas de cada equipo
 * - Optimizar distribución de horarios y canchas
 * 
 * 📋 RESTRICCIONES:
 * - Lagartos: exactamente a las 7pm (19:00)
 * - Family: solo 5pm (17:00) o 6pm (18:00)
 * - 11 de oro: solo 8pm (20:00) o 9pm (21:00)
 * - Realcoholicos: máximo hasta las 7pm (17:00-19:00)
 * - Velpack: desde las 8pm en adelante (20:00+)
 * - Autonic: desde las 7pm en adelante (19:00+)
 * 
 * USO:
 * 1. node schedule-fecha2.js --preview (ver asignación propuesta)
 * 2. node schedule-fecha2.js --execute (aplicar cambios)
 */

const fs = require('fs');
const path = require('path');

// ====================================
// CONFIGURACIÓN
// ====================================
const DATA_FILE = path.join(__dirname, 'partidos-data.json');
const BACKUP_FILE = path.join(__dirname, `backup-fecha2-${Date.now()}.json`);

// Horarios disponibles (formato 24h para facilitar comparaciones)
const HORARIOS_DISPONIBLES = [
  '16:00',          // 4pm (1 cancha)
  '17:00', '17:00', // 5pm (2 canchas)
  '18:00', '18:00', // 6pm (2 canchas)
  '19:00', '19:00', // 7pm (2 canchas)
  '20:00', '20:00', // 8pm (2 canchas)
  '21:00', '21:00', // 9pm (2 canchas)
  '22:00', '22:00'  // 10pm (2 canchas)
];

const CANCHAS = ['NORTE', 'SUR'];

// ====================================
// RESTRICCIONES POR EQUIPO
// ====================================
const RESTRICCIONES = {
  'LOS LAGARTOS': {
    horariosPermitidos: ['19:00'],
    descripcion: 'exactamente a las 7pm'
  },
  'THE FAMILY SPORTING CLUB': {
    horariosPermitidos: ['16:00', '17:00', '18:00'],
    descripcion: 'solo 4pm, 5pm o 6pm'
  },
  '11 DE ORO': {
    horariosPermitidos: ['20:00', '21:00'],
    descripcion: 'solo 8pm o 9pm'
  },
  'REALCOHOLICOS': {
    horariosPermitidos: ['16:00', '17:00', '18:00', '19:00'],
    descripcion: 'máximo hasta las 7pm'
  },
  'VELPACK A& F': {
    horariosPermitidos: ['20:00', '21:00', '22:00'],
    descripcion: 'desde las 8pm en adelante'
  },
  'AUTONIC': {
    horariosPermitidos: ['19:00', '20:00', '21:00', '22:00'],
    descripcion: 'desde las 7pm en adelante'
  }
};

// ====================================
// FUNCIONES AUXILIARES
// ====================================
function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('❌ Error cargando datos:', e);
  }
  return null;
}

function saveData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    console.log('💾 Datos guardados');
    return true;
  } catch (e) {
    console.error('❌ Error guardando datos:', e);
    return false;
  }
}

function encontrarEquipoPorId(equipos, id) {
  return equipos.find(equipo => equipo.id === parseInt(id, 10));
}

function verificarRestriccion(nombreEquipo, horario) {
  const restriccion = RESTRICCIONES[nombreEquipo];
  if (!restriccion) return true; // Sin restricciones
  
  return restriccion.horariosPermitidos.includes(horario);
}

function obtenerHorariosPermitidos(nombreEquipo) {
  const restriccion = RESTRICCIONES[nombreEquipo];
  return restriccion ? restriccion.horariosPermitidos : HORARIOS_DISPONIBLES;
}

// ====================================
// ALGORITMO DE ASIGNACIÓN
// ====================================
function asignarHorariosFecha2(partidos, equipos) {
  console.log('\n🔧 Asignando horarios para Fecha 2...');
  
  // Filtrar partidos de la Fecha 2
  const partidosFecha2 = partidos.filter(p => p.fechaId === 2 && p.estado === 'por_programar');
  
  if (partidosFecha2.length === 0) {
    console.log('⚠️  No se encontraron partidos de Fecha 2 por programar');
    return partidos;
  }
  
  console.log(`📊 Partidos de Fecha 2 encontrados: ${partidosFecha2.length}`);
  
  // Crear slots de horarios disponibles
  const slotsDisponibles = [];
  
  // 16:00 - Solo 1 cancha disponible
  slotsDisponibles.push({
    horario: '16:00',
    cancha: 'NORTE', // O la cancha que esté disponible
    ocupado: false,
    partidoId: null
  });
  
  // 17:00 en adelante - 2 canchas disponibles
  const horariosMultiples = ['17:00', '17:00', '18:00', '18:00', '19:00', '19:00', '20:00', '20:00', '21:00', '21:00', '22:00', '22:00'];
  horariosMultiples.forEach((horario, index) => {
    slotsDisponibles.push({
      horario,
      cancha: CANCHAS[index % 2],
      ocupado: false,
      partidoId: null
    });
  });
  
  // Preparar partidos con información de equipos
  const partidosConEquipos = partidosFecha2.map(partido => {
    const equipoLocal = encontrarEquipoPorId(equipos, partido.equipoLocalId);
    const equipoVisitante = encontrarEquipoPorId(equipos, partido.equipoVisitanteId);
    
    return {
      ...partido,
      nombreLocal: equipoLocal?.nombre || 'DESCONOCIDO',
      nombreVisitante: equipoVisitante?.nombre || 'DESCONOCIDO',
      horariosPermitidosLocal: obtenerHorariosPermitidos(equipoLocal?.nombre),
      horariosPermitidosVisitante: obtenerHorariosPermitidos(equipoVisitante?.nombre)
    };
  });
  
  // Ordenar partidos por prioridad (equipos con menos opciones primero)
  partidosConEquipos.sort((a, b) => {
    const opcionesA = Math.min(a.horariosPermitidosLocal.length, a.horariosPermitidosVisitante.length);
    const opcionesB = Math.min(b.horariosPermitidosLocal.length, b.horariosPermitidosVisitante.length);
    return opcionesA - opcionesB;
  });
  
  const asignacionesExitosas = [];
  const asignacionesFallidas = [];
  
  // Intentar asignar cada partido
  partidosConEquipos.forEach(partido => {
    let asignado = false;
    
    // Buscar horarios que cumplan restricciones de ambos equipos
    for (const slot of slotsDisponibles) {
      if (slot.ocupado) continue;
      
      const cumpleLocal = verificarRestriccion(partido.nombreLocal, slot.horario);
      const cumpleVisitante = verificarRestriccion(partido.nombreVisitante, slot.horario);
      
      if (cumpleLocal && cumpleVisitante) {
        // Asignar el partido a este slot
        slot.ocupado = true;
        slot.partidoId = partido.id;
        
        // Actualizar el partido original
        const partidoOriginal = partidos.find(p => p.id === partido.id);
        if (partidoOriginal) {
          partidoOriginal.hora = slot.horario;
          partidoOriginal.cancha = slot.cancha;
          partidoOriginal.estado = 'programado';
        }
        
        asignacionesExitosas.push({
          partido: `${partido.nombreLocal} vs ${partido.nombreVisitante}`,
          horario: slot.horario,
          cancha: slot.cancha,
          grupo: partido.grupo
        });
        
        asignado = true;
        break;
      }
    }
    
    if (!asignado) {
      asignacionesFallidas.push({
        partido: `${partido.nombreLocal} vs ${partido.nombreVisitante}`,
        razon: 'No hay horarios que cumplan las restricciones de ambos equipos'
      });
    }
  });
  
  // Mostrar resultados
  console.log(`\n✅ Asignaciones exitosas: ${asignacionesExitosas.length}`);
  asignacionesExitosas.forEach(a => {
    console.log(`   ${a.horario} ${a.cancha} - ${a.partido} (${a.grupo})`);
  });
  
  if (asignacionesFallidas.length > 0) {
    console.log(`\n❌ Asignaciones fallidas: ${asignacionesFallidas.length}`);
    asignacionesFallidas.forEach(f => {
      console.log(`   ${f.partido} - ${f.razon}`);
    });
  }
  
  return partidos;
}

// ====================================
// FUNCIONES PRINCIPALES
// ====================================
function mostrarPreview() {
  console.log('\n👀 PREVIEW - Asignación Horarios Fecha 2');
  console.log('=========================================');
  
  const data = loadData();
  if (!data) {
    console.log('❌ No se pudieron cargar los datos');
    return;
  }
  
  const partidosFecha2 = data.partidos.filter(p => p.fechaId === 2);
  
  console.log(`\n📊 Partidos de Fecha 2: ${partidosFecha2.length}`);
  
  // Mostrar restricciones
  console.log('\n📋 RESTRICCIONES APLICADAS:');
  Object.entries(RESTRICCIONES).forEach(([equipo, restriccion]) => {
    console.log(`   • ${equipo}: ${restriccion.descripcion}`);
    console.log(`     Horarios: ${restriccion.horariosPermitidos.join(', ')}`);
  });
  
  // Mostrar partidos actuales
  console.log('\n📅 PARTIDOS A PROGRAMAR:');
  partidosFecha2.forEach((partido, index) => {
    const equipoLocal = encontrarEquipoPorId(data.equipos, partido.equipoLocalId);
    const equipoVisitante = encontrarEquipoPorId(data.equipos, partido.equipoVisitanteId);
    
    console.log(`${index + 1}. ${equipoLocal?.nombre} vs ${equipoVisitante?.nombre} (${partido.grupo})`);
    console.log(`   Estado actual: ${partido.estado || 'sin estado'}`);
    console.log(`   Horario actual: ${partido.hora || 'sin asignar'}`);
  });
  
  console.log('\n🎯 Al ejecutar, se asignarán horarios respetando todas las restricciones.');
}

function ejecutarAsignacion() {
  console.log('\n🚀 EJECUTANDO ASIGNACIÓN DE HORARIOS - FECHA 2');
  console.log('===============================================');
  
  // Crear backup
  const data = loadData();
  if (!data) {
    console.log('❌ No se pudieron cargar los datos');
    return;
  }
  
  fs.writeFileSync(BACKUP_FILE, JSON.stringify(data, null, 2));
  console.log(`📁 Backup creado: ${BACKUP_FILE}`);
  
  // Ejecutar asignación
  const partidosActualizados = asignarHorariosFecha2(data.partidos, data.equipos);
  
  // Guardar cambios
  const datosActualizados = {
    ...data,
    partidos: partidosActualizados,
    version: '4.2.4-horarios-fecha2',
    timestamp: new Date().toISOString(),
    nota: 'Horarios asignados para Fecha 2 con restricciones específicas'
  };
  
  if (saveData(datosActualizados)) {
    console.log('\n✅ ASIGNACIÓN COMPLETADA');
    
    // Mostrar resumen final
    const partidosFecha2Final = partidosActualizados.filter(p => p.fechaId === 2 && p.hora);
    console.log(`\n📊 RESUMEN FINAL:`);
    console.log(`   • Partidos programados: ${partidosFecha2Final.length}`);
    console.log(`   • Estado: Listos para la Fecha 2`);
    
    partidosFecha2Final
      .sort((a, b) => a.hora.localeCompare(b.hora))
      .forEach(partido => {
        const equipoLocal = encontrarEquipoPorId(data.equipos, partido.equipoLocalId);
        const equipoVisitante = encontrarEquipoPorId(data.equipos, partido.equipoVisitanteId);
        console.log(`   ${partido.hora} ${partido.cancha} - ${equipoLocal?.nombre} vs ${equipoVisitante?.nombre}`);
      });
  }
}

// ====================================
// MAIN
// ====================================
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--preview')) {
    mostrarPreview();
  } else if (args.includes('--execute')) {
    console.log('\n⚠️  Esta operación asignará horarios a todos los partidos de la Fecha 2.');
    console.log('   Se creará un backup automático antes de los cambios.');
    console.log('\n   Presiona Ctrl+C para cancelar o Enter para continuar...');
    
    process.stdin.once('data', () => {
      ejecutarAsignacion();
      process.exit(0);
    });
  } else {
    console.log('\n🕐 ASIGNADOR DE HORARIOS - FECHA 2\n');
    console.log('USO:');
    console.log('  node schedule-fecha2.js --preview   (ver asignación propuesta)');
    console.log('  node schedule-fecha2.js --execute   (aplicar horarios)');
    console.log('\n📋 RESTRICCIONES CONFIGURADAS:');
    Object.entries(RESTRICCIONES).forEach(([equipo, restriccion]) => {
      console.log(`   • ${equipo}: ${restriccion.descripcion}`);
    });
  }
}

if (require.main === module) {
  main();
}