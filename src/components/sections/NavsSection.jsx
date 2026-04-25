 
/* ============================================
   Sección 07: Navs y Tabs
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pagination from 'react-bootstrap/Pagination'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function NavsSection() {
  const [activePage, setActivePage] = useState(2)

  return (
    <SectionWrapper id="navs" number="07" title="Navs y Tabs"
      subtitle="Navegación interna" icon="🧭" variant="info">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Navs.jsx" language="jsx"
            code={`import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination';

// Nav básico
<Nav variant="tabs" defaultActiveKey="home">
  <Nav.Item>
    <Nav.Link eventKey="home">Inicio</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="profile">Perfil</Nav.Link>
  </Nav.Item>
</Nav>

// Tabs con contenido
<Tab.Container defaultActiveKey="first">
  <Nav variant="tabs">
    <Nav.Item>
      <Nav.Link eventKey="first">Tab 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="second">Tab 2</Nav.Link>
    </Nav.Item>
  </Nav>
  <Tab.Content className="p-3">
    <Tab.Pane eventKey="first">
      Contenido del tab 1
    </Tab.Pane>
    <Tab.Pane eventKey="second">
      Contenido del tab 2
    </Tab.Pane>
  </Tab.Content>
</Tab.Container>

// Breadcrumb (migas de pan)
<Breadcrumb>
  <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Sección</Breadcrumb.Item>
  <Breadcrumb.Item active>Actual</Breadcrumb.Item>
</Breadcrumb>

// Pagination
<Pagination>
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Next />
</Pagination>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Tabs con contenido">
            <Tab.Container defaultActiveKey="react">
              <Nav variant="tabs" className="mb-3">
                <Nav.Item><Nav.Link eventKey="react">⚛️ React</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="bootstrap">🅱️ Bootstrap</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="vite">⚡ Vite</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="react">
                  <p className="text-muted small">React es una biblioteca para construir interfaces de usuario con componentes.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="bootstrap">
                  <p className="text-muted small">Bootstrap es el framework CSS más popular para diseño responsive.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="vite">
                  <p className="text-muted small">Vite es un build tool ultra rápido para desarrollo frontend.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Nav pills">
              <Nav variant="pills" defaultActiveKey="home" className="mb-3">
                <Nav.Item><Nav.Link eventKey="home">Inicio</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="explore">Explorar</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="settings">Config</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link></Nav.Item>
              </Nav>
            </LiveDemo>
          </div>

          <div className="mt-4">
            <LiveDemo title="Breadcrumb y Pagination">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Cursos</Breadcrumb.Item>
                <Breadcrumb.Item active>React-Bootstrap</Breadcrumb.Item>
              </Breadcrumb>
              <Pagination size="sm">
                <Pagination.Prev onClick={() => setActivePage(p => Math.max(1, p - 1))} />
                {[1, 2, 3, 4, 5].map(n => (
                  <Pagination.Item key={n} active={n === activePage}
                    onClick={() => setActivePage(n)}>{n}</Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setActivePage(p => Math.min(5, p + 1))} />
              </Pagination>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}