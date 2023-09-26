import React from 'react'

// css import
import styles from './styles/Blog.module.scss'

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <h1 className={styles.blogTitle}>BLOG</h1>
      </div>
    </div>
  )
}

export default Blog
