import styles from './styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav role="navigation" className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link href={`/`}>
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={`/about`}>
            <a>About</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={`/`}>
            <a>Python</a>
          </Link>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link href={`/content/python/ex1`}>
                <a>Ex 1</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/content/python/ex2`}>
                <a>Ex 2</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}