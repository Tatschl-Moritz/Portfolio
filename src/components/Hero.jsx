import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

const LINE1 = 'MORITZ'
const LINE2 = 'TATSCHL'

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

function MagneticBtn({ href, variant, children }) {
  const ref = useRef(null)
  const lenis = useLenis()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xS = useSpring(x, { stiffness: 300, damping: 28 })
  const yS = useSpring(y, { stiffness: 300, damping: 28 })

  const onMove = (e) => {
    if (!canHover()) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.32)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.32)
  }
  const onLeave = () => { x.set(0); y.set(0) }
  const onClick = (e) => {
    e.preventDefault()
    lenis?.scrollTo(href, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) })
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`btn btn--${variant}`}
      style={{ x: xS, y: yS }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </motion.a>
  )
}

export default function Hero() {
  const { lang } = useApp()
  const t = translations[lang].hero

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Scroll-driven transforms — applied to wrapper divs only, never mixed with entrance animations
  const metaY    = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])
  const nameY    = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const subY     = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])
  const fadeOut  = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={heroRef} className="hero">
      <div className="container">

        {/* Meta row — parallax wrapper + entrance animation as separate concerns */}
        <motion.div style={{ y: metaY, opacity: fadeOut }}>
          <motion.div
            className="hero__meta"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">{t.eyebrow}</span>
            <div className="hero__loc">
              <span>{t.location}</span>
              <span>{t.university}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Name — own parallax speed */}
        <motion.div style={{ y: nameY, opacity: fadeOut }}>
          <div className="hero__name-wrap">
            <h1>
              <span className="hero__line">
                {LINE1.split('').map((char, i) => (
                  <span key={i} className="ltr-wrap">
                    <motion.span
                      className="ltr"
                      initial={{ y: '115%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.6 + i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                    >{char}</motion.span>
                  </span>
                ))}
              </span>
              <span className="hero__line">
                {LINE2.split('').map((char, i) => (
                  <span key={i} className="ltr-wrap">
                    <motion.span
                      className={`ltr${i === LINE2.length - 1 ? ' accent-letter' : ''}`}
                      initial={{ y: '115%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.8 + i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                    >{char}</motion.span>
                  </span>
                ))}
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Sub row */}
        <motion.div style={{ y: subY, opacity: fadeOut }}>
          <motion.div
            className="hero__sub"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__sub-text">
              <p className="hero__role">{t.role}</p>
              <p className="hero__lede">{t.lede}</p>
            </div>
            <div className="hero__actions">
              <MagneticBtn href="#projects" variant="primary">
                {t.cta_projects}
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </MagneticBtn>
              <MagneticBtn href="#contact" variant="ghost">{t.cta_contact}</MagneticBtn>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
