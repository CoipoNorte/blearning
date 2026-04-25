 
/* ============================================
   Sección 02: Grid System
   
   Bootstrap usa un sistema de 12 columnas.
   En react-bootstrap:
   - Container = contenedor centrado
   - Row       = fila
   - Col       = columna
   
   Col acepta props como xs, sm, md, lg, xl
   para controlar el ancho en cada breakpoint.
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function GridSection() {
  const [cols, setCols] = useState(3)

  return (
    <SectionWrapper id="grid" number="02" title="Grid System"
      subtitle="Sistema de 12 columnas" icon="🔲" variant="info">
      <Row className="g-4">
        <Col lg={6}>
          <div className="card border-0 shadow-sm p-4 mb-4">
            <h5 className="fw-bold">Sistema de 12 columnas</h5>
            <p className="text-muted small">
              Cada fila tiene <strong>12 columnas</strong>. 
              Puedes dividirlas como quieras: 6+6, 4+4+4, 3+9, etc.
            </p>
            <div className="table-responsive">
              <table className="table table-sm small mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Prop</th><th>Breakpoint</th><th>Ancho</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>xs</code></td><td>&lt;576px</td><td>Móvil</td></tr>
                  <tr><td><code>sm</code></td><td>≥576px</td><td>Móvil grande</td></tr>
                  <tr><td><code>md</code></td><td>≥768px</td><td>Tablet</td></tr>
                  <tr><td><code>lg</code></td><td>≥992px</td><td>Laptop</td></tr>
                  <tr><td><code>xl</code></td><td>≥1200px</td><td>Desktop</td></tr>
                  <tr><td><code>xxl</code></td><td>≥1400px</td><td>Monitor grande</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <CodeBlock title="Grid.jsx" language="jsx"
            code={`import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MiGrid() {
  return (
    <Container>
      {/* 3 columnas iguales */}
      <Row>
        <Col>1 de 3</Col>
        <Col>2 de 3</Col>
        <Col>3 de 3</Col>
      </Row>

      {/* Columnas con ancho específico */}
      <Row>
        <Col md={8}>Ancho 8/12</Col>
        <Col md={4}>Ancho 4/12</Col>
      </Row>

      {/* Responsive: 1 col móvil, 2 tablet, 3 desktop */}
      <Row>
        <Col xs={12} md={6} lg={4}>Card 1</Col>
        <Col xs={12} md={6} lg={4}>Card 2</Col>
        <Col xs={12} md={6} lg={4}>Card 3</Col>
      </Row>

      {/* Gap entre columnas */}
      <Row className="g-4">
        <Col md={6}>Con gap</Col>
        <Col md={6}>Con gap</Col>
      </Row>
    </Container>
  );
}`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Grid interactivo">
            <Form.Label className="small text-muted">
              Columnas: <strong>{cols}</strong>
            </Form.Label>
            <Form.Range min={1} max={6} value={cols}
              onChange={e => setCols(Number(e.target.value))} className="mb-3" />

            <Row className="g-2">
              {Array.from({ length: cols * 2 }, (_, i) => (
                <Col key={i} xs={12 / cols}>
                  <div className="bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-2 p-2 text-center">
                    <small className="fw-bold text-primary">{i + 1}</small>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="mt-2 bg-light rounded-2 p-2">
              <code className="small text-muted">
                {'<Col xs={'}{ 12 / cols }{'}>'}  (12÷{cols} = {12 / cols} columnas cada una)
              </code>
            </div>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Layout responsive">
              <p className="small text-muted mb-2">xs=12 md=6 lg=4 (redimensiona el navegador):</p>
              <Row className="g-2">
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <Col xs={12} md={6} lg={4} key={n}>
                    <div className="bg-info bg-opacity-10 border border-info border-opacity-25 rounded-2 p-3 text-center">
                      <span className="fw-bold text-info">Col {n}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </LiveDemo>
          </div>

          <div className="mt-4">
            <LiveDemo title="Columnas asimétricas">
              <Row className="g-2">
                <Col md={8}>
                  <div className="bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-2 p-3 text-center">
                    <small className="fw-bold text-primary">md=8 (Main)</small>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="bg-warning bg-opacity-10 border border-warning border-opacity-25 rounded-2 p-3 text-center">
                    <small className="fw-bold text-warning">md=4 (Sidebar)</small>
                  </div>
                </Col>
              </Row>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}