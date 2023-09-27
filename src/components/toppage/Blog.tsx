'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/Blog.module.scss'
// import ModalCard from '../common/ModalCard'
import NewModal from './NewModal'
// import Modal from './Modal'

const Blog = () => {
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }

  return (
    <>
      <div className={styles.blog}>
        <div className={styles.container}>
          <h1>===================================</h1>
          this areas modal is new modal child components
          <br />
          <br />
          <h1>========================</h1>
          <h1>========================</h1>
          <h1>========================</h1>
          <button onClick={openModal}>Click</button>
          <NewModal show={show} setShow={setShow} />
          {/* <ModalCard
            key={1}
            imgLink="/images/sampleImg1.png"
            articleTitle="New Company Site!"
            articleDate="2023-09-26"
            tagsNumber={1}
          /> */}
        </div>
      </div>
    </>
  )
}

export default Blog
