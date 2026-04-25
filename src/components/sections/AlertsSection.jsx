 
/* ============================================
   Sección 09: Alerts y Badges
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function AlertsSection() {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <SectionWrapper id="alerts" number="09" title="Alerts y Badges"
      subtitle="Notificaciones y etiquetas" icon="🔔" variant="warning">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Alerts.jsx" language="jsx"
            code={`import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

// Alert básico
<Alert variant="success">
  ¡Operación exitosa!
</Alert>

// Alert con título y contenido
<Alert variant="info">
  <Alert.Heading>Información</Alert.Heading>
  <p>Contenido detallado aquí.</p>
  <hr />
  <p className="mb-0">Texto adicional.</p>
</Alert>

// Alert dismissible (cerrable)
const [show, setShow] = useState(true);
{show && (
  <Alert variant="warning" dismissible
    onClose={() => setShow(false)}>
    ¡Puedes cerrar esta alerta!
  </Alert>
)}

// BADGES (etiquetas)
<Badge bg="primary">Primary</Badge>
<Badge bg="success">Success</Badge>
<Badge bg="danger">Danger</Badge>

// Badge pill (redondo)
<Badge bg="info" pill>99+</Badge>

// Badge dentro de botón
<Button>
  Notificaciones <Badge bg="danger">4</Badge>
</Button>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Alerts">
            <div className="d-flex flex-column gap-2">
              {['primary', 'success', 'danger', 'warning', 'info'].map(v => (
                <Alert key={v} variant={v} className="mb-0 py-2">
                  <small>Alert <strong>variant=&quot;{v}&quot;</strong></small>
                </Alert>
              ))}
            </div>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Alert dismissible">
              {showAlert ? (
                <Alert variant="warning" dismissible onClose={() => setShowAlert(false)}>
                  <Alert.Heading className="fs-6">⚠️ Atención</Alert.Heading>
                  <p className="small mb-0">Esta alerta se puede cerrar con la X.</p>
                </Alert>
              ) : (
                <Button size="sm" variant="outline-warning"
                  onClick={() => setShowAlert(true)}>
                  Mostrar alerta de nuevo
                </Button>
              )}
            </LiveDemo>
          </div>

          <div className="mt-4">
            <LiveDemo title="Badges">
              <div className="d-flex flex-wrap gap-2 mb-3">
                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map(v => (
                  <Badge key={v} bg={v}>{v}</Badge>
                ))}
              </div>
              <p className="small text-muted mb-2">Pills (redondeados):</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {['primary', 'success', 'danger', 'info'].map(v => (
                  <Badge key={v} bg={v} pill>99+</Badge>
                ))}
              </div>
              <p className="small text-muted mb-2">Dentro de botón:</p>
              <Button variant="primary">
                Mensajes <Badge bg="danger">4</Badge>
              </Button>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}