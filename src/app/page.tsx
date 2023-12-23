import React from 'react'

// css import
import styles from '../styles/page.module.css'

// components import
import MouseStalker from '@/hooks/MouseStalker'


export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
    </main>
  )
}
