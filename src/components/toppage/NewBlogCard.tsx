'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/NewBlogCard.module.scss'

// props type
type Props = {
  id: number
  imgLink: string
  title: string
  date: string
  // text: string;
}

const NewBlogCard = ({ id, imgLink, title, date }: Props) => {
  // cardの挙動用の状態変数と関数
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }
  return (
    <a className={styles.blogCard} onClick={openModal}>
      <img className={styles.img} src={imgLink} alt="" />
      <h2 className={styles.blogCardTitle}>{title}</h2>
      <p className={styles.blogCardDate}>{date}</p>
      {/* <p className={styles.blogCardtext}>
          {text}
      </p> */}
      <a onClick={openModal} className={styles.blogCardButton}>
        View More
      </a>
    </a>
  )
}

export default NewBlogCard
