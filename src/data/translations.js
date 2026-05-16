export const translations = {
  en: {
    nav: {
      about:     'About',
      projects:  'Projects',
      skills:    'Skills',
      available: 'Available for work',
    },
    hero: {
      eyebrow:      'Portfolio — 2026 / v2',
      location:     'Vienna, Austria',
      university:   'TU Wien · 2nd Semester CS',
      role:         'Computer Science Student & Software Engineer',
      lede:         'Learning computer science one bug at a time.',
      cta_projects: 'View projects',
      cta_contact:  'Contact',
      marquee: [
        'CS Student', 'Vienna', 'TU Wien', 'Software Engineer',
        'Open to Collaboration', 'Builder',
        'CS Student', 'Vienna', 'TU Wien', 'Software Engineer',
        'Open to Collaboration', 'Builder',
      ],
    },
    about: {
      eyebrow:  'About — 01',
      title_1:  'Still figuring it ',
      title_2:  'out',
      body_before: "I'm a second-semester Computer Science student at TU Wien, still figuring out which areas of CS interest me most. Right now I'm focused on ",
      body_em:     'improving fundamentals',
      body_after:  " and understanding how software and systems work from the ground up. I enjoy learning by building small projects — and I like understanding things deeply instead of only using them.",
      facts: [
        { dt: 'Currently',  dd: '2nd semester, BSc Computer Science · TU Wien' },
        { dt: 'Based in',   dd: 'Vienna, Austria' },
        { dt: 'Working on', dd: 'Improving fundamentals, learning software engineering principles, building small projects while exploring different areas of CS' },
        { dt: 'Open to',    dd: 'Learning, collaborations, side projects to grow with' },
      ],
    },
    projects: {
      eyebrow:  'Selected work — 02',
      title_1:  "Things I'm ",
      title_2:  'learning by building',
      items: [
        {
          num: '01 / 2026', title: 'Learning Lab',
          desc: "A growing collection of small experiments — algorithms, data structures, and rebuilding familiar tools from scratch to understand what's actually happening underneath.",
          tags: ['Fundamentals', 'Experiments', 'Ongoing'], href: '#',
        },
        {
          num: '02 / 2026', title: 'AI Explorations',
          desc: 'First experiments with machine learning — following tutorials, breaking things, and trying to understand the math behind the models instead of treating them as a black box.',
          tags: ['Python', 'ML', 'Learning'], href: '#',
        },
        {
          num: '03 / 2026', title: 'Portfolio Website',
          desc: "This site — rebuilt with React and Framer Motion. A small place to keep track of what I'm working on, continuously improved as I learn more.",
          tags: ['React', 'Framer Motion', 'Vite'], href: '#',
        },
      ],
    },
    skills: {
      eyebrow:  'Skills — 03',
      title_1:  "What I'm ",
      title_2:  'working with',
      categories: [
        { name: 'Languages', count: '05', items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'] },
        { name: 'Tools',     count: '04', items: ['Git', 'Linux', 'IntelliJ', 'VS Code'] },
        { name: 'Exploring', count: '05', items: ['Software Engineering', 'AI', 'Web Development', 'Systems', 'UI / UX'] },
      ],
    },
    contact: {
      eyebrow:  'Contact — 04',
      title_1:  'Say ',
      title_2:  'hello',
      lede:     "Curious about something I'm working on, or want to learn / build together? Always happy to chat.",
      links: [
        { num: '01', label: 'Email',    handle: 'moritz@tatschl.dev',      href: 'mailto:moritz@tatschl.dev',                                  external: false },
        { num: '02', label: 'GitHub',   handle: '@Tatschl-Moritz',          href: 'https://github.com/Tatschl-Moritz',                          external: true  },
        { num: '03', label: 'LinkedIn', handle: 'in/moritz-tatschl',        href: 'https://www.linkedin.com/in/moritz-tatschl-0b934940a',        external: true  },
      ],
    },
    footer: {
      left:  '© 2026 Moritz Tatschl — Vienna',
      right: 'v2.0 · React + Framer Motion',
    },
  },

  de: {
    nav: {
      about:     'Über mich',
      projects:  'Projekte',
      skills:    'Kenntnisse',
      available: 'Verfügbar',
    },
    hero: {
      eyebrow:      'Portfolio — 2026 / v2',
      location:     'Wien, Österreich',
      university:   'TU Wien · 2. Semester Informatik',
      role:         'Informatikstudent & Software-Entwickler',
      lede:         'Informatik lernen — einen Bug nach dem anderen.',
      cta_projects: 'Projekte ansehen',
      cta_contact:  'Kontakt',
      marquee: [
        'Informatikstudent', 'Wien', 'TU Wien', 'Software-Entwickler',
        'Offen für Kollaboration', 'Builder',
        'Informatikstudent', 'Wien', 'TU Wien', 'Software-Entwickler',
        'Offen für Kollaboration', 'Builder',
      ],
    },
    about: {
      eyebrow:  'Über mich — 01',
      title_1:  'Noch am ',
      title_2:  'Entdecken',
      body_before: 'Ich bin im zweiten Semester des Informatik-Bachelorstudiums an der TU Wien und erkunde noch, welche Bereiche der Informatik mich am meisten begeistern. Aktuell konzentriere ich mich darauf, ',
      body_em:     'Grundlagen zu festigen',
      body_after:  ' und zu verstehen, wie Software und Systeme von Grund auf funktionieren. Ich lerne am liebsten durch das Bauen kleiner Projekte — und verstehe Dinge lieber tief, als sie nur zu nutzen.',
      facts: [
        { dt: 'Aktuell',    dd: '2. Semester, BSc Informatik · TU Wien' },
        { dt: 'Standort',   dd: 'Wien, Österreich' },
        { dt: 'Arbeite an', dd: 'Grundlagen festigen, Software-Engineering-Prinzipien lernen, kleine Projekte bauen und verschiedene Informatikbereiche erkunden' },
        { dt: 'Offen für',  dd: 'Lernen, Kollaborationen, Nebenprojekte zum gemeinsamen Wachsen' },
      ],
    },
    projects: {
      eyebrow:  'Ausgewählte Projekte — 02',
      title_1:  'Dinge, die ich ',
      title_2:  'beim Bauen lerne',
      items: [
        {
          num: '01 / 2026', title: 'Learning Lab',
          desc: 'Eine wachsende Sammlung kleiner Experimente — Algorithmen, Datenstrukturen und das Nachbauen bekannter Tools, um zu verstehen, was tatsächlich darunter passiert.',
          tags: ['Grundlagen', 'Experimente', 'Laufend'], href: '#',
        },
        {
          num: '02 / 2026', title: 'KI-Experimente',
          desc: 'Erste Versuche mit Machine Learning — Tutorials folgen, Dinge kaputtmachen und versuchen, die Mathematik hinter den Modellen zu verstehen, statt sie als Black Box zu behandeln.',
          tags: ['Python', 'ML', 'Lernen'], href: '#',
        },
        {
          num: '03 / 2026', title: 'Portfolio Website',
          desc: 'Diese Seite — neu gebaut mit React und Framer Motion. Ein kleiner Ort, um den Überblick über meine Projekte zu behalten, kontinuierlich verbessert während ich lerne.',
          tags: ['React', 'Framer Motion', 'Vite'], href: '#',
        },
      ],
    },
    skills: {
      eyebrow:  'Kenntnisse — 03',
      title_1:  'Womit ich ',
      title_2:  'arbeite',
      categories: [
        { name: 'Sprachen',    count: '05', items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'] },
        { name: 'Tools',       count: '04', items: ['Git', 'Linux', 'IntelliJ', 'VS Code'] },
        { name: 'Erkunde ich', count: '05', items: ['Software Engineering', 'KI', 'Web-Entwicklung', 'Systeme', 'UI / UX'] },
      ],
    },
    contact: {
      eyebrow:  'Kontakt — 04',
      title_1:  'Sag ',
      title_2:  'Hallo',
      lede:     'Neugierig auf etwas, woran ich arbeite, oder möchtest du zusammen lernen / bauen? Ich freue mich immer über eine Nachricht.',
      links: [
        { num: '01', label: 'E-Mail',   handle: 'moritz@tatschl.dev',      href: 'mailto:moritz@tatschl.dev',                                  external: false },
        { num: '02', label: 'GitHub',   handle: '@Tatschl-Moritz',          href: 'https://github.com/Tatschl-Moritz',                          external: true  },
        { num: '03', label: 'LinkedIn', handle: 'in/moritz-tatschl',        href: 'https://www.linkedin.com/in/moritz-tatschl-0b934940a',        external: true  },
      ],
    },
    footer: {
      left:  '© 2026 Moritz Tatschl — Wien',
      right: 'v2.0 · React + Framer Motion',
    },
  },
}
