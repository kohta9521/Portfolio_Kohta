import { main } from 'ts-node/dist/bin'
import styles from '../styles/page.module.css'
import MouseStalker from '@/hooks/MouseStalker'

export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      Hello World
    </main>
  )
}
