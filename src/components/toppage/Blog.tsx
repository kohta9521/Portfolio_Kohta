'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/Blog.module.scss'
// import Modal from './Modal'

const Blog = () => {
  const [show, setShow] = useState(false)

  const openModal = () => {
    setShow(true)
  }

  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <h1 className={styles.blogTitle}>BLOG</h1>
        <div>
          <p>modal window sample</p>
          <button onClick={openModal}>Click</button>
          <Modal show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  )
}

function Modal(props: { show: boolean; setShow: any }) {
  const closeModal = () => {
    props.setShow(false)
  }
  if (props.show) {
    return (
      <div id="overlay" className={styles.overlay}>
        <div id="content" className={styles.content}>
          <p>this is modal window</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Blog
