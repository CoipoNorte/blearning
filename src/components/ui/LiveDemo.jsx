 
/* ============================================
   LiveDemo.jsx - Contenedor de demos en vivo
   Card de Bootstrap con header informativo
   ============================================ */
import Card from 'react-bootstrap/Card'

export default function LiveDemo({ title, children }) {
  return (
    <Card className="shadow-sm border-0">
      <Card.Header className="bg-white border-bottom d-flex align-items-center gap-2 py-2">
        <span className="rounded-circle bg-success d-inline-block"
          style={{ width: 8, height: 8, animation: 'pulse 2s infinite' }} />
        <small className="text-muted code-font">{title || 'Preview'}</small>
      </Card.Header>
      <Card.Body className="p-4">
        {children}
      </Card.Body>
    </Card>
  )
}