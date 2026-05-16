import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

export default function Footer() {
  const { lang } = useApp()
  const t = translations[lang].footer

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>{t.left}</span>
        <span>{t.right}</span>
      </div>
    </footer>
  )
}
