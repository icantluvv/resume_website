import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>

        <nav className={styles.navigation}>
          <li className={styles.cont1}>
            <a href='#about'>
              <p>About me</p>
            </a>
          </li>

          <li className={styles.cont2}>
            <a href='#stack'>
              <p>Stack</p>
            </a>
          </li>
          <li className={styles.cont3}>
            <a href='#EXPERIENCE'>
              <p>Experience</p>
            </a>
          </li>
          <li className={styles.cont5}>
            <a href='#PROJECTS'>
              <p>Projects</p>
            </a>
          </li>

        </nav>

        <div className={styles.uppertext}>
          <p className={styles.text}>
              <h1>I’m open to suggestions</h1>
          </p>
        </div>

      </header>
    </div>
  )
}

export default Header