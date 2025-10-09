import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Diaspora from './pages/Diaspora'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// ScrollToTop component - remonte automatiquement en haut de page lors du changement de route
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            } 
          />
          <Route 
            path="/a-propos" 
            element={
              <PageTransition>
                <About />
              </PageTransition>
            } 
          />
          <Route 
            path="/services" 
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            } 
          />
          <Route 
            path="/realisations" 
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            } 
          />
          <Route 
            path="/diaspora" 
            element={
              <PageTransition>
                <Diaspora />
              </PageTransition>
            } 
          />
          <Route 
            path="/blog" 
            element={
              <PageTransition>
                <Blog />
              </PageTransition>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } 
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
