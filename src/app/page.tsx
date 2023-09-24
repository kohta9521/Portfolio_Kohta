import React from 'react'
import Template from '@/components/layouts/Template1'
import MouseStalker from '@/hooks/MouseStalker'
import Hero from '@/components/toppage/Hero'
import Project from '@/components/toppage/Project'

// css import
import styles from '../styles/page.module.css'
import DropDown from '@/components/toppage/DropDown'

export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <Template templateNumber={false}>
        <Hero />
        <Project />
        <DropDown />
      </Template>
    </main>
  )
}
