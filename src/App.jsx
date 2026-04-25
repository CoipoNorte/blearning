/* ============================================
   App.jsx - Componente raíz
   
   Usa Container de react-bootstrap para
   mantener el contenido centrado y responsive.
   
   NO usamos Tailwind aquí. Todo es Bootstrap 5
   con componentes de react-bootstrap.
   ============================================ */
import NavbarComponent from './components/Navbar'
import Hero from './components/Hero'
import SetupSection from './components/sections/SetupSection'
import GridSection from './components/sections/GridSection'
import TypographySection from './components/sections/TypographySection'
import ButtonsSection from './components/sections/ButtonsSection'
import CardsSection from './components/sections/CardsSection'
import FormsSection from './components/sections/FormsSection'
import NavsSection from './components/sections/NavsSection'
import ModalsSection from './components/sections/ModalsSection'
import AlertsSection from './components/sections/AlertsSection'
import TablesSection from './components/sections/TablesSection'
import AccordionSection from './components/sections/AccordionSection'
import ProgressSection from './components/sections/ProgressSection'
import ToastsSection from './components/sections/ToastsSection'
import CombinedSection from './components/sections/CombinedSection'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="bg-light min-vh-100">
      <NavbarComponent />
      <Hero />

      <main>
        <SetupSection />
        <GridSection />
        <TypographySection />
        <ButtonsSection />
        <CardsSection />
        <FormsSection />
        <NavsSection />
        <ModalsSection />
        <AlertsSection />
        <TablesSection />
        <AccordionSection />
        <ProgressSection />
        <ToastsSection />
        <CombinedSection />

        {/* Footer */}
        <footer className="bg-dark text-light py-5 mt-5">
          <Container className="text-center">
            <h4 className="mb-3">🅱️ blearning</h4>
            <p className="text-secondary mb-4">
              Guía interactiva de React-Bootstrap 5
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://react-bootstrap.netlify.app/"
                target="_blank" rel="noreferrer"
                className="btn btn-outline-info btn-sm">
                📖 Docs React-Bootstrap
              </a>
              <a href="https://getbootstrap.com/docs/5.3"
                target="_blank" rel="noreferrer"
                className="btn btn-outline-light btn-sm">
                📖 Docs Bootstrap 5
              </a>
            </div>
            <p className="text-secondary mt-4 small">
              Hecho con ❤️ usando React-Bootstrap 5
            </p>
          </Container>
        </footer>
      </main>
    </div>
  )
}

export default App