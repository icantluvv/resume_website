import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>

        <div className={styles.uppertext}>
          <h1 className={styles.text}>
              I’m open to suggestions
          </h1>
        </div>

        <nav className={styles.navigation}>
          <li className={styles.cont1}>
            <a href='#about'>
              <p>ABOUT ME</p>
            </a>
          </li>

          <li className={styles.cont2}>
            <a href='#stack'>
              <p>STACK</p>
            </a>
          </li>
          <li className={styles.cont3}>
            <a href='#EXPERIENCE'>
              <p>EXPERIENCE</p>
            </a>
          </li>
          <li className={styles.cont5}>
            <a href='#PROJECTS'>
              <p>PROJECTS</p>
            </a>
          </li>

        </nav>

      </header>
    </div>
  )
}

export default Header