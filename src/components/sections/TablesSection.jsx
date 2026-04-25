 
/* ============================================
   Sección 10: Tables
   ============================================ */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

const users = [
  { id: 1, name: 'Ana García', role: 'Frontend', status: 'Activo' },
  { id: 2, name: 'Carlos López', role: 'Backend', status: 'Activo' },
  { id: 3, name: 'María Ruiz', role: 'UX Design', status: 'Inactivo' },
  { id: 4, name: 'Pedro Sánchez', role: 'DevOps', status: 'Activo' },
]

export default function TablesSection() {
  return (
    <SectionWrapper id="tables" number="10" title="Tables"
      subtitle="Tablas de datos" icon="📊" variant="dark">
      <Row className="g-4">
        <Col lg={6}>
          <CodeBlock title="Tables.jsx" language="jsx"
            code={`import Table from 'react-bootstrap/Table';

// Table básica
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Rol</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ana García</td>
      <td>Frontend</td>
    </tr>
  </tbody>
</Table>

// Props de Table:
// striped     → filas alternas con color
// bordered    → bordes visibles
// hover       → resaltar al pasar mouse
// responsive  → scroll horizontal en móvil
// size="sm"   → tabla compacta
// variant="dark" → tema oscuro

// Table responsive
<Table responsive>
  {/* Se hace scrollable en móvil */}
</Table>

// Renderizar datos dinámicos
<tbody>
  {users.map(user => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.role}</td>
    </tr>
  ))}
</tbody>`} />
        </Col>

        <Col lg={6}>
          <LiveDemo title="Tabla striped + hover">
            <Table striped hover responsive size="sm" className="mb-0">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Rol</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td className="text-muted">{u.id}</td>
                    <td className="fw-medium">{u.name}</td>
                    <td className="text-muted">{u.role}</td>
                    <td>
                      <Badge bg={u.status === 'Activo' ? 'success' : 'secondary'} pill>
                        {u.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </LiveDemo>

          <div className="mt-4">
            <LiveDemo title="Tabla con colores en filas">
              <Table bordered size="sm" className="mb-0">
                <tbody>
                  {['table-primary', 'table-success', 'table-danger', 'table-warning', 'table-info', 'table-light', 'table-dark'].map(cls => (
                    <tr key={cls} className={cls}>
                      <td className="code-font small">{cls}</td>
                      <td className="small">Fila con color</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </LiveDemo>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}