export const translations = {
  en: {
    nav: {
      about:     'About',
      projects:  'Projects',
      skills:    'Skills',
      available: 'Available for work',
    },
    hero: {
      eyebrow:      'Portfolio — 2026 / v2.1',
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
      eyebrow:    'About — 01',
      quote:      '"If you know exactly what you want to be, you become it — and that is your punishment."',
      quote_attr: '— Oscar Wilde',
      lede:       "I don't fully know yet where in CS I belong — and I've started to like that.",
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
          num: '01 / 2026', title: 'Portfolio Website',
          desc: "This site — rebuilt with React and Framer Motion. A small place to keep track of what I'm working on, continuously improved as I learn more.",
          tags: ['React', 'Framer Motion', 'Vite'], href: '#',
        },
        {
          num: '02 / —', title: 'Coming soon',
          desc: 'Something is being figured out here.',
          tags: ['Placeholder'], href: '#', placeholder: true,
        },
        {
          num: '03 / —', title: 'Coming soon',
          desc: 'Something is being figured out here.',
          tags: ['Placeholder'], href: '#', placeholder: true,
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
      lede:     "Feel free to reach out.\nI could use the distraction.",
      links: [
        { num: '01', label: 'Email',    handle: 'moritz@tatschl.dev',      href: 'mailto:moritz@tatschl.dev',                                  external: false },
        { num: '02', label: 'GitHub',   handle: '@Tatschl-Moritz',          href: 'https://github.com/Tatschl-Moritz',                          external: true  },
        { num: '03', label: 'LinkedIn', handle: 'in/moritz-tatschl',        href: 'https://www.linkedin.com/in/moritz-tatschl-0b934940a',        external: true  },
      ],
    },
    footer: {
      left:  '© 2026 Moritz Tatschl — Vienna',
      right: 'v2.1 · React + Framer Motion',
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
      eyebrow:      'Portfolio — 2026 / v2.1',
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
      eyebrow:    'Über mich — 01',
      quote:      '"If you know exactly what you want to be, you become it — and that is your punishment."',
      quote_attr: '— Oscar Wilde',
      lede:       'Ich weiß noch nicht genau, wo in der Informatik mein Platz ist — und ich habe angefangen, das zu mögen.',
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
          num: '01 / 2026', title: 'Portfolio Website',
          desc: 'Diese Seite — neu gebaut mit React und Framer Motion. Ein kleiner Ort, um den Überblick über meine Projekte zu behalten, kontinuierlich verbessert während ich lerne.',
          tags: ['React', 'Framer Motion', 'Vite'], href: '#',
        },
        {
          num: '02 / —', title: 'Kommt noch',
          desc: 'Hier wird gerade etwas herausgefunden.',
          tags: ['Platzhalter'], href: '#', placeholder: true,
        },
        {
          num: '03 / —', title: 'Kommt noch',
          desc: 'Hier wird gerade etwas herausgefunden.',
          tags: ['Platzhalter'], href: '#', placeholder: true,
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
      lede:     "Melde dich einfach.\nIch könnte die Ablenkung gebrauchen.",
      links: [
        { num: '01', label: 'E-Mail',   handle: 'moritz@tatschl.dev',      href: 'mailto:moritz@tatschl.dev',                                  external: false },
        { num: '02', label: 'GitHub',   handle: '@Tatschl-Moritz',          href: 'https://github.com/Tatschl-Moritz',                          external: true  },
        { num: '03', label: 'LinkedIn', handle: 'in/moritz-tatschl',        href: 'https://www.linkedin.com/in/moritz-tatschl-0b934940a',        external: true  },
      ],
    },
    footer: {
      left:  '© 2026 Moritz Tatschl — Wien',
      right: 'v2.1 · React + Framer Motion',
    },
  },
}
