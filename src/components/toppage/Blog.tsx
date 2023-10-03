'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/Blog.module.scss'
// import ModalCard from '../common/ModalCard'
import NewModal from './NewModal'
import ArticleCard from './ArticleCard'
import ArticleCardModal from './ArticleCardModal'
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
          {/* !toppageに表示する専用のコンポーネント */}
          <ArticleCard
            useStateNumber={1}
            key={1}
            imgLInk="/images/sampleImg1.png"
            articleTitle="Sample Article"
            articleDate="2023-09-27"
            tagsNumber={1}
          />
          {/* ovelayをかけるコンポーネント　普通でいうmodal components */}
          {/* <ArticleCardModal
            useStateNumber={1}
            key={1}
            imgLInk="/images/sampleImg1.png"
            articleTitle="Sample Article"
            articleDate="2023-09-27"
            tagsNumber={1}
          /> */}
          <h1>================</h1>
          <h1>これより下は論理実装</h1>
          <button onClick={openModal}>Click</button>
          <button onClick={openModal}>Click</button>
          <button onClick={openModal}>Click</button>
          <NewModal show={show} setShow={setShow} />
          <NewModal show={show} setShow={setShow} />
          <NewModal show={show} setShow={setShow} />
        </div>
      </div>
    </>
  )
}

export default Blog
