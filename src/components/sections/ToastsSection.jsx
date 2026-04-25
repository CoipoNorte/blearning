 
/* ============================================
   Sección 13: Toasts y Offcanvas
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function ToastsSection() {
  const [showToast, setShowToast] = useState(false)
  const [showOC, setShowOC] = useState(false)

  return (
    <SectionWrapper id="toasts" number="13" title="Toasts y Offcanvas"
      subtitle="Notificaciones y panels" icon="💬" variant="info">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Toasts.jsx" language="jsx"
            code={`import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Offcanvas from 'react-bootstrap/Offcanvas';

// TOAST: notificación pequeña
const [show, setShow] = useState(false);

<Button onClick={() => setShow(true)}>
  Mostrar Toast
</Button>

<ToastContainer position="top-end" className="p-3">
  <Toast show={show} onClose={() => setShow(false)}
    delay={3000} autohide>
    <Toast.Header>
      <strong className="me-auto">Notificación</strong>
      <small>ahora</small>
    </Toast.Header>
    <Toast.Body>¡Mensaje enviado!</Toast.Body>
  </Toast>
</ToastContainer>

// OFFCANVAS: panel lateral
const [showOC, setShowOC] = useState(false);

<Button onClick={() => setShowOC(true)}>Abrir</Button>

<Offcanvas show={showOC} onHide={() => setShowOC(false)}
  placement="end">  {/* start | end | top | bottom */}
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Menú</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    Contenido del panel lateral.
  </Offcanvas.Body>
</Offcanvas>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Toast y Offcanvas">
            <div className="d-flex gap-2 flex-wrap">
              <Button variant="info" onClick={() => setShowToast(true)}>
                💬 Mostrar Toast
              </Button>
              <Button variant="dark" onClick={() => setShowOC(true)}>
                📂 Abrir Offcanvas
              </Button>
            </div>
          </LiveDemo>

          {/* Toast */}
          <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
            <Toast show={showToast} onClose={() => setShowToast(false)}
              delay={3000} autohide>
              <Toast.Header>
                <span className="me-2">💬</span>
                <strong className="me-auto">blearning</strong>
                <small className="text-muted">ahora</small>
              </Toast.Header>
              <Toast.Body>¡Este es un toast de React-Bootstrap!</Toast.Body>
            </Toast>
          </ToastContainer>

          {/* Offcanvas */}
          <Offcanvas show={showOC} onHide={() => setShowOC(false)} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>📂 Panel lateral</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="text-muted small">
                El Offcanvas es perfecto para menús, filtros o paneles de configuración.
              </p>
              <ListGroup variant="flush">
                {['Inicio', 'Perfil', 'Configuración', 'Ayuda', 'Cerrar sesión'].map(item => (
                  <ListGroup.Item key={item} action onClick={() => setShowOC(false)}>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </SectionWrapper>
  )
}