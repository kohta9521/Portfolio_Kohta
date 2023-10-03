import React, { useState } from 'react'

// css import
import styles from './styles/ArticleCardModal.module.scss'

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

const ArticleCardModal = ({
  useStateNumber,
  key,
  imgLInk,
  articleTitle,
  articleDate,
  tagsNumber,
}: Props) => {
  // モーダルの状態を管理するオブジェクト
  const [modalStates, setModalStates] = useState<{ [key: string]: boolean }>({})
  // モーダルを閉じる関数
  const closeModal = (modalKey: string) => {
    setModalStates((prevState) => ({
      ...prevState,
      [modalKey]: false,
    }))
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        fuck modal window animation!!
        <button onClick={() => closeModal(String(key))}>Close</button>
      </div>
    </div>
  )
}

export default ArticleCardModal
