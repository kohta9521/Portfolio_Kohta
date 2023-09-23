import styles from '../styles/page.module.css'
import MouseStalker from '@/hooks/MouseStalker'
import Header from '@/components/toppage/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <Header />
    </main>
  )
}
