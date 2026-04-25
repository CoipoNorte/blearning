 
/* ============================================
   Sección 06: Forms
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function FormsSection() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'dev', agree: false })
  const [validated, setValidated] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidated(true)
  }

  return (
    <SectionWrapper id="forms" number="06" title="Formularios"
      subtitle="Inputs y controles" icon="📝" variant="warning">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Forms.jsx" language="jsx"
            code={`import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// Form básico controlado
function MiForm() {
  const [email, setEmail] = useState('');

  return (
    <Form onSubmit={handleSubmit}>
      {/* Input con label */}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          Texto de ayuda debajo del input.
        </Form.Text>
      </Form.Group>

      {/* Select */}
      <Form.Select>
        <option>Elige una opción</option>
        <option value="1">Opción 1</option>
      </Form.Select>

      {/* Checkbox */}
      <Form.Check type="checkbox" label="Acepto" />

      {/* Radio */}
      <Form.Check type="radio" name="tipo"
        label="Opción A" />

      {/* Switch */}
      <Form.Check type="switch" label="Activar" />

      {/* Floating Label (label animado) */}
      <FloatingLabel label="Email" className="mb-3">
        <Form.Control type="email" placeholder="email" />
      </FloatingLabel>

      {/* InputGroup (input con addons) */}
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="username" />
      </InputGroup>

      {/* Textarea */}
      <Form.Control as="textarea" rows={3} />

      <Button type="submit">Enviar</Button>
    </Form>
  );
}`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Formulario completo">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-medium">Nombre</Form.Label>
                <Form.Control name="name" value={form.name} onChange={handleChange}
                  placeholder="Tu nombre" required />
                <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small fw-medium">Email</Form.Label>
                <Form.Control name="email" type="email" value={form.email}
                  onChange={handleChange} placeholder="tu@email.com" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small fw-medium">Password</Form.Label>
                <Form.Control name="password" type="password" value={form.password}
                  onChange={handleChange} placeholder="••••••" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small fw-medium">Rol</Form.Label>
                <Form.Select name="role" value={form.role} onChange={handleChange}>
                  <option value="dev">Developer</option>
                  <option value="design">Designer</option>
                  <option value="pm">Product Manager</option>
                </Form.Select>
              </Form.Group>

              <Form.Check name="agree" type="switch" className="mb-3"
                label="Acepto los términos" checked={form.agree} onChange={handleChange} />

              <Button type="submit" disabled={!form.agree} className="w-100">
                {validated ? '✓ Enviado' : 'Registrarse'}
              </Button>

              <div className="bg-light rounded-2 p-2 mt-3">
                <code className="small text-muted" style={{ whiteSpace: 'pre' }}>
                  {JSON.stringify(form, null, 2)}
                </code>
              </div>
            </Form>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="FloatingLabel + InputGroup">
              <FloatingLabel label="Email" className="mb-3">
                <Form.Control type="email" placeholder="email@ejemplo.com" />
              </FloatingLabel>
              <InputGroup className="mb-3">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control placeholder="username" />
              </InputGroup>
              <InputGroup>
                <Form.Control placeholder="Monto" />
                <InputGroup.Text>.00</InputGroup.Text>
                <Button variant="success">Pagar</Button>
              </InputGroup>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}