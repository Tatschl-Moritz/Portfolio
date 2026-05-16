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

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function ProjectCard({ num, title, desc, tags, href, placeholder }) {
  return (
    <motion.a
      className={`project${placeholder ? ' project--placeholder' : ''}`}
      href={href}
      aria-label={`${title} — open project`}
      whileHover="hover"
      initial="rest"
    >
      <motion.span
        className="project__num"
        variants={{ rest: { opacity: 0.4 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.25 }}
      >{num}</motion.span>

      <div className="project__main">
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{desc}</p>
      </div>

      <div className="project__meta">
        {tags.map(tag => <span key={tag} className="project__tag">{tag}</span>)}
      </div>

      <motion.span
        className="project__arrow"
        variants={{ rest: { x: 0, y: 0 }, hover: { x: 4, y: -4 } }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowIcon />
      </motion.span>
    </motion.a>
  )
}

export default function Projects() {
  const { lang } = useApp()
  const t = translations[lang].projects

  return (
    <section id="projects" className="section">
      <span className="section__bg-num" aria-hidden="true">02</span>
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

        <ol className="projects__list">
          {t.items.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard {...p} />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
