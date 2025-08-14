// agregar-equipo-grupo-c.js - Script para agregar equipo al Grupo C
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'partidos-data.json');
const SERVER_FILE = path.join(__dirname, 'server-auth.js');

// Nuevo equipo a agregar
const NUEVO_EQUIPO = {
  id: 28, // Siguiente ID disponible
  nombre: 'VELPACK A& F', // Nombre del nuevo equipo
  grupo: 'C',
  logo: null,
  activo: true
};

console.log('🔄 AGREGANDO EQUIPO AL GRUPO C...\n');
console.log(`📝 Equipo a agregar: ${NUEVO_EQUIPO.nombre}`);
console.log(`🆔 ID asignado: ${NUEVO_EQUIPO.id}`);
console.log(`👥 Grupo: ${NUEVO_EQUIPO.grupo}\n`);

// ====================================
// PASO 1: ACTUALIZAR server-auth.js
// ====================================

function actualizarServidor() {
  try {
    console.log('📄 PASO 1: Actualizando server-auth.js...');
    
    let serverContent = fs.readFileSync(SERVER_FILE, 'utf8');
    
    // Buscar la sección del Grupo C en los equipos
    const grupoCAntesRegex = /{ id: 27, nombre: 'LOS DE SIEMPRE', grupo: 'C', logo: null, activo: true }/;
    
    if (grupoCAntesRegex.test(serverContent)) {
      // Agregar el nuevo equipo después del último del grupo C
      serverContent = serverContent.replace(
        /{ id: 27, nombre: 'LOS DE SIEMPRE', grupo: 'C', logo: null, activo: true }/,
        `{ id: 27, nombre: 'LOS DE SIEMPRE', grupo: 'C', logo: null, activo: true },
  ${JSON.stringify(NUEVO_EQUIPO, null, 2).replace(/^/gm, '  ')}`
      );
      
      // Actualizar totalEquipos en TOURNAMENT_CONFIG
      serverContent = serverContent.replace(
        /totalEquipos: 27,/,
        'totalEquipos: 28,'
      );
      
      // Hacer backup del servidor
      const backupFile = `${SERVER_FILE}.backup-${Date.now()}`;
      fs.writeFileSync(backupFile, fs.readFileSync(SERVER_FILE));
      console.log(`💾 Backup creado: ${backupFile}`);
      
      // Guardar servidor actualizado
      fs.writeFileSync(SERVER_FILE, serverContent);
      console.log('✅ server-auth.js actualizado');
      
      return true;
    } else {
      console.log('⚠️  No se encontró el patrón esperado en server-auth.js');
      return false;
    }
    
  } catch (error) {
    console.error('❌ Error actualizando servidor:', error.message);
    return false;
  }
}

// ====================================
// PASO 2: REGENERAR FIXTURE CON ESTRATEGIA ESPECIAL PARA FECHA 1
// ====================================

function regenerarFixtureConNuevoEquipo() {
  try {
    console.log('\n📊 PASO 2: Regenerando fixture con VELPACK A& F...');
    
    // Equipos que descansaron en la fecha 1 original del Grupo C
    const equiposQueDescansaronFecha1 = [
      { id: 22, nombre: 'ALFHA' }, // Este equipo descansó en fecha 1
      // Agregamos el nuevo equipo
      NUEVO_EQUIPO
    ];
    
    console.log('💡 ESTRATEGIA PARA FECHA 1:');
    console.log(`   ${NUEVO_EQUIPO.nombre} vs ALFHA (que descansó en fecha 1 original)`);
    console.log('   Este partido se puede programar entre semana como diferido\n');
    
    // Equipos actualizados incluyendo el nuevo
    const equiposActualizados = [
      // GRUPO A (9 equipos) - Sin cambios
      { id: 1, nombre: 'COMPA JR.', grupo: 'A' },
      { id: 2, nombre: 'LOS LAGARTOS', grupo: 'A' },
      { id: 3, nombre: 'ALMA MARCE FC.', grupo: 'A' },
      { id: 4, nombre: 'REAL VENEZUELA', grupo: 'A' },
      { id: 5, nombre: 'THE FAMILY SPORTING CLUB', grupo: 'A' },
      { id: 6, nombre: 'FC DESIRE', grupo: 'A' },
      { id: 7, nombre: 'MILLENIUM JR', grupo: 'A' },
      { id: 8, nombre: 'NEXT FC.', grupo: 'A' },
      { id: 9, nombre: 'CHELSEA', grupo: 'A' },
      
      // GRUPO B (9 equipos) - Sin cambios
      { id: 10, nombre: 'SPORT TU ÑAÑA', grupo: 'B' },
      { id: 11, nombre: 'CLUB LB', grupo: 'B' },
      { id: 12, nombre: 'ESPARTANOS FC', grupo: 'B' },
      { id: 13, nombre: 'REALCOHOLICOS', grupo: 'B' },
      { id: 14, nombre: 'IRRESPONSABLESFC', grupo: 'B' },
      { id: 15, nombre: 'ALLIEN BIRDS', grupo: 'B' },
      { id: 16, nombre: 'MANABA JIRETH FC', grupo: 'B' },
      { id: 17, nombre: 'LEONES FC', grupo: 'B' },
      { id: 18, nombre: 'GALACTICOS', grupo: 'B' },
      
      // GRUPO C (10 equipos) - AGREGADO VELPACK A& F
      { id: 19, nombre: 'BAMBINOS FC', grupo: 'C' },
      { id: 20, nombre: 'SOCXER FC', grupo: 'C' },
      { id: 21, nombre: 'NEW GENERATION', grupo: 'C' },
      { id: 22, nombre: 'ALFHA', grupo: 'C' },
      { id: 23, nombre: 'CEBOLLITAS FOOTBALL CLUB', grupo: 'C' },
      { id: 24, nombre: '11 DE ORO', grupo: 'C' },
      { id: 25, nombre: 'AD. GUAGRACEO', grupo: 'C' },
      { id: 26, nombre: 'AUTONIC', grupo: 'C' },
      { id: 27, nombre: 'LOS DE SIEMPRE', grupo: 'C' },
      NUEVO_EQUIPO // ← VELPACK A& F AQUÍ
    ];
    
    console.log('📊 Equipos por grupo:');
    console.log(`   Grupo A: ${equiposActualizados.filter(eq => eq.grupo === 'A').length} equipos`);
    console.log(`   Grupo B: ${equiposActualizados.filter(eq => eq.grupo === 'B').length} equipos`);
    console.log(`   Grupo C: ${equiposActualizados.filter(eq => eq.grupo === 'C').length} equipos (¡+1!)`);
    
    // Cargar datos actuales
    let data = { partidos: [], equipos: [], fechas: [] };
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
      data = JSON.parse(fileContent);
    }
    
    console.log('\n🗑️  Eliminando partidos del Grupo C (excepto fecha 1 ya jugada)...');
    const partidosAntesC = data.partidos.filter(p => p.grupo === 'C').length;
    
    // MANTENER la fecha 1 ya jugada, eliminar el resto del Grupo C
    const partidosFecha1GrupoC = data.partidos.filter(p => p.grupo === 'C' && p.fechaId === 1);
    data.partidos = data.partidos.filter(p => p.grupo !== 'C' || p.fechaId === 1);
    
    console.log(`   ${partidosAntesC - partidosFecha1GrupoC.length} partidos del Grupo C eliminados (fecha 1 conservada)`);
    console.log(`   ${partidosFecha1GrupoC.length} partidos de fecha 1 conservados`);
    
    // Generar nuevos partidos para Grupo C (ahora con 10 equipos)
    console.log('\n⚽ Generando nuevos partidos para Grupo C (10 equipos)...');
    
    const equiposGrupoC = equiposActualizados.filter(eq => eq.grupo === 'C');
    const nuevoPartidosC = [];
    
    // Todos contra todos para el Grupo C
    let partidoId = Math.max(...data.partidos.map(p => p.id), 0) + 1;
    
    for (let i = 0; i < equiposGrupoC.length; i++) {
      for (let j = i + 1; j < equiposGrupoC.length; j++) {
        const equipoLocal = equiposGrupoC[i];
        const equipoVisitante = equiposGrupoC[j];
        
        // Verificar si este enfrentamiento ya existe en fecha 1
        const yaExisteEnFecha1 = partidosFecha1GrupoC.some(p => 
          (p.equipoLocalId === equipoLocal.id && p.equipoVisitanteId === equipoVisitante.id) ||
          (p.equipoLocalId === equipoVisitante.id && p.equipoVisitanteId === equipoLocal.id)
        );
        
        if (!yaExisteEnFecha1) {
          // Determinar si es el partido especial VELPACK vs ALFHA
          const esPartidoEspecial = 
            (equipoLocal.id === NUEVO_EQUIPO.id && equipoVisitante.id === 22) ||
            (equipoLocal.id === 22 && equipoVisitante.id === NUEVO_EQUIPO.id);
          
          nuevoPartidosC.push({
            id: partidoId++,
            fechaId: esPartidoEspecial ? 1 : null, // Partido especial va a fecha 1 como diferido
            hora: esPartidoEspecial ? null : null, // Sin horario asignado aún
            grupo: 'C',
            equipoLocalId: equipoLocal.id,
            equipoVisitanteId: equipoVisitante.id,
            cancha: null,
            golesLocal: null,
            golesVisitante: null,
            estado: esPartidoEspecial ? 'programado' : 'programado',
            nota: esPartidoEspecial ? 'PARTIDO DIFERIDO - Programar entre semana' : null
          });
          
          if (esPartidoEspecial) {
            console.log(`   🎯 PARTIDO ESPECIAL: ${equipoLocal.nombre} vs ${equipoVisitante.nombre} (DIFERIDO)`);
          }
        }
      }
    }
    
    console.log(`   ${nuevoPartidosC.length} nuevos partidos generados para Grupo C`);
    console.log(`   Cada equipo jugará ${equiposGrupoC.length - 1} partidos`);
    
    // Distribuir partidos restantes en fechas 2-9 (excluyendo el partido diferido)
    const partidosParaDistribuir = nuevoPartidosC.filter(p => p.fechaId === null);
    const partidosPorFecha = Math.ceil(partidosParaDistribuir.length / 8); // 8 fechas restantes (2-9)
    
    partidosParaDistribuir.forEach((partido, index) => {
      partido.fechaId = Math.floor(index / partidosPorFecha) + 2; // Fechas 2-9
    });
    
    // Agregar nuevos partidos
    data.partidos.push(...nuevoPartidosC);
    
    // Actualizar metadatos
    data.equipos = equiposActualizados;
    data.version = '4.4.0 - VELPACK A& F agregado al Grupo C';
    data.lastUpdate = new Date().toISOString();
    data.notes = `Equipo "VELPACK A& F" agregado al Grupo C. Partido vs ALFHA como diferido en fecha 1.`;
    data.grupoC = {
      equipos: equiposGrupoC.length,
      partidos: nuevoPartidosC.length + partidosFecha1GrupoC.length,
      partidosPorEquipo: equiposGrupoC.length - 1,
      partidoDiferido: 'VELPACK A& F vs ALFHA - Programar entre semana'
    };
    
    // Guardar datos
    const backupDataFile = `${DATA_FILE}.backup-${Date.now()}`;
    if (fs.existsSync(DATA_FILE)) {
      fs.copyFileSync(DATA_FILE, backupDataFile);
      console.log(`💾 Backup de datos: ${backupDataFile}`);
    }
    
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    console.log('✅ Datos actualizados');
    
    return true;
    
  } catch (error) {
    console.error('❌ Error regenerando fixture:', error.message);
    return false;
  }
}

// ====================================
// PASO 3: VERIFICAR CAMBIOS
// ====================================

function verificarCambios() {
  try {
    console.log('\n🔍 PASO 3: Verificando cambios...');
    
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    
    // Verificar equipos
    const equiposGrupoC = data.equipos.filter(eq => eq.grupo === 'C');
    console.log(`\n👥 EQUIPOS GRUPO C (${equiposGrupoC.length}):`);
    equiposGrupoC.forEach((equipo, index) => {
      const marca = equipo.id === NUEVO_EQUIPO.id ? ' ← NUEVO' : '';
      console.log(`   ${index + 1}. ${equipo.nombre}${marca}`);
    });
    
    // Verificar partidos
    const partidosGrupoC = data.partidos.filter(p => p.grupo === 'C');
    console.log(`\n⚽ PARTIDOS GRUPO C: ${partidosGrupoC.length}`);
    console.log(`   Partidos esperados: ${equiposGrupoC.length * (equiposGrupoC.length - 1) / 2}`);
    
    // Verificar que cada equipo tenga los partidos correctos
    console.log('\n📊 PARTIDOS POR EQUIPO:');
    equiposGrupoC.forEach(equipo => {
      const partidosEquipo = partidosGrupoC.filter(p => 
        p.equipoLocalId === equipo.id || p.equipoVisitanteId === equipo.id
      );
      console.log(`   ${equipo.nombre}: ${partidosEquipo.length} partidos`);
    });
    
    console.log('\n📈 RESUMEN FINAL:');
    console.log(`   Total equipos: ${data.equipos.length}`);
    console.log(`   Total partidos: ${data.partidos.length}`);
    console.log(`   Grupo C equipos: ${equiposGrupoC.length}`);
    console.log(`   Grupo C partidos: ${partidosGrupoC.length}`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Error verificando cambios:', error.message);
    return false;
  }
}

// ====================================
// FUNCIÓN PRINCIPAL
// ====================================

function ejecutarAgregarEquipo() {
  console.log('🚀 INICIANDO PROCESO DE AGREGAR VELPACK A& F AL GRUPO C...\n');
  
  console.log('📋 ESTRATEGIA IMPLEMENTADA:');
  console.log('   ✅ Equipo: VELPACK A& F');
  console.log('   ✅ Grupo: C (ahora con 10 equipos)');
  console.log('   ✅ Oponente fecha 1: ALFHA (que descansó originalmente)');
  console.log('   ✅ Partido diferido: Se programa entre semana');
  console.log('   ✅ Conservar: Partidos fecha 1 ya jugados\n');
  
  let success = true;
  
  // Paso 1: Actualizar servidor
  if (!actualizarServidor()) {
    console.log('❌ Error en paso 1');
    success = false;
  }
  
  // Paso 2: Regenerar fixture con estrategia especial
  if (success && !regenerarFixtureConNuevoEquipo()) {
    console.log('❌ Error en paso 2');
    success = false;
  }
  
  // Paso 3: Verificar
  if (success && !verificarCambios()) {
    console.log('❌ Error en paso 3');
    success = false;
  }
  
  if (success) {
    console.log('\n🎉 ¡VELPACK A& F AGREGADO EXITOSAMENTE!');
    console.log('========================================');
    console.log('✅ server-auth.js actualizado');
    console.log('✅ Fixture regenerado para Grupo C');
    console.log('✅ Fecha 1 conservada (partidos ya jugados)');
    console.log('✅ Partido diferido creado: VELPACK A& F vs ALFHA');
    console.log('✅ Backups creados por seguridad');
    console.log('\n📅 GESTIÓN DE FECHAS:');
    console.log('   - Fecha 1: Conservada + partido diferido VELPACK vs ALFHA');
    console.log('   - Fechas 2-9: Redistribuidas con más partidos del Grupo C');
    console.log('   - Partido diferido: Programar entre semana cuando convenga');
    console.log('\n🔄 PRÓXIMOS PASOS:');
    console.log('   1. Reinicia el servidor: node server-auth.js');
    console.log('   2. Verifica que aparezca VELPACK A& F en el Grupo C');
    console.log('   3. El partido vs ALFHA aparecerá sin horario en fecha 1');
    console.log('   4. Programa ese partido entre semana usando el panel admin');
    console.log('\n📊 NUEVOS NÚMEROS:');
    console.log('   - Grupo C: 10 equipos (en lugar de 9)');
    console.log('   - Partidos Grupo C: 45 total (en lugar de 36)');
    console.log('   - Cada equipo: 9 partidos (en lugar de 8)');
  } else {
    console.log('\n💥 HUBO ERRORES EN EL PROCESO');
    console.log('   Revisa los backups si necesitas restaurar');
  }
  
  return success;
}

// Ejecutar si se llama directamente
if (require.main === module) {
  ejecutarAgregarEquipo();
}

module.exports = { ejecutarAgregarEquipo, NUEVO_EQUIPO };