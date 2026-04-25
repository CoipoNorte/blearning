 
/* ============================================
   Sección 08: Modals
   
   En react-bootstrap los modales son CONTROLADOS:
   show={boolean} para mostrar/ocultar
   onHide={fn} para cerrar
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function ModalsSection() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  return (
    <SectionWrapper id="modals" number="08" title="Modals"
      subtitle="Ventanas emergentes" icon="🪟" variant="danger">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Modals.jsx" language="jsx"
            code={`import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MiModal() {
  // Estado que controla si el modal está abierto
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>
        Abrir Modal
      </Button>

      <Modal
        show={show}             // Controla visibilidad
        onHide={() => setShow(false)}  // Al cerrar
        centered               // Centrado vertical
        size="lg"              // sm | lg | xl
      >
        <Modal.Header closeButton>
          <Modal.Title>Mi Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Contenido del modal.</p>
          <p>Puede tener forms, imágenes, etc.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"
            onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary"
            onClick={() => setShow(false)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// Props útiles del Modal:
// size="sm|lg|xl"  → tamaño
// centered         → centrado vertical
// fullscreen       → pantalla completa
// scrollable       → contenido scrolleable
// backdrop="static" → no cerrar al click fuera`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Modales (haz click)">
            <div className="d-flex flex-wrap gap-2">
              <Button variant="primary" onClick={() => setShow1(true)}>
                🪟 Modal básico
              </Button>
              <Button variant="success" onClick={() => setShow2(true)}>
                📝 Modal con form
              </Button>
              <Button variant="danger" onClick={() => setShow3(true)}>
                ⚠️ Modal de confirmación
              </Button>
            </div>
          </LiveDemo>

          {/* Modal 1: Básico */}
          <Modal show={show1} onHide={() => setShow1(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>🪟 Modal Básico</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Este es un modal controlado con <code>show</code> y <code>onHide</code>.</p>
              <p className="text-muted small">Es un componente de React puro, sin jQuery.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow1(false)}>Cerrar</Button>
              <Button variant="primary" onClick={() => setShow1(false)}>Entendido</Button>
            </Modal.Footer>
          </Modal>

          {/* Modal 2: Con formulario */}
          <Modal show={show2} onHide={() => setShow2(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>📝 Nuevo Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="small">Nombre</Form.Label>
                  <Form.Control placeholder="Nombre del item" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small">Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Describe el item..." />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="small">Prioridad</Form.Label>
                  <Form.Select>
                    <option>Baja</option>
                    <option>Media</option>
                    <option>Alta</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow2(false)}>Cancelar</Button>
              <Button variant="success" onClick={() => setShow2(false)}>Crear</Button>
            </Modal.Footer>
          </Modal>

          {/* Modal 3: Confirmación */}
          <Modal show={show3} onHide={() => setShow3(false)} centered size="sm">
            <Modal.Body className="text-center py-4">
              <div className="fs-1 mb-3">⚠️</div>
              <h5>¿Estás seguro?</h5>
              <p className="text-muted small">Esta acción no se puede deshacer.</p>
              <div className="d-flex gap-2 justify-content-center mt-3">
                <Button variant="secondary" size="sm" onClick={() => setShow3(false)}>Cancelar</Button>
                <Button variant="danger" size="sm" onClick={() => setShow3(false)}>Eliminar</Button>
              </div>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </SectionWrapper>
  )
}