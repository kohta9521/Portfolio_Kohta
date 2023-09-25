import React from 'react'

// css import
import styles from './styles/TagPageTitle.module.scss'

// props type
type Props = {
  id: number
  text: string
}

const TagPageTitle = ({ id, text }: Props) => {
  return (
    <div className={styles.tagPageTitleBox} key={id}>
      <h1 className={styles.tagPageShape}>
        #<span className={styles.tagPageText}>{text}</span>
      </h1>
    </div>
  )
}

export default TagPageTitle
