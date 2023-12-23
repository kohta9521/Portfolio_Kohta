import React from 'react'

// css import
import styles from '../styles/page.module.css'

// components import
import MouseStalker from '@/hooks/MouseStalker'
import MainLayout from '@/components/template/MainLayout'
import Header from '@/components/organisms/Header'


export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <MainLayout id={1}>
       <Header />
      </MainLayout>
    </main>
  )
}
