 
/* ============================================
   Sección 03: Tipografía
   ============================================ */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function TypographySection() {
  return (
    <SectionWrapper id="typography" number="03" title="Tipografía"
      subtitle="Textos y display" icon="✍️" variant="secondary">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Typography.jsx" language="jsx"
            code={`// Bootstrap incluye clases para tipografía
// En react-bootstrap se usan como className

// Display headings (títulos grandes)
<h1 className="display-1">Display 1</h1>
<h1 className="display-4">Display 4</h1>

// Headings normales
<h1>h1 heading</h1>
<h2>h2 heading</h2>

// Lead paragraph (destacado)
<p className="lead">Texto destacado más grande</p>

// Pesos
<p className="fw-bold">Negrita</p>
<p className="fw-light">Ligera</p>
<p className="fst-italic">Cursiva</p>

// Alineación
<p className="text-start">Izquierda</p>
<p className="text-center">Centro</p>
<p className="text-end">Derecha</p>

// Colores de texto
<p className="text-primary">Primary</p>
<p className="text-success">Success</p>
<p className="text-danger">Danger</p>
<p className="text-muted">Muted (gris)</p>

// Tamaños de fuente
<p className="fs-1">fs-1 (más grande)</p>
<p className="fs-6">fs-6 (más pequeño)</p>

// Truncar texto
<p className="text-truncate" style={{maxWidth: 200}}>
  Texto muy largo que se corta...
</p>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Display headings">
            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <p key={n} className={`display-${n} mb-1`} style={{ lineHeight: 1.2 }}>
                  Display {n}
                </p>
              ))}
            </div>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Colores de texto">
              <div className="d-flex flex-column gap-1">
                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'muted'].map(c => (
                  <span key={c} className={`text-${c} fw-medium`}>
                    text-{c}: The quick brown fox jumps over the lazy dog
                  </span>
                ))}
              </div>
            </LiveDemo>
          </div>

          <div className="mt-4">
            <LiveDemo title="Font sizes y weights">
              <Row className="g-2">
                <Col xs={6}>
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <p key={n} className={`fs-${n} mb-1`}>fs-{n}</p>
                  ))}
                </Col>
                <Col xs={6}>
                  {[
                    { cls: 'fw-bold', label: 'fw-bold' },
                    { cls: 'fw-semibold', label: 'fw-semibold' },
                    { cls: 'fw-normal', label: 'fw-normal' },
                    { cls: 'fw-light', label: 'fw-light' },
                    { cls: 'fst-italic', label: 'fst-italic' },
                    { cls: 'text-decoration-underline', label: 'underline' },
                  ].map(w => (
                    <p key={w.cls} className={`${w.cls} mb-1`}>{w.label}</p>
                  ))}
                </Col>
              </Row>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}