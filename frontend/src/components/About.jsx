import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

const timeline = [
  {
    year: '2023 — Present',
    title: 'Lahore University of Management Sciences',
    logo: '/lums-logo.png',
    major: 'B.S. Computer Science',
    minor: 'Minor: Quantum Technologies',
    company: 'Expected May 2027',
    desc: 'Relevant coursework: AI/ML, MLOps (Databricks), Databases (SQL & Azure), Network-Centric Computing, Quantum Mechanics, and Quantum Information Theory.',
  },
  {
    year: '2026',
    title: 'Campus Sustainability App',
    company: 'LUMS Software Engineering Course',
    desc: 'Led full-stack development of a android app to track sustainable campus practices. Built with React, Node.js, and PostgreSQL in an agile team — responsible for system design, database schema, and sprint planning.',
  },
  {
    year: '2025',
    title: 'Database & MLOps Pipeline',
    company: 'LUMS — Database & MLOps Course',
    desc: 'Designed relational schemas and complex SQL queries on Microsoft Azure. Built MLOps workflows in Databricks covering model training, versioning, and deployment. Also implemented the backend of a food delivery app.',
  },
  {
    year: '2024 — Present',
    title: 'Quantum Computing Research',
    company: 'LUMS — Quantum Technologies Minor',
    desc: 'Implementing quantum circuits and algorithms using IBM Qiskit. Simulating quantum gates and entanglement experiments as part of coursework toward the IBM Qiskit Developer Certification.',
  },
  {
    year: '2026 — Present',
    title: 'AI Intern',
    company: 'Crewlogix · AI Bootcamp',
    desc: 'Training in Generative AI and Large Language Models. Pursuing two industry certifications: IBM Generative AI: Prompt Engineering Basics and AWS & Deep Learning — Generative AI with LLMs.',
  },
  {
    year: '2024',
    title: 'Web Developer Intern',
    company: 'Stratosphere Studio · Remote',
    desc: 'Built responsive web apps following FreeCodeCamp curriculum. Integrated a Botpress chatbot into a web interface and connected REST APIs for dynamic content. Explored classification models and data preprocessing pipelines.',
  },
  {
    year: '2022 — Present',
    title: 'Events & Logistics Lead',
    company: 'INDEX — LUMS',
    desc: "Director of Events overseeing large-scale campus events. Logistics Head for Lahore Design Festival '25 (500+ attendees). Managed sponsorship outreach with 10+ companies and led media coverage for LDF '26.",
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>About Me</span>
          <h2 className={styles.title}>
            Crafting the web, one{' '}
            <span className={styles.highlight}>commit</span> at a time
          </h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.bio}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <div className={styles.avatarInner}>
                  <span>AJ</span>
                </div>
                <div className={styles.avatarRing} />
                <div className={styles.avatarRing2} />
              </div>
            </div>
            <p className={styles.bioText}>
              CS student at LUMS (Class of 2027) with a Minor in Quantum Technologies.
              I build full-stack web apps, explore MLOps pipelines, and experiment with
              quantum computing — all while leading large-scale events on campus.
            </p>
            <p className={styles.bioText}>
              On the field I play badminton for LUMS and represented the university
              in volleyball. Off it, I care about climate action, inclusive education,
              and writing code that actually ships.
            </p>
            <div className={styles.links}>
              <a href="https://github.com/aahadj2" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/abdul-ahad-jawad-99a39624b/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.timelineWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.timelineTitle}>Journey</h3>
            <div className={styles.timeline}>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className={styles.timelineLine} />
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{item.year}</span>

                    {item.logo ? (
                      <div className={styles.lumsHeader}>
                        <img
                          src={item.logo}
                          alt="LUMS"
                          className={styles.lumsLogo}
                        />
                        <div>
                          <h4 className={styles.timelineRole}>{item.title}</h4>
                          <p className={styles.timelineCompany}>{item.company}</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h4 className={styles.timelineRole}>{item.title}</h4>
                        <p className={styles.timelineCompany}>{item.company}</p>
                      </>
                    )}

                    {item.major && (
                      <div className={styles.degreeRow}>
                        <span className={styles.degreeMajor}>{item.major}</span>
                        <span className={styles.degreeMinor}>{item.minor}</span>
                      </div>
                    )}

                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
