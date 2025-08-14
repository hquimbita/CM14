#!/usr/bin/env node
/**
 * 🚨 CORRECCIÓN URGENTE DE DUPLICADOS
 * Copa Maracaná 14ED - EMERGENCIA
 * 
 * PROBLEMA: Partidos duplicados entre fechas
 * SOLUCIÓN: Algoritmo round-robin corregido + verificación de duplicados
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'partidos-data.json');
const BACKUP_FILE = path.join(__dirname, `backup-emergency-${Date.now()}.json`);

// ====================================
// ALGORITMO ROUND ROBIN CORRECTO
// ====================================
function generateCorrectRoundRobin(teams) {
  console.log(`🔧 Generando round-robin para ${teams.length} equipos...`);
  
  const teamsCopy = [...teams];
  const isOdd = teamsCopy.length % 2 === 1;
  
  if (isOdd) {
    teamsCopy.push('BYE'); // Agregar equipo fantasma
  }
  
  const numTeams = teamsCopy.length;
  const numRounds = numTeams - 1;
  const schedule = [];
  
  for (let round = 0; round < numRounds; round++) {
    const roundMatches = [];
    
    for (let i = 0; i < numTeams / 2; i++) {
      const team1 = teamsCopy[i];
      const team2 = teamsCopy[numTeams - 1 - i];
      
      // Solo agregar si ninguno es BYE
      if (team1 !== 'BYE' && team2 !== 'BYE') {
        roundMatches.push([team1, team2]);
      }
    }
    
    schedule.push(roundMatches);
    
    // Rotar equipos (el primero se queda fijo)
    if (round < numRounds - 1) {
      const temp = teamsCopy[1];
      for (let i = 1; i < numTeams - 1; i++) {
        teamsCopy[i] = teamsCopy[i + 1];
      }
      teamsCopy[numTeams - 1] = temp;
    }
  }
  
  console.log(`✅ ${schedule.length} fechas generadas`);
  return schedule;
}

// ====================================
// VERIFICACIÓN DE DUPLICADOS
// ====================================
function detectarDuplicados(partidos) {
  console.log('\n🔍 DETECTANDO DUPLICADOS...');
  
  const enfrentamientos = new Map();
  const duplicados = [];
  
  partidos.forEach(partido => {
    const key1 = `${partido.equipoLocalId}-${partido.equipoVisitanteId}`;
    const key2 = `${partido.equipoVisitanteId}-${partido.equipoLocalId}`;
    
    if (enfrentamientos.has(key1) || enfrentamientos.has(key2)) {
      const original = enfrentamientos.get(key1) || enfrentamientos.get(key2);
      duplicados.push({
        original,
        duplicado: partido,
        enfrentamiento: key1
      });
    } else {
      enfrentamientos.set(key1, partido);
    }
  });
  
  if (duplicados.length > 0) {
    console.log(`❌ ${duplicados.length} DUPLICADOS ENCONTRADOS:`);
    duplicados.forEach(dup => {
      console.log(`   Fecha ${dup.original.fechaId} y ${dup.duplicado.fechaId}: ${dup.enfrentamiento}`);
    });
  } else {
    console.log('✅ No se encontraron duplicados');
  }
  
  return duplicados;
}

// ====================================
// CORRECCIÓN COMPLETA
// ====================================
function corregirFixtureCompleto() {
  console.log('\n🚨 INICIANDO CORRECCIÓN DE EMERGENCIA');
  console.log('=====================================');
  
  // Cargar datos
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  
  // Backup
  fs.writeFileSync(BACKUP_FILE, JSON.stringify(data, null, 2));
  console.log(`📁 Backup creado: ${BACKUP_FILE}`);
  
  // Detectar duplicados actuales
  const duplicados = detectarDuplicados(data.partidos);
  
  if (duplicados.length === 0) {
    console.log('✅ No hay duplicados que corregir');
    return;
  }
  
  // Equipos por grupo
  const grupoA = data.equipos.filter(eq => eq.grupo === 'A').map(eq => eq.id);
  const grupoB = data.equipos.filter(eq => eq.grupo === 'B').map(eq => eq.id);
  const grupoC = data.equipos.filter(eq => eq.grupo === 'C').map(eq => eq.id);
  
  console.log(`\n📊 Equipos: A=${grupoA.length}, B=${grupoB.length}, C=${grupoC.length}`);
  
  // Generar fixtures correctos
  const fixtureA = generateCorrectRoundRobin(grupoA);
  const fixtureB = generateCorrectRoundRobin(grupoB);
  const fixtureC = generateCorrectRoundRobin(grupoC);
  
  // Preservar Fecha 1 original
  const fecha1Partidos = data.partidos.filter(p => p.fechaId === 1);
  console.log(`\n✅ Preservando Fecha 1: ${fecha1Partidos.length} partidos`);
  
  // Generar fechas 2-9 corregidas
  const partidosNuevos = [...fecha1Partidos];
  let matchId = Math.max(...fecha1Partidos.map(p => p.id)) + 1;
  
  const maxFechas = Math.max(fixtureA.length, fixtureB.length, fixtureC.length);
  
  for (let fechaId = 2; fechaId <= maxFechas + 1; fechaId++) {
    const fechaIndex = fechaId - 2;
    
    console.log(`\n📅 Generando Fecha ${fechaId}...`);
    
    // Grupo A
    if (fechaIndex < fixtureA.length) {
      fixtureA[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosNuevos.push({
          id: matchId++,
          fechaId,
          hora: null,
          grupo: 'A',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: null,
          golesLocal: null,
          golesVisitante: null,
          estado: 'por_programar'
        });
      });
    }
    
    // Grupo B
    if (fechaIndex < fixtureB.length) {
      fixtureB[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosNuevos.push({
          id: matchId++,
          fechaId,
          hora: null,
          grupo: 'B',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: null,
          golesLocal: null,
          golesVisitante: null,
          estado: 'por_programar'
        });
      });
    }
    
    // Grupo C
    if (fechaIndex < fixtureC.length) {
      fixtureC[fechaIndex].forEach(([localId, visitanteId]) => {
        partidosNuevos.push({
          id: matchId++,
          fechaId,
          hora: null,
          grupo: 'C',
          equipoLocalId: localId,
          equipoVisitanteId: visitanteId,
          cancha: null,
          golesLocal: null,
          golesVisitante: null,
          estado: 'por_programar'
        });
      });
    }
    
    const partidosFecha = partidosNuevos.filter(p => p.fechaId === fechaId);
    console.log(`   ✅ ${partidosFecha.length} partidos generados`);
  }
  
  // Verificar que no haya duplicados
  console.log('\n🔍 VERIFICACIÓN FINAL...');
  const duplicadosFinales = detectarDuplicados(partidosNuevos);
  
  if (duplicadosFinales.length > 0) {
    console.log('❌ TODAVÍA HAY DUPLICADOS - ABORTANDO');
    return false;
  }
  
  // Guardar datos corregidos
  const datosCorregidos = {
    ...data,
    partidos: partidosNuevos,
    version: '4.2.5-emergency-fix',
    timestamp: new Date().toISOString(),
    nota: 'CORRECCIÓN DE EMERGENCIA - Duplicados eliminados'
  };
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(datosCorregidos, null, 2));
  
  console.log('\n✅ CORRECCIÓN COMPLETADA');
  console.log(`📊 Total partidos: ${partidosNuevos.length}`);
  console.log(`🚨 Duplicados eliminados: ${duplicados.length}`);
  console.log('🎯 Fixture corregido y verificado');
  
  return true;
}

// ====================================
// VERIFICACIÓN RÁPIDA
// ====================================
function verificacionRapida() {
  console.log('\n🔍 VERIFICACIÓN RÁPIDA DE DUPLICADOS');
  console.log('===================================');
  
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const duplicados = detectarDuplicados(data.partidos);
  
  if (duplicados.length > 0) {
    console.log('\n🚨 ACCIÓN REQUERIDA: Ejecuta la corrección completa');
    console.log('   node emergency-duplicate-fix.js --fix');
  } else {
    console.log('\n✅ SISTEMA LIMPIO: No hay duplicados');
  }
  
  return duplicados.length === 0;
}

// ====================================
// MAIN
// ====================================
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--fix')) {
    console.log('\n🚨 EJECUTANDO CORRECCIÓN DE EMERGENCIA...');
    console.log('⚠️  Presiona Ctrl+C para cancelar o Enter para continuar...');
    
    process.stdin.once('data', () => {
      const exito = corregirFixtureCompleto();
      if (exito) {
        console.log('\n🎉 ¡DUPLICADOS ELIMINADOS! El sistema está limpio.');
      } else {
        console.log('\n❌ Error en la corrección. Revisa los logs.');
      }
      process.exit(exito ? 0 : 1);
    });
  } else {
    verificacionRapida();
  }
}

if (require.main === module) {
  main();
}