import React from 'react'
import Link from 'next/link'

// css import
import styles from './styles/HeaderListButton.module.scss'

// type Props
type Props = {
  id: number
  text: string
  url: string
  size?: 'small' | 'medium' | 'large'
}

const HeaderListButton = ({ id, text, url, size = 'medium' }: Props) => {
  return (
    <Link
      key={id}
      href={url}
      className={`${styles.headerLink} ${styles[size]}`}
    >
      {text}
    </Link>
  )
}

export default HeaderListButton
