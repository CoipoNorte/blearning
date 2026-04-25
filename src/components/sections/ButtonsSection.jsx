 
/* ============================================
   Sección 04: Buttons
   
   <Button> es el componente más básico.
   variant controla el color/estilo.
   size controla el tamaño.
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Spinner from 'react-bootstrap/Spinner'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function ButtonsSection() {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const handleLoad = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <SectionWrapper id="buttons" number="04" title="Buttons"
      subtitle="Botones y variantes" icon="🔘" variant="primary">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Buttons.jsx" language="jsx"
            code={`import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// VARIANTES: colores de Bootstrap
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="dark">Dark</Button>
<Button variant="light">Light</Button>

// OUTLINE: solo borde, sin relleno
<Button variant="outline-primary">Outline</Button>
<Button variant="outline-danger">Outline</Button>

// TAMAÑOS
<Button size="lg">Grande</Button>
<Button size="sm">Pequeño</Button>

// ESTADOS
<Button disabled>Deshabilitado</Button>
<Button active>Activo</Button>

// CON SPINNER (loading)
<Button disabled>
  <Spinner size="sm" className="me-2" />
  Cargando...
</Button>

// COMO LINK
<Button variant="link">Parece un link</Button>

// GRUPO DE BOTONES
<ButtonGroup>
  <Button variant="primary">Izq</Button>
  <Button variant="primary">Centro</Button>
  <Button variant="primary">Der</Button>
</ButtonGroup>

// CON EVENTO onClick
<Button onClick={() => setCount(c => c + 1)}>
  Clicks: {count}
</Button>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Variantes">
            <div className="d-flex flex-wrap gap-2 mb-3">
              {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'].map(v => (
                <Button key={v} variant={v} size="sm">{v}</Button>
              ))}
            </div>
            <p className="small text-muted mt-3 mb-2">Outline:</p>
            <div className="d-flex flex-wrap gap-2">
              {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map(v => (
                <Button key={v} variant={`outline-${v}`} size="sm">outline-{v}</Button>
              ))}
            </div>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Tamaños y estados">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <Button size="lg" variant="primary">size=&quot;lg&quot;</Button>
                <Button variant="primary">default</Button>
                <Button size="sm" variant="primary">size=&quot;sm&quot;</Button>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Button variant="primary" disabled>disabled</Button>
                <Button variant="link">variant=&quot;link&quot;</Button>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <Button variant="primary" onClick={handleLoad} disabled={loading}>
                  {loading && <Spinner size="sm" className="me-2" />}
                  {loading ? 'Cargando...' : 'Click para loading'}
                </Button>
                <Button variant="success" onClick={() => setCount(c => c + 1)}>
                  Clicks: {count}
                </Button>
              </div>
            </LiveDemo>
          </div>

          <div className="mt-4">
            <LiveDemo title="ButtonGroup">
              <ButtonGroup className="mb-2">
                <Button variant="primary">Izq</Button>
                <Button variant="primary">Centro</Button>
                <Button variant="primary">Der</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup size="sm">
                <Button variant="outline-secondary">Día</Button>
                <Button variant="outline-secondary">Semana</Button>
                <Button variant="outline-secondary">Mes</Button>
                <Button variant="outline-secondary">Año</Button>
              </ButtonGroup>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}