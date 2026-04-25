 
/* ============================================
   Sección 14: Componentes Combinados
   
   Aquí juntamos todo lo aprendido para
   crear interfaces reales y funcionales.
   ============================================ */
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'
import SectionWrapper from '../ui/SectionWrapper'
import LiveDemo from '../ui/LiveDemo'

export default function CombinedSection() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React-Bootstrap', done: true },
    { id: 2, text: 'Crear componentes', done: false },
    { id: 3, text: 'Desplegar proyecto', done: false },
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (!newTask.trim()) return
    setTasks(prev => [...prev, { id: Date.now(), text: newTask.trim(), done: false }])
    setNewTask('')
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const doneCount = tasks.filter(t => t.done).length
  const progress = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0

  return (
    <SectionWrapper id="combined" number="14" title="Todo Junto"
      subtitle="Componentes combinados" icon="🧩" variant="primary">
      <Row className="g-4">
        <Col lg={6}>
          {/* Mini App: Todo List */}
          <LiveDemo title="Mini App: Todo List">
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
                <span className="fw-semibold">📋 Mis Tareas</span>
                <Badge bg="light" text="primary" pill>{doneCount}/{tasks.length}</Badge>
              </Card.Header>
              <Card.Body className="p-3">
                <ProgressBar now={progress} className="mb-3" style={{ height: 6 }}
                  variant={progress === 100 ? 'success' : 'primary'} />

                <Form onSubmit={addTask} className="mb-3">
                  <InputGroup size="sm">
                    <Form.Control value={newTask} onChange={e => setNewTask(e.target.value)}
                      placeholder="Nueva tarea..." />
                    <Button type="submit" variant="primary">Agregar</Button>
                  </InputGroup>
                </Form>

                {tasks.length === 0 ? (
                  <Alert variant="light" className="text-center small py-2 mb-0">
                    No hay tareas. ¡Agrega una! ☝️
                  </Alert>
                ) : (
                  <ListGroup variant="flush">
                    {tasks.map(task => (
                      <ListGroup.Item key={task.id}
                        className="d-flex align-items-center gap-2 px-0 py-2 border-bottom">
                        <Form.Check type="checkbox" checked={task.done}
                          onChange={() => toggleTask(task.id)} />
                        <span className={`flex-grow-1 small ${task.done ? 'text-decoration-line-through text-muted' : ''}`}>
                          {task.text}
                        </span>
                        <Button variant="outline-danger" size="sm"
                          className="py-0 px-1 border-0" onClick={() => deleteTask(task.id)}>
                          ✕
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          </LiveDemo>
        </Col>

        <Col lg={6}>
          {/* Perfil de usuario */}
          <LiveDemo title="Card de perfil">
            <Card className="border-0 shadow-sm text-center">
              <div className="bg-primary" style={{ height: 80, borderRadius: '0.5rem 0.5rem 0 0' }} />
              <Card.Body className="pt-0">
                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center border border-4 border-white shadow-sm"
                  style={{ width: 80, height: 80, marginTop: -40, fontSize: 36 }}>
                  👩‍💻
                </div>
                <Card.Title className="mt-2 mb-0">Ana García</Card.Title>
                <small className="text-muted">Frontend Developer</small>
                <div className="d-flex justify-content-center gap-2 my-3">
                  <Badge bg="primary" pill>React</Badge>
                  <Badge bg="info" pill>Bootstrap</Badge>
                  <Badge bg="success" pill>TypeScript</Badge>
                </div>
                <Row className="text-center border-top pt-3">
                  <Col><h6 className="mb-0">142</h6><small className="text-muted">Posts</small></Col>
                  <Col><h6 className="mb-0">1.2K</h6><small className="text-muted">Followers</small></Col>
                  <Col><h6 className="mb-0">89</h6><small className="text-muted">Following</small></Col>
                </Row>
                <div className="d-flex gap-2 mt-3">
                  <Button variant="primary" size="sm" className="flex-fill">Seguir</Button>
                  <Button variant="outline-secondary" size="sm" className="flex-fill">Mensaje</Button>
                </div>
              </Card.Body>
            </Card>
          </LiveDemo>

          {/* Completaste la guía */}
          <div className="mt-4">
            <Card className="border-0 shadow-sm bg-light">
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mb-3">🎓 ¡Completaste la guía!</h5>
                <p className="text-muted small mb-3">14 temas de React-Bootstrap dominados.</p>
                <Row className="g-1">
                  {[
                    'Setup', 'Grid', 'Tipografía', 'Botones',
                    'Cards', 'Forms', 'Navs', 'Modals',
                    'Alerts', 'Tables', 'Accordion', 'Progress',
                    'Toasts', 'Combinado'
                  ].map(t => (
                    <Col xs={6} key={t}>
                      <div className="bg-success bg-opacity-10 rounded-2 p-1 small text-success">
                        ✓ {t}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}