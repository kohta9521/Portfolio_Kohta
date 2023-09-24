import React from 'react'
import Link from 'next/link'

// css import
import styles from './styles/Logo.module.scss'

// props type
type Props = {
  size?: 'small' | 'medium' | 'large'
}

const Logo = ({ size = 'medium' }: Props) => {
  let imageSize
  switch (size) {
    case 'small':
      imageSize = { width: 70, height: 30 }
      break
    case 'medium':
      imageSize = { width: 100, height: 45 }
      break
    case 'large':
      imageSize = { width: 140, height: 60 }
      break
    default:
      imageSize = { width: 100, height: 45 }
  }
  return (
    <Link href="/" prefetch={false} className={styles.link}>
      <img
        src="/images/logo.png"
        width={imageSize.width}
        height={imageSize.height}
        alt="Picture of the author"
        className={styles.imgItem}
      />
    </Link>
  )
}

export default Logo
