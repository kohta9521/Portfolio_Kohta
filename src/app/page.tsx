import React from 'react'

import MouseStalker from '@/hooks/MouseStalker'

// css import
import styles from '../styles/page.module.css'
import Logo from '@/components/atoms/Logo/Logo'
import Header from '@/components/organisms/Header/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <Header />
    </main>
  )
}
