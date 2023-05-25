import styles from "./Header.module.css";

const Header = ({callback}) => {
  return (
    <header className={styles.Header}>
      <img src="/vite.svg" />
      <nav>
        <ul className={styles.Header__list}>
          <li onClick={() => callback(true)} className={styles.Header__listItem}>a</li>
          <li className={styles.Header__listItem}>b</li>
          <li className={styles.Header__listItem}>c</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;