 
/* ============================================
   Sección 01: Setup / Instalación
   
   React-Bootstrap = componentes React que
   envuelven Bootstrap 5. No necesitas jQuery.
   
   Cada componente de Bootstrap tiene su
   equivalente en React:
   <button class="btn btn-primary"> 
   →  <Button variant="primary">
   ============================================ */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function SetupSection() {
  return (
    <SectionWrapper id="setup" number="01" title="Setup"
      subtitle="Instalación" icon="🚀" variant="primary">
      <Row className="g-4">
        <Col lg={6}>
          <div className="card border-0 shadow-sm p-4 mb-4">
            <h5 className="fw-bold">¿Por qué React-Bootstrap?</h5>
            <p className="text-muted small mb-3">
              React-Bootstrap reemplaza el JavaScript de Bootstrap (jQuery)
              con <strong>componentes React puros</strong>. Cada componente
              es controlable con props y estado.
            </p>
            <div className="row g-2">
              <div className="col-6">
                <div className="bg-danger bg-opacity-10 rounded-3 p-3 border border-danger border-opacity-25">
                  <small className="fw-bold text-danger">❌ Bootstrap puro</small>
                  <ul className="small text-muted mb-0 mt-1 ps-3">
                    <li>Necesita jQuery</li>
                    <li>Manipula el DOM</li>
                    <li>Clases CSS manuales</li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-success bg-opacity-10 rounded-3 p-3 border border-success border-opacity-25">
                  <small className="fw-bold text-success">✅ React-Bootstrap</small>
                  <ul className="small text-muted mb-0 mt-1 ps-3">
                    <li>Sin jQuery</li>
                    <li>Componentes React</li>
                    <li>Props y estado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock title="Terminal" language="bash"
            code={`# 1. Crear proyecto con Vite
npm create vite@latest mi-app -- --template react
cd mi-app

# 2. Instalar react-bootstrap y bootstrap
npm install react-bootstrap bootstrap

# 3. Listo! Solo importar el CSS`} />
        </Col>

        <Col lg={6}>
          <CodeBlock title="main.jsx" language="jsx"
            code={`// PASO CLAVE: importar el CSS de Bootstrap
// Sin esto no hay estilos
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`} />

          <div className="mt-4">
            <CodeBlock title="App.jsx" language="jsx"
              code={`// Importar componentes individualmente
// (mejor para tree-shaking / bundle size)
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// ✅ CORRECTO: importar uno por uno
import Button from 'react-bootstrap/Button';

// ❌ EVITAR: importar todo el paquete
import { Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="py-4">
      <h1>Hola React-Bootstrap!</h1>
      <Button variant="primary">
        Click me
      </Button>
    </Container>
  );
}`} />
          </div>

          <Alert variant="info" className="mt-4 border-0 shadow-sm">
            <Alert.Heading className="fs-6 fw-bold">💡 Tip: Importaciones</Alert.Heading>
            <p className="small mb-0">
              Siempre importa desde <code>react-bootstrap/Componente</code> en vez de 
              desestructurar desde <code>react-bootstrap</code>. Así solo cargas lo que usas.
            </p>
          </Alert>
        </Col>
      </Row>
    </SectionWrapper>
  )
}