'use client'
import React, { useState } from 'react'

// css import
import styles from './styles/ArticleCard.module.scss'

// props type
type Props = {
  // useStateを複数用意するためのもの
  useStateNumber: number
  // keyを設定するためのもの
  key: number
  // toppageのimgのリンク
  imgLInk: string
  // 記事のタイトル
  articleTitle: string
  // 記事が書かれた日付
  articleDate: string
  // 記事のタグを管理する
  tagsNumber: number
}

const ArticleCard = ({
  useStateNumber,
  key,
  imgLInk,
  articleTitle,
  articleDate,
  tagsNumber,
}: Props) => {
  const [modalStates, setModalStates] = useState<{ [key: string]: boolean }>({})
  // モーダルを開く関数
  const openModal = (modalKey: string) => {
    setModalStates((prevState) => ({
      ...prevState,
      [modalKey]: true,
    }))
  }

  return (
    <div
      className={styles.card}
      key={key}
      onClick={() => openModal(String(key))}
    >
      {/* クリックイベントハンドラを呼び出すボタン */}
      <img width={'100%'} src={imgLInk} alt="" />
      <h1>{articleTitle}</h1>
      <p>{articleDate}</p>
      <p>{tagsNumber}</p>
      <button onClick={() => openModal(String(key))}>Open Modal</button>
    </div>
  )
}

export default ArticleCard
