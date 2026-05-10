import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Skills.module.css'

const skillData = [
  {
    category: 'Languages',
    icon: '💻',
    color: '#61dafb',
    items: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'MATLAB', level: 65 },
    ],
  },
  {
    category: 'Frontend & Tools',
    icon: '🎨',
    color: '#a78bfa',
    items: [
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Figma', level: 78 },
      { name: 'Android Studio', level: 60 },
      { name: 'Git / GitHub', level: 88 },
    ],
  },
  {
    category: 'Cloud & Data',
    icon: '☁️',
    color: '#38bdf8',
    items: [
      { name: 'Microsoft Azure', level: 72 },
      { name: 'Databricks', level: 70 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MLOps Pipelines', level: 68 },
      { name: 'Botpress', level: 65 },
    ],
  },
  {
    category: 'Specialisations',
    icon: '⚛️',
    color: '#34d399',
    items: [
      { name: 'Machine Learning', level: 72 },
      { name: 'IBM Qiskit', level: 65 },
      { name: 'Quantum Circuits', level: 62 },
      { name: 'Database Design', level: 80 },
      { name: 'REST APIs', level: 82 },
    ],
  },
]

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <motion.div
          className={styles.skillFill}
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Skills</span>
          <h2 className={styles.title}>
            My <span className={styles.highlight}>tech stack</span>
          </h2>
          <p className={styles.subtitle}>
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillData.map((group, gi) => (
            <motion.div
              key={group.category}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{group.icon}</span>
                <h3 className={styles.cardTitle} style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className={styles.skillList}>
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    inView={inView}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.tools}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className={styles.toolsLabel}>Certifications & extras</p>
          <div className={styles.toolsList}>
            {['IBM GenAI: Prompt Engineering (In Progress)', 'AWS GenAI with LLMs (In Progress)', 'FreeCodeCamp', 'Responsive Web Design', 'JS Algorithms & DS', 'IBM Qiskit (In Progress)', 'Agile / Scrum', 'System Design', 'Data Preprocessing', 'Classification Models'].map(t => (
              <span key={t} className={styles.tool}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
