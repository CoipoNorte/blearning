 
/* ============================================
   Sección 12: ProgressBar y Spinners
   ============================================ */
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function ProgressSection() {
  const [progress, setProgress] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    if (progress >= 100) { setRunning(false); return }
    const timer = setTimeout(() => setProgress(p => Math.min(p + 2, 100)), 50)
    return () => clearTimeout(timer)
  }, [progress, running])

  const startProgress = () => { setProgress(0); setRunning(true) }

  return (
    <SectionWrapper id="progress" number="12" title="Progress y Spinners"
      subtitle="Indicadores de carga" icon="⏳" variant="success">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Progress.jsx" language="jsx"
            code={`import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';

// ProgressBar básico
<ProgressBar now={60} />

// Con label
<ProgressBar now={75} label="75%" />

// Con variante de color
<ProgressBar variant="success" now={40} />

// Striped (rayas)
<ProgressBar striped now={50} />

// Animated (rayas animadas)
<ProgressBar animated now={60} />

// Stacked (múltiples barras)
<ProgressBar>
  <ProgressBar variant="success" now={35} />
  <ProgressBar variant="warning" now={20} />
  <ProgressBar variant="danger" now={10} />
</ProgressBar>

// SPINNERS
<Spinner animation="border" />
<Spinner animation="grow" />

// Con tamaño y color
<Spinner animation="border" size="sm" />
<Spinner animation="border" variant="primary" />

// Dentro de botón
<Button disabled>
  <Spinner size="sm" className="me-2" />
  Cargando...
</Button>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="ProgressBar">
            <div className="d-flex flex-column gap-3">
              <div>
                <small className="text-muted">Básico:</small>
                <ProgressBar now={40} />
              </div>
              <div>
                <small className="text-muted">Con label:</small>
                <ProgressBar now={75} label="75%" />
              </div>
              <div>
                <small className="text-muted">Variantes:</small>
                <ProgressBar variant="success" now={25} className="mb-1" />
                <ProgressBar variant="info" now={50} className="mb-1" />
                <ProgressBar variant="warning" now={75} className="mb-1" />
                <ProgressBar variant="danger" now={100} />
              </div>
              <div>
                <small className="text-muted">Animated striped:</small>
                <ProgressBar animated striped now={60} />
              </div>
              <div>
                <small className="text-muted">Stacked:</small>
                <ProgressBar>
                  <ProgressBar variant="success" now={35} key={1} label="35%" />
                  <ProgressBar variant="warning" now={20} key={2} label="20%" />
                  <ProgressBar variant="danger" now={10} key={3} label="10%" />
                </ProgressBar>
              </div>
            </div>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Progress animado + Spinners">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small className="text-muted">Progreso: {progress}%</small>
                  <Button size="sm" variant="primary" onClick={startProgress}
                    disabled={running}>
                    {running ? 'Cargando...' : 'Iniciar'}
                  </Button>
                </div>
                <ProgressBar now={progress} animated={running}
                  variant={progress === 100 ? 'success' : 'primary'}
                  label={progress === 100 ? '✓ Completo' : ''} />
              </div>
              <hr />
              <p className="small text-muted mb-2">Spinners:</p>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <Spinner animation="border" variant="primary" size="sm" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="grow" variant="danger" size="sm" />
                <Spinner animation="grow" variant="warning" />
                <Button variant="primary" size="sm" disabled>
                  <Spinner size="sm" className="me-2" animation="border" />
                  Cargando...
                </Button>
              </div>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}