import styles from "./header.module.css"

export default function Header() {
  return (
    <header>
      <nav>
        <h1 className={styles.logo}>ALPHA SHOP</h1>
      </nav>
    </header>
  )
}
