'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/Blog2.module.scss'
import M from './M'

const Blog2 = () => {
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }

  return (
    <div className={styles.blog}>
      <h1>ここから完成版の実装</h1>
      <a className={styles.card} onClick={openModal}>
        <h1>sample</h1>
      </a>
      <M show={show} setShow={setShow} />
    </div>
  )
}

export default Blog2
