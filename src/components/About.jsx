import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

export default function About() {
  const { lang } = useApp()
  const t = translations[lang].about

  return (
    <section id="about" className="section about">
      <span className="section__bg-num" aria-hidden="true">01</span>
      <div className="container">

        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >{t.eyebrow}</motion.span>

        <motion.blockquote
          className="about__quote"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="about__quote-text">{t.quote}</p>
          <cite className="about__quote-attr">{t.quote_attr}</cite>
        </motion.blockquote>

        <motion.p
          className="about__lede"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >{t.lede}</motion.p>

        <dl className="about__facts">
          {t.facts.map((f, i) => (
            <motion.div
              key={f.dt}
              className="about__fact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <dt>{f.dt}</dt>
              <dd>{f.dd}</dd>
            </motion.div>
          ))}
        </dl>

      </div>
    </section>
  )
}
