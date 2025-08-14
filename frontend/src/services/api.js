// src/services/api.js - API Service con autenticación COMPLETO
import axios from 'axios';
import toast from 'react-hot-toast';

// Configuración base de Axios
//const API_BASE_URL = 'http://localhost:3001';
const API_BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas y errores de auth
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error);
    
    // Manejar errores de autenticación
    if (error.response?.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem('token');
      if (window.location.pathname !== '/login') {
        toast.error('⚠️ Sesión expirada. Por favor inicia sesión nuevamente');
        window.location.href = '/login';
      }
    } else if (error.response?.status === 403) {
      toast.error('🚫 No tienes permisos para realizar esta acción');
    } else if (error.code === 'ECONNABORTED') {
      toast.error('⏱️ Timeout: La API tardó mucho en responder');
    } else if (error.response?.status === 404) {
      toast.error('🔍 No encontrado: Endpoint no existe');
    } else if (error.response?.status >= 500) {
      toast.error('🔥 Error del servidor');
    } else if (!error.response) {
      toast.error('🔌 No se puede conectar con la API');
    }
    
    return Promise.reject(error);
  }
);

// ====================================
// FUNCIONES DE LA API
// ====================================

export const apiService = {
  // ====================================
  // AUTH ENDPOINTS
  // ====================================
  
  async login(credentials) {
    try {
      toast.loading('Iniciando sesión...', { id: 'login' });
      const response = await api.post('/api/auth/login', credentials);
      toast.success('✅ Sesión iniciada correctamente', { id: 'login' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al iniciar sesión', { id: 'login' });
      throw error;
    }
  },

  async register(userData) {
    try {
      toast.loading('Creando cuenta...', { id: 'register' });
      const response = await api.post('/api/auth/register', userData);
      toast.success('✅ Cuenta creada exitosamente', { id: 'register' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al crear cuenta', { id: 'register' });
      throw error;
    }
  },

  async logout() {
    try {
      await api.post('/api/auth/logout');
      toast.success('👋 Sesión cerrada');
    } catch (error) {
      console.error('Error en logout:', error);
      // No mostrar error toast para logout, ya que puede fallar por token inválido
    }
  },

  async verifyToken() {
    try {
      const response = await api.get('/api/auth/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // ====================================
  // INFORMACIÓN GENERAL
  // ====================================
  
  async getTorneoInfo() {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener información del torneo');
    }
  },

  // ====================================
  // EQUIPOS (públicos)
  // ====================================
  
  async getEquipos() {
    try {
      toast.loading('Cargando equipos...', { id: 'equipos' });
      const response = await api.get('/api/equipos');
      toast.success(`✅ ${response.data.total} equipos cargados`, { id: 'equipos' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al cargar equipos', { id: 'equipos' });
      throw error;
    }
  },

  async getEquiposPorGrupo(grupo) {
    try {
      toast.loading(`Cargando equipos del grupo ${grupo}...`, { id: `grupo-${grupo}` });
      const response = await api.get(`/api/equipos/grupo/${grupo}`);
      toast.success(`✅ Grupo ${grupo}: ${response.data.total} equipos`, { id: `grupo-${grupo}` });
      return response.data;
    } catch (error) {
      toast.error(`❌ Error al cargar grupo ${grupo}`, { id: `grupo-${grupo}` });
      throw error;
    }
  },

  // ====================================
  // PARTIDOS (públicos para lectura)
  // ====================================
  
  async getPartidos() {
    try {
      toast.loading('Cargando partidos...', { id: 'partidos' });
      const response = await api.get('/api/partidos');
      toast.success(`✅ ${response.data.total} partidos cargados`, { id: 'partidos' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al cargar partidos', { id: 'partidos' });
      throw error;
    }
  },

  async getPartidosPorFecha(fechaId) {
    try {
      toast.loading(`Cargando fecha ${fechaId}...`, { id: `fecha-${fechaId}` });
      const response = await api.get(`/api/partidos/fecha/${fechaId}`);
      toast.success(`✅ ${response.data.data.partidos.length} partidos de la fecha ${fechaId}`, { id: `fecha-${fechaId}` });
      return response.data;
    } catch (error) {
      toast.error(`❌ Error al cargar fecha ${fechaId}`, { id: `fecha-${fechaId}` });
      throw error;
    }
  },

  // Actualizar partido (requiere admin)
  async actualizarPartido(partidoId, data) {
    try {
      toast.loading('Actualizando resultado...', { id: `partido-${partidoId}` });
      const response = await api.put(`/api/partidos/${partidoId}`, data);
      toast.success('🎯 Resultado actualizado exitosamente', { id: `partido-${partidoId}` });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al actualizar resultado', { id: `partido-${partidoId}` });
      throw error;
    }
  },

  // ====================================
  // POSICIONES (públicas)
  // ====================================
  
  async getPosiciones() {
    try {
      toast.loading('Cargando tabla de posiciones...', { id: 'posiciones' });
      const response = await api.get('/api/posiciones');
      toast.success('🏆 Tabla de posiciones actualizada', { id: 'posiciones' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al cargar posiciones', { id: 'posiciones' });
      throw error;
    }
  },

  async getPosicionesPorGrupo(grupo) {
    try {
      toast.loading(`Cargando posiciones del grupo ${grupo}...`, { id: `pos-${grupo}` });
      const response = await api.get(`/api/posiciones/grupo/${grupo}`);
      toast.success(`🏆 Posiciones grupo ${grupo} actualizadas`, { id: `pos-${grupo}` });
      return response.data;
    } catch (error) {
      toast.error(`❌ Error en posiciones grupo ${grupo}`, { id: `pos-${grupo}` });
      throw error;
    }
  },

  // ====================================
  // FECHAS (públicas)
  // ====================================
  
  async getFechas() {
    try {
      const response = await api.get('/api/fechas');
      return response.data;
    } catch (error) {
      toast.error('❌ Error al cargar fechas');
      throw error;
    }
  },

  // ====================================
  // ADMIN ENDPOINTS (requieren autenticación admin)
  // ====================================
  
  async getAdminStats() {
    try {
      toast.loading('Cargando estadísticas...', { id: 'admin-stats' });
      const response = await api.get('/api/admin/stats');
      toast.success('📊 Estadísticas cargadas', { id: 'admin-stats' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al cargar estadísticas', { id: 'admin-stats' });
      throw error;
    }
  },

  async getAdminUsers() {
    try {
      toast.loading('Cargando usuarios...', { id: 'admin-users' });
      const response = await api.get('/api/admin/users');
      toast.success('👥 Usuarios cargados', { id: 'admin-users' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al cargar usuarios', { id: 'admin-users' });
      throw error;
    }
  },

  async updateUserRole(userId, role) {
    try {
      toast.loading('Actualizando rol...', { id: `user-role-${userId}` });
      const response = await api.put(`/api/admin/users/${userId}/role`, { role });
      toast.success('✅ Rol actualizado', { id: `user-role-${userId}` });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al actualizar rol', { id: `user-role-${userId}` });
      throw error;
    }
  },

  async deleteUser(userId) {
    try {
      toast.loading('Eliminando usuario...', { id: `user-delete-${userId}` });
      const response = await api.delete(`/api/admin/users/${userId}`);
      toast.success('🗑️ Usuario eliminado', { id: `user-delete-${userId}` });
      return response.data;
    } catch (error) {
      toast.error('❌ Error al eliminar usuario', { id: `user-delete-${userId}` });
      throw error;
    }
  },

  // ====================================
  // ESTADÍSTICAS
  // ====================================
  
  async getEstadisticas() {
    try {
      toast.loading('Calculando estadísticas...', { id: 'stats' });
      const response = await api.get('/api/stats');
      toast.success('📊 Estadísticas actualizadas', { id: 'stats' });
      return response.data;
    } catch (error) {
      toast.error('❌ Error en estadísticas', { id: 'stats' });
      throw error;
    }
  },

  // ====================================
  // UTILIDADES
  // ====================================
  
  async checkApiStatus() {
    try {
      const response = await api.get('/');
      return {
        online: true,
        message: response.data.message,
        version: response.data.version
      };
    } catch (error) {
      return {
        online: false,
        message: 'API no disponible',
        error: error.message
      };
    }
  },

  // Función helper para verificar si el usuario está autenticado
  isAuthenticated() {
    return !!localStorage.getItem('token');
  },

  // Función helper para obtener info del token
  getTokenInfo() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    try {
      // En un sistema real, aquí decodificarías el JWT
      // Por simplicidad, solo verificamos que existe
      return { token, valid: true };
    } catch (error) {
      return null;
    }
  }
};

export default apiService;