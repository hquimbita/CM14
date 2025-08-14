#!/usr/bin/env node
/**
 * 🚨 REGENERACIÓN TOTAL DEL FIXTURE
 * Última opción para eliminar TODOS los duplicados
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'partidos-data.json');
const BACKUP_FILE = path.join(__dirname, `backup-total-regen-${Date.now()}.json`);

// Los partidos REALES de Fecha 1 que SÍ se jugaron (según las capturas)
const FECHA_1_REAL_JUGADOS = [
  { local: 5, visitante: 6, hora: '17:00', cancha: 'NORTE' },   // THE FAMILY vs FC DESIRE
  { local: 12, visitante: 11, hora: '17:00', cancha: 'SUR' },   // ESPARTANOS vs CLUB LB
  { local: 19, visitante: 20, hora: '18:00', cancha: 'NORTE' }, // BAMBINOS vs SOCXER
  { local: 23, visitante: 25, hora: '18:00', cancha: 'SUR' },   // CEBOLLITAS vs AD. GUAGRACEO
  { local: 1, visitante: 2, hora: '19:00', cancha: 'NORTE' },   // COMPA JR vs LOS LAGARTOS
  { local: 24, visitante: 21, hora: '19:00', cancha: 'SUR' },   // 11 DE ORO vs NEW GENERATION
  { local: 14, visitante: 15, hora: '20:00', cancha: 'NORTE' }, // IRRESPONSABLESFC vs ALLIEN BIRDS
  { local: 26, visitante: 27, hora: '20:00', cancha: 'SUR' },   // AUTONIC vs LOS DE SIEMPRE
  { local: 3, visitante: 4, hora: '21:00', cancha: 'NORTE' },   // ALMA MARCE vs REAL VENEZUELA
  { local: 10, visitante: 13, hora: '21:00', cancha: 'SUR' },   // SPORT TU ÑAÑA vs REALCOHOLICOS
  { local: 8, visitante: 9, hora: '22:00', cancha: 'NORTE' },   // NEXT FC vs CHELSEA
  { local: 16, visitante: 17, hora: '22:00', cancha: 'SUR' },   // MANABA JIRETH vs LEONES FC
  { local: 22, visitante: 28, hora: 'POR PROGRAMAR', cancha: 'POR DEFINIR' } // ALFHA vs VELPACK
];

function generatePerfectRoundRobin(teams) {
  console.log(`🔧 Generando round-robin perfecto para ${teams.length} equipos`);
  
  if (teams.length < 2) return [];
  
  const teamsCopy = [...teams];
  if (teamsCopy.length % 2 === 1) {
    teamsCopy.push(null); // BYE
  }
  
  const numTeams = teamsCopy.length;
  const numRounds = numTeams - 1;
  const rounds = [];
  
  for (let round = 0; round < numRounds; round++) {
    const matches = [];
    
    for (let i = 0; i < numTeams / 2; i++) {
      const home = teamsCopy[i];
      const away = teamsCopy[numTeams - 1 - i];
      
      if (home !== null && away !== null) {
        matches.push([home, away]);
      }
    }
    
    rounds.push(matches);
    
    // Rotación: mantener primer equipo fijo, rotar el resto
    if (round < numRounds - 1) {
      const temp = teamsCopy[1];
      for (let i = 1; i < numTeams - 1; i++) {
        teamsCopy[i] = teamsCopy[i + 1];
      }
      teamsCopy[numTeams - 1] = temp;
    }
  }
  
  return rounds;
}

function regenerarTodoElFixture() {
  console.log('\n🚨 REGENERACIÓN TOTAL DEL FIXTURE');
  console.log('=================================');
  
  // Cargar datos
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  
  // Backup crítico
  fs.writeFileSync(BACKUP_FILE, JSON.stringify(data, null, 2));
  console.log(`📁 Backup crítico: ${BACKUP_FILE}`);
  
  // Equipos por grupo
  const grupoA = data.equipos.filter(eq => eq.grupo === 'A').map(eq => eq.id);
  const grupoB = data.equipos.filter(eq => eq.grupo === 'B').map(eq => eq.id);
  const grupoC = data.equipos.filter(eq => eq.grupo === 'C').map(eq => eq.id);
  
  console.log(`📊 Equipos: A=${grupoA.length}, B=${grupoB.length}, C=${grupoC.length}`);
  
  // Generar round-robin perfectos
  const fixtureA = generatePerfectRoundRobin(grupoA);
  const fixtureB = generatePerfectRoundRobin(grupoB);
  const fixtureC = generatePerfectRoundRobin(grupoC);
  
  console.log(`📅 Fechas: A=${fixtureA.length}, B=${fixtureB.length}, C=${fixtureC.length}`);
  
  // Recrear Fecha 1 con partidos reales
  console.log('\n📅 Recreando Fecha 1 con partidos reales...');
  const partidosFecha1 = [];
  let matchId = 1;
  
  FECHA_1_REAL_JUGADOS.forEach(partido => {
    const equipoLocal = data.equipos.find(eq => eq.id === partido.local);
    partidosFecha1.push({
      id: matchId++,
      fechaId: 1,
      hora: partido.hora,
      grupo: equipoLocal.grupo,
      equipoLocalId: partido.local,
      equipoVisitanteId: partido.visitante,
      cancha: partido.cancha,
      golesLocal: null,
      golesVisitante: null,
      estado: partido.hora === 'POR PROGRAMAR' ? 'por_programar' : 'programado'
    });
  });
  
  console.log(`✅ Fecha 1: ${partidosFecha1.length} partidos recreados`);
  
  // Identificar qué enfrentamientos ya están en Fecha 1
  const enfrentamientosFecha1 = new Set();
  partidosFecha1.forEach(p => {
    const key1 = `${p.equipoLocalId}-${p.equipoVisitanteId}`;
    const key2 = `${p.equipoVisitanteId}-${p.equipoLocalId}`;
    enfrentamientosFecha1.add(key1);
    enfrentamientosFecha1.add(key2);
  });
  
  // Generar fechas futuras excluyendo los ya jugados
  const partidosRestantes = [...partidosFecha1];
  
  const maxFechas = Math.max(fixtureA.length, fixtureB.length, fixtureC.length);
  
  for (let fechaId = 2; fechaId <= maxFechas + 1; fechaId++) {
    const partidosFecha = [];
    
    // Grupo A
    const fechaIndexA = (fechaId - 2) % fixtureA.length;
    if (fixtureA[fechaIndexA]) {
      fixtureA[fechaIndexA].forEach(([local, visitante]) => {
        const key1 = `${local}-${visitante}`;
        const key2 = `${visitante}-${local}`;
        
        if (!enfrentamientosFecha1.has(key1) && !enfrentamientosFecha1.has(key2)) {
          partidosFecha.push({
            id: matchId++,
            fechaId,
            hora: null,
            grupo: 'A',
            equipoLocalId: local,
            equipoVisitanteId: visitante,
            cancha: null,
            golesLocal: null,
            golesVisitante: null,
            estado: 'por_programar'
          });
          enfrentamientosFecha1.add(key1);
          enfrentamientosFecha1.add(key2);
        }
      });
    }
    
    // Grupo B
    const fechaIndexB = (fechaId - 2) % fixtureB.length;
    if (fixtureB[fechaIndexB]) {
      fixtureB[fechaIndexB].forEach(([local, visitante]) => {
        const key1 = `${local}-${visitante}`;
        const key2 = `${visitante}-${local}`;
        
        if (!enfrentamientosFecha1.has(key1) && !enfrentamientosFecha1.has(key2)) {
          partidosFecha.push({
            id: matchId++,
            fechaId,
            hora: null,
            grupo: 'B',
            equipoLocalId: local,
            equipoVisitanteId: visitante,
            cancha: null,
            golesLocal: null,
            golesVisitante: null,
            estado: 'por_programar'
          });
          enfrentamientosFecha1.add(key1);
          enfrentamientosFecha1.add(key2);
        }
      });
    }
    
    // Grupo C
    const fechaIndexC = (fechaId - 2) % fixtureC.length;
    if (fixtureC[fechaIndexC]) {
      fixtureC[fechaIndexC].forEach(([local, visitante]) => {
        const key1 = `${local}-${visitante}`;
        const key2 = `${visitante}-${local}`;
        
        if (!enfrentamientosFecha1.has(key1) && !enfrentamientosFecha1.has(key2)) {
          partidosFecha.push({
            id: matchId++,
            fechaId,
            hora: null,
            grupo: 'C',
            equipoLocalId: local,
            equipoVisitanteId: visitante,
            cancha: null,
            golesLocal: null,
            golesVisitante: null,
            estado: 'por_programar'
          });
          enfrentamientosFecha1.add(key1);
          enfrentamientosFecha1.add(key2);
        }
      });
    }
    
    partidosRestantes.push(...partidosFecha);
    console.log(`📅 Fecha ${fechaId}: ${partidosFecha.length} partidos únicos`);
  }
  
  // Verificación final
  console.log('\n🔍 VERIFICACIÓN FINAL DE DUPLICADOS...');
  const enfrentamientos = new Set();
  let duplicados = 0;
  
  partidosRestantes.forEach(p => {
    const key = `${Math.min(p.equipoLocalId, p.equipoVisitanteId)}-${Math.max(p.equipoLocalId, p.equipoVisitanteId)}`;
    if (enfrentamientos.has(key)) {
      duplicados++;
    } else {
      enfrentamientos.add(key);
    }
  });
  
  if (duplicados > 0) {
    console.log(`❌ TODAVÍA HAY ${duplicados} DUPLICADOS`);
    return false;
  }
  
  console.log('✅ CERO DUPLICADOS - FIXTURE PERFECTO');
  
  // Guardar fixture corregido
  const datosFinales = {
    ...data,
    partidos: partidosRestantes,
    version: '4.2.6-total-regeneration',
    timestamp: new Date().toISOString(),
    nota: 'REGENERACIÓN TOTAL - Fixture completamente reconstruido sin duplicados'
  };
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(datosFinales, null, 2));
  
  console.log('\n🎉 REGENERACIÓN COMPLETADA');
  console.log(`📊 Total partidos: ${partidosRestantes.length}`);
  console.log(`🚨 Duplicados eliminados: TODOS`);
  console.log('🏆 FIXTURE PERFECTO GENERADO');
  
  return true;
}

// MAIN
const args = process.argv.slice(2);

if (args.includes('--execute')) {
  console.log('\n🚨 REGENERACIÓN TOTAL - ÚLTIMA OPCIÓN');
  console.log('⚠️  Esto recreará TODO el fixture desde cero');
  console.log('   Solo la Fecha 1 se preservará con partidos reales');
  console.log('\n   Presiona Ctrl+C para cancelar o Enter para continuar...');
  
  process.stdin.once('data', () => {
    const exito = regenerarTodoElFixture();
    if (exito) {
      console.log('\n🎉 ¡FIXTURE REGENERADO! Cero duplicados garantizados.');
      console.log('🔄 Recarga tu web para ver los cambios.');
    }
    process.exit(exito ? 0 : 1);
  });
} else {
  console.log('\n🚨 REGENERACIÓN TOTAL DEL FIXTURE');
  console.log('=================================');
  console.log('Esta es la solución definitiva para eliminar TODOS los duplicados.');
  console.log('');
  console.log('USO:');
  console.log('  node total-regeneration.js --execute');
  console.log('');
  console.log('⚠️  ADVERTENCIA: Esto recreará todo el fixture desde cero');
}