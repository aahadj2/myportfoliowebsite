import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import styles from './Projects.module.css'

const categories = ['All', 'Full Stack', 'AI/ML', 'Research', 'Frontend']

const techColors = {
  'React': '#61dafb', 'Node.js': '#68a063', 'PostgreSQL': '#336791',
  'Python': '#3776ab', 'SQL': '#e38c00', 'Azure': '#0078d4',
  'Databricks': '#ff3621', 'MLOps': '#9f7aea', 'IBM Qiskit': '#6929c4',
  'MATLAB': '#e16737', 'Quantum Circuits': '#a78bfa', 'Figma': '#f24e1e',
  'Android Studio': '#3ddc84', 'HTML': '#e34f26', 'CSS': '#1572b6',
  'JavaScript': '#f7df1e', 'Botpress': '#6366f1', 'REST APIs': '#06b6d4',
  'C++': '#00599c', 'Git/GitHub': '#f1502f',
  'Socket.IO': '#010101', 'MongoDB': '#47a248', 'Express.js': '#68a063',
  'LangGraph': '#ff6b35', 'LangChain': '#1c3a5e', 'MLOps': '#7c3aed',
  'Multi-Agent AI': '#ec4899', 'Human-in-the-Loop': '#f59e0b', 'Mosaic AI': '#ff3621',
}

const projectIcons = {
  'sustainability': '🌱',
  'mlops': '🧠',
  'quantum': '⚛️',
  'chatbot': '💬',
  'ludo': '🎲',
  'langgraph': '🤖',
}

const fallbackProjects = [
  { id: 1, title: 'Campus Sustainability App', description: 'Full-stack web app to track sustainable practices at LUMS. Led system design, database schema, and backend API in an agile team — LUMS Software Engineering course.', tech: ['React', 'Node.js', 'PostgreSQL', 'Figma', 'Android Studio'], github: 'https://github.com/aahadj2', demo: 'https://github.com/aahadj2', image: 'sustainability', category: 'Full Stack', featured: true },
  { id: 2, title: 'Multiplayer Ludo — Real-Time MERN', description: 'Full-stack Ludo game with real-time multiplayer via WebSockets. Room-based architecture keeps game state server-side so all players stay in sync — zero lag, no cheating. Built with Socket.IO on a MERN stack.', tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Express.js'], github: 'https://github.com/aahadj2', demo: 'https://github.com/aahadj2', image: 'ludo', category: 'Full Stack', featured: true },
  { id: 3, title: 'LangGraph Multi-Agent AI Pipeline', description: 'Six-agent system (Director → Architect → Engineer → Execution Manager → QA → Scorer) that autonomously writes, runs, and iterates Python game code. Features Human-in-the-Loop control, LangGraph state machines with reducers, and a QA subgraph routing between a syntax checker, logic tester, and performance auditor. Built on Databricks Mosaic AI — LUMS CS5305 MLOps course.', tech: ['LangGraph', 'LangChain', 'Python', 'Multi-Agent AI', 'Human-in-the-Loop', 'Mosaic AI', 'MLOps'], github: 'https://github.com/aahadj2', demo: 'https://github.com/aahadj2', image: 'langgraph', category: 'AI/ML', featured: true },
  { id: 4, title: 'Database & MLOps Pipeline', description: 'Relational schemas and complex SQL on Azure. End-to-end MLOps workflows in Databricks — training, versioning, deployment. Also built the backend of a food delivery app.', tech: ['Python', 'SQL', 'Azure', 'Databricks', 'MLOps'], github: 'https://github.com/aahadj2', demo: 'https://github.com/aahadj2', image: 'mlops', category: 'AI/ML', featured: true },
  { id: 5, title: 'Quantum Computing Lab', description: 'Quantum circuits and algorithms with IBM Qiskit as part of the Quantum Technologies minor. Simulating gates, superposition, and entanglement — working toward IBM Qiskit Developer Certification.', tech: ['Python', 'IBM Qiskit', 'MATLAB', 'Quantum Circuits'], github: 'https://github.com/aahadj2', demo: 'https://github.com/aahadj2', image: 'quantum', category: 'Research', featured: true },
  { id: 6, title: 'Chatbot-Integrated Web App', description: 'Responsive web apps built with FreeCodeCamp curriculum. Integrated a Botpress chatbot and connected external REST APIs for dynamic content during the Stratosphere Studio internship.', tech: ['HTML', 'CSS', 'JavaScript', 'Botpress', 'REST APIs'], github: 'https://github.com/aahadj2', demo: 'https://github.com/aahadj2', image: 'chatbot', category: 'Frontend', featured: false },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.cardGlow} style={{ opacity: hovered ? 1 : 0 }} />

      <div className={styles.cardTop}>
        <div className={styles.projectIcon}>
          {projectIcons[project.image] || '💻'}
        </div>
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map(t => (
            <span
              key={t}
              className={styles.techTag}
              style={{ color: techColors[t] || '#94a3b8' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.cardLink} ${styles.demoLink}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/projects`)
      .then(res => setProjects(res.data.data))
      .catch(() => setProjects(fallbackProjects))
  }, [])

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Projects</span>
          <h2 className={styles.title}>
            Things I've <span className={styles.highlight}>built</span>
          </h2>
          <p className={styles.subtitle}>
            A curated selection of projects — from side experiments to production systems.
          </p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={styles.githubCta}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com/aahadj2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubCtaBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
