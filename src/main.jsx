/* ============================================
   main.jsx - Punto de entrada
   
   IMPORTANTE: importar Bootstrap CSS aquí
   para que esté disponible en toda la app
   ============================================ */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Importar CSS de Bootstrap (obligatorio)
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. Importar nuestros estilos extra
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)