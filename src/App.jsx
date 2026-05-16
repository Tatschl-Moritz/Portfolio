import { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { motion } from 'framer-motion'
import { AppProvider } from './context/AppContext'
import NoiseOverlay from './components/NoiseOverlay'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function LoadingVeil() {
  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
    />
  )
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
      <AppProvider>
        <LoadingVeil />
        <NoiseOverlay />
        <Nav />
        <main id="top">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </AppProvider>
    </ReactLenis>
  )
}
