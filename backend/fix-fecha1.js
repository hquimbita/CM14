// fix-fecha1.js - Script para corregir los partidos de la fecha 1
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'partidos-data.json');

// Equipos con sus IDs correctos
const equipos = [
  // GRUPO A
  { id: 1, nombre: 'COMPA JR.', grupo: 'A' },
  { id: 2, nombre: 'LOS LAGARTOS', grupo: 'A' },
  { id: 3, nombre: 'ALMA MARCE FC.', grupo: 'A' },
  { id: 4, nombre: 'REAL VENEZUELA', grupo: 'A' },
  { id: 5, nombre: 'THE FAMILY SPORTING CLUB', grupo: 'A' },
  { id: 6, nombre: 'FC DESIRE', grupo: 'A' },
  { id: 7, nombre: 'MILLENIUM JR', grupo: 'A' },
  { id: 8, nombre: 'NEXT FC.', grupo: 'A' },
  { id: 9, nombre: 'CHELSEA', grupo: 'A' },
  
  // GRUPO B
  { id: 10, nombre: 'SPORT TU ÑAÑA', grupo: 'B' },
  { id: 11, nombre: 'CLUB LB', grupo: 'B' },
  { id: 12, nombre: 'ESPARTANOS FC', grupo: 'B' },
  { id: 13, nombre: 'REALCOHOLICOS', grupo: 'B' },
  { id: 14, nombre: 'IRRESPONSABLESFC', grupo: 'B' },
  { id: 15, nombre: 'ALLIEN BIRDS', grupo: 'B' },
  { id: 16, nombre: 'MANABA JIRETH FC', grupo: 'B' },
  { id: 17, nombre: 'LEONES FC', grupo: 'B' },
  { id: 18, nombre: 'GALACTICOS', grupo: 'B' },
  
  // GRUPO C
  { id: 19, nombre: 'BAMBINOS FC', grupo: 'C' },
  { id: 20, nombre: 'SOCXER FC', grupo: 'C' },
  { id: 21, nombre: 'NEW GENERATION', grupo: 'C' },
  { id: 22, nombre: 'ALFHA', grupo: 'C' },
  { id: 23, nombre: 'CEBOLLITAS FOOTBALL CLUB', grupo: 'C' },
  { id: 24, nombre: '11 DE ORO', grupo: 'C' },
  { id: 25, nombre: 'AD. GUAGRACEO', grupo: 'C' },
  { id: 26, nombre: 'AUTONIC', grupo: 'C' },
  { id: 27, nombre: 'LOS DE SIEMPRE', grupo: 'C' }
];

// Función para encontrar equipo por nombre
function encontrarEquipoPorNombre(nombre) {
  return equipos.find(eq => 
    eq.nombre.toLowerCase().includes(nombre.toLowerCase()) ||
    nombre.toLowerCase().includes(eq.nombre.toLowerCase())
  );
}

// Partidos reales de la fecha 1 (según la imagen)
const partidosFecha1Reales = [
  { local: 'THE FAMILY SPORTING CLUB', visitante: 'FC DESIRE', grupo: 'A', hora: '17:00', cancha: 'NORTE' },
  { local: 'ESPARTANOS FC', visitante: 'CLUB LB', grupo: 'B', hora: '17:00', cancha: 'SUR' },
  { local: 'BAMBINOS FC', visitante: 'SOCXER FC', grupo: 'C', hora: '18:00', cancha: 'NORTE' },
  { local: 'CEBOLLITAS FOOTBALL CLUB', visitante: 'AD. GUAGRACEO', grupo: 'C', hora: '18:00', cancha: 'SUR' },
  { local: 'COMPA JR.', visitante: 'LOS LAGARTOS', grupo: 'A', hora: '19:00', cancha: 'NORTE' },
  { local: '11 DE ORO', visitante: 'NEW GENERATION', grupo: 'C', hora: '19:00', cancha: 'SUR' },
  { local: 'IRRESPONSABLESFC', visitante: 'ALLIEN BIRDS', grupo: 'B', hora: '20:00', cancha: 'NORTE' },
  { local: 'AUTONIC', visitante: 'LOS DE SIEMPRE', grupo: 'C', hora: '20:00', cancha: 'SUR' },
  { local: 'ALMA MARCE FC.', visitante: 'REAL VENEZUELA', grupo: 'A', hora: '21:00', cancha: 'NORTE' },
  { local: 'SPORT TU ÑAÑA', visitante: 'REALCOHOLICOS', grupo: 'B', hora: '21:00', cancha: 'SUR' },
  { local: 'NEXT FC.', visitante: 'CHELSEA', grupo: 'A', hora: '22:00', cancha: 'NORTE' },
  { local: 'MANABA JIRETH FC', visitante: 'LEONES FC', grupo: 'B', hora: '22:00', cancha: 'SUR' }
];

function corregirFecha1() {
  try {
    // Cargar datos actuales
    let data = { partidos: [], equipos: [], fechas: [] };
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
      data = JSON.parse(fileContent);
    }

    console.log('📂 Datos cargados, partidos actuales:', data.partidos.length);

    // Encontrar el ID máximo actual para no duplicar
    const maxId = data.partidos.length > 0 ? Math.max(...data.partidos.map(p => p.id)) : 0;

    // Eliminar partidos existentes de fecha 1
    data.partidos = data.partidos.filter(p => p.fechaId !== 1);
    console.log('🗑️  Partidos de fecha 1 eliminados');

    // Agregar los partidos reales de fecha 1
    let partidoId = maxId + 1;
    
    partidosFecha1Reales.forEach((partidoReal, index) => {
      const equipoLocal = encontrarEquipoPorNombre(partidoReal.local);
      const equipoVisitante = encontrarEquipoPorNombre(partidoReal.visitante);

      if (!equipoLocal) {
        console.error(`❌ No se encontró equipo local: ${partidoReal.local}`);
        return;
      }
      if (!equipoVisitante) {
        console.error(`❌ No se encontró equipo visitante: ${partidoReal.visitante}`);
        return;
      }

      const nuevoPartido = {
        id: partidoId++,
        fechaId: 1,
        hora: partidoReal.hora,
        grupo: partidoReal.grupo,
        equipoLocalId: equipoLocal.id,
        equipoVisitanteId: equipoVisitante.id,
        cancha: partidoReal.cancha,
        golesLocal: null, // Los resultados se agregarán después
        golesVisitante: null,
        estado: 'finalizado' // Cambiar según corresponda
      };

      data.partidos.push(nuevoPartido);
      console.log(`✅ Agregado: ${equipoLocal.nombre} vs ${equipoVisitante.nombre} - ${partidoReal.hora} - ${partidoReal.cancha}`);
    });

    // Reordenar partidos por ID
    data.partidos.sort((a, b) => a.id - b.id);

    // Guardar datos actualizados
    data.version = '4.1.0 - Fecha 1 Corregida';
    data.lastUpdate = new Date().toISOString();
    data.notes = 'Fecha 1 actualizada con partidos reales del 13 de agosto';

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    
    console.log('\n🎉 ¡FECHA 1 CORREGIDA EXITOSAMENTE!');
    console.log(`📊 Total de partidos: ${data.partidos.length}`);
    console.log(`⚽ Partidos de fecha 1: ${data.partidos.filter(p => p.fechaId === 1).length}`);
    console.log(`💾 Archivo guardado: ${DATA_FILE}`);
    
    return true;
  } catch (error) {
    console.error('❌ Error al corregir fecha 1:', error);
    return false;
  }
}

// Función para verificar los cambios
function verificarFecha1() {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const partidosFecha1 = data.partidos.filter(p => p.fechaId === 1);
    
    console.log('\n🔍 VERIFICACIÓN FECHA 1:');
    console.log('========================');
    
    partidosFecha1.forEach(partido => {
      const equipoLocal = equipos.find(eq => eq.id === partido.equipoLocalId);
      const equipoVisitante = equipos.find(eq => eq.id === partido.equipoVisitanteId);
      
      console.log(`${partido.hora} | ${equipoLocal?.nombre} vs ${equipoVisitante?.nombre} | ${partido.cancha} | Grupo ${partido.grupo}`);
    });
    
    console.log(`\n📊 Total: ${partidosFecha1.length} partidos en fecha 1`);
    
  } catch (error) {
    console.error('❌ Error al verificar:', error);
  }
}

// Ejecutar corrección
if (require.main === module) {
  console.log('🚀 INICIANDO CORRECCIÓN DE FECHA 1...\n');
  
  if (corregirFecha1()) {
    verificarFecha1();
    console.log('\n✨ ¡Proceso completado! Reinicia el servidor para ver los cambios.');
  } else {
    console.log('\n💥 Hubo errores en el proceso.');
  }
}

module.exports = { corregirFecha1, verificarFecha1 };