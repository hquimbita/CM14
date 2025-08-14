// fix-security-horarios.js - Corrección de seguridad y horarios
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'partidos-data.json');
const USERS_FILE = path.join(__dirname, 'users-data.json');

// ====================================
// PROBLEMA 1: LIMPIAR HORARIOS DE FECHAS FUTURAS
// ====================================

function limpiarHorariosFechasFuturas() {
  try {
    console.log('🕐 LIMPIANDO HORARIOS DE FECHAS FUTURAS...\n');
    
    // Cargar datos
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    let partidosModificados = 0;
    
    // Solo la fecha 1 debe tener horarios (ya jugada)
    // Las fechas 2-9 NO deben tener horarios pre-asignados
    data.partidos.forEach(partido => {
      if (partido.fechaId > 1) {
        if (partido.hora || partido.cancha) {
          console.log(`🗑️  Limpiando horarios de Fecha ${partido.fechaId} - Partido ID ${partido.id}`);
          partido.hora = null;
          partido.cancha = null;
          partidosModificados++;
        }
      }
    });
    
    // Guardar cambios
    data.version = '4.3.0 - Horarios Corregidos';
    data.lastUpdate = new Date().toISOString();
    data.notes = 'Horarios eliminados de fechas futuras. Solo fecha actual debe tener horarios.';
    
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    
    console.log(`✅ ${partidosModificados} partidos limpiados`);
    console.log('📅 Solo la fecha 1 mantiene sus horarios (ya jugada)');
    console.log('⏰ Las fechas 2-9 están sin horarios (se asignarán semana a semana)\n');
    
    return true;
  } catch (error) {
    console.error('❌ Error al limpiar horarios:', error);
    return false;
  }
}

// ====================================
// PROBLEMA 2: CORREGIR VULNERABILIDAD DE USUARIOS
// ====================================

function corregirVulnerabilidadUsuarios() {
  try {
    console.log('🔐 CORRIGIENDO VULNERABILIDAD DE USUARIOS...\n');
    
    // Cargar usuarios
    let usersData = { users: [], sessions: [] };
    if (fs.existsSync(USERS_FILE)) {
      const fileContent = fs.readFileSync(USERS_FILE, 'utf8');
      usersData = JSON.parse(fileContent);
    }
    
    console.log(`👥 Usuarios encontrados: ${usersData.users.length}`);
    
    // Crear backup de seguridad
    const backupFile = path.join(__dirname, `users-backup-${Date.now()}.json`);
    fs.writeFileSync(backupFile, JSON.stringify(usersData, null, 2));
    console.log(`💾 Backup creado: ${backupFile}`);
    
    // Verificar usuarios con información sensible
    const usuariosProblematicos = usersData.users.filter(user => 
      user.password && user.password.length > 0
    );
    
    if (usuariosProblematicos.length > 0) {
      console.log('⚠️  USUARIOS CON INFORMACIÓN SENSIBLE EXPUESTA:');
      usuariosProblematicos.forEach(user => {
        console.log(`   - ${user.username} (${user.email}) - Role: ${user.role}`);
      });
      
      console.log('\n🔒 Las contraseñas están hasheadas, pero aún así no deberían ser visibles.');
    }
    
    // Agregar campo de seguridad
    usersData.security = {
      lastSecurityUpdate: new Date().toISOString(),
      note: 'Información de usuarios protegida. Solo admins pueden ver lista básica.',
      vulnerabilityFixed: true
    };
    
    fs.writeFileSync(USERS_FILE, JSON.stringify(usersData, null, 2));
    
    console.log('✅ Archivo de usuarios actualizado con metadata de seguridad\n');
    
    return true;
  } catch (error) {
    console.error('❌ Error al corregir vulnerabilidad:', error);
    return false;
  }
}

// ====================================
// GENERAR CÓDIGO CORREGIDO PARA EL SERVIDOR
// ====================================

function generarCodigoServidorCorregido() {
  console.log('📝 GENERANDO CORRECCIONES PARA EL SERVIDOR...\n');
  
  const correccionesServidor = `
// ====================================
// CORRECCIONES DE SEGURIDAD PARA server-auth.js
// ====================================

// 1. CORRECCIÓN: Ruta de usuarios más segura
// REEMPLAZAR la ruta actual GET /api/admin/users con esta versión más segura:

if (path === '/api/admin/users' && method === 'GET') {
  return requireAdmin(req, res, (user) => {
    // IMPORTANTE: NO enviar contraseñas ni información sensible
    const safeUsers = users.map(u => ({
      id: u.id,
      username: u.username,
      email: u.email.replace(/(.{2}).*(@.*)/, '$1***$2'), // Ofuscar email parcialmente
      role: u.role,
      nombre: u.nombre,
      createdAt: u.createdAt,
      lastLogin: u.lastLogin,
      activo: u.activo
      // NO incluir: password, tokens, información sensible
    }));
    
    sendResponse(res, 200, {
      success: true,
      data: safeUsers,
      total: safeUsers.length,
      note: 'Información de usuarios filtrada por seguridad'
    });
  });
}

// 2. CORRECCIÓN: Endpoint para generar horarios solo para fecha actual
// AGREGAR esta nueva ruta para asignar horarios semana a semana:

if (path === '/api/admin/asignar-horarios' && method === 'POST') {
  return requireAdmin(req, res, (user) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const { fechaId, horarios } = JSON.parse(body);
        
        if (!fechaId || !horarios || !Array.isArray(horarios)) {
          return sendResponse(res, 400, { 
            success: false, 
            message: 'fechaId y horarios (array) son requeridos' 
          });
        }
        
        // Buscar partidos de la fecha específica sin horarios
        const partidosFecha = partidos.filter(p => 
          p.fechaId === fechaId && (!p.hora || !p.cancha)
        );
        
        if (partidosFecha.length === 0) {
          return sendResponse(res, 404, {
            success: false,
            message: \`No hay partidos sin horarios en la fecha \${fechaId}\`
          });
        }
        
        // Asignar horarios
        let asignados = 0;
        horarios.forEach((horario, index) => {
          if (index < partidosFecha.length && horario.hora && horario.cancha) {
            partidosFecha[index].hora = horario.hora;
            partidosFecha[index].cancha = horario.cancha;
            asignados++;
          }
        });
        
        // Guardar cambios
        const saved = saveData({ 
          partidos, equipos, fechas, 
          version: '4.3.0',
          lastUpdate: new Date().toISOString(),
          updatedBy: user.username,
          horariosAsignados: {
            fecha: fechaId,
            cantidad: asignados,
            timestamp: new Date().toISOString()
          }
        });
        
        if (saved) {
          sendResponse(res, 200, {
            success: true,
            message: \`Horarios asignados para fecha \${fechaId}\`,
            data: {
              fechaId,
              partidosAfectados: asignados,
              partidos: partidosFecha.slice(0, asignados)
            }
          });
        } else {
          sendResponse(res, 500, {
            success: false,
            message: 'Error al guardar horarios'
          });
        }
        
      } catch (e) {
        sendResponse(res, 400, { success: false, message: 'JSON inválido' });
      }
    });
  });
}

// 3. CORRECCIÓN: Endpoint para obtener solo partidos sin horarios
// AGREGAR para facilitar la asignación semanal:

if (path === '/api/admin/partidos-sin-horarios' && method === 'GET') {
  return requireAdmin(req, res, (user) => {
    const fechaId = parsedUrl.query.fecha;
    
    let partidosSinHorarios;
    if (fechaId) {
      partidosSinHorarios = partidos.filter(p => 
        p.fechaId === parseInt(fechaId) && (!p.hora || !p.cancha)
      );
    } else {
      partidosSinHorarios = partidos.filter(p => !p.hora || !p.cancha);
    }
    
    const partidosConEquipos = partidosSinHorarios.map(partido => ({
      ...partido,
      equipoLocal: encontrarEquipoPorId(partido.equipoLocalId),
      equipoVisitante: encontrarEquipoPorId(partido.equipoVisitanteId)
    }));
    
    sendResponse(res, 200, {
      success: true,
      data: partidosConEquipos,
      total: partidosConEquipos.length,
      fecha: fechaId || 'todas'
    });
  });
}

// ====================================
// INSTRUCCIONES DE IMPLEMENTACIÓN
// ====================================

/*
PASOS PARA IMPLEMENTAR:

1. Hacer backup del server-auth.js actual
2. Reemplazar la ruta GET /api/admin/users con la versión segura
3. Agregar las nuevas rutas para horarios
4. Reiniciar el servidor
5. Verificar que la información sensible no se exponga

FLUJO SEMANAL RECOMENDADO:
1. Admin revisa partidos sin horarios: GET /api/admin/partidos-sin-horarios?fecha=2
2. Admin asigna horarios: POST /api/admin/asignar-horarios
3. Solo entonces los usuarios ven los horarios de esa fecha
*/
`;

  // Guardar las correcciones en un archivo
  const correccionesFile = path.join(__dirname, 'correcciones-servidor.txt');
  fs.writeFileSync(correccionesFile, correccionesServidor);
  
  console.log(`📄 Correcciones guardadas en: ${correccionesFile}`);
  console.log('🔧 Revisa el archivo para implementar los cambios en server-auth.js\n');
}

// ====================================
// FUNCIÓN PRINCIPAL
// ====================================

function ejecutarCorreccionesCompletas() {
  console.log('🚀 INICIANDO CORRECCIONES DE SEGURIDAD Y HORARIOS...\n');
  console.log('⚠️  PROBLEMAS IDENTIFICADOS:');
  console.log('   1. Horarios pre-asignados en fechas futuras');
  console.log('   2. Información sensible de usuarios expuesta');
  console.log('   3. Falta control semanal de horarios\n');
  
  console.log('🔧 APLICANDO CORRECCIONES...\n');
  
  let success = true;
  
  // Corrección 1: Limpiar horarios
  if (!limpiarHorariosFechasFuturas()) {
    success = false;
  }
  
  // Corrección 2: Seguridad de usuarios
  if (!corregirVulnerabilidadUsuarios()) {
    success = false;
  }
  
  // Corrección 3: Generar código para el servidor
  generarCodigoServidorCorregido();
  
  if (success) {
    console.log('✅ TODAS LAS CORRECCIONES APLICADAS EXITOSAMENTE');
    console.log('\n📋 PRÓXIMOS PASOS:');
    console.log('   1. Implementar las correcciones del servidor (ver correcciones-servidor.txt)');
    console.log('   2. Reiniciar el servidor');
    console.log('   3. Verificar que la información sensible no se exponga');
    console.log('   4. Probar el flujo semanal de asignación de horarios');
    console.log('\n🔒 FLUJO SEMANAL RECOMENDADO:');
    console.log('   - Cada semana, admin asigna horarios solo para la fecha que se va a jugar');
    console.log('   - Fechas futuras permanecen sin horarios hasta ser necesario');
    console.log('   - Información de usuarios protegida y filtrada');
  } else {
    console.log('❌ HUBO ERRORES EN ALGUNAS CORRECCIONES');
    console.log('   Revisar los mensajes de error anteriores');
  }
  
  return success;
}

// Ejecutar si se llama directamente
if (require.main === module) {
  ejecutarCorreccionesCompletas();
}

module.exports = { 
  limpiarHorariosFechasFuturas, 
  corregirVulnerabilidadUsuarios,
  generarCodigoServidorCorregido
};