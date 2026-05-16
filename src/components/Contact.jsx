import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

const clipReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0 0% 0)', opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

const ExternalArrow = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M5 17L17 5M17 5H8M17 5V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EmailArrow = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M5 11h12M13 6l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Contact() {
  const { lang } = useApp()
  const t = translations[lang].contact

  return (
    <section id="contact" className="contact">
      <span className="section__bg-num contact__bg-num" aria-hidden="true">04</span>
      <div className="container">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >{t.eyebrow}</motion.span>
          <motion.h2
            className="contact__title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={clipReveal}
          >
            {t.title_1}<span className="accent">{t.title_2}</span>.
          </motion.h2>
          <motion.p
            className="contact__lede"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >{t.lede}</motion.p>
        </div>

        <div className="contact__links">
          {t.links.map((link, i) => (
            <motion.a
              key={link.label}
              className="contact__link"
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="contact__link-num">{link.num}</span>
              <span className="contact__link-label">{link.label}</span>
              <span className="contact__link-handle">{link.handle}</span>
              <span className="contact__link-arrow">
                {link.external ? <ExternalArrow /> : <EmailArrow />}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
