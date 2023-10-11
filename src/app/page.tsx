import React from 'react'
import Template from '@/components/layouts/Template1'
import MouseStalker from '@/hooks/MouseStalker'
import Hero from '@/components/toppage/Hero'
import Project from '@/components/toppage/Project'

// css import
import styles from '../styles/page.module.css'
import DropDown from '@/components/toppage/DropDown'
import Profile from '@/components/toppage/Profile'
import Blog from '@/components/toppage/Blog'
import Blog2 from '@/components/toppage/Blog2'
import NewBlog from '@/components/toppage/NewBlog'

export default function Home() {
  return (
    <main className={styles.main}>
      <MouseStalker />
      <Template templateNumber={false}>
        <Hero />
        <Project />
      </Template>
    </main>
  )
}
