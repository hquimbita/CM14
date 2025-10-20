// backend/routes/faseFinal.js
const express = require('express');
const router = express.Router();
const faseFinalController = require('../controllers/faseFinalController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// Ruta para calcular automáticamente la fase final (Solo Admin)
router.post('/calcular', authenticateToken, requireAdmin, faseFinalController.calcularFaseFinal);

// Ruta para actualizar octavos con ganadores de repechaje (Solo Admin)
router.post('/actualizar-octavos', authenticateToken, requireAdmin, faseFinalController.actualizarOctavosConRepechaje);

// Ruta para obtener resumen de fase final (Pública)
router.get('/resumen', faseFinalController.getResumenFaseFinal);

module.exports = router;


// ============================================
// AGREGAR EN server.js o app.js
// ============================================

// const faseFinalRoutes = require('./routes/faseFinal');
// app.use('/api/fase-final', faseFinalRoutes);