const fs = require('fs');
const path = require('path');

// Ruta de la carpeta de logos
const LOGOS_DIR = 'D:\\MARACANA\\copa-maracana-14ed\\backend\\uploads\\logos';

// Mapeo de nombres actuales a nuevos nombres según el orden original
const renameMap = {
  // GRUPO A
  'compa_jr.webp': 'a1.webp',              // COMPA JR. (id: 1)
  'los_lagartos.webp': 'a2.webp',          // LOS LAGARTOS (id: 2)
  'alma_marce_fc.webp': 'a3.webp',         // ALMA MARCE FC. (id: 3)
  'real_venezuela.webp': 'a4.webp',        // REAL VENEZUELA (id: 4)
  'the_family_sporting_club.webp': 'a5.webp', // THE FAMILY SPORTING CLUB (id: 5)
  'fc_desire.webp': 'a6.webp',             // FC DESIRE (id: 6)
  'millenium_jr.webp': 'a7.webp',          // MILLENIUM JR (id: 7)
  'next_fc.webp': 'a8.webp',               // NEXT FC. (id: 8)
  'chelsea.webp': 'a9.webp',               // CHELSEA (id: 9)

  // GRUPO B
  'sport_tu_a_a.webp': 'b1.webp',          // SPORT TU ÑAÑ (id: 10)
  'club_lb.webp': 'b2.webp',               // CLUB LB (id: 11)
  'espartanos_fc.webp': 'b3.webp',         // ESPARTANOS FC (id: 12)
  'realcoholicos.webp': 'b4.webp',         // REALCOHOLICOS (id: 13)
  'irresponsablesfc.webp': 'b5.webp',      // IRRESPONSABLESFC (id: 14)
  'allien_birds.webp': 'b6.webp',          // ALLIEN BIRDS (id: 15)
  'manaba_jireth_fc.webp': 'b7.webp',      // MANABA JIRETH FC (id: 16)
  'leones_fc.webp': 'b8.webp',             // LEONES FC (id: 17)
  'galacticos.webp': 'b9.webp',            // GALACTICOS (id: 18)

  // GRUPO C
  'bambinos_fc.webp': 'c1.webp',           // BAMBINOS FC (id: 19)
  'socxer_fc.webp': 'c2.webp',             // SOCXER FC (id: 20)
  'new_generation.webp': 'c3.webp',        // NEW GENERATION (id: 21)
  'alpha_fc.webp': 'c4.webp',              // ALFHA (id: 22) - Nota: en tu lista aparece como alpha_fc
  'cebollitas_football_club.webp': 'c5.webp', // CEBOLLITAS FOOTBALL CLUB (id: 23)
  '11_de_oro.webp': 'c6.webp',             // 11 DE ORO (id: 24)
  'ad_guagraceo.webp': 'c7.webp',          // AD. GUAGRACEO (id: 25)
  'autonic.webp': 'c8.webp',               // AUTONIC (id: 26)
  'los_de_siempre.webp': 'c9.webp',        // LOS DE SIEMPRE (id: 27)
  // Nota: VELPACK A& F (id: 28) no tiene logo actual
};

function renameLogos() {
  console.log('🏆 Iniciando renombrado de logos Copa Maracaná 14ED...\n');
  
  // Verificar que la carpeta existe
  if (!fs.existsSync(LOGOS_DIR)) {
    console.error('❌ Error: La carpeta de logos no existe:', LOGOS_DIR);
    return;
  }

  // Crear carpeta de respaldo
  const backupDir = path.join(LOGOS_DIR, 'backup_' + Date.now());
  fs.mkdirSync(backupDir, { recursive: true });
  console.log('📁 Carpeta de respaldo creada:', backupDir);

  let renamedCount = 0;
  let notFoundCount = 0;

  // Recorrer el mapeo y renombrar archivos
  for (const [oldName, newName] of Object.entries(renameMap)) {
    const oldPath = path.join(LOGOS_DIR, oldName);
    const newPath = path.join(LOGOS_DIR, newName);
    const backupPath = path.join(backupDir, oldName);

    if (fs.existsSync(oldPath)) {
      try {
        // Crear copia de respaldo
        fs.copyFileSync(oldPath, backupPath);
        
        // Renombrar archivo
        fs.renameSync(oldPath, newPath);
        
        console.log(`✅ ${oldName} → ${newName}`);
        renamedCount++;
      } catch (error) {
        console.error(`❌ Error renombrando ${oldName}:`, error.message);
      }
    } else {
      console.log(`⚠️  No encontrado: ${oldName}`);
      notFoundCount++;
    }
  }

  console.log('\n📊 Resumen:');
  console.log(`✅ Archivos renombrados: ${renamedCount}`);
  console.log(`⚠️  Archivos no encontrados: ${notFoundCount}`);
  console.log(`📁 Respaldo en: ${backupDir}`);
  
  console.log('\n🎯 Nuevos nombres de logos:');
  console.log('Grupo A: a1.webp - a9.webp');
  console.log('Grupo B: b1.webp - b9.webp');
  console.log('Grupo C: c1.webp - c9.webp');
  console.log('\n🏆 ¡Renombrado completado!');
}

// Función para revertir cambios (por si acaso)
function revertRename() {
  console.log('🔄 Revirtiendo cambios...');
  
  const backupDirs = fs.readdirSync(LOGOS_DIR)
    .filter(name => name.startsWith('backup_'))
    .map(name => path.join(LOGOS_DIR, name))
    .sort((a, b) => fs.statSync(b).mtime - fs.statSync(a).mtime);

  if (backupDirs.length === 0) {
    console.log('❌ No se encontraron carpetas de respaldo');
    return;
  }

  const latestBackup = backupDirs[0];
  console.log('📁 Usando respaldo:', latestBackup);

  const backupFiles = fs.readdirSync(latestBackup);
  
  for (const file of backupFiles) {
    const backupPath = path.join(latestBackup, file);
    const originalPath = path.join(LOGOS_DIR, file);
    
    try {
      fs.copyFileSync(backupPath, originalPath);
      console.log(`✅ Restaurado: ${file}`);
    } catch (error) {
      console.error(`❌ Error restaurando ${file}:`, error.message);
    }
  }
  
  console.log('🔄 Reversión completada');
}

// Ejecutar el script
if (require.main === module) {
  console.log('Copa Maracaná 14ED - Renombrador de Logos');
  console.log('==========================================\n');
  
  // Preguntar qué hacer
  const args = process.argv.slice(2);
  
  if (args.includes('--revert')) {
    revertRename();
  } else {
    renameLogos();
  }
}

module.exports = { renameLogos, revertRename };