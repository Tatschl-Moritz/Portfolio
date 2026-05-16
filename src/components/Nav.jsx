import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="2.8" stroke="currentColor" strokeWidth="1.3"/>
    <line x1="7.5" y1="1"    x2="7.5" y2="2.5"   stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="7.5" y1="12.5" x2="7.5" y2="14"    stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="1"   y1="7.5"  x2="2.5" y2="7.5"   stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="12.5" y1="7.5" x2="14"  y2="7.5"   stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="3.2"  y1="3.2" x2="4.2" y2="4.2"   stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="10.8" y1="10.8" x2="11.8" y2="11.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="10.8" y1="4.2"  x2="11.8" y2="3.2"  stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="3.2"  y1="11.8" x2="4.2"  y2="10.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

/* Lucide-style moon — fits fully within 24×24 viewBox */
const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Nav() {
  const [hidden, setHidden]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme, lang } = useApp()
  const t = translations[lang].nav

  useEffect(() => {
    let lastY = 0
    const handler = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 100)
      setScrolled(y > 30)
      lastY = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: hidden ? -90 : 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav__inner">
        <a href="#top" className="brand">Moritz Tatschl</a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#about">{t.about}</a>
          <a href="#projects">{t.projects}</a>
          <a href="#skills">{t.skills}</a>
        </nav>

        <div className="nav__controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <a href="#contact" className="nav__cta">
          <span className="dot" aria-hidden="true" />
          {t.available}
        </a>
      </div>
    </motion.header>
  )
}
