/* ============================================
   Navbar.jsx - Navegación con react-bootstrap
   
   ARREGLO: Las letras y el logo son invisibles
   cuando el navbar es transparente (al inicio).
   
   Solución: Todo invisible al inicio,
   aparece junto con el fondo blanco al hacer scroll.
   ============================================ */
import { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const sections = [
  { id: 'setup',       label: 'Setup' },
  { id: 'grid',        label: 'Grid' },
  { id: 'typography',  label: 'Tipografía' },
  { id: 'buttons',     label: 'Botones' },
  { id: 'cards',       label: 'Cards' },
  { id: 'forms',       label: 'Forms' },
  { id: 'navs',        label: 'Navs' },
  { id: 'modals',      label: 'Modals' },
  { id: 'alerts',      label: 'Alerts' },
  { id: 'tables',      label: 'Tables' },
  { id: 'accordion',   label: 'Accordion' },
  { id: 'progress',    label: 'Progress' },
  { id: 'toasts',      label: 'Toasts' },
  { id: 'combined',    label: 'Combinado' },
]

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setExpanded(false)
  }

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      data-bs-theme="light"
      style={{
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <Container>
        {/* Logo: blanco cuando transparente, primary cuando scrolled */}
        <Navbar.Brand
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="fw-bold d-flex align-items-center gap-2"
          style={{
            transition: 'all 0.4s ease',
            color: scrolled ? '#0d6efd' : 'rgba(255,255,255,0)',
          }}
        >
          <span className="fs-4" style={{
            transition: 'opacity 0.4s ease',
            opacity: scrolled ? 1 : 0,
          }}>🅱️</span>
          blearning
        </Navbar.Brand>

        {/* Botón hamburguesa: solo visible con scroll */}
        <Navbar.Toggle
          aria-controls="main-nav"
          style={{
            transition: 'opacity 0.4s ease',
            opacity: scrolled ? 1 : 0,
            pointerEvents: scrolled ? 'auto' : 'none',
            borderColor: scrolled ? '#dee2e6' : 'transparent',
          }}
        />

        {/* Links: invisibles al inicio, aparecen con scroll */}
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-0">
            {sections.map(s => (
              <Nav.Link
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-2"
                style={{
                  fontSize: '0.85rem',
                  transition: 'all 0.4s ease',
                  color: scrolled ? '#6c757d' : 'transparent',
                  pointerEvents: scrolled ? 'auto' : 'none',
                }}
                onMouseEnter={(e) => { if (scrolled) e.target.style.color = '#0d6efd' }}
                onMouseLeave={(e) => { if (scrolled) e.target.style.color = '#6c757d' }}
              >
                {s.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}