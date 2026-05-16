import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const clipReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0% 0)', opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function About() {
  const { lang } = useApp()
  const t = translations[lang].about

  return (
    <section id="about" className="section">
      <span className="section__bg-num" aria-hidden="true">01</span>
      <div className="container">
        <div className="section__head">
          <motion.span
            className="eyebrow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
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

        <div className="about__grid">
          <div aria-hidden="true" />
          <div>
            <motion.p
              className="about__body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={0}
              variants={fadeUp}
            >
              {t.body_before}<em>{t.body_em}</em>{t.body_after}
            </motion.p>

            <dl className="about__facts">
              {t.facts.map((f, i) => (
                <motion.div
                  key={f.dt}
                  className="about__fact"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-20px' }}
                  custom={i}
                  variants={fadeUp}
                >
                  <dt>{f.dt}</dt>
                  <dd>{f.dd}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
