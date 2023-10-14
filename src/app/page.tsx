import React from 'react'


import MouseStalker from '@/hooks/MouseStalker'


// css import
import styles from '../styles/page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <h1>hi Storybook!</h1>
    </main>
  )
}
