import React from 'react'

// css import
import styles from '../styles/page.module.css'

// components import
import MouseStalker from '@/hooks/MouseStalker'
import MainLayout from '@/components/template/MainLayout'
import { Main } from 'next/document'


export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <MainLayout id={1}>
        <h1>sample</h1>
      </MainLayout>
    </main>
  )
}
