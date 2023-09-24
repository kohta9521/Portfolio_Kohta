import React from 'react'

// css import
import styles from './styles/SectionTitle.module.scss'

// props type
type Props = {
  // # ページ内遷移用のid(key用のnumber型ではない)
  key: number
  id: string
  text: string
}

const SectionTitle = ({ key, id, text }: Props) => {
  return (
    <div className={styles.sectionTitleBox} key={key} id={id}>
      <h1 className={styles.sectionTitleText}>{text}</h1>
    </div>
  )
}

export default SectionTitle
