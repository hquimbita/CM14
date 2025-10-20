// src/App.jsx - Copa Maracaná 14ED React App con autenticación
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Home from './pages/Home';
import Equipos from './pages/Equipos';
import Partidos from './pages/Partidos';
import Posiciones from './pages/Posiciones';
import FaseFinal from './pages/FaseFinal';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Header fijo con navegación y autenticación */}
          <Header />
          
          {/* Contenido principal */}
          <main className="main-content">
            <div className="container">
              <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/equipos" element={<Equipos />} />
                <Route path="/partidos" element={<Partidos />} />
                <Route path="/posiciones" element={<Posiciones />} />
                <Route path="/fase-final" element={<FaseFinal />} />
                {/* Rutas de autenticación */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Rutas protegidas - Solo admins */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <AdminPanel />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </div>
          </main>

          {/* Sistema de notificaciones mejorado para autenticación */}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                color: '#f0f0f0',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '500',
              },
              success: {
                iconTheme: {
                  primary: '#00dd4c',
                  secondary: '#fff',
                },
                style: {
                  border: '1px solid rgba(0, 221, 76, 0.3)',
                  background: 'rgba(0, 221, 76, 0.1)',
                }
              },
              error: {
                iconTheme: {
                  primary: '#dc3545',
                  secondary: '#fff',
                },
                style: {
                  border: '1px solid rgba(220, 53, 69, 0.3)',
                  background: 'rgba(220, 53, 69, 0.1)',
                }
              },
              loading: {
                iconTheme: {
                  primary: '#0066cc',
                  secondary: '#fff',
                },
                style: {
                  border: '1px solid rgba(0, 102, 204, 0.3)',
                  background: 'rgba(0, 102, 204, 0.1)',
                }
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;