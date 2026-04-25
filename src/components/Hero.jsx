 
/* ============================================
   Hero.jsx - Sección principal
   
   Estilo Bootstrap: limpio, profesional.
   Usa Container y Row/Col de react-bootstrap.
   ============================================ */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export default function Hero() {
  return (
    <section className="bg-primary text-white py-5" style={{ paddingTop: '120px' }}>
      <Container className="py-5">
        <Row className="align-items-center justify-content-center text-center">
          <Col lg={8}>
            <Badge bg="light" text="primary" className="mb-3 px-3 py-2 rounded-pill fw-medium">
              Guía Interactiva 2025
            </Badge>
            <h1 className="display-3 fw-bold mb-3">
              Aprende{' '}
              <span className="text-warning">React-Bootstrap</span>
            </h1>
            <p className="lead text-white-50 mb-4 mx-auto" style={{ maxWidth: 600 }}>
              Domina los componentes de Bootstrap 5 para React con
              ejemplos interactivos y código copiable.
            </p>
            <p className="text-white-50 mb-4 small">
              14 secciones • Demos en vivo • Componentes reales
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button variant="warning" size="lg"
                onClick={() => document.getElementById('setup')?.scrollIntoView({ behavior: 'smooth' })}
                className="fw-semibold px-4">
                🚀 Comenzar
              </Button>
              <Button variant="outline-light" size="lg"
                href="https://react-bootstrap.netlify.app/" target="_blank"
                className="px-4">
                📖 Docs Oficiales
              </Button>
            </div>

            {/* Stats */}
            <Row className="mt-5 g-4 justify-content-center">
              {[
                { value: '14', label: 'Temas' },
                { value: '40+', label: 'Componentes' },
                { value: '100%', label: 'Interactivo' },
              ].map(s => (
                <Col xs={4} key={s.label}>
                  <h3 className="fw-bold text-warning mb-0">{s.value}</h3>
                  <small className="text-white-50">{s.label}</small>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}