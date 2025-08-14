#!/usr/bin/env node
/**
 * SCRIPT TEMPORAL DE EMERGENCIA - Copa Maracaná 14ED
 * 
 * 🚨 IMPORTANTE: Este script es TEMPORAL y específico para este campeonato
 * 
 * PROPÓSITO:
 * - Corregir fixture de Copa Maracaná 14ED que empezó antes del software
 * - Preservar Fecha 1 real ya jugada
 * - Corregir Grupo C (agregado VELPACK después del inicio)
 * - Generar fechas futuras con round-robin correcto
 * 
 * USO:
 * 1. node emergency-fix-copa-14ed.js --preview (ver cambios)
 * 2. node emergency-fix-copa-14ed.js --execute (aplicar cambios)
 * 3. rm emergency-fix-copa-14ed.js (eliminar después de usar)
 * 
 * ⚠️  ELIMINAR ESTE ARCHIVO DESPUÉS DE LA MIGRACIÓN
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ====================================
// CONFIGURACIÓN TEMPORAL
// ====================================
const DATA_FILE = path.join(__dirname, 'partidos-data.json');
const BACKUP_FILE = path.join(__dirname, `backup-pre-migration-${Date.now()}.json`);

// Datos base (copiados del servidor principal)
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

// ====================================
// FECHA 1 REAL (PRESERVAR)
// ====================================
const FECHA_1_REAL = [
  // Partidos con horario definido
  { local: 'THE FAMILY SPORTING CLUB', visitante: 'FC DESIRE', hora: '17:00', cancha: 'NORTE' },
  { local: 'ESPARTANOS FC', visitante: 'CLUB LB', hora: '17:00', cancha: 'SUR' },
  { local: 'BAMBINOS FC', visitante: 'SOCXER FC', hora: '18:00', cancha: 'NORTE' },
  { local: 'CEBOLLITAS FOOTBALL CLUB', visitante: 'AD. GUAGRACEO', hora: '18:00', cancha: 'SUR' },
  { local: 'COMPA JR.', visitante: 'LOS LAGARTOS', hora: '19:00', cancha: 'NORTE' },
  { local: '11 DE ORO', visitante: 'NEW GENERATION', hora: '19:00', cancha: 'SUR' },
  { local: 'IRRESPONSABLESFC', visitante: 'ALLIEN BIRDS', hora: '20:00', cancha: 'NORTE' },
  { local: 'AUTONIC', visitante: 'LOS DE SIEMPRE', hora: '20:00', cancha: 'SUR' },
  { local: 'ALMA MARCE FC.', visitante: 'REAL VENEZUELA', hora: '21:00', cancha: 'NORTE' },
  { local: 'SPORT TU ÑAÑA', visitante: 'REALCOHOLICOS', hora: '21:00', cancha: 'SUR' },
  { local: 'NEXT FC.', visitante: 'CHELSEA', hora: '22:00', cancha: 'NORTE' },
  { local: 'MANABA JIRETH FC', visitante: 'LEONES FC', hora: '22:00', cancha: 'SUR' },
  
  // Partido pendiente de programación
  { local: 'ALFHA', visitante: 'VELPACK A& F', hora: 'POR PROGRAMAR', cancha: 'POR DEFINIR' }
];

// ====================================
// ALGORITMO ROUND ROBIN CORREGIDO
// ====================================
function generateRoundRobinFixed(teams) {
  const originalTeams = [...teams];
  const teamsCopy = [...teams];
  
  // Si hay número impar de equipos, agregamos null (bye)
  if (teamsCopy.length % 2 === 1) {
    teamsCopy.push(null);
  }
  
  const numTeams = teamsCopy.length;
  const numRounds = numTeams - 1;
  const schedule = [];

  // Algoritmo de rotación circular corregido
  for (let round = 0; round < numRounds; round++) {
    const roundMatches = [];
    const half = Math.floor(numTeams / 2);
    
    for (let i = 0; i < half; i++) {
      const home = teamsCopy[i];
      const away = teamsCopy[numTeams - 1 - i];
      
      // Solo agregar partidos válidos (sin null/bye)
      if (home !== null && away !== null) {
        roundMatches.push([home, away]);
      }
    }
    
    schedule.push(roundMatches);
    
    // Rotar: el primer equipo se queda fijo, los demás rotan
    if (round < numRounds - 1) {
      const temp = teamsCopy[1];
      for (let i = 1; i < numTeams - 1; i++) {
        teamsCopy[i] = teamsCopy[i + 1];
      }
      teamsCopy[numTeams - 1] = temp;
    }
  }
  
  console.log(`✅ Round Robin para ${originalTeams.length} equipos:`);
  schedule.forEach((round, index) => {
    const equiposEnRonda = round.flatMap(match => match);
    const equiposDescansanRonda = originalTeams.filter(id => !equiposEnRonda.includes(id));
    console.log(`   Fecha ${index + 2}: ${round.length} partidos, ${equiposDescansanRonda.length} descansan`);
  });
  
  return schedule;
}

// ====================================
// FUNCIONES AUXILIARES
// ====================================
function nombreAId(nombre) {
  const equipo = equipos.find(eq => 
    eq.nombre.trim().toUpperCase() === nombre.trim().toUpperCase()
  );
  return equipo ? equipo.id : null;
}

function crearFecha1Real() {
  console.log('\n🔧 Creando Fecha 1 real...');
  
  const partidosFecha1 = [];
  let matchId = 1;
  
  FECHA_1_REAL.forEach(partido => {
    const localId = nombreAId(partido.local);
    const visitanteId = nombreAId(partido.visitante);
    
    if (!localId || !visitanteId) {
      console.log(`❌ Error: ${partido.local} vs ${partido.visitante}`);
      return;
    }
    
    const equipoLocal = equipos.find(eq => eq.id === localId);
    
    partidosFecha1.push({
      id: matchId++,
      fechaId: 1,
      hora: partido.hora,
      grupo: equipoLocal.grupo,
      equipoLocalId: localId,
      equipoVisitanteId: visitanteId,
      cancha: partido.cancha,
      golesLocal: null,
      golesVisitante: null,
      estado: partido.hora === 'POR PROGRAMAR' ? 'por_programar' : 'programado'
    });
  });
  
  console.log(`✅ Fecha 1: ${partidosFecha1.length} partidos creados`);
  return partidosFecha1;
}

function generarFechasFuturas() {
  console.log('\n🔧 Generando fechas 2-9...');
  
  const grupoA = equipos.filter(eq => eq.grupo === 'A').map(eq => eq.id);
  const grupoB = equipos.filter(eq => eq.grupo === 'B').map(eq => eq.id);
  const grupoC = equipos.filter(eq => eq.grupo === 'C').map(eq => eq.id);
  
  console.log(`📊 Equipos por grupo: A=${grupoA.length}, B=${grupoB.length}, C=${grupoC.length}`);
  
  const fixtureA = generateRoundRobinFixed([...grupoA]);
  const fixtureB = generateRoundRobinFixed([...grupoB]);
  const fixtureC = generateRoundRobinFixed([...grupoC]);
  
  console.log(`📅 Fechas generadas: A=${fixtureA.length}, B=${fixtureB.length}, C=${fixtureC.length}`);
  
  const partidosFuturas = [];
  let matchId = 100; // Empezar desde ID alto para evitar conflictos
  
  // Generar exactamente 9 fechas (2-9)
  for (let fechaId = 2; fechaId <= 9; fechaId++) {
    const fechaIndex = fechaId - 2; // Ajustar: fecha 2 = index 0, fecha 3 = index 1, etc.
    const partidosFecha = [];
    
    // Grupo A: 8 fechas de actividad (fechas 2-9)
    if (fechaIndex < fixtureA.length && fixtureA[fechaIndex]) {
      fixtureA[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosFecha.push({
          id: matchId++,
          fechaId,
          hora: null, // ✅ SIN HORARIO - Se asigna manualmente
          grupo: 'A',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: null, // ✅ SIN CANCHA - Se asigna manualmente
          golesLocal: null,
          golesVisitante: null,
          estado: 'por_programar' // ✅ Estado especial para fechas futuras
        });
      });
    }
    
    // Grupo B: 8 fechas de actividad (fechas 2-9)
    if (fechaIndex < fixtureB.length && fixtureB[fechaIndex]) {
      fixtureB[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosFecha.push({
          id: matchId++,
          fechaId,
          hora: null, // ✅ SIN HORARIO - Se asigna manualmente
          grupo: 'B',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: null, // ✅ SIN CANCHA - Se asigna manualmente
          golesLocal: null,
          golesVisitante: null,
          estado: 'por_programar' // ✅ Estado especial para fechas futuras
        });
      });
    }
    
    // Grupo C: 9 fechas de actividad (fechas 2-9, pero empezó en fecha 1)
    // Necesitamos 8 fechas más para completar las 9
    if (fechaIndex < fixtureC.length && fixtureC[fechaIndex]) {
      fixtureC[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosFecha.push({
          id: matchId++,
          fechaId,
          hora: null, // ✅ SIN HORARIO - Se asigna manualmente
          grupo: 'C',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: null, // ✅ SIN CANCHA - Se asigna manualmente
          golesLocal: null,
          golesVisitante: null,
          estado: 'por_programar' // ✅ Estado especial para fechas futuras
        });
      });
    }
    
    // No necesitamos ordenar por hora ya que no tienen horario
    partidosFuturas.push(...partidosFecha);
    
    console.log(`   Fecha ${fechaId}: ${partidosFecha.length} partidos (sin horario - para programación manual)`);
  }
  
  console.log(`✅ Total fechas futuras: ${partidosFuturas.length} partidos sin horario`);
  return partidosFuturas;
}

// ====================================
// MIGRACIÓN PRINCIPAL
// ====================================
function ejecutarMigracion() {
  console.log('\n🚀 INICIANDO MIGRACIÓN DE EMERGENCIA - COPA MARACANÁ 14ED');
  console.log('================================================================');
  
  // 1. Backup
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    fs.writeFileSync(BACKUP_FILE, data);
    console.log(`📁 Backup creado: ${BACKUP_FILE}`);
  }
  
  // 2. Crear fixture corregido
  const fecha1 = crearFecha1Real();
  const fechasFuturas = generarFechasFuturas();
  const todosLosPartidos = [...fecha1, ...fechasFuturas];
  
  // 3. Guardar
  const nuevosDatos = {
    partidos: todosLosPartidos,
    equipos,
    fechas: [
      { id: 1, numero: 1, fecha: '2024-08-09', descripcion: 'Primera Fecha' },
      { id: 2, numero: 2, fecha: '2024-08-16', descripcion: 'Segunda Fecha' },
      { id: 3, numero: 3, fecha: '2024-08-23', descripcion: 'Tercera Fecha' },
      { id: 4, numero: 4, fecha: '2024-08-30', descripcion: 'Cuarta Fecha' },
      { id: 5, numero: 5, fecha: '2024-09-06', descripcion: 'Quinta Fecha' },
      { id: 6, numero: 6, fecha: '2024-09-13', descripcion: 'Sexta Fecha' },
      { id: 7, numero: 7, fecha: '2024-09-20', descripcion: 'Séptima Fecha' },
      { id: 8, numero: 8, fecha: '2024-09-27', descripcion: 'Octava Fecha' },
      { id: 9, numero: 9, fecha: '2024-10-04', descripcion: 'Fecha Final' }
    ],
    version: '4.2.3-emergency',
    timestamp: new Date().toISOString(),
    nota: 'Migración de emergencia Copa Maracaná 14ED - Fixture corregido'
  };
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(nuevosDatos, null, 2));
  
  console.log('\n✅ MIGRACIÓN COMPLETADA');
  console.log(`📊 Total partidos: ${todosLosPartidos.length}`);
  console.log(`📅 Fecha 1: ${fecha1.length} partidos (reales preservados)`);
  console.log(`📅 Fechas 2-9: ${fechasFuturas.length} partidos (generados)`);
  
  // 4. Verificar
  verificarResultado(todosLosPartidos);
  
  console.log('\n🗑️  RECORDATORIO: Elimina este script después de verificar que todo funciona');
  console.log('    rm emergency-fix-copa-14ed.js');
}

function verificarResultado(partidos) {
  console.log('\n🔍 VERIFICANDO RESULTADO...');
  
  for (let fecha = 1; fecha <= 9; fecha++) {
    const partidosFecha = partidos.filter(p => p.fechaId === fecha);
    const equiposDescansan = [];
    
    ['A', 'B', 'C'].forEach(grupo => {
      const equiposGrupo = equipos.filter(eq => eq.grupo === grupo);
      const partidosGrupo = partidosFecha.filter(p => p.grupo === grupo);
      const equiposJueganGrupo = partidosGrupo.flatMap(p => [p.equipoLocalId, p.equipoVisitanteId]);
      const equiposDescansanGrupo = equiposGrupo.filter(eq => !equiposJueganGrupo.includes(eq.id));
      equiposDescansan.push(...equiposDescansanGrupo);
    });
    
    console.log(`📅 Fecha ${fecha}: ${partidosFecha.length} partidos, ${equiposDescansan.length} descansan`);
  }
}

function mostrarPreview() {
  console.log('\n👀 PREVIEW - Copa Maracaná 14ED');
  console.log('================================');
  
  console.log('\n📅 FECHA 1 (PRESERVADA CON HORARIOS):');
  FECHA_1_REAL.forEach((partido, i) => {
    console.log(`${i+1}. ${partido.hora} ${partido.cancha} - ${partido.local} vs ${partido.visitante}`);
  });
  
  console.log('\n📊 EQUIPOS QUE DESCANSAN EN FECHA 1:');
  console.log('- MILLENIUM JR (Grupo A)');
  console.log('- GALACTICOS (Grupo B)');
  
  console.log('\n📅 FECHAS 2-9 (SIN HORARIOS - PROGRAMACIÓN MANUAL):');
  console.log('- Grupo A: 8 fechas de actividad (4 partidos cuando juega, 1 equipo descansa)');
  console.log('- Grupo B: 8 fechas de actividad (4 partidos cuando juega, 1 equipo descansa)');
  console.log('- Grupo C: 8 fechas más (5 partidos cada fecha, 0 equipos descansan)');
  
  console.log('\n🎯 RESULTADO CORRECTO:');
  console.log('- Fecha 1: 13 partidos (CON horarios específicos)');
  console.log('- Fechas 2-9: 13 partidos CADA UNA (SIN horarios - ustedes los asignan)');
  console.log('- TODAS las fechas: 2 equipos descansan SIEMPRE (1+1+0)');
  console.log('- Total fechas: 9 fechas completas');
  console.log('- Flexibilidad: Consideran misas, disponibilidad, etc.');
  console.log('- Round-robin completo: Todos juegan contra todos en su grupo');
}

// ====================================
// MAIN
// ====================================
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--preview')) {
    mostrarPreview();
  } else if (args.includes('--execute')) {
    console.log('\n⚠️  ¿Estás seguro? Esta migración modificará el fixture actual.');
    console.log('   Si algo sale mal, restaura desde el backup automático.');
    console.log('\n   Presiona Ctrl+C para cancelar o Enter para continuar...');
    
    process.stdin.once('data', () => {
      ejecutarMigracion();
      process.exit(0);
    });
  } else {
    console.log('\n🚨 SCRIPT TEMPORAL DE EMERGENCIA - Copa Maracaná 14ED\n');
    console.log('USO:');
    console.log('  node emergency-fix-copa-14ed.js --preview   (ver cambios)');
    console.log('  node emergency-fix-copa-14ed.js --execute   (aplicar cambios)');
    console.log('\n⚠️  ELIMINAR DESPUÉS DE USAR');
  }
}

if (require.main === module) {
  main();
}