'use clinet'
import React, { useState } from 'react'

// css import
import styles from './styles/ModalCard.module.scss'

// components import
import Modal from './Modal'

// Props type
type Props = {
    // 記事のID
    key: number,
    // 記事の画像URL
    imgLink: string,
    // 記事のタイトル
    articleTitle: string,
    // 記事の投稿日付
    articleDate: string,
    // 記事のタグ番号
    tagsNumber: number
}


const ModalCard = ({ key, imgLink, articleTitle, articleDate, tagsNumber }: Props) => {
  const [ show, setShow ] = useState(false)

  // open only function
  const openModal = () => {
    setShow(true)
  }

  return (
    <div className={styles.card} key={key}  onClick={openModal}>
      <img className={styles.articleImg} src={imgLink} alt="articleImg" />
      <h3 className={styles.articleTitle}>
        {articleTitle}
      </h3>
      <p className={styles.articleDate}>
        {articleDate}
      </p>
      <div className={styles.tagBox}>
      {tagsNumber}
      </div>
      {/* hidden card */}
      <Modal show={show} setShow={setShow} />
    </div>
  )
}

export default ModalCard;