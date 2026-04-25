 
/* ============================================
   Sección 05: Cards
   ============================================ */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function CardsSection() {
  return (
    <SectionWrapper id="cards" number="05" title="Cards"
      subtitle="Tarjetas de contenido" icon="🃏" variant="success">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Cards.jsx" language="jsx"
            code={`import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

// Card básica
<Card>
  <Card.Body>
    <Card.Title>Título</Card.Title>
    <Card.Text>Contenido de la card.</Card.Text>
    <Button variant="primary">Acción</Button>
  </Card.Body>
</Card>

// Card con header y footer
<Card>
  <Card.Header>Header</Card.Header>
  <Card.Body>
    <Card.Title>Título</Card.Title>
    <Card.Text>Texto descriptivo.</Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">
    Hace 2 días
  </Card.Footer>
</Card>

// Card con imagen
<Card>
  <Card.Img variant="top" src="imagen.jpg" />
  <Card.Body>
    <Card.Title>Con imagen</Card.Title>
  </Card.Body>
</Card>

// Card con ListGroup
<Card>
  <Card.Header>Menú</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Item 1</ListGroup.Item>
    <ListGroup.Item>Item 2</ListGroup.Item>
    <ListGroup.Item>Item 3</ListGroup.Item>
  </ListGroup>
</Card>

// Card con estilos
<Card bg="dark" text="white" border="primary">
  <Card.Body>Dark card con borde</Card.Body>
</Card>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Cards en acción">
            <Row className="g-3">
              <Col sm={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🚀</span>
                      <Card.Title className="mb-0 fs-6">Rendimiento</Card.Title>
                    </div>
                    <Card.Text className="small text-muted">
                      React-Bootstrap es rápido y sin jQuery.
                    </Card.Text>
                    <Button variant="primary" size="sm">Ver más</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fs-4">🎨</span>
                      <Card.Title className="mb-0 fs-6">Diseño</Card.Title>
                    </div>
                    <Card.Text className="small text-muted">
                      Componentes profesionales listos para usar.
                    </Card.Text>
                    <Button variant="outline-primary" size="sm">Explorar</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Card con header, list y footer">
              <Card className="shadow-sm border-0">
                <Card.Header className="bg-success text-white fw-semibold">
                  📋 Lista de tareas
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Aprender React-Bootstrap
                    <Badge bg="success" pill>✓</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Crear proyecto
                    <Badge bg="warning" text="dark" pill>En progreso</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Desplegar
                    <Badge bg="secondary" pill>Pendiente</Badge>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Footer className="text-muted small">
                  Última actualización: hoy
                </Card.Footer>
              </Card>
            </LiveDemo>
          </div>

          <div className="mt-4">
            <LiveDemo title="Card con colores">
              <Row className="g-2">
                {[
                  { bg: 'primary', text: 'white' },
                  { bg: 'success', text: 'white' },
                  { bg: 'danger', text: 'white' },
                  { bg: 'warning', text: 'dark' },
                ].map(c => (
                  <Col xs={6} key={c.bg}>
                    <Card bg={c.bg} text={c.text} className="border-0">
                      <Card.Body className="py-2">
                        <Card.Title className="fs-6 mb-0">bg=&quot;{c.bg}&quot;</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}