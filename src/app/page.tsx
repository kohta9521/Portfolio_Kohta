import Template from '@/components/layouts/Template1'
import styles from '../styles/page.module.css'
import MouseStalker from '@/hooks/MouseStalker'

export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <Template templateNumber={false}>
        <h1>main content</h1>
      </Template>
    </main>
  )
}
