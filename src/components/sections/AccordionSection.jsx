 
/* ============================================
   Sección 11: Accordion
   ============================================ */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function AccordionSection() {
  return (
    <SectionWrapper id="accordion" number="11" title="Accordion"
      subtitle="Contenido colapsable" icon="🪗" variant="secondary">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Accordion.jsx" language="jsx"
            code={`import Accordion from 'react-bootstrap/Accordion';

// Accordion básico (solo uno abierto a la vez)
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Sección 1</Accordion.Header>
    <Accordion.Body>
      Contenido de la sección 1.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Sección 2</Accordion.Header>
    <Accordion.Body>
      Contenido de la sección 2.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

// alwaysOpen: permite múltiples abiertos
<Accordion defaultActiveKey={['0']} alwaysOpen>
  ...
</Accordion>

// flush: sin bordes externos
<Accordion flush>
  ...
</Accordion>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Accordion básico">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>🚀 ¿Qué es React-Bootstrap?</Accordion.Header>
                <Accordion.Body className="small text-muted">
                  React-Bootstrap reemplaza el JavaScript de Bootstrap con componentes React puros. 
                  No necesitas jQuery ni manipular el DOM manualmente.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>📦 ¿Cómo se instala?</Accordion.Header>
                <Accordion.Body className="small text-muted">
                  Solo necesitas <code>npm install react-bootstrap bootstrap</code> e importar 
                  el CSS de Bootstrap en tu archivo principal.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>🎨 ¿Puedo personalizar los estilos?</Accordion.Header>
                <Accordion.Body className="small text-muted">
                  Sí. Puedes usar las clases CSS de Bootstrap, agregar tus propias clases, 
                  o usar CSS-in-JS. Cada componente acepta className.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Accordion flush + alwaysOpen">
              <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Primer item (abierto)</Accordion.Header>
                  <Accordion.Body className="small text-muted">
                    Con <code>alwaysOpen</code> puedes tener múltiples items abiertos a la vez.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Segundo item</Accordion.Header>
                  <Accordion.Body className="small text-muted">
                    Y <code>flush</code> quita los bordes externos para un look más limpio.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}