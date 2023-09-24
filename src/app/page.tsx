import Template from '@/components/layouts/Template1'
import styles from '../styles/page.module.css'
import MouseStalker from '@/hooks/MouseStalker'
import Hero from '@/components/toppage/Hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <Template templateNumber={true}>
        <Hero />
      </Template>
    </main>
  )
}
