import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMono}>&lt;</span>AJ<span className={styles.logoMono}>/&gt;</span>
        </a>
        <p className={styles.copy}>
          © {year} Ahad J. Built with React + Node.js
        </p>
        <div className={styles.links}>
          <a href="https://github.com/aahadj2" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/abdul-ahad-jawad-99a39624b/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:aahadj2@gmail.com" className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  )
}
