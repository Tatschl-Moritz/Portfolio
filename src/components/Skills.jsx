import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

const clipReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0% 0)', opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

function TickerRow({ items, label, x }) {
  const content = [...items, ...items, ...items, ...items, ...items, ...items]
  const [hovered, setHovered] = useState(false)

  const cursorX = useMotionValue(-300)
  const cursorY = useMotionValue(-300)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 })

  const onMove = (e) => {
    cursorX.set(e.clientX + 18)
    cursorY.set(e.clientY + 18)
  }

  return (
    <div
      className="ticker-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
    >
      <motion.div className="ticker-row__inner" style={{ x }}>
        {content.map((item, i) => (
          <span key={i} className="ticker-row__group">
            <span className="ticker-solid">{item}</span>
            <span className="ticker-outline">{item}</span>
          </span>
        ))}
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="ticker-tooltip"
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="ticker-tooltip__label">{label}</span>
            <ul className="ticker-tooltip__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Skills() {
  const { lang } = useApp()
  const t = translations[lang].skills

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const x0 = useTransform(scrollYProgress, [0, 1], ['0%',   '-28%'])
  const x1 = useTransform(scrollYProgress, [0, 1], ['-28%', '0%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%',   '-22%'])

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <span className="section__bg-num" aria-hidden="true">03</span>

      <div className="container">
        <div className="section__head">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >{t.eyebrow}</motion.span>

          <motion.h2
            className="section__title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={clipReveal}
          >
            {t.title_1}<span className="accent">{t.title_2}</span>.
          </motion.h2>
        </div>
      </div>

      <div className="skills-ticker">
        {t.categories.map((cat, i) => (
          <TickerRow key={cat.name} items={cat.items} label={cat.name} x={[x0, x1, x2][i]} />
        ))}
      </div>
    </section>
  )
}
