 
/* ============================================
   SectionWrapper.jsx - Envoltorio de sección
   Con animación al hacer scroll (scroll reveal)
   Usa Container de Bootstrap para centrar
   ============================================ */
import { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

export default function SectionWrapper({ id, number, title, subtitle, icon, variant = 'primary', children }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={ref}
      className={`py-5 section-animate ${isVisible ? 'visible' : ''}`}
      style={{ backgroundColor: parseInt(number) % 2 === 0 ? '#ffffff' : '#f8f9fa' }}>
      <Container>
        {/* Header de sección */}
        <div className="text-center mb-5">
          <Badge bg={variant} className="mb-3 px-3 py-2 fs-6 rounded-pill">
            {number} • {subtitle}
          </Badge>
          <h2 className="display-6 fw-bold text-dark d-flex align-items-center justify-content-center gap-2">
            <span>{icon}</span>
            <span>{title}</span>
          </h2>
          <hr className={`mx-auto mt-3 border-${variant}`} style={{ width: 80, borderWidth: 3, opacity: 1 }} />
        </div>

        {children}
      </Container>
    </section>
  )
}