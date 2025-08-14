// validador-fixture-completo.js - Validador de fixture todos contra todos
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'partidos-data.json');

// Equipos organizados por grupo
const equiposPorGrupo = {
  A: [
    { id: 1, nombre: 'COMPA JR.' },
    { id: 2, nombre: 'LOS LAGARTOS' },
    { id: 3, nombre: 'ALMA MARCE FC.' },
    { id: 4, nombre: 'REAL VENEZUELA' },
    { id: 5, nombre: 'THE FAMILY SPORTING CLUB' },
    { id: 6, nombre: 'FC DESIRE' },
    { id: 7, nombre: 'MILLENIUM JR' },
    { id: 8, nombre: 'NEXT FC.' },
    { id: 9, nombre: 'CHELSEA' }
  ],
  B: [
    { id: 10, nombre: 'SPORT TU ÑAÑA' },
    { id: 11, nombre: 'CLUB LB' },
    { id: 12, nombre: 'ESPARTANOS FC' },
    { id: 13, nombre: 'REALCOHOLICOS' },
    { id: 14, nombre: 'IRRESPONSABLESFC' },
    { id: 15, nombre: 'ALLIEN BIRDS' },
    { id: 16, nombre: 'MANABA JIRETH FC' },
    { id: 17, nombre: 'LEONES FC' },
    { id: 18, nombre: 'GALACTICOS' }
  ],
  C: [
    { id: 19, nombre: 'BAMBINOS FC' },
    { id: 20, nombre: 'SOCXER FC' },
    { id: 21, nombre: 'NEW GENERATION' },
    { id: 22, nombre: 'ALFHA' },
    { id: 23, nombre: 'CEBOLLITAS FOOTBALL CLUB' },
    { id: 24, nombre: '11 DE ORO' },
    { id: 25, nombre: 'AD. GUAGRACEO' },
    { id: 26, nombre: 'AUTONIC' },
    { id: 27, nombre: 'LOS DE SIEMPRE' }
  ]
};

// Función para generar todos los enfrentamientos necesarios
function generarEnfrentamientosRequeridos() {
  const enfrentamientosRequeridos = {};
  
  Object.keys(equiposPorGrupo).forEach(grupo => {
    const equipos = equiposPorGrupo[grupo];
    enfrentamientosRequeridos[grupo] = [];
    
    // Generar todos los enfrentamientos posibles
    for (let i = 0; i < equipos.length; i++) {
      for (let j = i + 1; j < equipos.length; j++) {
        enfrentamientosRequeridos[grupo].push({
          equipo1: equipos[i],
          equipo2: equipos[j],
          enfrentamiento: `${equipos[i].id}-${equipos[j].id}`
        });
      }
    }
  });
  
  return enfrentamientosRequeridos;
}

// Función para validar el fixture completo
function validarFixtureCompleto() {
  try {
    console.log('🔍 VALIDANDO FIXTURE COMPLETO - TODOS CONTRA TODOS');
    console.log('================================================\n');
    
    // Cargar datos
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const partidos = data.partidos || [];
    
    console.log(`📊 Total partidos en fixture: ${partidos.length}\n`);
    
    // Generar enfrentamientos requeridos
    const enfrentamientosRequeridos = generarEnfrentamientosRequeridos();
    
    // Validar cada grupo
    const resultados = {};
    let todosCorrecto = true;
    
    Object.keys(equiposPorGrupo).forEach(grupo => {
      console.log(`🏆 VALIDANDO GRUPO ${grupo}`);
      console.log('='.repeat(30));
      
      const equiposGrupo = equiposPorGrupo[grupo];
      const partidosGrupo = partidos.filter(p => p.grupo === grupo);
      
      console.log(`Equipos en grupo: ${equiposGrupo.length}`);
      console.log(`Partidos programados: ${partidosGrupo.length}`);
      console.log(`Enfrentamientos esperados: ${enfrentamientosRequeridos[grupo].length}\n`);
      
      // Crear matriz de enfrentamientos encontrados
      const enfrentamientosEncontrados = new Set();
      const partidosPorEquipo = {};
      
      // Inicializar contador por equipo
      equiposGrupo.forEach(eq => {
        partidosPorEquipo[eq.id] = {
          nombre: eq.nombre,
          partidos: 0,
          rivales: new Set(),
          detalles: []
        };
      });
      
      // Procesar partidos del grupo
      partidosGrupo.forEach(partido => {
        const localId = partido.equipoLocalId;
        const visitanteId = partido.equipoVisitanteId;
        
        // Crear clave del enfrentamiento (ordenada)
        const enfrentamiento = localId < visitanteId ? 
          `${localId}-${visitanteId}` : `${visitanteId}-${localId}`;
        
        enfrentamientosEncontrados.add(enfrentamiento);
        
        // Actualizar contadores
        if (partidosPorEquipo[localId]) {
          partidosPorEquipo[localId].partidos++;
          partidosPorEquipo[localId].rivales.add(visitanteId);
          partidosPorEquipo[localId].detalles.push({
            rival: visitanteId,
            esLocal: true,
            fecha: partido.fechaId
          });
        }
        
        if (partidosPorEquipo[visitanteId]) {
          partidosPorEquipo[visitanteId].partidos++;
          partidosPorEquipo[visitanteId].rivales.add(localId);
          partidosPorEquipo[visitanteId].detalles.push({
            rival: localId,
            esLocal: false,
            fecha: partido.fechaId
          });
        }
      });
      
      // Validar cada equipo del grupo
      console.log('📋 ANÁLISIS POR EQUIPO:');
      console.log('-'.repeat(50));
      
      let grupoTieneFallas = false;
      
      equiposGrupo.forEach(equipo => {
        const stats = partidosPorEquipo[equipo.id];
        const partidosEsperados = equiposGrupo.length - 1; // 8 partidos para cada equipo
        const rivalesEsperados = equiposGrupo.length - 1; // 8 rivales diferentes
        
        const status = stats.partidos === partidosEsperados ? '✅' : '❌';
        
        if (stats.partidos !== partidosEsperados) {
          grupoTieneFallas = true;
          todosCorrecto = false;
        }
        
        console.log(`${status} ${equipo.nombre}`);
        console.log(`   Partidos: ${stats.partidos}/${partidosEsperados}`);
        console.log(`   Rivales únicos: ${stats.rivales.size}/${rivalesEsperados}`);
        
        // Mostrar rivales faltantes
        if (stats.rivales.size < rivalesEsperados) {
          const rivalesFaltantes = equiposGrupo
            .filter(eq => eq.id !== equipo.id && !stats.rivales.has(eq.id))
            .map(eq => eq.nombre);
          
          if (rivalesFaltantes.length > 0) {
            console.log(`   ⚠️  Falta jugar contra: ${rivalesFaltantes.join(', ')}`);
          }
        }
        
        // Mostrar rivales duplicados
        const rivalesCount = {};
        stats.detalles.forEach(detalle => {
          rivalesCount[detalle.rival] = (rivalesCount[detalle.rival] || 0) + 1;
        });
        
        const duplicados = Object.entries(rivalesCount)
          .filter(([rival, count]) => count > 1);
        
        if (duplicados.length > 0) {
          duplicados.forEach(([rivalId, count]) => {
            const rivalNombre = equiposGrupo.find(eq => eq.id === parseInt(rivalId))?.nombre;
            console.log(`   🔄 Juega ${count} veces contra: ${rivalNombre}`);
          });
        }
        
        console.log('');
      });
      
      // Resumen del grupo
      console.log(`📊 RESUMEN GRUPO ${grupo}:`);
      if (grupoTieneFallas) {
        console.log('❌ EL GRUPO TIENE FALLAS EN EL FIXTURE');
      } else {
        console.log('✅ GRUPO COMPLETAMENTE VÁLIDO');
      }
      
      console.log(`Enfrentamientos únicos encontrados: ${enfrentamientosEncontrados.size}`);
      console.log(`Enfrentamientos únicos requeridos: ${enfrentamientosRequeridos[grupo].length}`);
      
      // Mostrar enfrentamientos faltantes
      const faltantes = enfrentamientosRequeridos[grupo].filter(req => 
        !enfrentamientosEncontrados.has(req.enfrentamiento)
      );
      
      if (faltantes.length > 0) {
        console.log('\n⚠️  ENFRENTAMIENTOS FALTANTES:');
        faltantes.forEach(faltante => {
          console.log(`   ${faltante.equipo1.nombre} vs ${faltante.equipo2.nombre}`);
        });
      }
      
      console.log('\n' + '='.repeat(60) + '\n');
      
      resultados[grupo] = {
        valido: !grupoTieneFallas,
        enfrentamientosEncontrados: enfrentamientosEncontrados.size,
        enfrentamientosRequeridos: enfrentamientosRequeridos[grupo].length,
        faltantes: faltantes.length
      };
    });
    
    // Resumen final
    console.log('🎯 RESUMEN FINAL DE VALIDACIÓN');
    console.log('==============================');
    
    Object.keys(resultados).forEach(grupo => {
      const resultado = resultados[grupo];
      const status = resultado.valido ? '✅' : '❌';
      console.log(`${status} Grupo ${grupo}: ${resultado.enfrentamientosEncontrados}/${resultado.enfrentamientosRequeridos} enfrentamientos`);
      
      if (resultado.faltantes > 0) {
        console.log(`   ⚠️  ${resultado.faltantes} enfrentamientos faltantes`);
      }
    });
    
    console.log('\n📈 ESTADÍSTICAS GENERALES:');
    const totalPartidos = partidos.length;
    const totalEsperado = Object.values(enfrentamientosRequeridos)
      .reduce((sum, grupo) => sum + grupo.length, 0);
    
    console.log(`Total partidos programados: ${totalPartidos}`);
    console.log(`Total partidos esperados: ${totalEsperado}`);
    console.log(`Diferencia: ${totalPartidos - totalEsperado}`);
    
    if (todosCorrecto) {
      console.log('\n🎉 ¡FIXTURE COMPLETAMENTE VÁLIDO!');
      console.log('   Todos los equipos juegan contra todos sus rivales de grupo exactamente una vez.');
    } else {
      console.log('\n💥 EL FIXTURE TIENE ERRORES');
      console.log('   Se requiere corrección para asegurar todos contra todos.');
    }
    
    return {
      valido: todosCorrecto,
      grupos: resultados,
      totalPartidos,
      totalEsperado
    };
    
  } catch (error) {
    console.error('❌ Error al validar fixture:', error);
    return null;
  }
}

// Función para generar fixture correcto desde cero
function generarFixtureCorrectoCompleto() {
  console.log('🔧 GENERANDO FIXTURE CORRECTO DESDE CERO...\n');
  
  const partidosCorrectos = [];
  let partidoId = 1;
  
  // Generar partidos para cada grupo
  Object.keys(equiposPorGrupo).forEach(grupo => {
    const equipos = equiposPorGrupo[grupo];
    console.log(`Generando enfrentamientos para Grupo ${grupo}...`);
    
    // Todos contra todos
    for (let i = 0; i < equipos.length; i++) {
      for (let j = i + 1; j < equipos.length; j++) {
        partidosCorrectos.push({
          id: partidoId++,
          fechaId: null, // Se asignará después
          hora: null,
          grupo: grupo,
          equipoLocalId: equipos[i].id,
          equipoVisitanteId: equipos[j].id,
          cancha: null,
          golesLocal: null,
          golesVisitante: null,
          estado: 'programado'
        });
      }
    }
  });
  
  console.log(`✅ ${partidosCorrectos.length} partidos generados correctamente`);
  
  // Distribuir en fechas (algoritmo simple)
  const partidosPorFecha = Math.ceil(partidosCorrectos.length / 9);
  
  partidosCorrectos.forEach((partido, index) => {
    partido.fechaId = Math.floor(index / partidosPorFecha) + 1;
  });
  
  return partidosCorrectos;
}

// Función principal
function ejecutarValidacion() {
  console.log('🚀 INICIANDO VALIDACIÓN COMPLETA DEL FIXTURE\n');
  
  const resultado = validarFixtureCompleto();
  
  if (resultado && !resultado.valido) {
    console.log('\n❓ ¿Deseas generar un fixture correcto desde cero?');
    console.log('   (Esto NO alterará el archivo actual, solo mostrará cómo debería ser)');
    
    const fixtureCorrector = generarFixtureCorrectoCompleto();
    
    console.log('\n📋 FIXTURE CORRECTO GENERADO:');
    console.log(`Total partidos: ${fixtureCorrector.length}`);
    
    // Mostrar distribución por grupo
    ['A', 'B', 'C'].forEach(grupo => {
      const partidosGrupo = fixtureCorrector.filter(p => p.grupo === grupo);
      console.log(`Grupo ${grupo}: ${partidosGrupo.length} partidos`);
    });
  }
  
  return resultado;
}

if (require.main === module) {
  ejecutarValidacion();
}

module.exports = { 
  validarFixtureCompleto, 
  generarFixtureCorrectoCompleto,
  equiposPorGrupo 
};