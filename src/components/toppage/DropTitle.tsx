import React from 'react'

// css import
import styles from './styles/DropTitle.module.scss'

// Props type
type Props = {
  id: number
  text: string
}

const DropTitle = ({ id, text }: Props) => {
  return (
    <div className={styles.dropTile} key={id}>
      <h2 className={styles.dropText}>{text}</h2>
    </div>
  )
}

export default DropTitle
